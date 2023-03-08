import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { registerLicense } from '@syncfusion/ej2-base';

registerLicense('Mgo+DSMBaFt/QHRqVVhlXlpFdEBBXHxAd1p/VWJYdVt5flBPcDwsT3RfQF5jSn5bd0NhUXpeeHRcTg==;Mgo+DSMBPh8sVXJ0S0J+XE9BdFRDX3xKf0x/TGpQb19xflBPallYVBYiSV9jS31TdUVrWHlceHFVTmJbWQ==;ORg4AjUWIQA/Gnt2VVhkQlFac11JXGFWfVJpTGpQdk5xdV9DaVZUTWY/P1ZhSXxQdkZjUX5YcnxQRmhYVUw=;MTI4Mzg0M0AzMjMwMmUzNDJlMzBEN0RUdjJYZGY0ZHlaMTZOZ2FIUG1kK1RxZ1E5VzZWWm9GK3VOTDM5ZlJzPQ==;MTI4Mzg0NEAzMjMwMmUzNDJlMzBHU1EzY0NoNUdoaC9tdDhtZ3hWS3VINlM5a005SURKNWxpZ1RYQXBzVkZBPQ==;NRAiBiAaIQQuGjN/V0Z+WE9EaFpAVmJLYVB3WmpQdldgdVRMZVVbQX9PIiBoS35RdUVgWXdfdnZdQ2BVVUd+;MTI4Mzg0NkAzMjMwMmUzNDJlMzBaTGdUakR1K2Ywa0RDN2EyODRTQVdJQmVoMzRTWldRQmdCelN4UlNHNEhvPQ==;MTI4Mzg0N0AzMjMwMmUzNDJlMzBNL2I2cm5yV1hNMGZPNmVWSmszQ0ZVVnhNZDkvS3V5THJ2ZCtkenI4MEcwPQ==;Mgo+DSMBMAY9C3t2VVhkQlFac11JXGFWfVJpTGpQdk5xdV9DaVZUTWY/P1ZhSXxQdkZjUX5YcnxQR2BYUkw=;MTI4Mzg0OUAzMjMwMmUzNDJlMzBUd09tbFpwTDcyQmdYd3NpSEV4Sk9wOWo3a2NaM0RQMGlKSkZBcENlTGJNPQ==;MTI4Mzg1MEAzMjMwMmUzNDJlMzBlck9COHVKbDdyd1JUd21Tbm52cFIzSWNHNjhEK3FNT0NKYi9oU0ZSMjFnPQ==;MTI4Mzg1MUAzMjMwMmUzNDJlMzBaTGdUakR1K2Ywa0RDN2EyODRTQVdJQmVoMzRTWldRQmdCelN4UlNHNEhvPQ==');

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
