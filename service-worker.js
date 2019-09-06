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
    "revision": "d0ae933ff180bb4500f9ba418f0a9fdb"
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
    "url": "assets/js/app.bfbc33aa.js",
    "revision": "bd9d800985847e065e3310f8074d3768"
  },
  {
    "url": "assets/js/vendors~docsearch.365e4674.js",
    "revision": "72da14cca6c6ff5fe71ff706d1956cf7"
  },
  {
    "url": "developpers/index.html",
    "revision": "9ce0ab148010a8cfc774ae2da584f873"
  },
  {
    "url": "fr/developpers/index.html",
    "revision": "cef81cf876c72b1a3080601990980d6d"
  },
  {
    "url": "fr/guide/index.html",
    "revision": "428eaa7ba643cf0226766f16309e57bf"
  },
  {
    "url": "fr/index.html",
    "revision": "cc829215ff692b48daf8d71f45e65b78"
  },
  {
    "url": "guide/index.html",
    "revision": "ecb30559cea5cfa2d8d1e065d2269aa7"
  },
  {
    "url": "hero.jpg",
    "revision": "1189aec70f98c07a6684dd0386e9d175"
  },
  {
    "url": "implementers/index.html",
    "revision": "5341372ec23f88c16c0556c7d28eda21"
  },
  {
    "url": "index.html",
    "revision": "25fa7d50c1a6dc9b7362af283237fac5"
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
