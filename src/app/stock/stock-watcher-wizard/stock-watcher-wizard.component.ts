import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-stock-watcher-wizard',
  templateUrl: './stock-watcher-wizard.component.html',
  styleUrls: ['./stock-watcher-wizard.component.css']
})
export class StockWatcherWizardComponent implements OnInit {

  // @Input() 
  stocks = [{
    symbol: '700.HK',
    desc: 'QQ',
    last: 400,
    volume: 12121212,
    turnover: 123123123,
    lastupdate: new Date(),
  }, {
    symbol: '700.HK',
    desc: 'QQ',
    last: 400,
    volume: 12121212,
    turnover: 123123123,
    lastupdate: new Date(),
  }];

  objToArray(data) {
    return Object.entries(data).map(([key, value]) => ({ key, value }));
  }

  constructor() { }

  ngOnInit() {
  }

}

