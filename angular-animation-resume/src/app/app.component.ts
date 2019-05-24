import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  resumeEditorContent = `
# Yujin Wang

## Projects and wokr Experience

### Werkstudentin：front-end and tool developer (HTML, CSS, JavaScript, AJAX, C#)

* Support improving user interface of a web-based validation framework (SPA)
* Independent develop a tool for determining country from GPS data

### Master Thesis：Desktop application development (C#)

* Develope a WinForm application to do subjective image quality evaluation
* Desgin and conduct an experiment with volunteers using developed application

### [Animation Resume](https://shiningdan.github.io/react-animation-resume/) (Click to have a look!)

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
width: 45vw; height: 95vh;
}
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
-webkit-transform-origin: 0 0;
        transform-origin: 0 0;
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
}
