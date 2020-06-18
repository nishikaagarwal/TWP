import { Component, OnInit } from '@angular/core';
import { MbscEventcalendarOptions } from '@mobiscroll/angular';
import { HttpClient } from '@angular/common/http';
export interface Event {
  text: string;
  color: number;
}

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {

  constructor(private http: HttpClient) {}

  events: Event[] = [
    {
      text : 'Task-1.',
      color : 67944,
    }
  ];

  eventSettings: MbscEventcalendarOptions = {
      display: 'inline',
      view: {
          calendar: { type: 'week' },
          eventList: { type: 'day', scrollable: true  }
      }
  };

  ngOnInit() {
      }
  }
