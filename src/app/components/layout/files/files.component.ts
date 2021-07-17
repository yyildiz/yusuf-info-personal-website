import { Observable } from 'rxjs';
import { State } from './../../../store/state';
import { initialState } from '../../../consts/file.state';
import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { File } from 'src/app/interfaces/file.interface';

@Component({
  selector: 'app-files',
  templateUrl: './files.component.html',
  styleUrls: ['./files.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FilesComponent implements OnInit {

  constructor(private state: State) { }
  files$: Observable<File[]>;

  ngOnInit(): void {
    this.files$ = this.state.getFiles();
  }

}
