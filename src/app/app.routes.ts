import { Routes } from '@angular/router';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { IndexPageComponent } from './pages/index-page/index-page.component';
import { AnimeSearchPageComponent } from './pages/anime-search-page/anime-search-page.component';
import { MangaSearchPageComponent } from './pages/manga-search-page/manga-search-page.component';

export const routes: Routes = [
    {
        path: '',
        component: IndexPageComponent,
    },
    {
        path: 'login',
        component: LoginPageComponent,
    },
    {
        path: 'anime',
        component: AnimeSearchPageComponent,
    },
    {
        path: 'manga',
        component: MangaSearchPageComponent,
    }
];
