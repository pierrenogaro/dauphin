import { Routes } from '@angular/router';
import {ContactComponent} from './body/contact/contact.component';
import {AboutComponent} from './body/about/about.component';
import {HomeComponent} from './body/home/home.component';
import {NameEditorComponent} from './name-editor/name-editor.component';

export const routes: Routes = [
  { path: 'contact-component', component: ContactComponent },
  { path: 'home-component', component: HomeComponent },
  { path: 'about-component', component: AboutComponent },
  { path: 'name-editor-component', component: NameEditorComponent },
];
