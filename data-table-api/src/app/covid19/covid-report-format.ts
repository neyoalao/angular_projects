export interface CovidReportFormat {
  countryInfo: object;
  country: string;
  cases: string;
  todayCases: number;
  recovered: string;
  active: number;
  critical: string;
  population: string;
  casesPerOneMillion: number;
  deathsPerOneMillion: number;
  recoveredPerOneMillion: number;
}
