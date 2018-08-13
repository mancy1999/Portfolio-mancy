import { Component, OnInit } from '@angular/core';
export interface Tile {
    cols: number;
    rows: number;
    name: string;
}

@Component({
    selector: 'stock-layout-component',
    templateUrl: './stock-layout.component.html'
})
export class StocklayoutComponent implements OnInit {

    tiles: Tile[] = [
        { name: 'symbol', cols: 1, rows: 1 },
        { name: 'content', cols: 1, rows: 1, },
        { name: 'news', cols: 1, rows: 1 },
    ];

    constructor() {
    }

    ngOnInit() {

    }
}
