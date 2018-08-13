import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';


@Injectable()
export class YahooService {

    // https://query1.finance.yahoo.com/v7/finance/quote?symbols=0001.hk&lang=zh-hk
    lang = 'zh-hk';
    url_prefix = 'https://query1.finance.yahoo.com/v7/finance/quote?symbols=';
    url_postfix = `&lang=${this.lang}`;

    constructor(private httpClient: HttpClient) {

    }

    quote(symbols: string) {
        return this.httpClient.get(`${this.url_prefix}${symbols}${this.url_postfix}`);
    }

}

