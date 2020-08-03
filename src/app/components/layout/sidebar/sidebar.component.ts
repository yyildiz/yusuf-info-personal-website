import { Observable } from 'rxjs';
import { InitialState } from './../../../store/reducer';
import { NgRedux, select } from '@angular-redux/store';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { File } from 'src/app/interfaces/file.interface';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SidebarComponent implements OnInit {

  constructor(private ngRedux: NgRedux<InitialState>) { }
  @select('files') files$: Observable<Array<File>>;

  ngOnInit(): void {
    this.files$.subscribe(p => console.log(p));
  }

}
