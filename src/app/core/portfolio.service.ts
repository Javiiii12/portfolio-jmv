import { Injectable, inject, Signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { toSignal } from '@angular/core/rxjs-interop';
import { IPortfolioData } from './portfolio.interfaces';

@Injectable({
    providedIn: 'root'
})
export class PortfolioService {
    private readonly http = inject(HttpClient);

    // En Angular 20 (Vite builder), el contenido de /public se sirve desde la raíz ('/data.json').
    // Al usar Github Pages con subdirectorio, conviene poner la ruta relativa 'data.json' para que coja el base-href.
    public readonly portfolioData: Signal<IPortfolioData | undefined> = toSignal(
        this.http.get<IPortfolioData>('data.json')
    );
}
