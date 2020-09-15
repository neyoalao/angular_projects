import {Component, OnInit, ViewChild, AfterViewInit} from '@angular/core';
import {Covid19Service} from '../covid19.service';
import {CovidReportFormat} from './covid-report-format';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';

@Component({
  selector: 'app-covid19',
  templateUrl: './covid19.component.html',
  styleUrls: ['./covid19.component.scss']
})
export class Covid19Component implements OnInit {
  elementData: CovidReportFormat[];
  displayedColumns: string[] = ['countryInfo', 'country', 'cases', 'todayCases',
    'recovered', 'active', 'critical', 'population', 'casesPerOneMillion',
    'deathsPerOneMillion', 'recoveredPerOneMillion'];
  dataSource = new MatTableDataSource<CovidReportFormat>(this.elementData);

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;


  constructor(private  service: Covid19Service) {
  }


  ngOnInit(): void {
    // this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.getCovidData();

  }

  public getCovidData() {
    this.service.covidData()
      .subscribe(report => {
        // @ts-ignore
        return this.dataSource.data = report as CovidReportFormat;
      });
  }

}
