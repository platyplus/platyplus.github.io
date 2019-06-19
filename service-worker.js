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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "ee238560e0d61d6139acf32d0d90b63b"
  },
  {
    "url": "assets/css/0.styles.3f3f63db.css",
    "revision": "b2ada2ca65e0b4e2f5c8b473ed3604b6"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.2de45c15.js",
    "revision": "7e16d38e4f691c5e52a639d715efdc1f"
  },
  {
    "url": "assets/js/11.984dfec5.js",
    "revision": "bf3c98e41424722e94ee462928e49ac9"
  },
  {
    "url": "assets/js/12.1ec8026e.js",
    "revision": "0e087652a9d0af5064d03d7844d9d363"
  },
  {
    "url": "assets/js/2.bcce5688.js",
    "revision": "92a272dd05a870ae18441989e8b357d2"
  },
  {
    "url": "assets/js/3.2a450411.js",
    "revision": "ff99b4d68cf3fd77db558d673b56fd90"
  },
  {
    "url": "assets/js/4.35b9c006.js",
    "revision": "5b11bd8c73f05c546723a64ab2b3d55c"
  },
  {
    "url": "assets/js/5.f8d97d2b.js",
    "revision": "10afb1ed32a418587b69e8acbc062d4f"
  },
  {
    "url": "assets/js/6.e4583eca.js",
    "revision": "e125a7b32870a903a276b0d46d9116b6"
  },
  {
    "url": "assets/js/7.35161f28.js",
    "revision": "12c3bea5721c432646dcf5b2ac19f78e"
  },
  {
    "url": "assets/js/8.7b497722.js",
    "revision": "64d00da6049d360ac0c5693b40c31912"
  },
  {
    "url": "assets/js/9.bf585d11.js",
    "revision": "bc3473dd5602a08504f4a42cf5c6f1b2"
  },
  {
    "url": "assets/js/app.21efe46e.js",
    "revision": "9a120ba2ade2f2a65ffbc7274a1492a1"
  },
  {
    "url": "developpers/index.html",
    "revision": "aa925393d588e1e32d33da330f69dcf3"
  },
  {
    "url": "fr/developpers/index.html",
    "revision": "1b5885cfc6a5371ed776cd7c2aef3096"
  },
  {
    "url": "fr/guide/index.html",
    "revision": "7947f461cb576d7806ead90dc61774eb"
  },
  {
    "url": "fr/index.html",
    "revision": "82d3a323d64baed2b76acb9abba0c34e"
  },
  {
    "url": "guide/index.html",
    "revision": "6d8036b1376abce081cff25d533c4c5c"
  },
  {
    "url": "implementers/index.html",
    "revision": "c109c1be59a1c3358a71b7ffc507fd70"
  },
  {
    "url": "index.html",
    "revision": "c16c5531285c5c225bfcb126ed51dbcf"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
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
