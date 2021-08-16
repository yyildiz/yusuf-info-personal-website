import { Component, ElementRef, Input, OnInit } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  constructor(private el: ElementRef, private modalService: ModalService) {}

  @Input() show: boolean = false;
  @Input() title: string;
  @Input() bodyTitle: string;
  @Input() bodyContent: string;
  @Input() imgSrc: string;

  ngOnInit() {
  }

  close() {
    this.el.nativeElement.style.display = 'none';
  }
}
