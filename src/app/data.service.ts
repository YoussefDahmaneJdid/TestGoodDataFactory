import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private REST_API_SERVER = "https://www.alphavantage.co/query?function=";
  constructor(private httpClient: HttpClient) { }



  public getAllStockData(){
    return this.httpClient.get(this.REST_API_SERVER+'TIME_SERIES_DAILY&symbol=IBM&apikey=demo');
  }
}
