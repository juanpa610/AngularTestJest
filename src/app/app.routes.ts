import { Routes } from '@angular/router';

export const routes: Routes = [

    {
        path: '',
        redirectTo: 'album',
        pathMatch: 'full'
    },
    {
        path: 'album',
        loadChildren: () => import('./ui/albums/albums.module').then(m => m.AlbumsModule)
    }

];
