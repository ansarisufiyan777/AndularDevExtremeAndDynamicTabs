import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NgProgressModule } from '@ngx-progressbar/core';
import { NgProgressRouterModule } from '@ngx-progressbar/router';
import { NotfoundComponent } from './notfound/notfound.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from './shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PositionDashboardComponent } from './position-dashboard/position-dashboard.component';
import { DxPivotGridModule,
  DxPivotGridComponent,
  DxChartModule,
  DxChartComponent, 
  DxTemplateModule,
  DxPopupModule} from 'devextreme-angular';
import { PositionGridComponent } from './position-grid/position-grid.component';


@NgModule({
  declarations: [
    AppComponent,
    NotfoundComponent,
    PositionDashboardComponent,
    PositionGridComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    AppRoutingModule,
    NgProgressModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgProgressRouterModule,
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production }),
    
    DxPivotGridModule,
    DxChartModule,
    DxTemplateModule,
    DxPopupModule,

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
