/* js файлы теперь можем импортировать с других папок - 
import * as flsFunctions from './modules/functions.js' 
вызывать flsFunctions.isWebp() */
'use strict'
// import './files/script.js';
// import './files/regular.js';
// import './files/forms.js';
// import './files/scroll.js';
import * as flsWebP from './modules/functions.js';
flsWebP.isWebp();
import './modules/functions.js';
import './files/script.js';
import './files/dynamic_adapt.js';