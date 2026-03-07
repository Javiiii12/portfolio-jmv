import { Component } from '@angular/core';
import { TranslatePipe } from '../../core/translate.pipe';

@Component({
    selector: 'app-contact-footer',
    standalone: true,
    imports: [TranslatePipe],
    templateUrl: './contact-footer.component.html'
})
export class ContactFooterComponent {
    public email = 'Javier_martinez92@hotmail.com';
    public phone = '678 03 59 93';
}
