import { Component } from '@angular/core';
import * as d3 from 'd3';
import { LibService } from 'commonfrontend';

@Component({
    template: `<style>

.chart div {
  font: 10px sans-serif;
  background-color: steelblue;
  text-align: right;
  padding: 3px;
  margin: 1px;
  color: white;
}

</style>
    <my-lib></my-lib>
    <p> Eager Component: {{helloWorld }}</p>
<div class="chart"></div>
    `
})
export class EagerComponent {
    public helloWorld: string;
    meaning: number;
    constructor(libService: LibService) {
        this.setupCharts();
        this.meaning = libService.getMeaning();
    }

    setupCharts() {

        var data = [4, 8, 15, 16, 23, 42];
        var x = d3.scale.linear()
            .domain([0, d3.max(data)])
            .range([0, 420]);

        var chart = d3.select(".chart")
            .selectAll("div")
            .data(data)
            .enter().append("div")
            .style("width", function (d) { return x(d) + "px"; })
            .text(function (d) { return d; });
    }
}
