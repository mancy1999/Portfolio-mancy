import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';

import {
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatStepperModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
} from '@angular/material';
import { DashboardComponent } from './stock/dashboard/dashboard.component';
import { PortfolioComponent } from './stock/portfolio/portfolio.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { StockWatcherWizardComponent } from 'src/app/stock/stock-watcher-wizard/stock-watcher-wizard.component';
import { ChartModule } from 'angular2-highcharts';
import { HttpClientModule } from '@angular/common/http';
import { YahooService } from './stock/service/yahoo.service';
import { StockPortfolioWizardComponent } from './stock/stock-portfolio-wizard/stock-portfolio-wizard.component';

const materialModules =
    [MatAutocompleteModule,
        MatButtonModule,
        MatButtonToggleModule,
        MatCardModule,
        MatCheckboxModule,
        MatChipsModule,
        MatDatepickerModule,
        MatDialogModule,
        MatDividerModule,
        MatExpansionModule,
        MatGridListModule,
        MatIconModule,
        MatInputModule,
        MatListModule,
        MatMenuModule,
        MatNativeDateModule,
        MatPaginatorModule,
        MatProgressBarModule,
        MatProgressSpinnerModule,
        MatRadioModule,
        MatRippleModule,
        MatSelectModule,
        MatSidenavModule,
        MatSliderModule,
        MatSlideToggleModule,
        MatSnackBarModule,
        MatSortModule,
        MatStepperModule,
        MatTableModule,
        MatTabsModule,
        MatToolbarModule,
        MatTooltipModule
    ];

const components = [
    LayoutComponent,
    DashboardComponent,
    PortfolioComponent,
    StockWatcherWizardComponent,
    StockPortfolioWizardComponent,
];

const appRoutes: Routes = [
    { path: 'dashboard', component: DashboardComponent },
    { path: 'portfolio', component: PortfolioComponent },
];

@NgModule({
    declarations: [
        components,
        AppComponent,
    ],
    imports: [
        // ChartModule.forRoot(require('highcharts/highstock')),
        HttpClientModule,
        FlexLayoutModule,
        RouterModule.forRoot(appRoutes),
        materialModules,
        BrowserAnimationsModule,
        BrowserModule
    ],
    providers: [
        YahooService,
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule { }

