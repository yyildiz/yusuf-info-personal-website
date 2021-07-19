import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LayoutComponent {
  isMinimized = false;
  selected: string[] = [];
  constructor() {
  }

  minMax(isMin) {
    this.isMinimized = isMin;
  }

  isSelected(item: string) {
    return this.selected.includes(item);
  }

  toggleSelect(item: string) {
    if (this.selected.includes(item)) {
      this.selected = this.selected.filter(i => i !== item);
    } else {
      this.selected = [item];
    }
  }

}
