//
// Project home: https://github.com/jaxio/celerio-angular-quickstart
// 
// Source code generated by Celerio, an Open Source code generator by Jaxio.
// Documentation: http://www.jaxio.com/documentation/celerio/
// Source code: https://github.com/jaxio/celerio/
// Follow us on twitter: @jaxiosoft
// This header can be customized in Celerio conf...
// Template pack-angular:web/src/app/entities/entity.ts.e.vm
//

export class App_ {
    // Raw attributes
    id : number;
    category_ : string;
    templatePath : string;


    constructor(json? : any) {
        if (json != null) {
            this.id = json.id;
            this.category_ = json.category_;
            this.templatePath = json.templatePath;
        }
    }

    // Utils

    static toArray(jsons : any[]) : App_[] {
        let app_s : App_[] = [];
        if (jsons != null) {
            for (let json of jsons) {
                app_s.push(new App_(json));
            }
        }
        return app_s;
    }
}
