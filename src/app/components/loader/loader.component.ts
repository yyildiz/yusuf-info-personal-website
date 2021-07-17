import { LoaderService } from './../../services/loader.service';
import { Component, OnInit, Input } from '@angular/core';
import { Loader } from 'src/app/interfaces/loader.interface';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit {

  @Input() public id = 'global';
  public show: boolean;

  constructor(private loaderService: LoaderService) {
  }

  public ngOnInit(): void {
    this.loaderService.loaderStatus$.subscribe((response: Loader) => {
      this.show = this.id === response.id && response.status;
    });
  }

}
