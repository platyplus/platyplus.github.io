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
    "revision": "2b77f44b6598736003be13bf12f79b5a"
  },
  {
    "url": "assets/css/0.styles.9b1616df.css",
    "revision": "ec4e07b368e0ee71def45ebaa2e5a059"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.ffbf8541.js",
    "revision": "3742e496db569632386e71820107f9fe"
  },
  {
    "url": "assets/js/11.b8af6c1b.js",
    "revision": "e438fbe72378e3114faaaa982631d134"
  },
  {
    "url": "assets/js/12.ef36da34.js",
    "revision": "e19335b91614e396c0360ac6a70e51a9"
  },
  {
    "url": "assets/js/13.372e3d40.js",
    "revision": "2fb35b9db9a0a07e3cc32ebaed50e8a5"
  },
  {
    "url": "assets/js/3.d8875d9e.js",
    "revision": "a3aec45cc40f908f36cc8ecc152d0936"
  },
  {
    "url": "assets/js/4.959b20b7.js",
    "revision": "67bf3d19305962999e6653d6b80f5f24"
  },
  {
    "url": "assets/js/5.e12ce3e3.js",
    "revision": "99335b8309c10ed36ce1055d31162e56"
  },
  {
    "url": "assets/js/6.3548701e.js",
    "revision": "d205f547c94bcc7ad31dba0b73526092"
  },
  {
    "url": "assets/js/7.95c368e9.js",
    "revision": "cae60a7068364b9818f55aca4fa87939"
  },
  {
    "url": "assets/js/8.51206fc0.js",
    "revision": "b77691f43cb25bf7130709e9bee6f8ee"
  },
  {
    "url": "assets/js/9.90a1319c.js",
    "revision": "725bcdc37008af30c5e41e788155a379"
  },
  {
    "url": "assets/js/app.e9f5dc6c.js",
    "revision": "f7ef6e4a0cf6884bc44535a61483b82a"
  },
  {
    "url": "assets/js/vendors~docsearch.365e4674.js",
    "revision": "72da14cca6c6ff5fe71ff706d1956cf7"
  },
  {
    "url": "developpers/index.html",
    "revision": "0e404f1bc53ce98bda73be9b8b1a27e2"
  },
  {
    "url": "fr/developpers/index.html",
    "revision": "c47a5cf6a2b71cc534f63ace3d62f9b8"
  },
  {
    "url": "fr/guide/index.html",
    "revision": "c101d7f8978da252bb824c0a10afbd43"
  },
  {
    "url": "fr/index.html",
    "revision": "5361af573b054f1d33c596ac790b05dd"
  },
  {
    "url": "guide/index.html",
    "revision": "735afa564be70baf15996c4b19f9615a"
  },
  {
    "url": "hero.jpg",
    "revision": "1189aec70f98c07a6684dd0386e9d175"
  },
  {
    "url": "implementers/index.html",
    "revision": "ef0c35c45acd4d05fe3aa94026a959b3"
  },
  {
    "url": "index.html",
    "revision": "6518ec4075a548f1b8abc2335cce1a55"
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
