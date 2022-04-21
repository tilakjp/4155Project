import pandas as pd
from datetime import datetime
from statistics import *

original_file = pd.read_csv("merged_stop_data.csv", dtype = str)

class TimeCalculator: 

    def dataset_filter(self, dataset, start_stop, destination_stop):
        file = dataset[dataset["Bus"] != "0"]
        file = file[file["Time"].notna()]
        file = file[file["Date"].notna()]
        file = file[file["Route"].isin(["Gold", "Silver", "Green"])]
        file = file[file["Stop"].isin([start_stop, destination_stop])]
        return file


    def calculate_distance(self, dataset, start_stop, destination_stop, hour, day, month):
        filter = self.dataset_filter(dataset, start_stop, destination_stop)
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
            return -1, []
        print(f"Median at hour {hour} on weekday {day + 1} in month {month} of 2021: {median(filtered_time)} minutes.")
        return min(filtered_time)