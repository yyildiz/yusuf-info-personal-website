import { Injectable } from '@angular/core';
import { ModalsEnum } from '../consts/modals.enum';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  modals = {};
  constructor() {
    this.modals = {[ModalsEnum.HomeIntro] : true};
    localStorage.setItem('modals', JSON.stringify(this.modals));
  }

  shouldShowOnlyOnce(modal: ModalsEnum) {
    this.getState();
    const shouldShow = this.modals[modal];
    if (shouldShow) {
      this.modals[modal] = false;
      this.setState();
    }
    return shouldShow;
  }

  setState() {
    localStorage.setItem('modals', JSON.stringify(this.modals));
  }

  getState() {
    this.modals = JSON.parse(localStorage.getItem('modals'));
  }

  setModal(modal: ModalsEnum, shouldShow: boolean) {
    this.getState();
    this.modals[modal] = shouldShow;
    this.setState();
  }
}
