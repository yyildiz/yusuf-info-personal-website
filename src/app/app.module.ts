import { LoaderService } from './services/loader.service';
import { ContactService } from './services/contact.service';
import { State } from './store/state';

import { HttpClientModule } from '@angular/common/http';
import { WpApiService } from './services/wp-api.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { NgTerminalModule } from 'ng-terminal';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { BlogComponent } from './components/blog/blog.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToolbarComponent } from './components/layout/toolbar/toolbar.component';
import { SidebarComponent } from './components/layout/sidebar/sidebar.component';
import { FilesComponent } from './components/layout/files/files.component';
import { SidebarItemComponent } from './components/layout/sidebar/sidebar-item/sidebar-item.component';
import { LayoutComponent } from './components/layout/layout/layout.component';
import { ContactComponent } from './components/contact/contact.component';
import { FileComponent } from './components/layout/files/file/file.component';
import { TerminalComponent } from './components/terminal/terminal.component';
import { LoaderComponent } from './components/loader/loader.component';
import { IconComponent } from './components/layout/icon/icon.component';
import { NotepadToolbarComponent } from './components/layout/notepad-toolbar/notepad-toolbar.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BlogComponent,
    NotFoundComponent,
    ToolbarComponent,
    SidebarComponent,
    FilesComponent,
    IconComponent,
    SidebarItemComponent,
    LayoutComponent,
    ContactComponent,
    FileComponent,
    TerminalComponent,
    LoaderComponent,
    NotepadToolbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgTerminalModule
  ],
  exports: [
    LoaderComponent
  ],
  providers: [WpApiService, ContactService, State, LoaderService],
  bootstrap: [AppComponent]
})

export class AppModule {

  constructor() {
  }
}
