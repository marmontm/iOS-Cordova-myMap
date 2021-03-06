# iOS-Cordova-myMap
**MapsMe** is a small mobile application which use Google Maps Services to display on a map:
- Current location of the device
- Address or coordinates specified by the user

This implementation uses MVC model and Google Maps Javascript API.

> **IMPORTANT NOTE:**  
> This code is provided without Google Map API key.  
> So you have to go to Google API Console to get yours and add it in this line `<script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY_HERE&language=en"></script>` written in the main html file : `cordova-project/www/index.html`.  
> Replace 'YOUR_API_KEY_HERE' by yours.

Also, code was inspired from some templates you can find on the web:  
- Display a map, *Google Developers*  
https://developers.google.com/maps/documentation/javascript/geocoding?hl=en
  
- Markers management, *Google Developers*  
https://developers.google.com/maps/documentation/javascript/examples/marker-remove?hl=en
  
- Cordova get GPS location, *Apache Cordova*  
https://cordova.apache.org/docs/en/latest/reference/cordova-plugin-geolocation/
  
- Allow the app to geolocate the devices on iOS, *Apple Developer*  
https://developer.apple.com/library/content/documentation/UserExperience/Conceptual/LocationAwarenessPG/CoreLocation/CoreLocation.html
  
Cross-platform application done with Apache Cordova (build and frameworks) and Apple Xcode (build app for iOS). 

> **Note:** iOS Development with Xcode is available on macOS only.    
>  
> More information :    
> https://developer.apple.com/    
> https://cordova.apache.org/   
  
  
February 2018, Maxime MARMONT
