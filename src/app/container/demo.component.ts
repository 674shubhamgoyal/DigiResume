import {Component} from '@angular/core';

@Component({
  selector: 'app-demo',
  template: `
    <h1>Hello i am demo component</h1>
    <app-demo-child></app-demo-child>
  `,
  styles: [`

    h1 {
      color: white;
      background: #4c86bd;
    }
  `]
})

export class DemoComponent {

  constructor() {
  }
}
