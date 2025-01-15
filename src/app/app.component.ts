import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {NavbarComponent} from './navbar/navbar.component';
import {HomeComponent} from './body/home/home.component';
import {NameEditorComponent} from './name-editor/name-editor.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, NameEditorComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'dauphin';
}
