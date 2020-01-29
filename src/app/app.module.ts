import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HttpClientModule } from '@angular/common/http';
import { ChartsModule } from 'ng2-charts';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChartsComponent } from './components/charts/charts.component'
import { GaugeComponent } from './components/charts/gauge/gauge.component';
import { TextualdataComponent } from './components/charts/textualdata/textualdata.component';
import { PieComponent } from './components/charts/pie/pie.component';
import { LineComponent } from './components/charts/line/line.component';

const appRoutes: Routes = [

/*=============================================
=                Market Pages                 =
=============================================*/

  /* Admin Pages */  
  // {path: 'market/admin', component:  },
  /* End of Admin Pages */

/*==========  End of Market Pages  ==========*/


// { path: '404', component: PagenotfoundComponent},
{ path: '**', redirectTo: '404'}
]

@NgModule({
  declarations: [
    AppComponent,
    ChartsComponent,
    GaugeComponent,
    TextualdataComponent,
    PieComponent,
    LineComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(
      appRoutes,
      // { enableTracing: true } // <-- debugging purposes only
    ),
    HttpClientModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
