import { Component, OnInit } from '@angular/core';
import { WebapiService } from '../webapi.service';

type WebApi = {
  host: string;
  time: string;
  userId: string;
};

@Component({
  selector: 'app-web-api',
  templateUrl: './web-api.component.html',
  styleUrls: ['./web-api.component.css'],
})
export class WebApiComponent implements OnInit {
  host = '';
  time = '';
  userId = '';
  user = '';
  commonHost = '';
  commonTime = '';

  constructor(private webapiService: WebapiService) {
    this.fetchApi(this.user);
  }

  getApi() {
    this.fetchApi(this.user);
  }

  getApiCommon() {
    console.log(`request common service`);
    this.webapiService.getCommonWebapi().subscribe((response: WebApi) => {
      this.commonHost = response.host;
      this.commonTime = response.time;
    });
  }

  fetchApi(user: string) {
    console.log(`request for user: ${user}`);
    this.webapiService.getWebapi(user).subscribe((response: WebApi) => {
      this.host = response.host;
      this.time = response.time;
      this.userId = response.userId;
    });
  }

  onInput(value: string) {
    console.log(value);
    this.user = value;
  }

  ngOnInit(): void {
    this.user = 'user1';
  }
}
