import { Routes } from '@angular/router';
import { Home } from './features/home/home';
import { Servicios } from './features/servicios/servicios';
import { Contactanos } from './features/contactanos/contactanos';
import { Terminos } from './features/legal/terminos/terminos';
import { Privacidad } from './features/legal/privacidad/privacidad';

export const routes: Routes = [
    {
        path: 'home',
        component: Home
    },
    {
        path: 'cursos',
        component: Servicios
    },
    {
        path: 'contactanos',
        component: Contactanos
    },
    {
        path: 'terminos',
        component: Terminos
    },
    {
        path: 'privacidad',
        component: Privacidad
    },
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path:'**',
        redirectTo: 'home'
    }
];
