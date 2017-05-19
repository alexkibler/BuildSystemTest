import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { LazyComponent } from './lazy.component';
import { LazyService } from './lazy.service';
import { routing } from './lazy.routing';

@NgModule({
  imports: [
            HttpModule,
            routing
            ],
  declarations: [LazyComponent],
  providers: [LazyService]
})
export class LazyModule { }
