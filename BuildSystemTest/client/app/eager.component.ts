import { Component } from '@angular/core';
import { TestService } from '../../../CommonFrontEnd/angular/test.service';
import { barChart } from 'dc';

@Component({
    template: `
    <p> Eager Component: {{helloWorld }}</p>
    <div id="test"></div>
    `
})
export class EagerComponent {
    helloWorld: string;
    constructor(private testService: TestService) {
        this.helloWorld = this.testService.helloWorld();
    }

    setupCharts() {
        const chart = barChart('#test');
        chart.width(768);
        chart.height(480);
    }
}
