import { Component, OnInit, Input, ViewEncapsulation } from "@angular/core";

@Component({
  selector: "app-style-editor",
  templateUrl: "./style-editor.component.html",
  styleUrls: ["./style-editor.component.css"]
})
export class StyleEditorComponent implements OnInit {
  @Input('styleEditorContent') styleEditorContent: string[];

  constructor() { }

  ngOnInit() { }
}
