import { Component, AfterViewInit } from '@angular/core';
import { EChartsOption } from 'echarts';
import { AnalyticCard } from 'src/app/Models/AnalyticCard';

@Component({
  selector: 'app-analytics',
  templateUrl: './analytics.component.html',
  styleUrls: ['./analytics.component.scss']
})
export class AnalyticsComponent implements AfterViewInit {
 Cards: AnalyticCard[]=[
  {title:"ukupno rijeci", 
  value: 1000,
  icon:"fa fa-file-text",
  description: "opis1",
  color: "#6534ff",
  },
  {title:"ukupno posjetioca",
  value: 2340,
  icon:"fa fa-users",
  description: "opis2",
  color: "#b31fe0",
  },
  {title:"ukupno komentara",
  value: 100,
  icon:"fa fa-comments",
  description: "opis3",
  color: "#55c5de",
  },
  {title:"ukupno pregleda",
  value: 10000,
  icon:"fa fa-eye",
  description: "opis4",
  color: "#23e1a8",
  },

 ]
  searchText: string = '';

  onSearchTextChanged() {
  }

  options2: EChartsOption = {
    backgroundColor: '#4c4e51',
    color: ['#ffaa00', '#42aaff', '#ff708d', '#2ce69b', '#b18aff'], 
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b} : {c} ({d}%)',
    },
    legend: {
      orient: 'vertical',
      left: 'left',
      data: ['USA', 'Germany', 'France', 'Canada', 'Russia'],
      textStyle: {
        color: '#ffffff',
      },
    },
    series: [
      {
        name: 'Countries',
        type: 'pie',
        radius: '80%',
        center: ['50%', '50%'],
        data: [
          { value: 335, name: 'Germany' },
          { value: 310, name: 'France' },
          { value: 234, name: 'Canada' },
          { value: 135, name: 'Russia' },
          { value: 1548, name: 'USA' },
        ],
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)',
          },
        },
        label: {
          color: '#ffffff',
        },
        labelLine: {
          lineStyle: {
            color: '#1b1b38',
          },
        },
      },
    ],
  };

  options: EChartsOption = {
    backgroundColor: '#646464',
    color: ['#437099'],
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow',
      },
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true,
    },
    xAxis: [
      {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        axisTick: {
          alignWithLabel: true,
        },
        axisLine: {
          lineStyle: {
            color: '#1b1b38',
          },
        },
        axisLabel: {
          color: '#ffffff', 
        },
      },
    ],
    yAxis: [
      {
        type: 'value',
        axisLine: {
          lineStyle: {
            color: '#1b1b38',
          },
        },
        splitLine: {
          lineStyle: {
            color: '#151a30',
          },
        },
        axisLabel: {
          color: '#ffffff', 
        },
      },
    ],
    series: [
      {
        name: 'Score',
        type: 'bar',
        barWidth: '60%',
        data: [10, 52, 200, 334, 390, 330, 220],
      },
    ],
  };

  constructor() {}

  ngAfterViewInit() {}

}
