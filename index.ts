// Import stylesheets
import './style.css';
import Aurelia from 'aurelia';
import { MyApp } from './src/my-app';
import { RouterConfiguration } from '@aurelia/router';

new Aurelia()
  .register(RouterConfiguration)
  .app({ host: document.querySelector('my-app'), component: MyApp })
  .start();
