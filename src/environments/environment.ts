// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyDeMT7maQ_EnJmEhdXSRtVvDUw9UG-0GSE",
    authDomain: "agenda-clic.firebaseapp.com",
    databaseURL: "https://agenda-clic.firebaseio.com",
    projectId: "agenda-clic",
    storageBucket: "agenda-clic.appspot.com",
    messagingSenderId: "412143713928"
  }
}
