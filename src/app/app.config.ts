import { ApplicationConfig } from '@angular/core';
import { provideRouter, withComponentInputBinding, withInMemoryScrolling } from '@angular/router';

import { routes } from './app.routes';
import { provideTranslateService } from './translate.config';
import {
  provideHttpClient,
  withInterceptorsFromDi,
} from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes, withComponentInputBinding(),withInMemoryScrolling({
      scrollPositionRestoration: "top",
    })),
    provideHttpClient(withInterceptorsFromDi()),
    provideTranslateService(),
  ],
};
