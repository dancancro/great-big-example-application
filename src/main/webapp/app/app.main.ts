import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { ProdConfig } from './core/config/prod.config';
import { GreatBigExampleApplicationAppModule } from './app.module';

ProdConfig();

if (module['hot']) {
    module['hot'].accept();
}

platformBrowserDynamic().bootstrapModule(GreatBigExampleApplicationAppModule)
.then((success) => console.log(`Application started`))
.catch((err) => console.error(err));
