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
    "revision": "fbf7f250a89a2dc42ebfd8ef0877f775"
  },
  {
    "url": "assets/css/0.styles.471514ee.css",
    "revision": "ec4e07b368e0ee71def45ebaa2e5a059"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.75d51573.js",
    "revision": "bf6b2d8e7fe90227c7983740f3846610"
  },
  {
    "url": "assets/js/11.bd3a53ed.js",
    "revision": "b762a2e16343c2edd49108ddfef2664b"
  },
  {
    "url": "assets/js/12.dfbbe8c8.js",
    "revision": "2e71b9aaf394d598f81e055aba28361e"
  },
  {
    "url": "assets/js/13.52658384.js",
    "revision": "842943ce7d4a75f89cc8755250ab28c1"
  },
  {
    "url": "assets/js/3.33e4fcf2.js",
    "revision": "323c5a10416e7662a9b40c4c2f2739c6"
  },
  {
    "url": "assets/js/4.cb987ff6.js",
    "revision": "68c7992ec792e2fc047fb93e66df3869"
  },
  {
    "url": "assets/js/5.509d06a8.js",
    "revision": "6b8f18f42606e2afd8a369bcda353316"
  },
  {
    "url": "assets/js/6.35b89fea.js",
    "revision": "4cb541ca138ab1637ae30f8de7f931dc"
  },
  {
    "url": "assets/js/7.9d0192c5.js",
    "revision": "d2005c4ae0153454e34dfedd06861880"
  },
  {
    "url": "assets/js/8.10cb4370.js",
    "revision": "5dfac62e01d4aca7fa2ee2012bfca5d6"
  },
  {
    "url": "assets/js/9.8f291883.js",
    "revision": "d1382361ce5692f13e9b17beb665b851"
  },
  {
    "url": "assets/js/app.d1f2898c.js",
    "revision": "4e172dde2b8eb4ea3c8ac8dedc851601"
  },
  {
    "url": "assets/js/vendors~docsearch.cf35b7a4.js",
    "revision": "873e4ba38f60a3ba1ea4c6f88546d82b"
  },
  {
    "url": "developpers/index.html",
    "revision": "63e76a82ce1c849c7dd80580e8896ff5"
  },
  {
    "url": "fr/developpers/index.html",
    "revision": "a4deea37b2f220aa563323c0561ad730"
  },
  {
    "url": "fr/guide/index.html",
    "revision": "7599b7846dec0fb385fa6d7ecae97ad2"
  },
  {
    "url": "fr/index.html",
    "revision": "2bdfa7e06fe3750c309af4a68ea58a45"
  },
  {
    "url": "guide/index.html",
    "revision": "a0d5ff7b25064fe5fe86fdadd41e4cad"
  },
  {
    "url": "hero.jpg",
    "revision": "1189aec70f98c07a6684dd0386e9d175"
  },
  {
    "url": "implementers/index.html",
    "revision": "e24a04d6760fe30310148b2308e69c0e"
  },
  {
    "url": "index.html",
    "revision": "6b977f12dd569cd2edd4a3f4e6941588"
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
