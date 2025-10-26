import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    importProvidersFrom(
      provideFirebaseApp(() =>
        initializeApp({
          projectId: "danotes-730e2",
          appId: "1:420967401361:web:5988c68ad820452bf7fc30",
          storageBucket: "danotes-730e2.firebasestorage.app",
          apiKey: "AIzaSyBjGso8B0zTLTkwi01KpSPu7pNRhD85Q9M",
          authDomain: "danotes-730e2.firebaseapp.com",
          messagingSenderId: "420967401361"
        })
      )
    ),
    importProvidersFrom(provideFirestore(() => getFirestore()))
  ]
};
