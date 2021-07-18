import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class IconComponent implements OnInit {
  @Input() src: string;
  @Input() link: string;
  constructor() { }

  ngOnInit() {
  }

  selection() {
    alert('hello, world!');
  }

}
