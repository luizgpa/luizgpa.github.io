'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/art/AbilityBar.webp": "00f269ecbb31bd994758ba57310b6f73",
"assets/art/abilityBG.webp": "d0f9bc17a6f6dd6cca97f12c9c3b893e",
"assets/art/AgendaBG_back.png": "1e569665c3e5ae1231e1b3f77bf2dd50",
"assets/art/AgendaBG_front.png": "fc23e4f9bd4d82e144491d0b03ca5d55",
"assets/art/baratheonAbilityHeaderLong.png": "f56cfa82b05dc20b320214d774fbd055",
"assets/art/baratheonAbilityHeaderShort.png": "28c0c67b2feffa0bd032aa1efe8c81f6",
"assets/art/baratheonMotivationBG.webp": "4d1320cf24da77cdb9200c44c1c81521",
"assets/art/baratheonMotivationFG.webp": "559d757986921175f65a02f317243c8f",
"assets/art/baratheonNameBG.png": "77a093f6ca60237b4ea5f8f5e6ca598b",
"assets/art/baratheonUnitBG.webp": "3598be752df4bc0b9dbc6a5ce9835f14",
"assets/art/baratheonUnitFG.webp": "f6b256221a45f1f45fcd631178fedf22",
"assets/art/boxes/SNG001.jpg": "63a099967a9b292e1138cbf050efe1f3",
"assets/art/boxes/SNG002.jpg": "2085cbc2cf4809311bf9a6f2ec011db0",
"assets/art/boxes/SNG003.jpg": "13db8c498595e8c9fda9952a338325bd",
"assets/art/coins-solid.svg": "f8eae0b31db494e51e4f5ee84758a3ad",
"assets/art/CrestBaratheon.webp": "8b58946f928277a38030a4f82fd964fe",
"assets/art/CrestBrotherhood.webp": "996cd1e131dbb2d2c89a050f663647a1",
"assets/art/CrestFreefolk.webp": "8cea588148b7597c62594261ef18b6a4",
"assets/art/CrestLannister.webp": "b0ce07491adaacd59e7005c8fdb0769a",
"assets/art/CrestNeutral.webp": "ac44aa8aa0bb57cfdbcee3f042ad0525",
"assets/art/CrestNightswatch.webp": "3f3ab5a5482fb8dd0bf9fa2dea4424d2",
"assets/art/CrestStark.webp": "464a11d4aad3e4e6db9b5b3c9ed7699f",
"assets/art/CrestTargaryen.webp": "b0c471dae47a278ed465c0aa22b71d44",
"assets/art/crown.svg": "c82738935efe4ca3a49c3fff6ec0d6f3",
"assets/art/die.svg": "e3d60b715a84b3cf16e87d1118728776",
"assets/art/divider.svg": "7a0b2d70775f3ec97e435bd102826525",
"assets/art/equipment/blinding_powder.webp": "07cd2ad39e4093f07503a9446b564293",
"assets/art/equipment/castle-forged_steel.webp": "91ff923077a9cf0b42f7f1b636b5eb10",
"assets/art/equipment/flask_of_mead.webp": "e1abb55f8e991e98492edcb7a0ad507e",
"assets/art/equipment/glass_candle.webp": "46772a12382de1dac3a7ac6e06813efb",
"assets/art/equipment/healing_balm.webp": "91814d746cb3a52dfb255fd22ddd64af",
"assets/art/equipment/heirloom_armor.webp": "2d0176e6f6a9029c35c9b31255f5690b",
"assets/art/equipment/heirloom_weapon.webp": "ad6ba609d2c2268ed29f597423079153",
"assets/art/equipment/holy_icon.webp": "f285b09089dfcc20a1fb2f380b52cfa8",
"assets/art/equipment/lucky_charm.webp": "d058678ce734b94660e56e145fc7c753",
"assets/art/equipment/milk_of_the_poppy.webp": "2d9ae6309f107386c7042760425116bb",
"assets/art/equipment/obsidian_dagger.webp": "13a314c25b310a74889b388f71c55893",
"assets/art/equipment/pristine_boots.webp": "46cbca19bad11f1ff1574288f6ec56ba",
"assets/art/equipment/stell_arrowheads.webp": "8cc0add6dddcc916692216536798eb5c",
"assets/art/equipment/strangler_flask.webp": "5b4ea7f57dc1c54a099cb83b64708119",
"assets/art/equipment/valyrian_steel.webp": "83efc46f945fb3fc7de5ebcf2fb091b5",
"assets/art/goldenBar.webp": "1766f6cbe0eda8a53db14c47fd5ea4f5",
"assets/art/horse.svg": "687a67f7cfd57a06af72b59a0053caac",
"assets/art/IconAlive.webp": "ea3033bb559931b3d48b3c00bcefe13b",
"assets/art/IconBoot.webp": "67ecdb95bdf7db54a35839786d13a9b1",
"assets/art/IconC.webp": "329ea58a8f72c384714ca61451b55b03",
"assets/art/IconCaptured.webp": "bf4e9b64a8e661d5b85f74dc30055968",
"assets/art/IconChampion.webp": "8a358fc7c9ed5dd5a2b45c5176a0cf6c",
"assets/art/IconDefense.webp": "6ca607902ae8794da47dcbac3e2accdd",
"assets/art/IconExclamation.webp": "eeb4bd90c57e42d0f2f946860907940f",
"assets/art/IconG.webp": "ec488f66d1683b320cb46477ee9e5529",
"assets/art/IconHand.webp": "ff1ed17aa4f864623104c85a9123bcde",
"assets/art/IconHero.webp": "ddebe8a6a266e78a59164fdfeba8a023",
"assets/art/IconHorn.webp": "f391ec999e3372735595ada8a8d4fbee",
"assets/art/IconQuestion.webp": "971deb83fa55b26839a52402bd751717",
"assets/art/IconRanged.webp": "59ca207b9833763ce5cebe1510b89e8f",
"assets/art/IconRouted.webp": "8270c4698fe2eeac44a4a405eb105fbf",
"assets/art/IconS.webp": "856cb275bca68b60416c5696cd4dfa32",
"assets/art/IconShaken.webp": "4a0626be1f16ed4a90cc03c9e695cd36",
"assets/art/IconSoldier.webp": "cc5da2aea657fbae243dbebe71b18d08",
"assets/art/IconSword.webp": "42c7febcb65bda4045f7e2a3a46706c8",
"assets/art/IconTrigger.webp": "f27c410cc5531423df9ed3a0bc8308b1",
"assets/art/IconWill.webp": "ebb69bcec6898fdda9881f73fef7f25d",
"assets/art/IconWound.webp": "09c93dd4556c1a769e383f8c713387e2",
"assets/art/letter.svg": "6dbc7269c1fc0cee1dca6d71cc781e8f",
"assets/art/motivation/jon_arryn-wise_tutor.webp": "8602f5c27e947652db72913f2c5c3b50",
"assets/art/motivation/jon_connington-hand_of_the_true_king.webp": "4adaddf4e46b65e18999b770e22ffa25",
"assets/art/motivation/rhaegar_targaryen-dragon_prince.webp": "4ac05154a3fcd2bcf7e6bb4ec4bafce9",
"assets/art/motivation/rhaegar_targaryen-dragon_prince_mounted.webp": "e04b6466439e4384432443dd5231d344",
"assets/art/motivation/robert_baratheon-rebel_king.webp": "c3e5c677e989c6c4d1e82df74d7d4199",
"assets/art/motivation/robert_baratheon-rebel_king_mounted.webp": "e890422d066382d34dc53f0d3aad2e5d",
"assets/art/ObjectiveCardBack.webp": "8fde35cc0d912d1efb7a047efadacb2f",
"assets/art/ObjectiveCardFrontBG.webp": "e16f8a6124d38b2ab27ba8651ca60562",
"assets/art/ObjectiveTextBG.webp": "34a15df9e576eded0aa7a86b4db505f8",
"assets/art/ObjectiveTextHeader.webp": "06e30929fbb5cc3037b0a472b15865ed",
"assets/art/SkillBG.svg": "a4c099425ce83d72fd54d525dd3fa5cc",
"assets/art/sword.svg": "d8c5a8866d546768f3131d403bbfbb5d",
"assets/art/targaryenAbilityHeaderLong.png": "d4dd8c2135467f68c2965a22e6f70287",
"assets/art/targaryenAbilityHeaderShort.png": "e4fa85520b4bb2ccec377e26ad635343",
"assets/art/targaryenMotivationBG.webp": "610df11a956b79fbb22235c61027dae8",
"assets/art/targaryenMotivationFG.webp": "4ef97f70fd062e3919855f9980c9687f",
"assets/art/targaryenNameBG.png": "6f4fc9378005ebbde5d72602d5e26480",
"assets/art/targaryenUnitBG.webp": "3782d6f353571030226d90f1f48f658d",
"assets/art/targaryenUnitFG.webp": "b3916b8169c1c208ab43e9066056516a",
"assets/art/terrain/big_corpse_pile.jpg": "82f12ce9c2c88fedf0208bbf7731bc27",
"assets/art/terrain/big_fisherman_cabin.jpg": "5e23970c6e4a54c0d7e50300114b3f46",
"assets/art/terrain/big_tree.jpg": "54ec515808f044b99e4ae9b91a85dab1",
"assets/art/terrain/big_wall.jpg": "dcf9d1f82a9c492c17a448bcbbd3c5dd",
"assets/art/terrain/bridge.jpg": "5710c72d21ba63285922e5dad04513a6",
"assets/art/terrain/ditch_with_stakes.jpg": "ce6805c8a29f78fd7cb066b373d2c5fc",
"assets/art/terrain/fisherman_cabin.jpg": "e9b51ee0d09e0f5eaeb46157ca620baf",
"assets/art/terrain/grass.jpg": "812e3ac7808f3040ab771839d4cfc582",
"assets/art/terrain/guard_tower.jpg": "81bcf66582dac3d3d1ed11a3667287a8",
"assets/art/terrain/guard_tower_ruins.jpg": "13219ae7c12f889e1d84b8fe80ae3548",
"assets/art/terrain/high_ground.jpg": "b766f7c51f57f38fd322fdc0994308a7",
"assets/art/terrain/mangrove.jpg": "25ec46f502b52c5f3b11bf56d29a8e9e",
"assets/art/terrain/open_fisherman_cabin.jpg": "256d201115875ed36975ec4009de93c6",
"assets/art/terrain/open_wooden_door.jpg": "6e68aab093d4eda41f5a5df282d1536e",
"assets/art/terrain/pontoon.jpg": "5d9258aff36a467df7e41da316ae0a91",
"assets/art/terrain/scattered_leaves.jpg": "b504a3a029d0caa4c8dc7cf0c913ba99",
"assets/art/terrain/small_tree.jpg": "27e4258481c0b231dde2ebbc45e2be2a",
"assets/art/terrain/small_wall.jpg": "b6a71b82fe9c2123544fab5733a7241a",
"assets/art/terrain/stump.jpg": "172c1440795185903684c55e29613bee",
"assets/art/terrain/terrain_zone_river.jpg": "123f827c31d606dd33cd408476e30cae",
"assets/art/terrain/walled_bridge.jpg": "b3a0a97483a6dfb3de3f4defd0ce17d3",
"assets/art/terrain/wooden_door.jpg": "2f4a15ac4220cb87a4889bf3981c6d51",
"assets/art/tiles/10A.jpg": "8e61fd0617df25a56a7c7809b1f30374",
"assets/art/tiles/10B.jpg": "a35631abca9b8ff296aee77decec6cf3",
"assets/art/tiles/11A.jpg": "0c7ae167d2bb8c29d91ce8b75e6b9799",
"assets/art/tiles/11B.jpg": "9c030d3374909abc7993188c7292a4cf",
"assets/art/tiles/12A.jpg": "5418c734aea4b6275db982f2759cd644",
"assets/art/tiles/12B.jpg": "df3f1c2ed980f7ee490cb161156e5b37",
"assets/art/tiles/7A.jpg": "9a23fadef93d6536eb0f956a0ee816d7",
"assets/art/tiles/7B.jpg": "225dd7ff5d18ee90e4d8055b5f7ecfb2",
"assets/art/tiles/8A.jpg": "a0091b1ce215bfec56cde55b419aee63",
"assets/art/tiles/8B.jpg": "e329def5426aedbcd5783c62c53e7b93",
"assets/art/tiles/9A.jpg": "9463650714cb99e290a9820ac7334bcd",
"assets/art/tiles/9B.jpg": "2221894b37d45e4f68954a305087748d",
"assets/art/toHitBG.svg": "a2e3505bf2ec4c7a4087089b7488d744",
"assets/art/tokens/coins.webp": "7817093af63ad6e5a72ca6ce7f9a00d6",
"assets/art/tokens/letter.webp": "898d8f1fa9ebd7ebef8fa12e294b6ba6",
"assets/art/tokens/objective.webp": "6baed60b8af03d475f86defcdfa52616",
"assets/art/tokens/ojective.webp": "6baed60b8af03d475f86defcdfa52616",
"assets/art/UnitNameBG.webp": "10d4124fdb2c7b615f99b192913aa34c",
"assets/art/units/baratheon_warden.webp": "dd90c90aadbadc1ffceac1a812671bd9",
"assets/art/units/barristan_selmy-targaryen_kingsguard.webp": "307d0c1a3fbf19faab5206e740a517c8",
"assets/art/units/denys_arryn-the_darling_of_the_vale.webp": "c5b0cf870d8617f78a011d1045824c20",
"assets/art/units/eddard_stark-the_last_wolf.webp": "6c9758058a95ff06f1b08bab5824c156",
"assets/art/units/hoster_tully-loyal_ally.webp": "6c584a80357c738098efa02a928565a1",
"assets/art/units/jason_mallister-lord_of_seagard.webp": "a22170c08f2f3cb38d1d0e1fa4361164",
"assets/art/units/jonothor_darry-targaryen_kingsguard.webp": "ea8c30a4ec18de61f510d0ee942e3872",
"assets/art/units/jon_arryn-wise_tutor.webp": "be5b8ac1bca150a620e726a21dd91bcd",
"assets/art/units/jon_connington-hand_of_the_true_king.webp": "9e6443a0e3a027650e2229bf9976e2c7",
"assets/art/units/lewyn_martell-targaryen_kingsguard.webp": "d98ddc2c1b7cd0b30c2ce141694f70b0",
"assets/art/units/lyn_corbray-distinguished_lineman.webp": "736a3c65fa0db1896aba731d494e9805",
"assets/art/units/myles_mooton-rhaegars_pupil.webp": "fffcbdb98e76f401286c7e3835a42aeb",
"assets/art/units/rhaegar_targaryen-dragon_prince.webp": "56687e5720590721a5b808e94e1b454e",
"assets/art/units/rhaegar_targaryen-dragon_prince_mounted.webp": "aad54cc810cdf0b5e5691ec5c29ed0fe",
"assets/art/units/robert_baratheon-rebel_king.webp": "3be73377c060d2b6abb3716fab0fef0e",
"assets/art/units/robert_baratheon-rebel_king_mounted.webp": "4d5f49342f8ab2a42aa823d42b8a7990",
"assets/art/units/roose_bolton-lord_of_leeches.webp": "41408ffaa76777d71b510b511b1a38ff",
"assets/art/units/royal_shield_bearer.webp": "ac59af416a6d1a444378085d0679b91b",
"assets/art/units/stag_knight.webp": "44e2ea20781df695e33032c4da690ad9",
"assets/art/units/targaryen_honor_guard.webp": "135d0671a28d580993b304679ae24090",
"assets/art/UnitStatsBG.webp": "fd76bd1938ad9170d876e7cb13b4e61f",
"assets/art/wealth.svg": "821116a03e5712ac6589f4b3d13d002b",
"assets/AssetManifest.bin": "a6a5347f07389e097a00f189cc84e138",
"assets/AssetManifest.bin.json": "90153af6f158ff65aaad6d0272f8a33b",
"assets/AssetManifest.json": "3a9349db764fdf2557a1bddf82a4b266",
"assets/data/data.xlsx": "71e6a459c8e49a71409dd9935f3cda61",
"assets/FontManifest.json": "10fca565780aa4432cbc0c0e4b613677",
"assets/fonts/Gryphius%2520MVB%2520Regular.otf": "bda9a59c01ec6edfeb66fc05c5b14e15",
"assets/fonts/MaterialIcons-Regular.otf": "a1750b2f8b1cd70d57a77d615c840417",
"assets/fonts/StoneTypeFoundry-Tuff-Bold.otf": "0060e746996f1e2591bfab88709acfb4",
"assets/fonts/StoneTypeFoundry-Tuff-BoldItalic.otf": "4a4a967661864d4ff74bdf1229447c70",
"assets/fonts/StoneTypeFoundry-Tuff-Italic.otf": "e6aabae50eeaf192b1c1e2fb8cfff589",
"assets/fonts/StoneTypeFoundry-Tuff-Normal.otf": "2543cd374c3f2b77dc7e9acfc3fb8047",
"assets/fonts/StoneTypeFoundry-Tuff-Semibold.otf": "389f2281d975969e086459028df7a002",
"assets/fonts/StoneTypeFoundry-Tuff-SemiboldItalic.otf": "5a1a97c975d04c2deb11e64dfb3b8378",
"assets/fonts/Trajan%2520Pro%25203%2520Bold.otf": "9e67b974d5d9cac8f9174a8205273377",
"assets/NOTICES": "77b8829cf681c99c58054b5574ebbd91",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"flutter_bootstrap.js": "611f38c6591ac67d6c295c8dedf6ff9a",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "993c48c7e39350991aa6fda0ac129b42",
"/": "993c48c7e39350991aa6fda0ac129b42",
"main.dart.js": "429210f2f8c8a9c581a6d5097ae17023",
"manifest.json": "f57dfff93bf75ccfd2abde6dfe3d640d",
"version.json": "9893fd0cee4bb0098c29e522e876bb26"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
