import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MultiselectDropdownModule } from 'angular-2-dropdown-multiselect';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CustomFormsModule } from 'ng2-validation';
import { CKEditorModule } from 'ng2-ckeditor';
import { DirectivesModule } from '../../theme/directives/directives.module';
import { ControlsComponent } from './controls/controls.component';
import { FileUploaderComponent } from './controls/file-uploader/file-uploader.component';
import { ImageUploaderComponent } from './controls/image-uploader/image-uploader.component';
import { MultipleImageUploaderComponent } from './controls/multiple-image-uploader/multiple-image-uploader.component';
import { LayoutsComponent } from './layouts/layouts.component';
import { ValidationsComponent } from './validations/validations.component';
import { WizardComponent } from './wizard/wizard.component';
import { EditorComponent } from './editor/editor.component';

import {MatFormFieldModule} from '@angular/material/form-field';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatIconModule} from '@angular/material/icon';

export const routes = [
  { path: '', redirectTo: 'controls', pathMatch: 'full'},
  { path: 'controls', component: ControlsComponent, data: { breadcrumb: 'Form Controls' } },
  { path: 'layouts', component: LayoutsComponent, data: { breadcrumb: 'Layouts' } },
  { path: 'validations', component: ValidationsComponent, data: { breadcrumb: 'Validations' } },
  { path: 'wizard', component: WizardComponent, data: { breadcrumb: 'Wizard' } },
  { path: 'editor', component: EditorComponent, data: { breadcrumb: 'Editor' } }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MultiselectDropdownModule,
    NgbModule,
    CustomFormsModule,
    CKEditorModule,
    DirectivesModule,
    MatFormFieldModule, MatAutocompleteModule, MatCheckboxModule,
    MatDatepickerModule, MatInputModule, MatSelectModule, MatRadioModule,
    MatIconModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    ControlsComponent,
    FileUploaderComponent,
    ImageUploaderComponent,
    MultipleImageUploaderComponent,
    LayoutsComponent,
    ValidationsComponent,
    WizardComponent,
    EditorComponent
  ]
})
export class FormElementsModule { }
