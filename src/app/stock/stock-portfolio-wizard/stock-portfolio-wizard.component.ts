import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stock-portfolio-wizard',
  templateUrl: './stock-portfolio-wizard.component.html',
  styleUrls: ['./stock-portfolio-wizard.component.css']
})
export class StockPortfolioWizardComponent implements OnInit {

  porf = {
    total_marketCap: 30000,
    daily_profit: 1000,
  };

  portfolio_data = [{
    symbol: '1098.HK',
    desc: '露莖',
    marketCap: 58720,
    quan: 4000,
    last: 14.68,
    cost_price: 15.1163,
    profit: -1745.20,
    profit_percent: -0.0289
  }, {
    symbol: '1266.HK',
    desc: '西王特硬',
    marketCap: 36600,
    quan: 20000,
    last: 1.83,
    cost_price: 1.7,
    profit: 2490,
    profit_percent: 7.3
  }];

  constructor() { }

  ngOnInit() {
  }

}
