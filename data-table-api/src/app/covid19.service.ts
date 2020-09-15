import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class Covid19Service {
  covid19Url = 'https://corona.lmao.ninja/v2/countries';

  constructor(private http: HttpClient) { }

  public covidData(){
    return this.http.get(this.covid19Url);
  }
}
