//
// Project home: https://github.com/jaxio/celerio-angular-quickstart
//
// Source code generated by Celerio, an Open Source code generator by Jaxio.
// Documentation: http://www.jaxio.com/documentation/celerio/
// Source code: https://github.com/jaxio/celerio/
// Follow us on twitter: @jaxiosoft
// This header can be customized in Celerio conf...
// Template pack-angular:web/src/app/app.module.ts.p.vm
//
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatDialogModule,
    MatDividerModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatMenuModule,
    MatSidenavModule,
    MatStepperModule,
    MatTabsModule
} from '@angular/material';
import {
    AutoCompleteModule,
    ButtonModule,
    CalendarModule,
    CheckboxModule,
    ConfirmationService,
    ConfirmDialogModule,
    DataGridModule,
    DataListModule,
    DataTableModule,
    DialogModule,
    DropdownModule,
    FileUploadModule,
    GrowlModule,
    InputTextareaModule,
    InputTextModule,
    MenubarModule,
    PanelModule,
    PasswordModule,
    PickListModule,
    SharedModule,
    TabViewModule,
    TriStateCheckboxModule,
} from 'primeng/primeng';
import {AppComponent} from './app.component';
import {HomeComponent} from './home.component';
import {AuthService} from './service/auth.service';
import {MessageService} from './service/message.service';
import {routing} from './app.routes';
import {EmailValidator} from './support/email.validator';
import {ConfirmDeleteDialogComponent} from './support/confirm-delete-dialog.component';
// Passport ...
import {PassportService} from './entities/passport/passport.service';
import {PassportListComponent} from './entities/passport/passport-list.component';
import {PassportDetailComponent} from './entities/passport/passport-detail.component';
import {PassportLineComponent} from './entities/passport/passport-line.component';
import {PassportCompleteComponent} from './entities/passport/passport-auto-complete.component';
// Role ...
import {RoleService} from './entities/role/role.service';
import {RoleListComponent} from './entities/role/role-list.component';
import {RoleDetailComponent} from './entities/role/role-detail.component';
import {RoleLineComponent} from './entities/role/role-line.component';
import {RoleCompleteComponent} from './entities/role/role-auto-complete.component';
// User_ ...
import {User_Service} from './entities/user_/user_.service';
import {User_ListComponent} from './entities/user_/user_-list.component';
import {User_DetailComponent} from './entities/user_/user_-detail.component';
import {User_LineComponent} from './entities/user_/user_-line.component';
import {User_CompleteComponent} from './entities/user_/user_-auto-complete.component';
import {BenchComponent} from './entities/bench/bench.component';
import {App_Service} from "./entities/app_/app_.service";
import {App_DetailComponent} from "./entities/app_/app_-detail.component";
import {AppWidgetListComponent} from "./entities/appWidget/appWidget-list.component";
import {AppWidgetDetailComponent} from "./entities/appWidget/appWidget-detail.component";
import {App_CompleteComponent} from "./entities/app_/app_-auto-complete.component";
import {App_LineComponent} from "./entities/app_/app_-line.component";
import {App_ListComponent} from "./entities/app_/app_-list.component";
import {AppWidgetLineComponent} from "./entities/appWidget/appWidget-line.component";
import {AppWidgetCompleteComponent} from "./entities/appWidget/appWidget-auto-complete.component";
import {AppWidgetService} from "./entities/appWidget/appWidget.service";
import {WidgetConfigComponent} from "./entities/appWidget/widget-config.component";
import {ToJsonPipe} from './support/to-json.pipe';
import {WidgetChooserComponent} from './entities/widgetChooser/widget-chooser/widget-chooser.component';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        EmailValidator,
        ConfirmDeleteDialogComponent
        ,
        PassportListComponent,
        PassportDetailComponent,
        PassportLineComponent,
        PassportCompleteComponent
        ,
        RoleListComponent,
        RoleDetailComponent,
        RoleLineComponent,
        RoleCompleteComponent
        ,
        User_ListComponent,
        User_DetailComponent,
        User_LineComponent,
        User_CompleteComponent,
        BenchComponent,
        App_CompleteComponent,
        App_LineComponent,
        App_DetailComponent,
        App_ListComponent,
        AppWidgetListComponent,
        AppWidgetDetailComponent,
        AppWidgetLineComponent,
        AppWidgetCompleteComponent,
        WidgetConfigComponent,
        ToJsonPipe,
        WidgetChooserComponent,
    ],
    imports: [
// angular
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        HttpModule,
        ReactiveFormsModule,

// angular material,
        MatCardModule,
        MatIconModule,
        MatTabsModule,
        MatDialogModule,
        MatDividerModule,
        MatIconModule,
        MatInputModule,
        MatMenuModule,
        MatStepperModule,
        MatSidenavModule,
        MatGridListModule,
        MatCheckboxModule,
        MatButtonModule,
// primeng
        ConfirmDialogModule,
        FileUploadModule,
        PanelModule,
        GrowlModule,
        MenubarModule,
        DialogModule,
        ButtonModule,
        AutoCompleteModule,
        DataTableModule,
        SharedModule,
        DropdownModule,
        PickListModule,
        CheckboxModule,
        TriStateCheckboxModule,
        InputTextModule,
        InputTextareaModule,
        CalendarModule,
        PasswordModule,
        TabViewModule,
        DataGridModule,
        DataListModule,

// our application routes
        routing
    ],
    providers: [
// our application entity services
        PassportService,
        RoleService,
        User_Service,
        App_Service,

// our application services
        AuthService,
        MessageService,
        AppWidgetService,

// primeng service
        ConfirmationService
    ],
    entryComponents: [ConfirmDeleteDialogComponent],
    bootstrap: [AppComponent]
})
export class AppModule {
}
