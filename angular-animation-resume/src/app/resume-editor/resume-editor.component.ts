import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-resume-editor',
  templateUrl: './resume-editor.component.html',
  styleUrls: ['./resume-editor.component.css']
})
export class ResumeEditorComponent implements OnInit {
  @Input('resumeEditorContent') resumeEditorContent: string;

  constructor() { }

  ngOnInit() {
  }

}
