//
// Project home: https://github.com/jaxio/celerio-angular-quickstart
// 
// Source code generated by Celerio, an Open Source code generator by Jaxio.
// Documentation: http://www.jaxio.com/documentation/celerio/
// Source code: https://github.com/jaxio/celerio/
// Follow us on twitter: @jaxiosoft
// This header can be customized in Celerio conf...
// Template pack-angular:web/src/app/entities/entity-line.component.ts.e.vm
//
import {Component, Input} from '@angular/core';
import {App_} from './app_';

@Component({
	template: `
        {{ app_?.category_ }} {{ app_?.templatePath }} 	`,
	selector: 'app_-line',
})
export class App_LineComponent {
    @Input() app_ : App_;
}
