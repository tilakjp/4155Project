import pandas as pd
from datetime import datetime
from statistics import *
from LinkedListLooping import LinkedListLooping
from RoutesDict import routes_internal, dict_key_lookup
import altair as alt
from altair import datum

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


    def route_filter(self, dataset, start_stop, destination_stop, flag):
        filter = self.dataset_filter(dataset, start_stop, destination_stop, flag)
        time_column = [datetime.strptime(f"{date}_{time}", "%m/%d/%Y_%H:%M:%S") for time, date in zip(filter["Time"], filter["Date"])]
        filter = filter.assign(Converted_Time=time_column)
        return filter


    def calculate_distance(self, dataset, start_stop, destination_stop, hour, day, month, flag, failsafe):
        times = []
        for _, data in dataset.groupby("Bus"):
            previous_stop = ""
            previous_time = 0
            previous_route = ""

            for current_stop, current_time, route in zip(data["Stop"], data["Converted_Time"], data["Route"]):

                correct_stop_order = current_stop == destination_stop and previous_stop == start_stop
                consistent_route = previous_route == route
                correct_hour = current_time.hour == hour
                # correct_day = current_time.weekday() == day
                correct_month = current_time.month == month

                if(correct_stop_order and consistent_route and correct_hour and correct_month and current_time.year != 2020):
                    time_difference = current_time - previous_time
                    times.append(round(time_difference.seconds / 60, 2))

                previous_stop = current_stop
                previous_time = current_time
                previous_route = route
        
        filtered_time = [int(t) for t in times if t < 20 and t >= 1]
        if(len(filtered_time) == 0):
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
        return median(filtered_time)


    def save_forcast_graph(self, dataset, first_loc, second_loc, flag):
        now = datetime.now()
        filter = self.route_filter(dataset, first_loc, second_loc, flag)
        dist = self.calculate_distance(filter, first_loc, second_loc, now.hour, now.weekday(), now.month, 2, 1)

        hours = []
        times = []

        if(now.hour < 20):
            for i in range(now.hour + 1, now.hour + 6):
                twelve_condition = "PM" if i - 12 == 0 else "AM"
                time = f"{i - 12} PM" if i > 12 else f"{i} {twelve_condition}"

                if(i == now.hour):
                    hours.append("Now")
                else:
                    hours.append(time)
                times.append(int(self.calculate_distance(filter, first_loc, second_loc, i, now.weekday(), now.month, 2, 1)))
        df = pd.DataFrame({"x" : hours, "y" : times})

        # visualization
        alt.themes.enable("vox")
        chart = alt.Chart(df).mark_bar().encode(
            x=alt.X("x:N", title="Hour", sort=None),
            y=alt.Y("y", title="Minutes"),
            opacity=alt.value(0.5),
            color=alt.condition((datum.y > dist), alt.ColorValue("red"), alt.ColorValue("green")),
            size=alt.value(80),

        ).properties(
            width=500,
            title="Bus Travel Time Forecast (Next Five Hours)"
        )
        return chart.to_html()