import { product } from './data/products';
import { buzzWord } from './data/buzzWords';
import { Component, OnInit } from '@angular/core';
import {  CloudOptions } from 'angular-tag-cloud-module';
import { sentiment } from './data/sentiment'
import {FormBuilder, FormGroup, FormControl} from '@angular/forms'


@Component({
  templateUrl: 'dashboard.component.html',
  styleUrls: ['dashboard.component.css'],
 
})

export class DashboardComponent implements OnInit {
 
  // variable of Arrays of Sentiment data
  public dataSentiment:any[];

  // Variable of array of buzzWords
  public buzzWordData ;


  // Variable List product 
   public productList:any[];
 
   form:FormGroup;
   ngOnInit(): void {
    this.form=this.fb.group({
      daterange : new FormGroup( {
        start  : new FormControl(),
        end : new FormControl()
      })

    })
     
    }
    onSubmit(){
      // on date changed
      this.productList=product;
      console.log(this.form.value.daterange)
       this.productList =   this.productList.filter((item: any) => {
         let date = new Date(item.date);
        return date >= this.form.value.daterange.start &&
        date <= this.form.value.daterange.end;
    });



    }
   // declation Variable Chart Sentiment
    
   public pieChartLabels: string[];
   public pieChartData: number[];
   public pieChartType:string ;
   public chartColors: any[];
   public chartOptions;
   model;

      // declation Variable Chart share sentiment
  public doughnutChartLabels: string[] ;
  public doughnutChartData: number[] ;
  public doughnutChartType:string ;

  constructor(private fb : FormBuilder) {
// intialize List product
 this.productList = product;

// Sentiment Chart Initliaze
    this.dataSentiment=sentiment;
    this.pieChartLabels=  [this.dataSentiment[0].polarity, this.dataSentiment[1].polarity, this.dataSentiment[2].polarity];
    this.pieChartData   = [this.dataSentiment[0].score_sentiment,this.dataSentiment[1].score_sentiment, this.dataSentiment[2].score_sentiment];
    this.pieChartType =  'pie';
    this.chartColors  = [
      { 
        backgroundColor:[this.dataSentiment[0].color, this.dataSentiment[1].color, this.dataSentiment[2].color] 
      }];
      // shared Options setting for two charts sentiment and shareComments
    this.chartOptions = {
        responsive: false,
        maintainAspectRatio: false,
        legend: {
          display: false
      }
      };

// Share of Comment Char Intialize
     this.doughnutChartLabels = ['XXX', 'YYYY', 'ZZZ'];
     this.doughnutChartData = [350, 450, 100];
     this.doughnutChartType = 'doughnut';
    

// Initalize BuzzWord Array

     this.buzzWordData =buzzWord;

    

 }

 

 // WordCloud 
 options: CloudOptions = {
  width :258,
    height : 150,
    overflow: false,
    zoomOnHover: {
      scale: 1.1,
      transitionTime: 0.3,
      delay: .3
    },
    realignOnResize: true,
    strict : true,
    font : "italic, bold , 14px , 'Indie Flower', cursive"
};





  





}
