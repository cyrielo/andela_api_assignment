## A web application to read country data from the world bank country data api
---
This application cosumes the api provided by world bank to read country data
It retrieves the following information from the api request

1. Country name
2. Country Capital city
3. Country ISO-2 code
4. Country region
5. County Lending type

The application also connects to google map api to fetch the position of the country on a map
by it's longitude and latitude gotten from the world bank api. it also fetches the country's flag by it's ISO code through another webservice [Geonames](http://www.geonames.org)

Application quirk
This application if for the development mode, you may not be able to view it 
if you do not diable cross origin request policy in your browser.
To disable it visit this link http://stackoverflow.com/questions/3102819/disable-same-origin-policy-in-chrome