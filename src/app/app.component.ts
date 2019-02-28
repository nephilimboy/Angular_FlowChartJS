import { Component, ViewChild, ElementRef, OnInit, AfterViewInit, AfterContentInit, AfterViewChecked, AfterContentChecked } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: "./app.component.html",
})
export class AppComponent implements AfterViewInit {
  
  // data = {
  //   operators: {
  //     operator1: {
  //       top: 20,
  //       left: 20,
  //       properties: {
  //         title: 'Operator 1',
  //         class: 'myTest2',
  //         inputs: {},
  //         outputs: {
  //           output_1: {
  //             label: 'Output 1',
  //           }
  //         }
  //       }
  //     },
  //     operator2: {
  //       top: 80,
  //       left: 300,
  //       properties: {
  //         title: 'Operator 2',
  //         class: 'myTest2',
  //         inputs: {
  //           input_1: {
  //             label: 'Input 1',
  //           },
  //           input_2: {
  //             label: 'Input 2',
  //           },
  //         },
  //         outputs: {}
  //       }
  //     },
  //   },
  //   links: {
  //     link_1: {
  //       fromOperator: 'operator1',
  //       fromConnector: 'output_1',
  //       toOperator: 'operator2',
  //       toConnector: 'input_2',
  //     },
  //   }
  // };

  @ViewChild('exampleDiv') exampleDiv: ElementRef;

  constructor() {

  }


  ngAfterViewInit() {
    setTimeout(() => {




      $(this.exampleDiv.nativeElement).flowchart({
        data: ''
      });
    }, 1000);

  }

  // test(){
  //   // $('#exampleDiv').flowchart({
  //     $(this.exampleDiv.nativeElement).flowchart({
  //     data: this.data
  //   });
  // }

  operatorI = 0;
  operatorII = 0;
  addNewOperator() {

    var operatorId = 'created_operator_' + this.operatorI;
    var operatorData = {
      top: 60,
      left: 500,
      properties: {
        title: 'Operator ' + (this.operatorI + 3),
        class: 'myTest',
        inputs: {},
        outputs: {
          output_1: {
            label: 'Output 1',
          },
          output_2: {
            label: 'Output 2',
          },
          output_3: {
            label: 'Output 3',
          },
          output_4: {
            label: 'Output 4',
          },
        }
      }
    }

    this.operatorI++;
    $(this.exampleDiv.nativeElement).flowchart('createOperator', operatorId, operatorData);
  }

  addNewOperator2() {

    var operatorId = 'created_operator_' + this.operatorI;
    var operatorData = {
      top: 60,
      left: 500,
      properties: {
        title: 'Operator ' + (this.operatorI + 3),
        class: 'myTest2',
        inputs: {
          input_1: {
            label: 'Input 1',
          },
          input_2: {
            label: 'Input 2',
          },
          input_3: {
            label: 'Input 3',
          },
        },
        outputs: {}
      }
    }

    this.operatorI++;
    $(this.exampleDiv.nativeElement).flowchart('createOperator', operatorId, operatorData);
  }

}

