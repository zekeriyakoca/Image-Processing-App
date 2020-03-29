// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  backEndUrl: 'https://localhost:44372',
  mainAppBaseUrl : 'http://localhost:62119/',
  firebase:{
    apiKey: "AIzaSyDhVyh4zEobt49oneT5fi6ohlz3nqLvyhs",
    authDomain: "imageproc-kodilist.firebaseapp.com",
    databaseURL: "https://imageproc-kodilist.firebaseio.com",
    projectId: "imageproc-kodilist",
    storageBucket: "imageproc-kodilist.appspot.com",
    messagingSenderId: "318349712429",
    appId: "1:318349712429:web:f0b695db5c91e68b78aca4",

    imagesKey:"/images"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
