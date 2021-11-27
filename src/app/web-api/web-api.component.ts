import { NodeWithI18n } from '@angular/compiler';
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

  constructor(private webapiService: WebapiService) {
    this.webapiService.getWebapi().subscribe((response: WebApi) => {
      this.host = response.host;
      this.time = response.time;
      this.userId = response.userId;
    });
  }

  ngOnInit(): void {}
}
