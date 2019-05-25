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

  autoScrollToBottom() {
    this.styleEditor2.nativeElement.style.height = this.styleEditor1.nativeElement.scrollHeight + "px";
    this.styleEditor1.nativeElement.scrollTop = this.styleEditor1.nativeElement.scrollHeight;
    if (this.styleEditor1.nativeElement.scrollTop != 0)
      this.styleEditor2.nativeElement.scrollTop = this.styleEditor1.nativeElement.scrollTop;

  }

  addToContent(char: string) {
    this.styleEditorContent += char;
    this.autoScrollToBottom();
  }

  addHighlight() {
    this.styleEditor2.nativeElement.style.overflow = "hidden";
    this.styleEditor2.nativeElement.style.opacity = 0.5;
  }

  hideDynamic() {
    this.styleEditor1.nativeElement.display = "none";
    this.styleEditor2.nativeElement.style.overflow = "auto";
    this.styleEditor2.nativeElement.style.opacity = 1;
  }

  constructor() { }

  ngAfterViewInit() {
  }

}
