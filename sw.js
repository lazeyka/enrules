'use strict';

importScripts('sw-toolbox.js');

toolbox.precache([
	"/",
	"index.html",
	"/img/lala/London-wallpaper-9_2.jpg",
	"css/styles.css"
	]);

toolbox.router.get('/img/*', toolbox.cacheFirst);

toolbox.router.get('/*', toolbox.networkFirst, {
  networkTimeoutSeconds: 5
});
