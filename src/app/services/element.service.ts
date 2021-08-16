import { ElementRef, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ElementService {
  constructor() {}

  getInteractable(el: ElementRef) {
    const elements = el.nativeElement.getElementsByClassName("interactable");
    console.log(elements);
  }
}
