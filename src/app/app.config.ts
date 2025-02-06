import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { AlbumGateway } from './domain/gateway/album.gateway';
import { AlbumService } from './infraestructure/driven-adapters/album/album.service';
import { UserGateway } from './domain/gateway/user.gateway';
import { UserService } from './infraestructure/driven-adapters/user/user.service';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(withFetch()),
    {
      provide: AlbumGateway,
      useClass: AlbumService
    },
    {
      provide: UserGateway,
      useClass: UserService
    }
  ]
};
