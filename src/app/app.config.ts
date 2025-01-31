import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { AlbumGateway } from './domain/gateway/album.gateway';
import { AlbumService } from './infraestructure/driven-adapters/album/album.service';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(withFetch()),
    {
      provide: AlbumGateway,
      useClass: AlbumService
    }
  ]
};
