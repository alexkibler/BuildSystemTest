import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EagerComponent } from './eager.component';
import { routing } from './app.routing';

import { TestService } from '../../../CommonFrontEnd/angular/test.service';

@NgModule({
    imports: [
        BrowserModule,
        routing
    ],
    declarations: [
        AppComponent,
        EagerComponent
    ],
    providers: [TestService],
    bootstrap: [AppComponent]
})
export class AppModule { }
