import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-resume-editor',
  templateUrl: './resume-editor.component.html',
  styleUrls: ["./resume-editor.component.css"]
})
export class ResumeEditorComponent implements OnInit {
  @Input('resumeEditorContent') completeResumeEditorContent: string;
  @ViewChild('resumeEditor') resumeEditor: ElementRef;
  public resumeEditorContent: string = "";
  public isMarkdown: boolean = false;

  getCurrentContentLength() {
    return this.resumeEditorContent.length;
  }

  addToContent(char: string) {
    this.resumeEditorContent += char;
  }

  setResumeMarkdown() {
    this.isMarkdown = true;
    console.log("markdown changed");
  }

  constructor() { }

  ngOnInit() {
  }

}
