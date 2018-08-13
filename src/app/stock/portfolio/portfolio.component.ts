import { Component, OnInit } from '@angular/core';
import { YahooService } from '../service/yahoo.service';
import { IYahooQuoteModel } from '../model/yahoo.quote.model';

@Component({
    selector: 'portfolio-component',
    templateUrl: './portfolio.component.html',
    styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
    yahooData: IYahooQuoteModel[] = [];
    constructor(private yahooService: YahooService) {

    }

    ngOnInit() {
        // for test
        this.getQuote();
    }

    getQuote() {
        this.yahooService.quote('0001.HK').subscribe((x: any) => {
            if (x.quoteResponse.error == null) {
                console.log('error');
            } else {
                console.log(x.quoteResponse.result);
                this.yahooData = x.quoteResponse.result;
            }
        });
    }
}
