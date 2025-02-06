import { Routes } from '@angular/router';

export const routes: Routes = [

    {
        path: '',
        redirectTo: 'users',
        pathMatch: 'full'
    },
    {
        path: 'users',
        loadChildren : () => import('./ui/users/users/users.module').then(m => m.UsersModule)
    },
    {
        path: 'album',
        loadChildren: () => import('./ui/albums/albums.module').then(m => m.AlbumsModule)
    }

];
