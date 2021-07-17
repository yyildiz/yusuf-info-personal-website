import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'app-sidebar-item',
  templateUrl: './sidebar-item.component.html',
  styleUrls: ['./sidebar-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SidebarItemComponent implements OnInit {

  @Input() iconSrc;
  @Input() matIcon;
  @Input() text;
  @Input() children;
  @Input() link;
  @Input() default;
  constructor() { }

  ngOnInit(): void {
  }
}
