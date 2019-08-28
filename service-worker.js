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
    "revision": "c1fa4a39e90b81552d71d7d180128a3b"
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
    "url": "assets/js/10.5fc1d65d.js",
    "revision": "3742e496db569632386e71820107f9fe"
  },
  {
    "url": "assets/js/11.25faf4a2.js",
    "revision": "e438fbe72378e3114faaaa982631d134"
  },
  {
    "url": "assets/js/12.3ef5d5d5.js",
    "revision": "e19335b91614e396c0360ac6a70e51a9"
  },
  {
    "url": "assets/js/13.9d6cff15.js",
    "revision": "2fb35b9db9a0a07e3cc32ebaed50e8a5"
  },
  {
    "url": "assets/js/3.9b87397e.js",
    "revision": "416ec13afe0c3d9622ba69e1fcbbd02d"
  },
  {
    "url": "assets/js/4.105324d6.js",
    "revision": "67bf3d19305962999e6653d6b80f5f24"
  },
  {
    "url": "assets/js/5.5774db51.js",
    "revision": "99335b8309c10ed36ce1055d31162e56"
  },
  {
    "url": "assets/js/6.55704b39.js",
    "revision": "d205f547c94bcc7ad31dba0b73526092"
  },
  {
    "url": "assets/js/7.8cb1c334.js",
    "revision": "cae60a7068364b9818f55aca4fa87939"
  },
  {
    "url": "assets/js/8.58d9065a.js",
    "revision": "b77691f43cb25bf7130709e9bee6f8ee"
  },
  {
    "url": "assets/js/9.ee219bda.js",
    "revision": "725bcdc37008af30c5e41e788155a379"
  },
  {
    "url": "assets/js/app.d3abe471.js",
    "revision": "f78d0cb12c9c9ff772a19fe981553c31"
  },
  {
    "url": "assets/js/vendors~docsearch.a0858cf5.js",
    "revision": "6541f91f4489a7d1134811f74b408b5c"
  },
  {
    "url": "developpers/index.html",
    "revision": "7adf95e875abfe2a333be1a98cc4a04d"
  },
  {
    "url": "fr/developpers/index.html",
    "revision": "be26b823a1a8f76579d7e088bdffcf2b"
  },
  {
    "url": "fr/guide/index.html",
    "revision": "4d90bb7c9629843e1553ee7a87a55684"
  },
  {
    "url": "fr/index.html",
    "revision": "1959cfcd95765183ecccc3ca8cab3b5b"
  },
  {
    "url": "guide/index.html",
    "revision": "1507ac454f216d1fd0dc866f59770d1f"
  },
  {
    "url": "hero.jpg",
    "revision": "1189aec70f98c07a6684dd0386e9d175"
  },
  {
    "url": "implementers/index.html",
    "revision": "9b6659ef52729bda8b8917316572c88e"
  },
  {
    "url": "index.html",
    "revision": "a85ea5dc59e07c87ab6fb2532697dad2"
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
