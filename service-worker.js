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
    "revision": "531564911da8cc65768472b5a365375d"
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
    "url": "assets/js/10.962658ef.js",
    "revision": "132302088137172d5339cceee65ae7fd"
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
    "url": "assets/js/app.182d53c4.js",
    "revision": "ae394ef09764cbd0b5af51ab95df81b3"
  },
  {
    "url": "assets/js/vendors~docsearch.ecde484d.js",
    "revision": "0ad8a9200673b180b2f85d513a9959d6"
  },
  {
    "url": "dev/index.html",
    "revision": "32028e35d64a10baecff99545dd8caad"
  },
  {
    "url": "dev/installation.html",
    "revision": "40b3a9e99f8084de29b9f11ec6f13f29"
  },
  {
    "url": "dev/schema.html",
    "revision": "e39616b3c4cf2d0e89512138eabf0960"
  },
  {
    "url": "dev/store.html",
    "revision": "076082a6f2aba2988dcae3e1e1e4613a"
  },
  {
    "url": "fr/dev/index.html",
    "revision": "17e103c7db9005753f98d74aa3932520"
  },
  {
    "url": "fr/guide/index.html",
    "revision": "c2d338fd142a2aa222d08e2e21fd919c"
  },
  {
    "url": "fr/index.html",
    "revision": "758ef08c241343d8d27e2570a7fff703"
  },
  {
    "url": "guide/index.html",
    "revision": "f0dccaf8fa30e299272f8bf5d9479276"
  },
  {
    "url": "hero.jpg",
    "revision": "1189aec70f98c07a6684dd0386e9d175"
  },
  {
    "url": "index.html",
    "revision": "f7db14db9f70b714974ed8a4105a824c"
  },
  {
    "url": "installation/index.html",
    "revision": "95287b9b56effe15cff5b6d24fdeaeb8"
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
