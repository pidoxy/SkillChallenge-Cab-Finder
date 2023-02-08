import csv 
import json 

# function to convert locations csv to json
def csv_to_json_locations(csvFilePath, jsonFilePath):
    jsonArray = []
      
    #read csv file
    with open(csvFilePath, encoding='utf-8') as csvf: 
        #load csv file data using csv library's dictionary reader
        csvReader = csv.DictReader(csvf) 

        #convert each csv row into python dict
        for row in csvReader: 
              row["location_id"] = float(row["location_id"])
              row["start_coord_long"] = float(row["start_coord_long"])
              row["start_coord_lat"] = float(row["start_coord_lat"])
              row["destination_coord_long"] = float(row["destination_coord_long"])
              row["destination_coord_lat"] = float(row["destination_coord_lat"])
            #add this python dict to json array
              jsonArray.append(row)
              print(row)
    #convert python jsonArray to JSON String and write to file
    with open(jsonFilePath, 'w', encoding='utf-8') as jsonf: 
        jsonString = json.dumps(jsonArray, indent=4)
        jsonf.write(jsonString)

csvFilePath = './MSADC/Data/CSV/locations.csv'
jsonFilePath = './MSADC/Data/locations.json'
csv_to_json_locations(csvFilePath, jsonFilePath)

# function to convert rides csv to json
def csv_to_json_rides(csvFilePath, jsonFilePath):
    jsonArray = []
      
    #read csv file
    with open(csvFilePath, encoding='utf-8') as csvf: 
        #load csv file data using csv library's dictionary reader
        csvReader = csv.DictReader(csvf) 

        #convert each csv row into python dict
        for row in csvReader: 
              row['rideservice_id'] = float(row['rideservice_id'])
              row['priceperkm'] = float(row['priceperkm'])
            #add this python dict to json array
              jsonArray.append(row)
              print(row)
    #convert python jsonArray to JSON String and write to file
    with open(jsonFilePath, 'w', encoding='utf-8') as jsonf: 
        jsonString = json.dumps(jsonArray, indent=4)
        jsonf.write(jsonString)

csvFilePath = './MSADC/Data/CSV/rides.csv'
jsonFilePath = './MSADC/Data/rides.json'
csv_to_json_rides(csvFilePath, jsonFilePath)

# function to convert rideservices csv to json
def csv_to_json_rideservices(csvFilePath, jsonFilePath):
    jsonArray = []
      
    #read csv file
    with open(csvFilePath, encoding='utf-8') as csvf: 
        #load csv file data using csv library's dictionary reader
        csvReader = csv.DictReader(csvf) 

        #convert each csv row into python dict
        for row in csvReader: 
              row['rideservice_id'] = float(row['rideservice_id'])
              row['priceperkm'] = float(row['priceperkm'])
            #add this python dict to json array
              jsonArray.append(row)
              print(row)
    #convert python jsonArray to JSON String and write to file
    with open(jsonFilePath, 'w', encoding='utf-8') as jsonf: 
        jsonString = json.dumps(jsonArray, indent=4)
        jsonf.write(jsonString)

csvFilePath = './MSADC/Data/CSV/rideservices.csv'
jsonFilePath = './MSADC/Data/rideservices.json'
csv_to_json_rideservices(csvFilePath, jsonFilePath)