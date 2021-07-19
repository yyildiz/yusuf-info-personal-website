import { EventEmitter, Input, Output } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { File } from 'src/app/interfaces/file.interface';
import { State } from 'src/app/store/state';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class IconComponent implements OnInit {
  @Input() src: string;
  @Input() link: string;
  @Input() selected: boolean = false;
  constructor() { }
  ngOnInit() {
  }

}
