'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "a1acf75736cd7b956e079d5024a3561e",
"assets/AssetManifest.bin.json": "920efe41f0255d0dbdfc7a4ba5741489",
"assets/AssetManifest.json": "0bcc958c3fa876e875cb6b87cdc753e9",
"assets/assets/2.0x/BGSheetList.jpg": "912107fdd7b916ae51158fb10861cecb",
"assets/assets/3.0x/BGSheetList.jpg": "6e8d8e651e31914e5d5f09fe10c43260",
"assets/assets/3.0x/DNA.png": "3384738967ff62fdc8d6e9fbd7f27487",
"assets/assets/4.0x/BGHeader.jpg": "281c0b1d6ef26ebee60f8afebede5d7d",
"assets/assets/4.0x/BGHome.jpg": "80edf4aa9945f30bdb81432b69346c62",
"assets/assets/4.0x/BGSheetList.jpg": "ade92c563ca6df07552753b6c557c708",
"assets/assets/4.0x/BGSkillAssassin.jpg": "9bad95aaa56fac1204ad64f05b6e26b0",
"assets/assets/4.0x/BGSkillCommon.jpg": "a086c725fc2bd4212772576e063e413f",
"assets/assets/4.0x/BGSyncBleed.jpg": "bf3ccf730743bfc340ac030d89d06a9a",
"assets/assets/4.0x/DNA.png": "94432ea71c7d1fb3a13f1399f38b2383",
"assets/assets/4.0x/DNARed.png": "ebaafd02f28cd67f5bbb23eb9e02be08",
"assets/assets/4.0x/EdenHeaderBG.png": "e329c1b145c6a1382fc2d2677a5e3d33",
"assets/assets/4.0x/Logo.webp": "03eb9879d9b1eac3a29355f10ffd5e1f",
"assets/assets/4.0x/SkillHeaderBG.png": "a660fd5570fe63b49a3f10fd78442993",
"assets/assets/abstergo.svg": "102a49e3f44a3664d681272637eb66de",
"assets/assets/abstergo2.svg": "f8a9b3b54e63e521309b372d05626f16",
"assets/assets/action.svg": "2755610f96666e559c659cb80eb4ed8b",
"assets/assets/action2.svg": "c4c26d2351894c07c0c4c58e1a281754",
"assets/assets/BGEditSheet.jpg": "be04efd2589343ab584b2581db663115",
"assets/assets/BGHeader.jpg": "8c1d99d68a5899b552d67bca2ad4a5e4",
"assets/assets/BGHome.jpg": "95afda80eaa0dbb0baf89c7282f053eb",
"assets/assets/BGSheetItem.jpg": "9f7dd76111d365580b38789efe22703e",
"assets/assets/BGSheetList.jpg": "912107fdd7b916ae51158fb10861cecb",
"assets/assets/BGSkillAssassin.jpg": "491a4b81e6a1be6886ab0f3da8116d64",
"assets/assets/BGSkillCommon.jpg": "e37152c386f269748ad4ba1ba8f22920",
"assets/assets/BGSyncBleed.jpg": "25252eff65aa3a6a0ec9a760e4c18c12",
"assets/assets/creed.svg": "0e644d9fabf8dcc66531212fb1ebf3cc",
"assets/assets/creed2.svg": "673ed293372cc188cd02a74f5ebf1d88",
"assets/assets/DieAbstergo.svg": "3e420a16bb706811d28780ee93df2815",
"assets/assets/DieAction.svg": "73ddce9f5b66eb2ba04c86922032fe73",
"assets/assets/DieCreed.svg": "8bd92aec3f727efba2ec6e27b6f7787b",
"assets/assets/DieSocial.svg": "ec7e0b676d2bfdbc23f05c1a1be240d7",
"assets/assets/DieStealth.svg": "91efe1dee17826618ec1f9291cde7436",
"assets/assets/DieWits.svg": "34117d3ef3b6112f2425581424076317",
"assets/assets/DNA.png": "5aa47420947f3cff3146f39b09befbde",
"assets/assets/DNARed.png": "e119807d59b54a4a50b36035bb956dda",
"assets/assets/DNARed.svg": "538503f9bdb7e087f663e83ef32c7977",
"assets/assets/duplicate.svg": "02299d00fa8cec0869b7c746c94334e7",
"assets/assets/EdenHeaderBG.png": "d200b663bc754b107c4e9c94981a9a13",
"assets/assets/Logo.webp": "94750a51229340f96976cef80d68933b",
"assets/assets/poe/01.jpg": "ea81f7597f3d4ff0c295f289d2416764",
"assets/assets/poe/02.jpg": "24a074e1ba2131db18c1201998617283",
"assets/assets/poe/03.jpg": "69fbe6c2e0dd19cdf5057bdcd3c6eb35",
"assets/assets/poe/04.jpg": "5bba6afcbe52c9e32b17def6824b7da9",
"assets/assets/poe/05.jpg": "bc1884d7c564854551dafb879d7d4970",
"assets/assets/poe/06.jpg": "5d1d1bb1dcc62b3f826d05ff4d194bc7",
"assets/assets/poe/07.jpg": "69f0f90215e2945b596eeb20cf687c3d",
"assets/assets/poe/08.jpg": "3ed60fb5036b4eed2e76f756be07ca07",
"assets/assets/poe/09.jpg": "64d9924037252e877049fe382546ea6b",
"assets/assets/poe/10.jpg": "9a1c8fcf4f2d0080931e8a62bfa76278",
"assets/assets/poe/11.jpg": "81c772ae6b84be9ee59b8ae68ee186c2",
"assets/assets/poe/12.jpg": "2683f27034ba0ad804eba8989f3479c5",
"assets/assets/poe/13.jpg": "8ebaa30d81d94eedc84239aa9a9287a1",
"assets/assets/poe/14.jpg": "9f7971abb1f5add2a858f1643f7bc584",
"assets/assets/poe/15.jpg": "00af390aab616addf3f4d2f9e750e3ac",
"assets/assets/poe/16.jpg": "7b85991d201eef407025c9c759825781",
"assets/assets/poe/17.jpg": "3b664f5664400b9cea9d29fc2ca3ba2b",
"assets/assets/poe/18.jpg": "c7a8ca865f54376afd23752073e01bda",
"assets/assets/pregen/Jackie.jpg": "fa27812f738eaf92491a9ec37b41d104",
"assets/assets/pregen/Mac.jpg": "361e6d4cb1532ab5e435422bf6ac43c0",
"assets/assets/pregen/Philip.jpg": "5e1736c4db4b4b93ff9b990dbbda4e12",
"assets/assets/pregen/Victor.jpg": "1e9442f73b47a9555e3c334c52e93991",
"assets/assets/pregen/Yu.jpg": "45c836679df4745c4a986d954e01e874",
"assets/assets/search.svg": "472a355ae65e39c1a20880b99ac14c07",
"assets/assets/share.svg": "e0e8ed52a093bba485340d97b02c35c9",
"assets/assets/SkillHeaderBG.png": "ad2de9ac6e152bdeae70154ff7eb95ba",
"assets/assets/snag.svg": "12d72daea915729dbd9612b1769b1dca",
"assets/assets/social.svg": "c68477adef48c3717c4f036a2c82623a",
"assets/assets/social2.svg": "5beec82ff029de4d7389e24c9dd91aba",
"assets/assets/stealth.svg": "cd11de10ffd8c9ed4d716e1712e4157f",
"assets/assets/stealth2.svg": "3f8f548cef07701736fcedf54d08333f",
"assets/assets/witnesses/01.jpg": "3d00941e5168e3b8c40a26304116ea3c",
"assets/assets/witnesses/02.jpg": "37d5828aeb3f0fcaf0a19aac41c275eb",
"assets/assets/witnesses/03.jpg": "dbd91fd1f40f217e1e581d20d6bc9038",
"assets/assets/witnesses/04.jpg": "fc01c8d310ce2e25768dde2eb975e999",
"assets/assets/witnesses/05.jpg": "6a8f722c6b041a41b2eb3567c8915aed",
"assets/assets/witnesses/06.jpg": "e3f5e57e768c5b245709a5449b17aba5",
"assets/assets/witnesses/07.jpg": "87b3c091762fc0341c0334750f02f53c",
"assets/assets/witnesses/08.jpg": "be28a884a8f07485c176a297c438feaf",
"assets/assets/witnesses/09.jpg": "c938b742735d44080c8b7bf1ccffbb57",
"assets/assets/witnesses/10.jpg": "c48066355f8d0f2f509436bce14a79bb",
"assets/assets/witnesses/11.jpg": "c872982e7ff9503802870b5ef4f2b63f",
"assets/assets/witnesses/12.jpg": "14c6743f7026220ee996d6251eb9a725",
"assets/assets/witnesses/13.jpg": "619055dddf5fe3d75cdc81d63e72f2ad",
"assets/assets/witnesses/14.jpg": "713f9856490f4732125561dd7ecb4c82",
"assets/assets/witnesses/15.jpg": "1621fea1150f15663ee55484fc670572",
"assets/assets/witnesses/16.jpg": "cf06d11dff80ab4d2bd877ef6b97bbe0",
"assets/assets/witnesses/17.jpg": "d12a962a0f1cf52dca5a64f805a0a482",
"assets/assets/witnesses/18.jpg": "2b31bbd6174f8f30c0ae5d14508d25f1",
"assets/assets/witnesses/19.jpg": "f22f8fc43ff376bbac19ad44e437f64e",
"assets/assets/witnesses/20.jpg": "b624d03af810054f84720aef4f44fddd",
"assets/assets/witnesses/21.jpg": "ac3ceaa652fd8ee7bc3bc28c9ee014ec",
"assets/assets/witnesses/22.jpg": "32df32ed5ec4e415d978433f48195bce",
"assets/assets/witnesses/23.jpg": "8e6fcc19ebb1fecb79fee66ba5575471",
"assets/assets/witnesses/24.jpg": "1cde20709deb3bf460e2e084604f99e5",
"assets/assets/witnesses/25.jpg": "15f079259bd5077dc8d39982fc6cfff5",
"assets/assets/witnesses/26.jpg": "7f39e28022179cd5e2bf2f424a7243d3",
"assets/assets/witnesses/27.jpg": "a08708185e3a813c2a572c26d1634b71",
"assets/assets/witnesses/28.jpg": "1136d62e5d8a4dee8961e4853d79fac3",
"assets/assets/witnesses/29.jpg": "0de3fa316455b7e329289227f00d321f",
"assets/assets/witnesses/30.jpg": "eac8a9ba5dd25b22ebdb7903ea813e2d",
"assets/assets/witnesses/31.jpg": "565fd0a01623e106aa92eca69418b08f",
"assets/assets/witnesses/32.jpg": "f1e71d59d5b796834856175c05e26344",
"assets/assets/witnesses/33.jpg": "cb4795da62c23b0e99b0db210722d0d4",
"assets/assets/witnesses/34.jpg": "9d2497c832a1ad6199e7cfdd4cd2cfb9",
"assets/assets/witnesses/35.jpg": "6646f08c0775dd07f9705b6372e7bf41",
"assets/assets/witnesses/36.jpg": "bcefaffb7fcfe2e00b7ac8a234a0e05a",
"assets/assets/witnesses/37.jpg": "bf67b044732069105847b8f45bf9d7a0",
"assets/assets/witnesses/38.jpg": "1a1ff4f9aed1abe5390d81b555e9ec37",
"assets/assets/witnesses/39.jpg": "21a34fc724e35edbc107dd5825af3cae",
"assets/assets/witnesses/40.jpg": "9a78962721d16909422c9bf5c9b139bc",
"assets/assets/witnesses/41.jpg": "b9880f3a5b498662f8a586cee096f219",
"assets/assets/witnesses/42.jpg": "b9302912283d74ba1f7af42110a15f38",
"assets/assets/witnesses/43.jpg": "b58b72f81f06b3ee3ee7ee2b8c11b7c2",
"assets/assets/witnesses/44.jpg": "e0c14cbed694c42c93111466518ff7fd",
"assets/assets/witnesses/45.jpg": "d614167f09c1fda59caf9c346ca3cef3",
"assets/assets/witnesses/46.jpg": "14c64d08545d40f786a26fb557de7b00",
"assets/assets/witnesses/47.jpg": "2edea7cef014ef19679dfbbe7431719f",
"assets/assets/witnesses/48.jpg": "c6b8d34d70650651627a7659a3e30bd7",
"assets/assets/witnesses/49.jpg": "bc41c9b477898515b3fa55b8bc4b8853",
"assets/assets/witnesses/50.jpg": "f92bceb8d22c310c0db422e97569baef",
"assets/assets/witnesses/51.jpg": "58049ced1f91d0630fafa4e46c057861",
"assets/assets/witnesses/52.jpg": "16cfd7acc2157ff0f4bfa241131f4c95",
"assets/assets/witnesses/53.jpg": "bd0a185800d77141bff8aa6da1a35e99",
"assets/assets/witnesses/54.jpg": "0e79f23344893f9a8f0e98525133277d",
"assets/assets/witnesses/55.jpg": "6bcab34ec032683674fe56b2c9247aa0",
"assets/assets/witnesses/56.jpg": "d7553bea2d8b98f257a9ec25f203b314",
"assets/assets/witnesses/57.jpg": "93b5c2bb8399911412861faf367c062f",
"assets/assets/witnesses/58.jpg": "27a2df0018458aa4f32381dc9e422e5e",
"assets/assets/witnesses/59.jpg": "f7c5c921ce9bc7b0076f627043dde81d",
"assets/assets/witnesses/60.jpg": "5c4e7e08f966ce16a5fdadca285d3b1a",
"assets/assets/witnesses/61.jpg": "2eafda3bdbff2327b736dc01b5a425cb",
"assets/assets/witnesses/62.jpg": "4144b5e253c58b8aabca8349ee1d6e6d",
"assets/assets/witnesses/63.jpg": "117c93ce9de64ee1cc7fa773105ace36",
"assets/assets/witnesses/64.jpg": "ed6e6f49d7890e872496b232df5c7c49",
"assets/assets/witnesses/65.jpg": "bd7cf485514d8391e2d01f0ffe5bf59c",
"assets/assets/witnesses/66.jpg": "d5d4d45a026b8a70ea4b150610eb4895",
"assets/assets/witnesses/67.jpg": "e49a913e05759463e3f3d5ae45b57d7a",
"assets/assets/witnesses/68.jpg": "e69853cbb543d4ac09b54e50ca6668d9",
"assets/assets/witnesses/69.jpg": "44b32dab46b05385a665899b74910d86",
"assets/assets/witnesses/70.jpg": "9fb675131ba4abc848421f2aea8334d7",
"assets/assets/witnesses/71.jpg": "d76cb81a8e4c6cf242cc0975d03102b5",
"assets/assets/witnesses/72.jpg": "353b0da0344f7e2452e1dce34286d57a",
"assets/assets/witnesses/73.jpg": "ade024412012540906441190a38dee9f",
"assets/assets/witnesses/74.jpg": "df95f27cce6b6813feb64d685b2bdbfc",
"assets/assets/witnesses/75.jpg": "103b264a02c461cf514c83654edf1916",
"assets/assets/witnesses/76.jpg": "dae29e7db6ed0dec9c769df5ffe541c7",
"assets/assets/witnesses/77.jpg": "7431847d249140afefe8bc41be8bdc73",
"assets/assets/witnesses/78.jpg": "cd5df33ca8e9149f4a1335a7201842a5",
"assets/assets/witnesses/79.jpg": "b72c9138db7c8bcce13891d2462d010c",
"assets/assets/witnesses/80.jpg": "9776956fd978cbec28e9db7ea786e0a1",
"assets/assets/witnesses/81.jpg": "69b25cff58297dbce95020b8687c20c8",
"assets/assets/witnesses/82.jpg": "e9fb47890cb839b0ab0d1968dab91d44",
"assets/assets/witnesses/83.jpg": "991b7a94ee7d58f1a8709ba451d6d92b",
"assets/assets/witnesses/84.jpg": "b503016828293ac56f4f0dcf2bc35278",
"assets/assets/witnesses/85.jpg": "cb8d24edf40b1c0ec197e2993b4a619f",
"assets/assets/witnesses/86.jpg": "ecbaac7cb1fb45bfe5b6de471a50e775",
"assets/assets/witnesses/87.jpg": "ac61f08d7bbe405a49e3f165797ff6f0",
"assets/assets/witnesses/88.jpg": "22240842cde6e660dc5b1461aae019bd",
"assets/assets/witnesses/89.jpg": "ab7622082b330c280a04c3029d4bacc2",
"assets/assets/witnesses/90.jpg": "8497b8b03e5c1fd3babcbe804e2b7a99",
"assets/assets/witnesses/apollodorusthesicilian.jpg": "3fa37ad004c0941f989383cca8a40ca2",
"assets/assets/witnesses/ayaofalexandria.jpg": "696e5e5bc1f1ce65098c026d556fae46",
"assets/assets/witnesses/bayekofsiwa.jpg": "1db4eda307f60e26c9fc86bb1252d6b8",
"assets/assets/witnesses/eivor.jpg": "124575bd5863598c508f890f4494150b",
"assets/assets/witnesses/eviefrye.jpg": "3a53ca9388b7529a31d718ac1eeab399",
"assets/assets/witnesses/ezioauditore.jpg": "3d55344ca0390dfe84e47ef3cfed1fca",
"assets/assets/witnesses/josephineboulanger.jpg": "40730b5ce29df5c1f0899fa2d43d35d6",
"assets/assets/witnesses/kensa.jpg": "d4c688073de04ae631a494118fe5538a",
"assets/assets/witnesses/majorgallagher.jpg": "06819a8dd3f403cf999794474916da99",
"assets/assets/witnesses/nancydrake.jpg": "a547f321b90e1674cdae4da827939d0c",
"assets/assets/witnesses/pennyrose.jpg": "2a4ca8271a32d7dcbd1f53315f7a768d",
"assets/assets/witnesses/phoxidas.jpg": "35620654cb5720b8e9c1050751ba9b76",
"assets/assets/witnesses/ratonhnhaketon.jpg": "7c4f336a34854838a0a3cd7cd5b67589",
"assets/assets/witnesses/reboante.jpg": "cc7cbf2a95f67ece96891514fef8e2a6",
"assets/assets/witnesses/romulus.jpg": "0fe8cd0b4b98dd020062eef1a23ef96d",
"assets/assets/witnesses/theambassador.jpg": "e2b4785d22d0462a47748080659fe556",
"assets/assets/witnesses/thephylax.jpg": "c71fce0a4ac2be87b380e27bd50e87da",
"assets/assets/wits.svg": "f321dc3a13d763fda4dd9881839d7260",
"assets/assets/wits2.svg": "2a52c1ff9a6c4e7d79dcf03b4e8ae142",
"assets/data/piecesOfEden.json": "eb48251bac67e52a65642b3479dd04a2",
"assets/data/PoE%2520Deck%2520for%2520APP.xlsx": "a1f07d5d3b8774585b0488c88e5884a8",
"assets/data/Pregen%2520Deck%2520for%2520APP.xlsx": "031a01bdbd79b69ece7d2b57ec496834",
"assets/data/pregen.json": "0789720fdda1a7f292a1553ebebeb2df",
"assets/data/Skill%2520Deck%2520for%2520APP.xlsx": "d2fbc03936362016aac38e8b70186500",
"assets/data/skill.json": "42476e0e99c0793b181469c5119ae2f9",
"assets/data/Witness%2520Deck%2520for%2520APP.xlsx": "2a2783a96ccbf65f78a7e41105bb9e09",
"assets/data/witness.json": "f6de4f7c0c243079fda8a6486adfeeba",
"assets/FontManifest.json": "7339e05eb022b7936e8188def401cc4f",
"assets/fonts/Futura-Bold-Italic.otf": "b627c1dfbf015acd5504157ed9bdc64b",
"assets/fonts/Futura-Bold.otf": "a702feaaadf37d3503a4518519c146c9",
"assets/fonts/Futura-Italic.otf": "a1c0f3a4dad4c94167d89aae25d5f3c8",
"assets/fonts/Futura-Medium.otf": "1ae74371cfc0ed9d96229945ece4733d",
"assets/fonts/Futura-Semibold.otf": "2ca255d0278ec42d88d3b34a16680324",
"assets/fonts/Futura.otf": "70c9849e706b63e2c54c940c9559e633",
"assets/fonts/MaterialIcons-Regular.otf": "e94701550fdba4a10243009fddda01c7",
"assets/fonts/Titillium%2520bold%2520italic.otf": "9eb43f95573592b56552e6f806bb740b",
"assets/fonts/Titillium%2520bold.otf": "19a50bd5f6e7e0eb9c7e4a184517a6ca",
"assets/fonts/Titillium%2520italic.otf": "72f9cf45be9d969dc07bdff58ae20821",
"assets/fonts/Titillium%2520regular.otf": "48d1e9172f2e3d827cc8cae4a323d93a",
"assets/fonts/Titillium%2520semibold.otf": "5a20b39b21e169fc78f089062e65278a",
"assets/NOTICES": "623644d85702ef329e8f7b1a99a2e1f4",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "391ff5f9f24097f4f6e4406690a06243",
"assets/packages/wakelock_plus/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "5fda3f1af7d6433d53b24083e2219fa0",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "87325e67bf77a9b483250e1fb1b54677",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "9fa2ffe90a40d062dd2343c7b84caf01",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "e20becdd9e13a4a1625c560b10d78eb3",
"flutter.js": "f31737fb005cd3a3c6bd9355efd33061",
"flutter_bootstrap.js": "1ace5c4f07a044d846b17da5d002911c",
"icons/Icon-192.png": "dcf1b877b84bce23099f28ac56de71d2",
"icons/Icon-512.png": "6885b5933b43a7c5298ec5e53eb590e7",
"icons/Icon-maskable-192.png": "b85a4c7e2a8970e7e1358acb4b045868",
"icons/Icon-maskable-512.png": "6e5b790f15c2cd863f1d046da7846536",
"index.html": "3bbf37bcc97a9a7c2f3a0419c446081f",
"/": "3bbf37bcc97a9a7c2f3a0419c446081f",
"main.dart.js": "8f526b98029b137a9591c8d05c1fdb13",
"manifest.json": "91022b56ed1bc37c0786732167d92b64",
"version.json": "dc7a41bbfea2b312ba77e17b01dcc363"};
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
