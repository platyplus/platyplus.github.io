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
    "revision": "762b1cddd1623e8fef3635fee45255b9"
  },
  {
    "url": "assets/css/0.styles.4b189ea6.css",
    "revision": "ec4e07b368e0ee71def45ebaa2e5a059"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.37ff57d1.js",
    "revision": "e38e13440abc030e1364f13679e66d94"
  },
  {
    "url": "assets/js/11.d2d63bf4.js",
    "revision": "3d9e08e5b4ed0c1c15a2300f06ab13bd"
  },
  {
    "url": "assets/js/12.b4a25540.js",
    "revision": "958677794e4adbb35b40e558c300d4db"
  },
  {
    "url": "assets/js/13.57060928.js",
    "revision": "8cd87023ad237d73c00f70103030a3b3"
  },
  {
    "url": "assets/js/14.542d9903.js",
    "revision": "832d8e28d2e6897358c40a95cd506841"
  },
  {
    "url": "assets/js/15.75240c6d.js",
    "revision": "bfb742795e828fcd537fbacde1162013"
  },
  {
    "url": "assets/js/16.a61ce536.js",
    "revision": "566f06724c886ac056831f2d6ae68085"
  },
  {
    "url": "assets/js/3.6ce33c1e.js",
    "revision": "4c7058a9e55a6703e32dff5e1576b86f"
  },
  {
    "url": "assets/js/4.11afba38.js",
    "revision": "ac80dc1fb34523fcbefda8da6e828a06"
  },
  {
    "url": "assets/js/5.b9f835c3.js",
    "revision": "6a236683d26e1b7738e254e36f7cb02e"
  },
  {
    "url": "assets/js/6.6515a4de.js",
    "revision": "6bebb11b87b5834178a196604c70ca4c"
  },
  {
    "url": "assets/js/7.262b1d03.js",
    "revision": "bdfdc94cf355c09b942ddd0032aaf3c6"
  },
  {
    "url": "assets/js/8.c9618100.js",
    "revision": "009d0f1f3e80a3bc35a1965b2ba8979b"
  },
  {
    "url": "assets/js/9.6a427941.js",
    "revision": "023af4b7a14c419e1aa41a1e90af9038"
  },
  {
    "url": "assets/js/app.bf72bf3a.js",
    "revision": "ec6e9f327fbb4c4776cf94f8adf01651"
  },
  {
    "url": "assets/js/vendors~docsearch.ecde484d.js",
    "revision": "0ad8a9200673b180b2f85d513a9959d6"
  },
  {
    "url": "dev/index.html",
    "revision": "ae1513511c290ec7bc3dd83ec25a2240"
  },
  {
    "url": "dev/installation.html",
    "revision": "c59f88d72534d171d6de734d760025a3"
  },
  {
    "url": "dev/schema.html",
    "revision": "064e04782cc2de7e38e17960b14b2838"
  },
  {
    "url": "dev/store.html",
    "revision": "bffaf2516fcdc4d47aa57157f3e3eb44"
  },
  {
    "url": "fr/dev/index.html",
    "revision": "6487b317dd65120e3e8e2f3d5bc12ff2"
  },
  {
    "url": "fr/guide/index.html",
    "revision": "30adfa82ebdab4b83307396d0f187754"
  },
  {
    "url": "fr/index.html",
    "revision": "342c09001692f3d49130e6393f300b52"
  },
  {
    "url": "guide/index.html",
    "revision": "d67a7e785d477b32878e7fac1804b157"
  },
  {
    "url": "hero.jpg",
    "revision": "1189aec70f98c07a6684dd0386e9d175"
  },
  {
    "url": "index.html",
    "revision": "8abcc17cb21181e5b4bfaf8dfb66ffd8"
  },
  {
    "url": "installation/index.html",
    "revision": "cca0a9366ea6578d8a24b4611345b7a4"
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
