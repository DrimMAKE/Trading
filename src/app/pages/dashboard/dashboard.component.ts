import { Component, ViewEncapsulation } from '@angular/core';
import { single, multi } from '../charts/charts.data';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  encapsulation: ViewEncapsulation.None
})
export class DashboardComponent  {
   
  public single: any[];
  public multi: any[]; 

  public showXAxis = true;
  public showYAxis = true;
  public gradient = false;
  public showLegend = false;
  public showXAxisLabel = true;
  public xAxisLabel = 'Country';
  public showYAxisLabel = true;
  public yAxisLabel = 'Population';
  public colorScheme = {
    domain: ['#2F3E9E', '#D22E2E', '#378D3B', '#0096A6', '#F47B00', '#606060']
  };

  constructor() {
    Object.assign(this, {single, multi}); 
  }
  
  public onSelect(event) {
    console.log(event);
  }


}
