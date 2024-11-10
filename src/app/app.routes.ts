import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { MainComponent } from './pages/main/main.component';
import { HistoryComponent } from './pages/history/history.component';
import { LayoutComponent } from './pages/layout/layout.component';

export const routes: Routes = [{
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
},
{
    path: 'login',
    component: LoginComponent
},
{
    path: 'layout',
    component: LayoutComponent,
    children: [
        {
            path: 'main',
            component: MainComponent
        },
        {
            path: 'history',
            component: HistoryComponent
        }
    ]
}

];
