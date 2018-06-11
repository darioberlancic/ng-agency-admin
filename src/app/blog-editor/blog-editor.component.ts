import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import * as NGX_CONFIG from './ngx-editor.config.json';

interface Post {
  id: string;
  title: string;
  author: string;
  snippet: string;
  body: string;
}

interface PostEdit {
  title: string;
  snippet: string;
  body: string;
}

@Component({
  selector: 'app-blog-editor',
  template: `
    <mat-card>
      <form [formGroup]="model" (ngSubmit)="onSubmit(model)" novalidate>
        <mat-form-field>
          <input matInput type="text" placeholder="Post title" formControlName="title">
        </mat-form-field>
        <mat-form-field>
          <textarea matInput placeholder="Snippet" formControlName="snippet"></textarea>
        </mat-form-field>
        <p>Write post</p>
        <app-ngx-editor [config]="editorConfig" formControlName="body"></app-ngx-editor>
        <button type="submit" mat-raised-button>Submit</button>
        {{model.value | json}}
      </form>
    </mat-card>
  `,
  styles: [`
    mat-card {
      margin: .66rem;
    }
    
    form > * {
      width: 100%;
    }
  `]
})
export class BlogEditorComponent implements OnInit {
  model: FormGroup;
  editorConfig: any;

  constructor(private fb: FormBuilder) {
    this.editorConfig = NGX_CONFIG;
  }

  ngOnInit() {
    this.model = this.fb.group({
      title: ['', Validators.required],
      snippet: ['', Validators.required],
      body: ['', Validators.required]
    });
  }

  onSubmit({value, valid}: {value: PostEdit, valid: boolean}) {
    if (valid) {
      let postEdit: PostEdit = Object.assign({}, value);
      console.log(postEdit);
      let post: Post = Object.assign(postEdit, this.modelPrivateProps());
      console.log(post);
    } else {
      console.log('form is invalid');
    }
  }

  modelPrivateProps() {
    return {
      id: 'XXX',
      author: 'Dario'
    }
  }

}
