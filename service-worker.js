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
    "revision": "d942b4aa666dd190d0bf4dbfa75ac690"
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
    "url": "assets/js/10.ec227b3c.js",
    "revision": "98bb0c0624f2492772e58b712f622191"
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
    "url": "assets/js/7.5dc49749.js",
    "revision": "5dc5d7c3c1c2c9115631b24f2aa03d83"
  },
  {
    "url": "assets/js/8.ab052882.js",
    "revision": "f6c84ba03781e4544aa020e849a1ffc0"
  },
  {
    "url": "assets/js/9.6accfc51.js",
    "revision": "fe846913e117d22fd9f878e508797f2a"
  },
  {
    "url": "assets/js/app.bb5e4876.js",
    "revision": "6ff06fb1ce5697b24a5e5c9fa6072aa4"
  },
  {
    "url": "assets/js/vendors~docsearch.cf35b7a4.js",
    "revision": "873e4ba38f60a3ba1ea4c6f88546d82b"
  },
  {
    "url": "developpers/index.html",
    "revision": "36a149f4d22a35ba101a69bb08730843"
  },
  {
    "url": "fr/developpers/index.html",
    "revision": "952d97e0b88bd8252fe52f5c221ebd93"
  },
  {
    "url": "fr/guide/index.html",
    "revision": "1c30a5dff93a1a32fb124e3599632055"
  },
  {
    "url": "fr/index.html",
    "revision": "231c75669129569541920b5ac454de09"
  },
  {
    "url": "guide/index.html",
    "revision": "50b4134ba8ad6d12594d1fa6e8438b52"
  },
  {
    "url": "hero.jpg",
    "revision": "1189aec70f98c07a6684dd0386e9d175"
  },
  {
    "url": "implementers/index.html",
    "revision": "ea665452ca2563015f8f7a6078c493b1"
  },
  {
    "url": "index.html",
    "revision": "ac174002bff0e808f7c4d534f7453298"
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
