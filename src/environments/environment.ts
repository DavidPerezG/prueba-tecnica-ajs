// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

// `.env.ts` is generated by the `npm run env` command
// `npm run env` exposes environment variables as JSON for any usage you might
// want, like displaying the version or getting extra config from your CI bot, etc.
// This is useful for granularity you might need beyond just the environment.
// Note that as usual, any environment variables you expose through it will end up in your
// bundle, and you should not use it for any sensitive information like passwords or keys.
import { env } from './.env';

export const environment = {
  production: false,
  version: env['npm_package_version'] + '-dev',
  serverUrl: '/api',
  defaultLanguage: 'en-US',
  supportedLanguages: ['en-US'],
  firebase: {
    apiKey: 'AIzaSyDsyJQdExll5PlkJ_1Svm3tPF7mZlWthf8',
    authDomain: 'prueba-tecnica-js.firebaseapp.com',
    projectId: 'prueba-tecnica-js',
    databaseURL: 'https://prueba-tecnica-js-default-rtdb.firebaseio.com',
    storageBucket: 'prueba-tecnica-js.appspot.com',
    messagingSenderId: '809717649228',
    appId: '1:809717649228:web:57df3b56d82ba3e6ddc9e9',
    measurementId: 'G-147609NZ73',
  },
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
