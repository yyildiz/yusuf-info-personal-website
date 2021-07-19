import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotepadToolbarComponent } from './notepad-toolbar.component';

describe('NotepadToolbarComponent', () => {
  let component: NotepadToolbarComponent;
  let fixture: ComponentFixture<NotepadToolbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotepadToolbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotepadToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
