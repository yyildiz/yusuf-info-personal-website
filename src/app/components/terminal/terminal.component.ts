import {
  Component,
  ViewChild,
  AfterViewInit,
  Output,
  EventEmitter,
} from '@angular/core';
import { NgTerminal } from 'ng-terminal';

@Component({
  selector: 'app-terminal',
  templateUrl: './terminal.component.html',
  styleUrls: ['./terminal.component.scss'],
})
export class TerminalComponent implements AfterViewInit {
  @ViewChild('term', { static: false }) child: NgTerminal;
  @ViewChild('tabMinMax') minMax: HTMLElement;
  @Output() minEvent = new EventEmitter<boolean>();

  isMinimized = false;
  writeIntro() {
    this.child.write(
      `\r\n$ Welcome to yusuf.info, a fun compilation of my online presence!`
    );
    this.child.write(`\r\n$ Please make yourself at home :)`);
  }
  ngAfterViewInit() {
    this.keyInputSubscribe();
    this.setTheme();
  }

  toggleMinMax() {
    this.isMinimized = !this.isMinimized;
    this.minEvent.emit(this.isMinimized);
    if (!this.isMinimized) {
      this.child.underlying.reset();
      this.writeIntro();
    }
  }

  setTheme() {
    const theme = { background: '#1e1e1e', foreground: '#569CD6' };
    this.child.underlying.setOption('theme', theme);
    this.child.underlying.setOption('cursorBlink', true);
  }

  keyInputSubscribe() {
    this.writeIntro();
    this.child.keyEventInput.subscribe((e) => {
      const ev = e.domEvent;
      const printable = !ev.altKey && !ev.ctrlKey && !ev.metaKey;
      if (ev.keyCode === 13) {
        this.child.write('\r\n$ ');
      } else if (ev.keyCode === 8) {
        // Do not delete the prompt
        if (this.child.underlying.buffer.active.cursorX > 2) {
          this.child.write('\b \b');
        }
      } else if (printable) {
        this.child.write(e.key);
      }
    });
  }
}
