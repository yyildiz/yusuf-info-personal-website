import { File } from 'src/app/interfaces/file.interface';
import { Observable } from 'rxjs';
import { select } from '@angular-redux/store';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-files',
  templateUrl: './files.component.html',
  styleUrls: ['./files.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FilesComponent implements OnInit {

  constructor() { }
  @select('files') files$: Observable<Array<File>>;

  ngOnInit(): void {
  }

}
