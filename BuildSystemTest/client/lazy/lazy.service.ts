import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/map';
@Injectable()
export class LazyService {

    constructor(private http: Http) { }

    getValues() {
        return this.http.get('/api/test').map((response) => response.json());
    }
}
