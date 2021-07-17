import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LayoutComponent {
  isMinimized = false;
  constructor() {

  }

  minMax(isMin) {
    console.log(isMin);
    this.isMinimized = isMin;
  }

}
