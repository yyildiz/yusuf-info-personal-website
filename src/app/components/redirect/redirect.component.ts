import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-redirect',
  templateUrl: './redirect.component.html',
  styleUrls: ['./redirect.component.scss'],
})
export class RedirectComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    document.location.href = 'https://stan.store/yusufcodes';
  }
}
