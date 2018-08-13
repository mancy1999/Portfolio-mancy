export interface IYahooQuoteModel {
    language: string;
    region: string;
    quoteType: string;
    currency: string;
    sharesOutstanding: number;
    priceHint: number;
    fiftyTwoWeekLowChange: number;
    fiftyTwoWeekLowChangePercent: number;
    fiftyTwoWeekRange: string;
    fiftyTwoWeekHighChange: number;
    fiftyTwoWeekHighChangePercent: number;
    bookValue: number;
    fiftyDayAverage: number;
    fiftyDayAverageChange: number;
    fiftyDayAverageChangePercent: number;
    shortName: string;
    epsTrailingTwelveMonths: number;
    epsForward: number;
    market: string;
    twoHundredDayAverage: number;
    twoHundredDayAverageChange: number;
    twoHundredDayAverageChangePercent: number;
    marketCap: number;
    fullExchangeName: string;
    longName: string;
    financialCurrency: string;
    averageDailyVolume3Month: number;
    averageDailyVolume10Day: number;
    earningsTimestampEnd: number;
    trailingAnnualDividendRate: number;
    trailingPE: number;
    trailingAnnualDividendYield: number;
    forwardPE: number;
    priceToBook: number;
    sourceInterval: number;
    exchangeTimezoneName: string;
    exchangeTimezoneShortName: string;
    gmtOffSetMilliseconds: number;
    regularMarketDayHigh: number;
    regularMarketPreviousClose: number;
    bid: number;
    ask: number;
    bidSize: number;
    askSize: number;
    messageBoardId: string;
    marketState: string;
    fiftyTwoWeekLow: number;
    fiftyTwoWeekHigh: number;
    earningsTimestamp: number;
    earningsTimestampStart: number;
    regularMarketChangePercent: number;
    regularMarketDayRange: string;
    regularMarketDayLow: number;
    esgPopulated: boolean;
    tradeable: boolean;
    exchangeDataDelayedBy: number;
    exchange: string;
    regularMarketPrice: number;
    regularMarketTime: number;
    regularMarketChange: number;
    regularMarketOpen: number;
    regularMarketVolume: number;
    symbol: string;
}

