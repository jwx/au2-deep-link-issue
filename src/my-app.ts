import { customElement } from '@aurelia/runtime-html';
import template from './my-app.html';
import { One } from './one';
import { Two } from './two';
import { Three } from './three';

@customElement({
  name: 'my-app',
  template,
  dependencies: [One, Two, Three],
})
export class MyApp { }
