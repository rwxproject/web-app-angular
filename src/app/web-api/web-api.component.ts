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

  constructor(private webapiService: WebapiService) {
    this.webapiService.getWebapi('user1').subscribe((response: WebApi) => {
      this.host = response.host;
      this.time = response.time;
      this.userId = response.userId;
    });
  }
  onInput(value: string) {
    console.log(value);
    this.user = value;
  }

  onClickMe() {
    console.log(`request fou user: ${this.user}`);
    this.webapiService.getWebapi(this.user).subscribe((response: WebApi) => {
      this.host = response.host;
      this.time = response.time;
      this.userId = response.userId;
    });
  }

  ngOnInit(): void {}
}
