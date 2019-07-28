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
    "revision": "a8c5a9d3205c97a2df384f5a6db4c7d3"
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
    "url": "assets/js/10.2b7666f8.js",
    "revision": "f979ad8490e27472257d550ab661728a"
  },
  {
    "url": "assets/js/11.d0ab0753.js",
    "revision": "dbf58d860e85a9cadff36221c7939a13"
  },
  {
    "url": "assets/js/12.c87a5366.js",
    "revision": "d1b853abe0ce162e7907a75f17023ee4"
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
    "url": "assets/js/6.e88b55a9.js",
    "revision": "f6249587935be95f8bbdee1ccdb5bb06"
  },
  {
    "url": "assets/js/7.5dc49749.js",
    "revision": "5dc5d7c3c1c2c9115631b24f2aa03d83"
  },
  {
    "url": "assets/js/8.ab052882.js",
    "revision": "f6c84ba03781e4544aa020e849a1ffc0"
  },
  {
    "url": "assets/js/9.286d8316.js",
    "revision": "993f646dda995bc97a69f63c821cb193"
  },
  {
    "url": "assets/js/app.09419aab.js",
    "revision": "1eb0151693987c57d391673337392d06"
  },
  {
    "url": "assets/js/vendors~docsearch.cf35b7a4.js",
    "revision": "873e4ba38f60a3ba1ea4c6f88546d82b"
  },
  {
    "url": "developpers/index.html",
    "revision": "d080c289400b25fc1a949d03f891c999"
  },
  {
    "url": "fr/developpers/index.html",
    "revision": "6c1faf828c096fbe670e78923484f6e1"
  },
  {
    "url": "fr/guide/index.html",
    "revision": "5beb586a71314924b6f15ba4b5ecaddd"
  },
  {
    "url": "fr/index.html",
    "revision": "22d2e128f399a464c833db91dd510e49"
  },
  {
    "url": "guide/index.html",
    "revision": "36a1ff05823ea7ded423e7142904af3f"
  },
  {
    "url": "hero.jpg",
    "revision": "1189aec70f98c07a6684dd0386e9d175"
  },
  {
    "url": "implementers/index.html",
    "revision": "9546193c9cddbba679a6805df6879c9b"
  },
  {
    "url": "index.html",
    "revision": "fc783b5b8ee803e5b92c5b7ec0ea4e57"
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
