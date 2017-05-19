import { Component, OnInit } from '@angular/core';
import { LazyService } from './lazy.service';

@Component({
  template: '<p>Lazy Component</p>'
})
export class LazyComponent implements OnInit {
    constructor(private lazyService: LazyService) { }

    ngOnInit() {
        this.lazyService.getValues().subscribe(d => {
            console.log(d);
        });
    }

}
