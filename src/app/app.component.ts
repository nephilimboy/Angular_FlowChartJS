import { Component, ViewChild, ElementRef, OnInit, AfterViewInit, AfterContentInit, AfterViewChecked, AfterContentChecked } from '@angular/core';
import {
  Compiler,
  ComponentFactory,
  ComponentFactoryResolver,
  ComponentRef,
  Input,
  ModuleWithComponentFactories,
  NgModule,
  ViewContainerRef
} from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: "./app.component.html",
})
export class AppComponent implements AfterViewInit {

  public diagModel: any;

  private cx: number;
  private cy: number;



  @ViewChild('exampleDiv') exampleDiv: ElementRef;




  constructor() {
  }



  ngAfterViewInit() {


    var container = $('#chart_container');
    this.cx = $('#exampleDiv').width() / 2;
    this.cy = $('#exampleDiv').height() / 2;
    $('#exampleDiv').panzoom({
    });
    $('#exampleDiv').panzoom('pan', -this.cx + container.width() / 2, -this.cy + container.height() / 2);

    var possibleZooms = [0.5, 0.75, 1, 2, 3];
    var currentZoom = 2;
    container.on('mousewheel.focal', function (e) {
      e.preventDefault();
      var delta = (e.delta || e.originalEvent.wheelDelta) || e.originalEvent.detail;
      var zoomOut: any = delta ? delta < 0 : e.originalEvent.deltaY > 0;
      currentZoom = Math.max(0, Math.min(possibleZooms.length - 1, (currentZoom + (zoomOut * 2 - 1))));
      $('#exampleDiv').flowchart('setPositionRatio', possibleZooms[currentZoom]);
      $('#exampleDiv').panzoom('zoom', possibleZooms[currentZoom], {
        animate: false,
        focal: e
      });

    });


    setTimeout(() => {
      $(this.exampleDiv.nativeElement).flowchart({
        data: '',
        multipleLinksOnOutput: true,
      });

    }, 1000);

  }


  getOperatorData($element) {
    var nbInputs = parseInt($element.data('nb-inputs'));
    var nbOutputs = parseInt($element.data('nb-outputs'));
    var data = {
      properties: {
        title: $element.text(),
        inputs: {},
        outputs: {}
      }
    };

    var i = 0;
    for (i = 0; i < nbInputs; i++) {
      data.properties.inputs['input_' + i] = {
        label: 'Input ' + (i + 1)
      };
    }
    for (i = 0; i < nbOutputs; i++) {
      data.properties.outputs['output_' + i] = {
        label: 'Output ' + (i + 1)
      };
    }

    return data;
  }



  operatorI = 0;
  operatorII = 0;
  addNewOperator() {

    var operatorId = 'created_operator_' + this.operatorI;
    var operatorData = {
      top: this.cx,
      left: this.cy,
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
      top: this.cx,
      left: this.cy,
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



  deleteOperationOrLink() {
    $(this.exampleDiv.nativeElement).flowchart('deleteSelected');
  }

  load() {
    $(this.exampleDiv.nativeElement).flowchart('deleteSelected');
    var data = JSON.parse(this.diagModel);
    $(this.exampleDiv.nativeElement).flowchart('setData', data);
  }


  get() {
    $(this.exampleDiv.nativeElement).flowchart('deleteSelected');
    var data = $(this.exampleDiv.nativeElement).flowchart('getData');
    this.diagModel = JSON.stringify(data, null, 2);
  }

}

