import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InfoPage } from '../interfaces/info-page.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPageService {

  info: InfoPage = {};
  loaded = false;

  loading = true;
  teamwork: any[] = [];

  constructor(private http: HttpClient) {
    this.getInfo();
    this.getTeamwork();
  }

  // tslint:disable-next-line: typedef
  private getInfo() {
    this.http.get('assets/data/data-page.json')
    .subscribe((resp: InfoPage) => {
      this.loaded = true;
      this.info = resp;
      this.loading = false;
    });
  }

  // tslint:disable-next-line: typedef
  private getTeamwork() {
    this.http.get('https://angular-portfolio-e38b1.firebaseio.com/teamwork.json')
    .subscribe((resp: any[]) => {
      this.teamwork = resp;
    });
  }
}
