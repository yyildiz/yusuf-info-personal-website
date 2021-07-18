import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { State } from 'src/app/store/state';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ToolbarComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }

}
