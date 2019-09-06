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
    "revision": "82522d4ad15912a51cf289b3ac013784"
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
    "url": "assets/js/10.f3a4ff70.js",
    "revision": "d8a0b304c80139b06a3dfa556a8a77a4"
  },
  {
    "url": "assets/js/11.fe1dce02.js",
    "revision": "89650c97e3d78d1f567297ff55783d87"
  },
  {
    "url": "assets/js/12.f9eb971f.js",
    "revision": "a6bc28162a3a51a8db839be08be6b5bf"
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
    "url": "assets/js/8.7ee9b8b1.js",
    "revision": "6673075bd6ec30b45e94a3bbdc63dcac"
  },
  {
    "url": "assets/js/9.44fe2eae.js",
    "revision": "89550c265eaf5ca6d85ab32df79f48c8"
  },
  {
    "url": "assets/js/app.1e8e4906.js",
    "revision": "096e262489cfe12ee1514946a91b247c"
  },
  {
    "url": "assets/js/vendors~docsearch.365e4674.js",
    "revision": "72da14cca6c6ff5fe71ff706d1956cf7"
  },
  {
    "url": "developpers/index.html",
    "revision": "17454f0b2f24ce78a07afd7b8f87cff1"
  },
  {
    "url": "fr/developpers/index.html",
    "revision": "407577ff707fc63be9d2db2cfcbd19f1"
  },
  {
    "url": "fr/guide/index.html",
    "revision": "0f3b74039ceab065e2970f3710ea6ee6"
  },
  {
    "url": "fr/index.html",
    "revision": "3407fe4f033a56f210e47415b0674312"
  },
  {
    "url": "guide/index.html",
    "revision": "767685ad288e4e1a1ac5a04a84d29751"
  },
  {
    "url": "hero.jpg",
    "revision": "1189aec70f98c07a6684dd0386e9d175"
  },
  {
    "url": "implementers/index.html",
    "revision": "1e6679199f3b105da486468239d07959"
  },
  {
    "url": "index.html",
    "revision": "d2d0dd3021a3363891cb45ee9ccc1ea7"
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
