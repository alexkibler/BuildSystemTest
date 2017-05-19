import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EagerComponent } from './eager.component';
import { routing } from './app.routing';

import { LibModule } from 'commonfrontend';

@NgModule({
    imports: [
        BrowserModule,
        routing,
        LibModule
    ],
    declarations: [
        AppComponent,
        EagerComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
