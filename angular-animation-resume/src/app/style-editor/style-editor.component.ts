import { Component, AfterViewInit, Input, ElementRef, ViewChild } from "@angular/core";

@Component({
  selector: "app-style-editor",
  templateUrl: "./style-editor.component.html",
  styleUrls: ["../app.component.css"]
})
export class StyleEditorComponent implements AfterViewInit {
  @Input('styleEditorContent') completeStyleEditorContent: string;
  @ViewChild('styleEditor1') styleEditor1: ElementRef;
  @ViewChild('styleEditor2') styleEditor2: ElementRef;
  public styleEditorContent: string = ""
  public isDiplay: boolean = true;

  setFixedHeight() {
    this.styleEditor2.nativeElement.style.height = document.getElementById('styleEditor').clientHeight + "px";
    this.autoScrollToBottom();
  }

  autoScrollToBottom() {
    this.styleEditor1.nativeElement.scrollTop = this.styleEditor1.nativeElement.scrollHeight;
    if (this.styleEditor1.nativeElement.scrollTop != 0)
      this.styleEditor2.nativeElement.scrollTop = this.styleEditor1.nativeElement.scrollTop;
  }

  addToContent(char: string) {
    this.styleEditorContent += char;
    this.autoScrollToBottom();
    this.setFixedHeight();
  }

  addHighlight() {
    this.styleEditor2.nativeElement.style.opacity = 0.5;
  }

  hideDynamic() {
    this.styleEditor1.nativeElement.style.opacity = 0;
    this.styleEditor2.nativeElement.style.opacity = 1;
    this.styleEditor2.nativeElement.style.overflow = "auto";
    this.styleEditor2.nativeElement.scrollTop = this.styleEditor2.nativeElement.scrollHeight;
  }

  onResize(event) {
    this.setFixedHeight();
  }

  constructor() { }

  ngAfterViewInit() {
  }

}
