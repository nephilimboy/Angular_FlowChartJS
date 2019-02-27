import { Component, ViewChild, ElementRef, OnInit, AfterViewInit, AfterContentInit, AfterViewChecked, AfterContentChecked } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: "./app.component.html",
})
export class AppComponent implements AfterViewInit {

  data = {
    operators: {
      operator: {
        top: 20,
        left: 20,
        properties: {
          title: 'Operator',
          inputs: {
            input_1: {
              label: 'Input 1',
            },
            input_2: {
              label: 'Input 2',
            }
          },
          outputs: {
            output_1: {
              label: 'Output 1',
            },
            output_2: {
              label: 'Output 2',
            },
            output_3: {
              label: 'Output 3',
            }
          }
        }
      }
    }
  };

  @ViewChild('exampleDiv') exampleDiv: ElementRef;

  constructor() {
    
  }


  ngAfterViewInit() {
    setTimeout(() => {
      $(this.exampleDiv.nativeElement).flowchart({
        data: this.data
      });
    }, 1000);
    
  }

  // test(){
  //   // $('#exampleDiv').flowchart({
  //     $(this.exampleDiv.nativeElement).flowchart({
  //     data: this.data
  //   });
  // }

}
