import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartDataSets } from 'chart.js';
import { Label, Color } from 'ng2-charts';
import { ApiService } from '../../services/api.service'
import { ExportToCsv } from 'export-to-csv';


@Component({
  selector: 'app-line',
  templateUrl: './line.component.html',
  styleUrls: ['./line.component.css']
})
export class LineComponent implements OnInit {


  lineArr: Array<any> = []
  num1: number
  num2: number
  num3: number

  country = ""
  city = ""

  btnHide: boolean = true

  /* Line Chart
  -------------------------------------------------- */  
  
  public lineChartData: ChartDataSets[] = [];
  public lineChartLabels: Label[] = [];
  public lineChartOptions: ChartOptions = {
    responsive: true,
    };
  public lineChartColors: Color[] = [{
    backgroundColor: ["rgba(59, 117, 255)"]
  },
  {
    backgroundColor: ["rgba(255, 59, 109)"]
  },
  {
    backgroundColor: ["rgba(88, 24, 69)"]
  }
]

  public lineChartLegend = true;
  public lineChartType = 'line';
  public lineChartPlugins = [];

  /* End of Line Chart
  -------------------------------------------------- */

  constructor(private _api:ApiService) { }
  
  getRandomInt() {
    var min = Math.ceil(100);
    var max = Math.floor(20);     
    this.num1 = Math.floor(Math.random() * (max - min + 1)) + min
    this.num2 = Math.floor(Math.random() * (max - min + 1)) + min
    this.num3 = Math.floor(Math.random() * (max - min + 1)) + min
  }

  exportToCSV(){
    var data = [
      {
        FullName: `${this.lineArr[0].firstname} ${this.lineArr[0].lastname}`,
        Email: this.lineArr[0].email,
        Country: this.lineArr[0].country,
        City: this.lineArr[0].city,
        StreetName: this.lineArr[0].streetname,
        StreetNumber: this.lineArr[0].streetnum
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
      this.lineArr = [data[0]]
      this.getRandomInt()
      this.country = this.lineArr[0].country
      this.city = this.lineArr[0].city
      this.btnHide = false
    })
  }

}
