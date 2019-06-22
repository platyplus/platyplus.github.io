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
    "revision": "2ebdd17ccc09e76a6b7a5b14292c3bf7"
  },
  {
    "url": "assets/css/0.styles.652d76bb.css",
    "revision": "3a0d445513d34443cac0a4990e050ad9"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.81b1b72d.js",
    "revision": "bf6b2d8e7fe90227c7983740f3846610"
  },
  {
    "url": "assets/js/11.5805f075.js",
    "revision": "b762a2e16343c2edd49108ddfef2664b"
  },
  {
    "url": "assets/js/12.85767394.js",
    "revision": "2e71b9aaf394d598f81e055aba28361e"
  },
  {
    "url": "assets/js/13.d4e117f8.js",
    "revision": "842943ce7d4a75f89cc8755250ab28c1"
  },
  {
    "url": "assets/js/3.cded28fe.js",
    "revision": "323c5a10416e7662a9b40c4c2f2739c6"
  },
  {
    "url": "assets/js/4.71596cbf.js",
    "revision": "68c7992ec792e2fc047fb93e66df3869"
  },
  {
    "url": "assets/js/5.40590bcf.js",
    "revision": "6b8f18f42606e2afd8a369bcda353316"
  },
  {
    "url": "assets/js/6.2e7f87b8.js",
    "revision": "4cb541ca138ab1637ae30f8de7f931dc"
  },
  {
    "url": "assets/js/7.b71359f3.js",
    "revision": "d2005c4ae0153454e34dfedd06861880"
  },
  {
    "url": "assets/js/8.7786ad7d.js",
    "revision": "5dfac62e01d4aca7fa2ee2012bfca5d6"
  },
  {
    "url": "assets/js/9.149f0e95.js",
    "revision": "d1382361ce5692f13e9b17beb665b851"
  },
  {
    "url": "assets/js/app.2c9785e5.js",
    "revision": "cd90d72630c08d8be805fd84fc8b675d"
  },
  {
    "url": "assets/js/vendors~docsearch.cdec0491.js",
    "revision": "cb3868a0d52c4ecdd7074e4922e8d62a"
  },
  {
    "url": "developpers/index.html",
    "revision": "6a98a1d271b23c7976276e7ccd28af7e"
  },
  {
    "url": "fr/developpers/index.html",
    "revision": "09b24adc9ea74cccfd0d093e1fe5c6b1"
  },
  {
    "url": "fr/guide/index.html",
    "revision": "be3264f2a1884ac76f0a81e8d4ebc81d"
  },
  {
    "url": "fr/index.html",
    "revision": "8214260fb5e3716e58bd171f2331c2d1"
  },
  {
    "url": "guide/index.html",
    "revision": "8e87b59dafed91937bcc78bb1b441bb7"
  },
  {
    "url": "hero.jpg",
    "revision": "1189aec70f98c07a6684dd0386e9d175"
  },
  {
    "url": "implementers/index.html",
    "revision": "3b863b7be1b4b83497fe5cc03ddffa8f"
  },
  {
    "url": "index.html",
    "revision": "6b2393fa4e94556a93fce4fb64ef42f9"
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
