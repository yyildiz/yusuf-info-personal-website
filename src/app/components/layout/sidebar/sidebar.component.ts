import { Observable } from 'rxjs';
import { select } from '@angular-redux/store';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { File } from 'src/app/interfaces/file.interface';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SidebarComponent implements OnInit {

  constructor() { }
  @select('files') files$: Observable<Array<File>>;

  ngOnInit(): void {
  }

}
