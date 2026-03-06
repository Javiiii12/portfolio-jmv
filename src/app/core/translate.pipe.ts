import { Pipe, PipeTransform, inject } from '@angular/core';
import { LanguageService } from './language.service';

@Pipe({
    name: 'translate',
    standalone: true,
    pure: false
})
export class TranslatePipe implements PipeTransform {
    private langService = inject(LanguageService);

    transform(value: string | undefined | null): string {
        if (!value) return '';
        return this.langService.translateUI(value);
    }
}
