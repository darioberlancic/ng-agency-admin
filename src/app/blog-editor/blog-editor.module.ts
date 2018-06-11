import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {BlogEditorRoutingModule} from './blog-editor-routing.module';
import {BlogEditorComponent} from './blog-editor.component';
import {MaterialModule} from '../material/material.module';
import {ReactiveFormsModule} from '@angular/forms';
import {NgxEditorModule} from 'ngx-editor';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    BlogEditorRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    NgxEditorModule,
    HttpClientModule
  ],
  declarations: [BlogEditorComponent]
})
export class BlogEditorModule {
}
