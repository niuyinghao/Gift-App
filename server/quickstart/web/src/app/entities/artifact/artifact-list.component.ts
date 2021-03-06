//
// Project home: https://github.com/jaxio/celerio-angular-quickstart
//
// Source code generated by Celerio, an Open Source code generator by Jaxio.
// Documentation: http://www.jaxio.com/documentation/celerio/
// Source code: https://github.com/jaxio/celerio/
// Follow us on twitter: @jaxiosoft
// This header can be customized in Celerio conf...
// Template pack-angular:web/src/app/entities/entity-list.component.ts.e.vm
//
import {Component, EventEmitter, Input, Output, SimpleChanges} from '@angular/core';
import {Router} from '@angular/router';
import {DataTable, LazyLoadEvent} from 'primeng/primeng';
import {PageResponse} from "../../support/paging";
import {MessageService} from '../../service/message.service';
import {MatDialog} from '@angular/material';
import {ConfirmDeleteDialogComponent} from "../../support/confirm-delete-dialog.component";
import {Artifact} from './artifact';
import {ArtifactService} from './artifact.service';
import {Config_} from '../config_/config_';
import {User_} from '../user_/user_';
import {App_} from '../app_/app_';

@Component({
    moduleId: module.id,
	templateUrl: 'artifact-list.component.html',
	selector: 'artifact-list'
})
export class ArtifactListComponent {

    @Input() header = "Artifacts...";

    // When 'sub' is true, it means this list is used as a one-to-many list.
    // It belongs to a parent entity, as a result the addNew operation
    // must prefill the parent entity. The prefill is not done here, instead we
    // emit an event.
    // When 'sub' is false, we display basic search criterias
    @Input() sub : boolean;
    @Output() onAddNewClicked = new EventEmitter();

    artifactToDelete : Artifact;

    // basic search criterias (visible if not in 'sub' mode)
    example : Artifact = new Artifact();

    // list is paginated
    currentPage : PageResponse<Artifact> = new PageResponse<Artifact>(0,0,[]);

    // X to one: input param is used to filter the list when displayed
    // as a one-to-many list by the other side.
    private _config : Config_;
    private _user : User_;
    private _app : App_;

    constructor(private router : Router,
        private artifactService : ArtifactService,
        private messageService : MessageService,
        private confirmDeleteDialog: MatDialog) {
    }

    /**
     * When used as a 'sub' component (to display one-to-many list), refreshes the table
     * content when the input changes.
     */
    ngOnChanges(changes: SimpleChanges) {
        this.loadPage({ first: 0, rows: 10, sortField: null, sortOrder: null, filters: null, multiSortMeta: null });
    }

    /**
     * Invoked when user presses the search button.
     */
    search(dt : DataTable) {
        if (!this.sub) {
            dt.reset();
            this.loadPage({ first: 0, rows: dt.rows, sortField: dt.sortField, sortOrder: dt.sortOrder, filters: null, multiSortMeta: dt.multiSortMeta });
        }
    }

    /**
     * Invoked automatically by primeng datatable.
     */
    loadPage(event : LazyLoadEvent) {
        this.artifactService.getPage(this.example, event).
            subscribe(
                pageResponse => this.currentPage = pageResponse,
                error => this.messageService.error('Could not get the results', error)
            );
    }

    // X to one: input param is used to filter the list when displayed
    // as a one-to-many list by the other side.
    @Input()
    set config(config : Config_) {
        if (config == null) {
            return;
        }
        this._config = config;

        this.example = new Artifact();
        this.example.config = new Config_();
        this.example.config.id = this._config.id;
    }

    @Input()
    set user(user : User_) {
        if (user == null) {
            return;
        }
        this._user = user;

        this.example = new Artifact();
        this.example.user = new User_();
        this.example.user.id = this._user.id;
    }

    @Input()
    set app(app : App_) {
        if (app == null) {
            return;
        }
        this._app = app;

        this.example = new Artifact();
        this.example.app = new App_();
        this.example.app.id = this._app.id;
    }


    onRowSelect(event : any) {
        let id =  event.data.id;
        this.router.navigate(['/artifact', id]);
    }

    addNew() {
        if (this.sub) {
            this.onAddNewClicked.emit("addNew");
        } else {
            this.router.navigate(['/artifact', 'new']);
        }
    }

    showDeleteDialog(rowData : any) {
        let artifactToDelete : Artifact = <Artifact> rowData;

        let dialogRef = this.confirmDeleteDialog.open(ConfirmDeleteDialogComponent);
        dialogRef.afterClosed().subscribe(result => {
            if (result === 'delete') {
                this.delete(artifactToDelete);
            }
        });
    }

    private delete(artifactToDelete : Artifact) {
        let id =  artifactToDelete.id;

        this.artifactService.delete(id).
            subscribe(
                response => {
                    this.currentPage.remove(artifactToDelete);
                    this.messageService.info('Deleted OK', 'Angular Rocks!');
                },
                error => this.messageService.error('Could not delete!', error)
            );
    }
}