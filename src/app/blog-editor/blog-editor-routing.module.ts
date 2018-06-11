import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BlogEditorComponent} from './blog-editor.component';

const routes: Routes = [
  {path: '', component: BlogEditorComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogEditorRoutingModule { }
