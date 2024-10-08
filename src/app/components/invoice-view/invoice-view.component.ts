import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-invoice-view',
  standalone: true,
  imports: [],
  templateUrl: './invoice-view.component.html',
  styles: ``
})
export class InvoiceViewComponent {
  @Input() name!: string;
  @Input() id!: number;
}
