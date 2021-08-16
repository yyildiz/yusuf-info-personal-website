import { ModalService } from 'src/app/services/modal.service';
import { Component, HostListener } from '@angular/core';
import { ModalsEnum } from 'src/app/consts/modals.enum';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent {
  shouldShow = false;
  bodyContent = 'Use the three desktop icons on the left to interact with my website!';
  constructor(private modalService: ModalService) {
    this.shouldShow = this.modalService.shouldShowOnlyOnce(ModalsEnum.HomeIntro);
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    const innerWidth = window.innerWidth;
    if (innerWidth <= 501) {
      this.bodyContent = 'Use the three desktop icons at the top to interact with my website!';
    } else {
      this.bodyContent = 'Use the three desktop icons on the left to interact with my website!';
    }
  }
}
