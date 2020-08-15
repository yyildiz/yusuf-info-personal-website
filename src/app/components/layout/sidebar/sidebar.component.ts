import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { initialState } from '../../../consts/file.state';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SidebarComponent implements OnInit {
  files = initialState;
  constructor() { }

  ngOnInit(): void {
  }

}
