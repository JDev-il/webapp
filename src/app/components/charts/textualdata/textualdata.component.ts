import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';
import { ApiService } from '../../services/api.service'
import { ExportToCsv } from 'export-to-csv';

@Component({
  selector: 'app-textualdata',
  templateUrl: './textualdata.component.html',
  styleUrls: ['./textualdata.component.css']
})
export class TextualdataComponent implements OnInit {

  textArr: Array<any> = []
  num1: number; num2: number; num3: number; num4: number; num5: number; num6: number; num7: number

  btnHide: boolean = true

  /* Text/Bar Chart
  -------------------------------------------------- */  

  public barChartOptions: ChartOptions = {
    responsive: true,
  };
  public barChartLabels: Label[] = [];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [];

  public barChartData: ChartDataSets[] = [];


  /* End of Text/Bar Chart
  -------------------------------------------------- */

  constructor(private _api:ApiService) { }


  getRandomInt() {
    var min = Math.ceil(100);
    var max = Math.floor(10);     
    this.num1 = Math.floor(Math.random() * (max - min + 1)) + min
    this.num2 = Math.floor(Math.random() * (max - min + 1)) + min
    this.num3 = Math.floor(Math.random() * (max - min + 1)) + min
    this.num4 = Math.floor(Math.random() * (max - min + 1)) + min
    this.num5 = Math.floor(Math.random() * (max - min + 1)) + min
    this.num6 = Math.floor(Math.random() * (max - min + 1)) + min
    this.num7 = Math.floor(Math.random() * (max - min + 1)) + min
  }

  exportToCSV(){
    var data = [
      {
        FullName: `${this.textArr[0].firstname} ${this.textArr[0].lastname}`,
        Email: this.textArr[0].email,
        Country: this.textArr[0].country,
        City: this.textArr[0].city,
        StreetName: this.textArr[0].streetname,
        StreetNumber: this.textArr[0].streetnum
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
      this.textArr = [data[0]]
      this.getRandomInt() 
      this.btnHide = false
    })    
  }

}
