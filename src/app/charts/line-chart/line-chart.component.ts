import { Component, OnInit,  ViewChild  } from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent implements OnInit {

  constructor() { }

  dateData: any;
  filteredData: any;
  filteredDataSortByIdDesc: any;

  canvas: any;
  ctx: any;
  chart: any;

  chartData: any;
  data: any;

  pageCountArray: any;
  publishedDateArray: any;
  

  @ViewChild('mychart') mychart:any;

  ngAfterViewInit() {
    this.canvas = this.mychart.nativeElement; 
    this.ctx = this.canvas.getContext('2d');

    this.chart = new Chart(this.ctx, {
      type: 'line',
      data: {
          datasets: [{
            label: 'Example',
            data: [10,20,30,40,50],
            backgroundColor: "rgb(115 185 243 / 65%)",
            borderColor: "#007ee7",
            fill: false
          }],
          labels: this.publishedDateArray
      },
    });
    this.dynamicChart();
  }

  addData(chart:any, label:any, data:any) {
    chart.data.datasets[0].label = label;
    chart.data.datasets[0].data = data;
    chart.update();
  }

  removeData(chart: { data: { labels: void[]; datasets: any[]; }; update: () => void; }) {
    chart.data.labels.pop();
    chart.data.datasets.forEach((dataset) => {
        dataset.data.pop();
    });
    chart.update();
  }

  // ------------------------------------------------------------------------------ ngOnInit

  ngOnInit(): void {
    this.getDataFromLocal();
    this.showData();
  }

  getDataFromLocal() {
    const Data1: string | null = localStorage.getItem('dateLocal');
    const Data2: string | null = localStorage.getItem('filteredData');
      if(Data1===null || Data2===null) {
        console.log('Data is null!');
      }
      else {
        this.dateData = JSON.parse(Data1);
        this.filteredData = JSON.parse(Data2);
      }

      // PAGE ARRAY
      this.pageCountArray = [];
      this.filteredData.forEach((arrayItem: { pageCount: number; }) => {
        this.pageCountArray.push(arrayItem.pageCount);
      });

      // PUBLISHED_DATE ARRAY
      this.publishedDateArray = [];
      this.filteredData.forEach((arrayItem: { publishedDate: Date; }) => {
        // console.log(new Date(arrayItem.publishedDate).toUTCString().substring(5, 16));
        this.publishedDateArray.push(new Date(arrayItem.publishedDate).toUTCString().substring(5, 16));
      });


      // this.removeData(this.chart);
      // this.addData(this.chart, this.label, this.pageCountArray );
  }

  showData() {
    console.log(this.dateData);
    console.log(this.filteredData);
  }

  // -----------------------------------------------------------
  dynamicChart() {
    const cardId = localStorage.getItem("cardId");
    const cardLabel = localStorage.getItem("cardLabel");
    console.log(cardId);
      switch (cardId) {
          case "1":
            alert("Default Chart is Loaded!");
            break;
          case "2":
            console.log("New Books");
            
            break;
          case "3":
            console.log("Average Pages / Book");
            this.addData(this.chart, cardLabel, this.pageCountArray);
            break;
          default:
            alert("Default Chart is Loaded!");
            break;
      }
  }

}
