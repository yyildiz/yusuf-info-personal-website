import { Component, ChangeDetectionStrategy, ElementRef } from '@angular/core';
import { ElementService } from 'src/app/services/element.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LayoutComponent {
  isMinimized = false;
  constructor(private elementService: ElementService, private el: ElementRef) {
    this.elementService.getInteractable(this.el);
  }

  minMax(isMin) {
    this.isMinimized = isMin;
  }

}
