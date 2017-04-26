import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

declare const ENV;

if (ENV=="production") {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule);
