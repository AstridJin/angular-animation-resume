import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PrismModule } from '@ngx-prism/core';
import { MarkdownModule } from 'ngx-markdown';
import { StyleEditorComponent } from './style-editor/style-editor.component';
import { ResumeEditorComponent } from './resume-editor/resume-editor.component';

@NgModule({
  declarations: [
    AppComponent,
    StyleEditorComponent,
    ResumeEditorComponent
  ],
  imports: [
    BrowserModule,
    PrismModule,
    MarkdownModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
