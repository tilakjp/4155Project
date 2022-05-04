import pandas as pd
from datetime import datetime
from statistics import *
from LinkedListLooping import LinkedListLooping
from RoutesDict import routes_internal, dict_key_lookup

original_file = pd.read_csv("merged_stop_data.csv", dtype = str)

#Initialize a looping linked list of stops for each of the three routes. Uses shorthand names.
ll_gold = LinkedListLooping(["lightrail", "studenthealth", "fretwellS", "catoS", "robinsonS",
                           "levine", "hunt", "alumni", "reese", "robinsonN", "catoN", "fretwellN",
                           "science", "studentu", "belk"])

ll_green = LinkedListLooping(["lightrailW", "belkS", "unionE", "auxE", "fretwellS", "catoS", "robinsonS",
                           "reeseW", "coneW", "southVillage", "robinsonN", "catoN", "fretwellN", "studenthealthN",
                           "fm/pps", "northdeck"])

ll_silver = LinkedListLooping(["CRIdeck", "dukecentE", "Grigg Hall", "EPIC South", "athleticsE", "unionE",
                              "unionE", "auxE", "alumniW", "studenthealthN", "martin", "lot6", "lot5A", "eastdeck2",
                              "fretwellN", "science", "unionW", "athleticsW", "EPIC North", "motorsports", "PORTALW"])

class TimeCalculator: 

    def dataset_filter(self, dataset, start_stop, destination_stop, flag):
        file = dataset[dataset["Bus"] != "0"]
        file = file[file["Time"].notna()]
        file = file[file["Date"].notna()]

        if flag == 0:
            file = file[file["Route"].isin(["Gold"])]
        if flag == 1:
            file = file[file["Route"].isin(["Green"])]
        if flag == 2:
            file = file[file["Route"].isin(["Silver"])]

        file = file[file["Stop"].isin([start_stop, destination_stop])]
        return file


    def calculate_distance(self, dataset, start_stop, destination_stop, hour, day, month, flag, failsafe):
        filter = self.dataset_filter(dataset, start_stop, destination_stop, flag)
        time_column = [datetime.strptime(f"{date}_{time}", "%m/%d/%Y_%H:%M:%S") for time, date in zip(filter["Time"], filter["Date"])]
        filter = filter.assign(Converted_Time=time_column)
        times = []
        for bus, data in filter.groupby("Bus"):
            previous_stop = ""
            previous_time = 0
            previous_route = ""

            for current_stop, current_time, route in zip(data["Stop"], data["Converted_Time"], data["Route"]):

                correct_stop_order = current_stop == destination_stop and previous_stop == start_stop
                consistent_route = previous_route == route
                correct_hour = current_time.hour == hour
                correct_day = current_time.weekday() == day
                correct_month = current_time.month == month

                if(correct_stop_order and consistent_route and correct_hour and correct_day and correct_month and current_time.year != 2020):
                    time_difference = current_time - previous_time
                    times.append(round(time_difference.seconds / 60, 2))

                previous_stop = current_stop
                previous_time = current_time
                previous_route = route
        
        filtered_time = [int(t) for t in times if t < 20]
        if(len(filtered_time) == 0):
            # Attempts a failsafe that will sum the time between every intermediate stop if the original median can't be calculated from end to end.
            if failsafe == 0:
                print("Failsafe entered!")                
                med = 0
                if flag == 0:
                    # Retrieve the current stop using start_stop and the next stop on the route.
                    curr = ll_gold.findNode(dict_key_lookup(routes_internal, start_stop))
                    next = curr.next
                    # Loop through each node and calculate each intermediate travel time.
                    while next.data != ll_gold.findNode(dict_key_lookup(routes_internal, destination_stop)).next.data:
                        med += self.calculate_distance(dataset, curr.data, next.data, hour, day, month, flag, 1)
                        curr = next
                        next = curr.next
                elif flag == 1:
                    curr = ll_green.findNode(dict_key_lookup(routes_internal, start_stop))
                    next = curr.next

                    while next.data != ll_green.findNode(dict_key_lookup(routes_internal, destination_stop)).next.data:
                        med += self.calculate_distance(dataset, curr.data, next.data, hour, day, month, flag, 1)
                        curr = next
                        next = curr.next
                else:
                    curr = ll_silver.findNode(dict_key_lookup(routes_internal, start_stop))
                    next = curr.next

                    while next.data != ll_silver.findNode(dict_key_lookup(routes_internal, destination_stop)).next.data:
                        med += self.calculate_distance(dataset, curr.data, next.data, hour, day, month, flag, 1)
                        curr = next
                        next = curr.next

                return med
            else:
                return 1
        print(f"Median at hour {hour} on weekday {day + 1} in month {month} of 2021: {median(filtered_time)} minutes.")
        return min(filtered_time)