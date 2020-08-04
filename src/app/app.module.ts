import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgReduxModule, NgRedux } from '@angular-redux/store';

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
import { FileReducer, InitialState, initialState } from './store/reducer';
import { LayoutComponent } from './components/layout/layout/layout.component';
import { ContactComponent } from './components/contact/contact.component';
import { FileComponent } from './components/layout/files/file/file.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BlogComponent,
    NotFoundComponent,
    ToolbarComponent,
    SidebarComponent,
    FilesComponent,
    SidebarItemComponent,
    LayoutComponent,
    ContactComponent,
    FileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgReduxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(ngRedux: NgRedux<InitialState>) {
    ngRedux.configureStore(FileReducer, initialState);
  }
}
