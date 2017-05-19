import { Injectable } from '@angular/core';


@Injectable()
export class TestService {

    constructor() { }

    helloWorld() {
        return 'hello world';
    }
}
