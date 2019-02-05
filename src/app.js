import {
    first,
    second
} from './coomon'

import log from './coomon';


const arr = [1, 2, 3];
const iAmJavascriptES6 = () => console.log(...arr);
iAmJavascriptES6();
console.log(first());
console.log(second('Adam'));
log('message', 12, 'other');