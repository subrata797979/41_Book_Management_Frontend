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

  canvas: any;
  ctx: any;
  chart: any;

  chartData: any;
  label: any;
  data: any;

  pageCount: any = [];

  @ViewChild('mychart') mychart:any;

  ngAfterViewInit() {
    this.canvas = this.mychart.nativeElement; 
    this.ctx = this.canvas.getContext('2d');

    this.chart = new Chart(this.ctx, {
      type: 'line',
      data: {
          datasets: [{
            label: 'Chart',
            data: [0, 20, 40, 50],
            backgroundColor: "rgb(115 185 243 / 65%)",
            borderColor: "#007ee7",
            fill: false
          }],
          labels: ['January 2019', 'February 2019', 'March 2019', 'April 2019']
      },
    });
  }

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
        this.label = "demo";

        // for each object in filteredData push pageCount field to pageCount[]
          // traverse through array of objects
          // store each pageCount
        // print pageCount array
      }
      // this.removeData(this.chart);
      this.addData(this.chart, this.label, this.filteredData );
  }


  showData() {
    console.log(this.dateData);
    console.log(this.filteredData);
  }

  // chart functions

  addData(chart: { data: { labels: any[]; datasets: any[]; }; update: () => void; }, label: any, data: any) {
    // console.log(data[1].title);
    chart.data.labels.push(label);
    chart.data.datasets.forEach((dataset) => {
        dataset.data.push(data);
    });
    chart.update();
  }

  removeData(chart: { data: { labels: void[]; datasets: any[]; }; update: () => void; }) {
    chart.data.labels.pop();
    chart.data.datasets.forEach((dataset) => {
        dataset.data.pop();
    });
    chart.update();
  }

  onClickAddChart() {

  }

  onClickRemoveChart() {
    
  }
  
}
