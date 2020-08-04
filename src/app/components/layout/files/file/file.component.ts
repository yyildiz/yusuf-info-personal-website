import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'app-file',
  templateUrl: './file.component.html',
  styleUrls: ['./file.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FileComponent implements OnInit {

  constructor() { }
  @Input() iconSrc;
  @Input() matIcon;
  @Input() text;
  @Input() link;
  @Input() children;
  @Input() default;
  ngOnInit(): void {
  }

}
