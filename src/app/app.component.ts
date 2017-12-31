import { Component } from '@angular/core';
import { Router } from '@angular/router/src/router';
import { NavigationEnd } from '@angular/router/src/events';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  activeLinkIndex = -1;

}
