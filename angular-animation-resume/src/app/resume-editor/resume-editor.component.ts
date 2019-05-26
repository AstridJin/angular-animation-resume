import { StyleEditorComponent } from './../style-editor/style-editor.component';
import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';


@Component({
  selector: 'app-resume-editor',
  templateUrl: './resume-editor.component.html',
  styleUrls: ["./resume-editor.component.css"]
})
export class ResumeEditorComponent implements OnInit {
  @Input('styleEditor') styleEditor: StyleEditorComponent;
  @Input('resumeEditorContent') completeResumeEditorContent: string;
  @ViewChild('resumeEditor') resumeEditor: ElementRef;
  public resumeEditorContent: string = "";
  public isMarkdown: boolean = false;

  getCurrentContentLength() {
    return this.resumeEditorContent.length;
  }

  checkScreenChanges() {
    let resumeEditorHeight = document.getElementById('styleEditor').clientHeight;
    let fixedHeight = document.getElementById('fixed').clientHeight;
    if (fixedHeight != resumeEditorHeight)
      this.styleEditor.setFixedHeight();
  }

  addToContent(char: string) {
    this.resumeEditorContent += char;
    this.checkScreenChanges();
  }

  setResumeMarkdown() {
    this.isMarkdown = true;
    console.log("markdown changed");
  }



  constructor() { }

  ngOnInit() {
  }

}
