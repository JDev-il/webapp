import { Component, OnInit } from '@angular/core';
import { ChartType, ChartOptions } from 'chart.js';
import { SingleDataSet, Label } from 'ng2-charts';
import { ApiService } from '../../services/api.service'
import { ExportToCsv } from 'export-to-csv';

@Component({
  selector: 'app-pie',
  templateUrl: './pie.component.html',
  styleUrls: ['./pie.component.css']
})
export class PieComponent implements OnInit {

  pieArr: Array<any> = []
  num1: number;
  num2: number;
  num3: number;

  btnHide: boolean = true
  
  /* Pie Chart
  -------------------------------------------------- */  

  public pieChartOptions: ChartOptions = {
    responsive: true,
    };
    public pieChartLabels: Label[] = [];
    public pieChartData: SingleDataSet = []
    public pieChartType: ChartType = 'pie';
    public pieChartLegend = true;
    public pieChartPlugins = [];
    public pieChartColors = [{
      backgroundColor:["#57A3FF", "#57FFAE", "#FF6E87", "#FFBA6E"]}
    ]

  /* End of Pie Chart
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
        FullName: `${this.pieArr[0].firstname} ${this.pieArr[0].lastname}`,
        Email: this.pieArr[0].email,
        Country: this.pieArr[0].country,
        City: this.pieArr[0].city,
        StreetName: this.pieArr[0].streetname,
        StreetNumber: this.pieArr[0].streetnum
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
      this.pieArr = [data[0]]
      this.getRandomInt() 
      this.btnHide = false
    })    
  }
}
