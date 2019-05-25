import { NgStyle } from '@angular/common';
import { Component, OnInit, ViewChild, Renderer2, ElementRef } from "@angular/core";
import { StyleEditorComponent } from "./style-editor/style-editor.component";
import { ResumeEditorComponent } from "./resume-editor/resume-editor.component";
import { DOMTestComponentRenderer } from '@angular/platform-browser-dynamic/testing/src/dom_test_component_renderer';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  constructor(private renderer: Renderer2, private el: ElementRef) { };
  public styleContent = document.querySelector("style");
  public globalStyle: string = "";
  public interval = 20;

  @ViewChild('styleEditor') styleEditor: StyleEditorComponent;
  @ViewChild('resumeEditor') resumeEditor: ResumeEditorComponent;
  @ViewChild('html') html: ElementRef;
  @ViewChild('style') style: StyleSheet;

  resumeEditorContent = `
# Yujin Wang
## Projects and Work Experience

### Werkstudentin：front-end and tool developer (HTML, CSS, JavaScript, AJAX, C#)
* Support improving user interface of a web-based validation framework (SPA)
* Independent develop a tool for determining country from GPS data

### Master Thesis：Desktop application development (C#)
* Develope a WinForm application to do subjective image quality evaluation
* Desgin and conduct an experiment with volunteers using developed application

### [Animation Resume](https://astridjin.github.io/angular-animation-resume/) (Click to have a look!)
* Animation resume using React and Webpack

## Education
1. **Universität Stuttgart (Germany) - INFOTECH (Information Technology)**                    Master of Science
	* GPA: 2.6/1.0 (Result of master thesis not included)
2. **Dalian University of Technology (China) - Electronic and Information Engineering**       Bachelor of Science
	* GPA: 85.25/100
3. National Yunlin University of Science and Technology (Taiwan) - Electronic Engineering**   Exchange study
  * GPA: 87.69/100
  
## Language Skills
Chinese   native
English   TOEFL 102, fluent
German    B1, basic 
`;
  styleEditorContent = [
    `/*
* Inspired by http://strml.net/
* 
* Hello, I am Yujin Wang 
*
* I made this simple dynamic resume with React
* Hope you like it :)
*/
/* Let's go！Firstly add the transition effect to all elements */
* {
-webkit-transition: all 1s;
transition: all 1s;
}
/* White background is too boring，let's make some change */
html {
color: rgb(222,222,222); 
background: #5b254d; 
}
/* Decorate the text */
.styleEditor {
position: fixed; left: 0; top: 0;
background-color: #303030;
padding: .5em;
border: 1px solid;
margin: .5em;
overflow: auto;
width: 45vw; max-height: 95vh;
}
`,
    `
/* Add some highlight to the code */
.token.comment{ color: #857F6B; font-style: italic; }
.token.selector{ color: #ebeb27; }
.token.property{ color: #88DCFE; }
.token.punctuation{ color: #88DCFE; }
.token.function{ color: #82AAFF; }
/* More cool with 3D animation */
html{
-webkit-perspective: 1000px;
        perspective: 1000px;
}
.styleEditor {
position: fixed; left: 0; top: 0; 
-webkit-transition: none; 
transition: none;
-webkit-transform: rotateY(10deg) translateZ(-20px) ;
        transform: rotateY(10deg) translateZ(-20px) ;  
-webkit-transform-origin: 0 100%;
        transform-origin: 0 100%;
}
/* This is for code part */

/* Then is for container putting my resume */
.resumeEditor{
position: fixed; right: 0; top: 0;
padding: .5em;  margin: .5em;
width: 48vw; height: 95vh; 
border: 1px solid;
background: white; color: #222;
overflow: auto;
}

/* Okay, let's begin with the resume*/
`,
    `
/* There seems lacking something
* Yes，now it is just in markdown format，it should be more friendly to reader
* Easy，just translate to HTML with open-source tool
*           3          
*           2          
*           1          
*          Finish!
*/
`,
    `
/* Add some CSS to HTML  */
.resumeEditor{
padding: 2em;
}
.resumeEditor h1{
display: block;
width: 80px;
margin: 0 auto;
}
.resumeEditor h2{
display: inline-block;
border-bottom: 1px solid;
margin: 1em 0 .5em;
}
.resumeEditor h3{
display: inline-block;
margin: 0.5em 0;
}
.resumeEditor a{
color: #000;
}
.resumeEditor ul{
list-style: none;
}
.resumeEditor ul>li::before {
content: "•";
margin-left: 1em;
margin-right: 0.5em;
}
.resumeEditor blockquote {
margin: 1em;
padding: .5em;
background: #ddd;
}
/*
* I hope you enjoyed this.
*/
`

  ];

  addToStyle(char: string) {
    this.globalStyle += char;
    this.styleContent.textContent += char;
  }

  showStyleEditorContent(blockId: number) {
    let lastContentLength = 0;
    if (blockId !== 0) {
      lastContentLength = this.globalStyle.length;
    }
    let currentStyle = this.styleEditorContent[blockId];
    let len = currentStyle.length;
    return new Promise((resolve, reject) => {
      let showStyle = function () {
        let currentLen = this.globalStyle.length - lastContentLength;
        if (currentLen < len) {
          let char = currentStyle.substring(currentLen, currentLen + 1);
          this.styleEditor.addToContent(char);
          this.addToStyle(char);
          setTimeout(showStyle, this.interval);
        } else {
          resolve();
        }
      }.bind(this);
      showStyle();
    });
  }

  showResumeContent() {
    let content = this.resumeEditorContent;
    let len = content.length;
    return new Promise((resolve, reject) => {
      let showContent = function () {
        let currentLen = this.resumeEditor.getCurrentContentLength();
        if (currentLen < len) {
          let char = content.substring(currentLen, currentLen + 1);
          this.resumeEditor.addToContent(char);
          setTimeout(showContent, this.interval);
        } else {
          resolve();
        }
      }.bind(this);
      showContent();
    });
  }

  async startShow() {
    await this.showStyleEditorContent(0).then(function () {
      console.log("done! show Content 0");
    });
    this.styleEditor.addHighlight();
    await this.showStyleEditorContent(1).then(function () {
      console.log("done! show Content 1");
    });
    await this.showResumeContent();
    await this.showStyleEditorContent(2).then(function () {
      console.log("done! show Content 2");
    });
    await this.resumeEditor.setResumeMarkdown();
    await this.showStyleEditorContent(3).then(function () {
      console.log("done! show Content 3");
    });
    this.styleEditor.hideDynamic();
  }

  ngOnInit() {
    this.startShow();
    console.log("Start now");
    console.log(this.html);

    /*     this.renderer.setStyle(
          this.html.nativeElement, 'background-color', '#5b254d'
        )
        console.log(this.html.nativeElement); */
    // document.querySelector("style")

  }

}
