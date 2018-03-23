import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {AppComponent} from './app.component';
import {MyeventComponent} from './myevent/myevent.component';
import {HomeComponent} from './home/home.component';
import {EventsComponent} from './events/events.component';

import {routing} from './routes';

import {FormsModule } from '@angular/forms';
import { Authentication } from './providers/authentication';

@NgModule({
	declarations: [
		AppComponent,
		MyeventComponent,
		EventsComponent,
		HomeComponent
	],
	imports: [
		BrowserModule,
		HttpClientModule,
		routing,
		FormsModule

	],
	providers: [Authentication],
	bootstrap: [AppComponent]
})
export class AppModule {
}
