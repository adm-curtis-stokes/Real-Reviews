import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { IndexComponent } from './pages/index-page/index-component.component';
import { RouterModule } from '@angular/router';
import { AppRouteModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(AppRouteModule),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
