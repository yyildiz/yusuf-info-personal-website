import { State } from './../../../store/state';
import { Observable } from 'rxjs';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { initialState } from '../../../consts/file.state';
import { File } from 'src/app/interfaces/file.interface';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SidebarComponent implements OnInit {
  constructor(private state: State) { }
  files$: Observable<File[]>;

  ngOnInit(): void {
    this.files$ = this.state.getFiles();
  }

}
