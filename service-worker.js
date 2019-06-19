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
    "revision": "56ce9310dbb69c4bbcab2329162c1e83"
  },
  {
    "url": "assets/css/0.styles.8c1f8ae4.css",
    "revision": "a02a939174f36a55d391464fd198d092"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.287b0d4e.js",
    "revision": "450d05a6b90847538de1d1d2231610a5"
  },
  {
    "url": "assets/js/11.df0e54a7.js",
    "revision": "ffc22b3f1960114f971b92e4237cf537"
  },
  {
    "url": "assets/js/12.2dab332a.js",
    "revision": "400a3bc318c5a8c37849447831b5410e"
  },
  {
    "url": "assets/js/2.721a7059.js",
    "revision": "96e8413e936859057f79dc214e6d33ec"
  },
  {
    "url": "assets/js/3.928e5cc7.js",
    "revision": "49fb87545b7d76f4d48b0e116c133b0d"
  },
  {
    "url": "assets/js/4.fe9e0ede.js",
    "revision": "53a515715bdbb6b75ea399ee7eebf19d"
  },
  {
    "url": "assets/js/5.2d0fd2f5.js",
    "revision": "d5b941c6a71e1734157e618a8e331d57"
  },
  {
    "url": "assets/js/6.c154f0df.js",
    "revision": "109c584e8b2e0005ec6e0133e050e500"
  },
  {
    "url": "assets/js/7.f52f598e.js",
    "revision": "00f39e46569b6022c2e013e2daef7bda"
  },
  {
    "url": "assets/js/8.5837762e.js",
    "revision": "d56d3148657865e675ded258e922f5b7"
  },
  {
    "url": "assets/js/9.71c289d0.js",
    "revision": "2bfeaa69a8ee4538abe5eedcc708d820"
  },
  {
    "url": "assets/js/app.4e053876.js",
    "revision": "be418c3c7610a68f0d3d13a3c3c929f5"
  },
  {
    "url": "developpers/index.html",
    "revision": "fdf4c34c9c26fd5ac15ff8e342bb30e8"
  },
  {
    "url": "fr/developpers/index.html",
    "revision": "b93eba65f3ba429330e23d122fddbdbb"
  },
  {
    "url": "fr/guide/index.html",
    "revision": "e795948847bf683268c6f0b93e6bc2d3"
  },
  {
    "url": "fr/index.html",
    "revision": "c770283e4455ea9d3b0ab1c218ca603e"
  },
  {
    "url": "guide/index.html",
    "revision": "361282388f92fae92d66a12d53684d1b"
  },
  {
    "url": "implementers/index.html",
    "revision": "8522467a56f7b4c8160753c53cd8ff4f"
  },
  {
    "url": "index.html",
    "revision": "793967aee9fbbb018a0bfc764f843ecf"
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
