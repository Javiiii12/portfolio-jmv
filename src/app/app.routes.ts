import { Routes } from '@angular/router';
import { Home } from './features/home/home';
import { CertDetail } from './features/cert-detail/cert-detail';
import { WriteupDetail } from './features/writeup-detail/writeup-detail';
import { ProjectDetail } from './features/project-detail/project-detail';

export const routes: Routes = [
    { path: '', component: Home },
    { path: 'cert/:id', component: CertDetail },
    { path: 'writeup/:id', component: WriteupDetail },
    { path: 'project/:id', component: ProjectDetail },
    { path: '**', redirectTo: '' }
];
