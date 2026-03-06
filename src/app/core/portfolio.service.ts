import { Injectable, inject, Signal, computed } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { toSignal } from '@angular/core/rxjs-interop';
import { IPortfolioData } from './portfolio.interfaces';
import { LanguageService } from './language.service';

@Injectable({
    providedIn: 'root'
})
export class PortfolioService {
    private readonly http = inject(HttpClient);
    private readonly langService = inject(LanguageService);

    private readonly rawData = toSignal(
        this.http.get<IPortfolioData>('data.json')
    );

    public readonly portfolioData = computed(() => {
        const data = this.rawData();
        if (!data) return undefined;
        return this.langService.translateData(data);
    });
}
