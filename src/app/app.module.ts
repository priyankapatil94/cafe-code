import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialTableModule } from 'material-table';
import { RoutingModule } from './routing/routing.module';

@NgModule({
 declarations: [
    AppComponent
 ],
 imports: [
    BrowserModule,
    RoutingModule,
    BrowserAnimationsModule,
    MaterialTableModule
 ],
 providers: [],
 bootstrap: [AppComponent]
})
export class AppModule { }
