import { Component, OnInit } from '@angular/core';
import { ExportToCsv } from 'export-to-csv';
import { ChartType } from 'chart.js';
import { MultiDataSet, Label } from 'ng2-charts';
import { ApiService } from '../../services/api.service'

@Component({
  selector: 'app-gauge',
  templateUrl: './gauge.component.html',
  styleUrls: ['./gauge.component.css']
})
export class GaugeComponent implements OnInit {


  guageArr: Array<any> = []
  num1: number;
  num2: number;
  num3: number;

  btnHide: boolean = true
  /* Gauge Chart
  -------------------------------------------------- */  

  public doughnutChartLabels: Label[] = [];
  public doughnutChartData: MultiDataSet = [
    [350, 450, 100],
    [50, 150, 120],
    [250, 130, 70],
  ];
  public doughnutChartType: ChartType = 'doughnut';

  /* End of Gauge Chart
  -------------------------------------------------- */

  constructor(private _api:ApiService) { }


  getRandomInt() {
    var min = Math.ceil(500);
    var max = Math.floor(100);     
    this.num1 = Math.floor(Math.random() * (max - min + 1)) + min
    this.num2 = Math.floor(Math.random() * (max - min + 1)) + min
    this.num3 = Math.floor(Math.random() * (max - min + 1)) + min
  }

  exportToCSV(){
    var data = [
      {
        FullName: `${this.guageArr[0].firstname} ${this.guageArr[0].lastname}`,
        Email: this.guageArr[0].email,
        Country: this.guageArr[0].country,
        City: this.guageArr[0].city,
        StreetName: this.guageArr[0].streetname,
        StreetNumber: this.guageArr[0].streetnum
      },
    ];
     
      const options = { 
        fieldSeparator: ',',
        quoteStrings: '"',
        decimalSeparator: '.',
        showLabels: true, 
        showTitle: true,
        title: 'Line Chart User Details:',
        useTextFile: false,
        useBom: true,
        useKeysAsHeaders: true,
      };
    
    const csvExporter = new ExportToCsv(options);     
    csvExporter.generateCsv(data);
     
  }

  ngOnInit() {
    this._api.getJsonData().subscribe(data=>{
      this.guageArr = [data[0]]
      this.getRandomInt() 
      this.btnHide = false
    })    
  }

}
