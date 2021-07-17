import { Observable } from 'rxjs';
import { State } from './../../store/state';
import { Component, OnInit, ViewChild, AfterViewInit, Output, EventEmitter } from '@angular/core';
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
  terminalIntroMessage = 'Hello, world!';

  ngAfterViewInit() {
    this.keyInputSubscribe();
    this.setTheme();
  }

  toggleMinMax() {
    this.isMinimized = !this.isMinimized;
    this.minEvent.emit(this.isMinimized);
    if (!this.isMinimized) {
      this.child.underlying.reset();
      this.child.write(`\r\n$ ${this.terminalIntroMessage}`);
    }
  }

  setTheme() {
    const theme = {background: '#1e1e1e', foreground: '#569CD6'};
    this.child.underlying.setOption('theme', theme);
    this.child.underlying.setOption('cursorBlink', true);
  }

  keyInputSubscribe() {
    this.child.write(`\r\n$ ${this.terminalIntroMessage}`);
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
