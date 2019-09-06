/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "79eed3765aecf51394e8b38d17c58ed4"
  },
  {
    "url": "assets/css/0.styles.2c951ea9.css",
    "revision": "ec4e07b368e0ee71def45ebaa2e5a059"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.d00984ba.js",
    "revision": "3a5124dec5b86cfe80cdcd7f8068d6fe"
  },
  {
    "url": "assets/js/11.f8409860.js",
    "revision": "5334f4fd778f58cfafdbb715bf48792b"
  },
  {
    "url": "assets/js/12.cb8a9b04.js",
    "revision": "57af217a88aef815df079c646f050c34"
  },
  {
    "url": "assets/js/13.52658384.js",
    "revision": "842943ce7d4a75f89cc8755250ab28c1"
  },
  {
    "url": "assets/js/3.dfd82053.js",
    "revision": "ea02280f75a28a73e0ab2e088a161219"
  },
  {
    "url": "assets/js/4.d45e0243.js",
    "revision": "8edc9d923757e67ad5cfe6c1932fa999"
  },
  {
    "url": "assets/js/5.5a952e19.js",
    "revision": "2fbbfaf00e4817b8741eba919fd07ecc"
  },
  {
    "url": "assets/js/6.776db2b7.js",
    "revision": "be81082b22a3e25b431f92b228fd3167"
  },
  {
    "url": "assets/js/7.7f849efe.js",
    "revision": "1414b4f267ac96bcb265c529b22ee365"
  },
  {
    "url": "assets/js/8.2d335b9e.js",
    "revision": "3594682e1cbe537d501d6c9aaa9981f6"
  },
  {
    "url": "assets/js/9.c0d340f7.js",
    "revision": "8a275ad76618c193049b8a5839e4f090"
  },
  {
    "url": "assets/js/app.bfbdc241.js",
    "revision": "086590bc3f83627bc90275ee4e060fef"
  },
  {
    "url": "assets/js/vendors~docsearch.7d1d2563.js",
    "revision": "7ae5f9232c0d60b00e2e98c497a32969"
  },
  {
    "url": "developpers/index.html",
    "revision": "e89bf22cfeed28df943131e30a77f7f2"
  },
  {
    "url": "fr/developpers/index.html",
    "revision": "9a731fe66b2175c85ba00bff64979928"
  },
  {
    "url": "fr/guide/index.html",
    "revision": "4e3d33d02fb2a125d0eb6a057f42b2f2"
  },
  {
    "url": "fr/index.html",
    "revision": "d6f1d4b3cd9682fcb7ce8288df666b4f"
  },
  {
    "url": "guide/index.html",
    "revision": "a888b8c2f66d672aee3df02f6d5df016"
  },
  {
    "url": "hero.jpg",
    "revision": "1189aec70f98c07a6684dd0386e9d175"
  },
  {
    "url": "implementers/index.html",
    "revision": "d56604a74496362af87bf658b39a18db"
  },
  {
    "url": "index.html",
    "revision": "2ac60028bb414f7b9011d00a2c536562"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
