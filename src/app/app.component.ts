import {Component, NgModule} from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  max: number;

  checkDate() {
    const t = new Date();
    const m = t.getMonth();
    const d = t.getDay();
    const y = t.getFullYear() - 18;
    const today = new Date(y, m, d).toISOString().slice(0, 10);

    return today;
  }

}


