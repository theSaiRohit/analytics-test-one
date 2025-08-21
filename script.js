!function(){
                // Top-level try-catch for error handling and ensuring the page load continues even if the script fails.
        try {
            // metrics
            const getTime = () => (window.performance?.now?.() || Date.now());
            const DEBUG = new URLSearchParams(window.location.search).get('opti_debug') === 'true';
            const preventScriptLoading = new URLSearchParams(window.location.search).get('opti_freeze') === 'true';
            if(preventScriptLoading){
              return;
            }
            const metrics = { start: getTime() };
            
            // Hash the page URL to remove parameters
            const url = window.location.origin + window.location.pathname;
            
            let visitorProperties;
            let applicableSegments;
            try
            { 
              visitorProperties = (
      function getVisitorProperties() {
        const Info =  (function buildInfo() {
  
const isFunction = (value) => typeof value === 'function';
const isUndefined = (value) => typeof value === 'undefined';
const includes = (str, search) => str.includes(search);

const FACEBOOK = 'Facebook';
const MOBILE = 'Mobile';
const IOS = 'iOS';
const ANDROID = 'Android';
const TABLET = 'Tablet';
const ANDROID_TABLET = ANDROID + ' ' + TABLET;
const IPAD = 'iPad';
const APPLE = 'Apple';
const APPLE_WATCH = APPLE + ' Watch';
const SAFARI = 'Safari';
const BLACKBERRY = 'BlackBerry';
const SAMSUNG = 'Samsung';
const SAMSUNG_BROWSER = SAMSUNG + 'Browser';
const SAMSUNG_INTERNET = SAMSUNG + ' Internet';
const CHROME = 'Chrome';
const CHROME_OS = CHROME + ' OS';
const CHROME_IOS = CHROME + ' ' + IOS;
const INTERNET_EXPLORER = 'Internet Explorer';
const INTERNET_EXPLORER_MOBILE = INTERNET_EXPLORER + ' ' + MOBILE;
const OPERA = 'Opera';
const OPERA_MINI = OPERA + ' Mini';
const EDGE = 'Edge';
const MICROSOFT_EDGE = 'Microsoft ' + EDGE;
const FIREFOX = 'Firefox';
const FIREFOX_IOS = FIREFOX + ' ' + IOS;
const NINTENDO = 'Nintendo';
const PLAYSTATION = 'PlayStation';
const XBOX = 'Xbox';
const ANDROID_MOBILE = ANDROID + ' ' + MOBILE;
const MOBILE_SAFARI = MOBILE + ' ' + SAFARI;
const WINDOWS = 'Windows';
const WINDOWS_PHONE = WINDOWS + ' Phone';
const NOKIA = 'Nokia';
const OUYA = 'Ouya';
const GENERIC = 'Generic';
const GENERIC_MOBILE = GENERIC + ' ' + MOBILE.toLowerCase();
const GENERIC_TABLET = GENERIC + ' ' + TABLET.toLowerCase();
const KONQUEROR = 'Konqueror';
// This string is imported twice. The first time will escape the \\ to \ and the second one (during execution) will correctly just keep
const BROWSER_VERSION_REGEX_SUFFIX = '(\\d+(\\.\\d+)?)';
const DEFAULT_BROWSER_VERSION_REGEX = new RegExp('Version/' + BROWSER_VERSION_REGEX_SUFFIX);

const XBOX_REGEX = new RegExp(XBOX, 'i');
const PLAYSTATION_REGEX = new RegExp(PLAYSTATION + ' \\w+', 'i');
const NINTENDO_REGEX = new RegExp(NINTENDO + ' \\w+', 'i');
const BLACKBERRY_REGEX = new RegExp(BLACKBERRY + '|PlayBook|BB10', 'i');

const windowsVersionMap = {
    'NT3.51': 'NT 3.11',
    'NT4.0': 'NT 4.0',
    '5.0': '2000',
    '5.1': 'XP',
    '5.2': 'XP',
    '6.0': 'Vista',
    '6.1': '7',
    '6.2': '8',
    '6.3': '8.1',
    '6.4': '10',
    '10.0': '10',
};

  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getOwnPropSymbols = Object.getOwnPropertySymbols;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __propIsEnum = Object.prototype.propertyIsEnumerable;
  var __defNormalProp = (obj, key, value) =>
    key in obj
      ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value })
      : (obj[key] = value);
  var __spreadValues = (a, b) => {
    for (var prop in b || (b = {})) if (__hasOwnProp.call(b, prop)) __defNormalProp(a, prop, b[prop]);
    if (__getOwnPropSymbols)
      for (var prop of __getOwnPropSymbols(b)) {
        if (__propIsEnum.call(b, prop)) __defNormalProp(a, prop, b[prop]);
      }
    return a;
  };
  var __export = (target, all) => {
    for (var name in all) __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if ((from && typeof from === "object") || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, {
            get: () => from[key],
            enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable,
          });
    }
    return to;
  };
  var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

  // packages/utils/src/script-generators/project-scripts/posthog/get-device-properties.ts
  var get_device_properties_exports = {};
  __export(get_device_properties_exports, {
    captureProperties: () => captureProperties,
    detect: () => detect,
    detectSearchEngine: () => detectSearchEngine,
    getBrowserProperties: () => getBrowserProperties,
    getReferringDomain: () => getReferringDomain,
    getUrlProperties: () => getUrlProperties,
    getUserAgentProperties: () => getUserAgentProperties,
  });
  function captureProperties() {
    const browserProps = getBrowserProperties(window.navigator);
    const urlProps = getUrlProperties(window.location);
    const uaProps = getUserAgentProperties(window.navigator.userAgent, window.navigator.vendor);
    return __spreadValues(
      __spreadValues(
        {
          $timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
          $search_engine: detectSearchEngine(),
          $ip: null,
          // Set server-side
          $referrer: window.document.referrer || "$direct",
          $referring_domain: getReferringDomain(window.document.referrer),
          $os: uaProps.$os || null,
          $os_version: uaProps.$os_version || null,
          $browser: uaProps.$browser || null,
          $browser_version: uaProps.$browser_version || null,
          $device: uaProps.$device || null,
          $device_type: uaProps.$device_type || null,
        },
        browserProps,
      ),
      urlProps,
    );
  }
  function getBrowserProperties(navigator) {
    const userAgent = navigator.userAgent;
    const language = navigator.language || "";
    return {
      $browser_language: language,
      $browser_language_prefix: language.split("-")[0],
      $raw_user_agent: userAgent,
      $screen_height: window.screen.height,
      $screen_width: window.screen.width,
      $viewport_height: window.innerHeight,
      $viewport_width: window.innerWidth,
    };
  }
  function getUrlProperties(location) {
    const searchParams = new URLSearchParams(location.search);
    return {
      $current_url: location.href || null,
      $host: location.hostname,
      $pathname: location.pathname,
      utm_source: searchParams.get("utm_source") || null,
      utm_medium: searchParams.get("utm_medium") || null,
      utm_campaign: searchParams.get("utm_campaign") || null,
      utm_content: searchParams.get("utm_content") || null,
      utm_term: searchParams.get("utm_term") || null,
      fbclid: searchParams.get("fbclid") || null,
      gclid: searchParams.get("gclid") || null,
      msclkid: searchParams.get("msclkid") || null,
      // ... other click IDs
    };
  }
  function detect(userAgent, vendor) {
    // These guys require userAgentConstants defined somewhere above
    const detectOs = function (user_agent) {
  const osMatchers = [
    [
      new RegExp(XBOX + "; " + XBOX + " (.*?)[);]", "i"),
      (match) => {
        return [XBOX, (match && match[1]) || ""];
      },
    ],
    [new RegExp(NINTENDO, "i"), [NINTENDO, ""]],
    [new RegExp(PLAYSTATION, "i"), [PLAYSTATION, ""]],
    [BLACKBERRY_REGEX, [BLACKBERRY, ""]],
    [
      new RegExp(WINDOWS, "i"),
      (_, user_agent) => {
        if (/Phone/.test(user_agent) || /WPDesktop/.test(user_agent)) {
          return [WINDOWS_PHONE, ""];
        }
        if (new RegExp(MOBILE).test(user_agent) && !/IEMobile/.test(user_agent)) {
          return [WINDOWS + " " + MOBILE, ""];
        }
        const match = /Windows NT ([0-9.]+)/i.exec(user_agent);
        if (match && match[1]) {
          const version = match[1];
          let osVersion = windowsVersionMap[version] || "";
          if (/arm/i.test(user_agent)) {
            osVersion = "RT";
          }
          return [WINDOWS, osVersion];
        }
        return [WINDOWS, ""];
      },
    ],
    [
    // this is a direct regex so a single \ suffices
      /((iPhone|iPad|iPod).*?OS (\d+)_(\d+)_?(\d+)?|iPhone)/,
      (match) => {
        if (match && match[3]) {
          const versionParts = [match[3], match[4], match[5] || "0"];
          return [IOS, versionParts.join(".")];
        }
        return [IOS, ""];
      },
    ],
    [
      /(watch.*\/(\d+\.\d+\.\d+)|watch os,(\d+\.\d+),)/i,
      (match) => {
        let version = "";
        if (match && match.length >= 3) {
          version = isUndefined(match[2]) ? match[3] : match[2];
        }
        return ["watchOS", version];
      },
    ],
    [
      new RegExp("(" + ANDROID + " (\\d+)\\.(\\d+)\\.?(\\d+)?|" + ANDROID + ")", "i"),
      (match) => {
        if (match && match[2]) {
          const versionParts = [match[2], match[3], match[4] || "0"];
          return [ANDROID, versionParts.join(".")];
        }
        return [ANDROID, ""];
      },
    ],
    [
      /Mac OS X (\d+)[_.](\d+)[_.]?(\d+)?/i,
      (match) => {
        const result = ["Mac OS X", ""];
        if (match && match[1]) {
          const versionParts = [match[1], match[2], match[3] || "0"];
          result[1] = versionParts.join(".");
        }
        return result;
      },
    ],
    [/Mac/i, ["Mac OS X", ""]],
    [/CrOS/, [CHROME_OS, ""]],
    [/Linux|debian/i, ["Linux", ""]],
  ];
  for (let i = 0; i < osMatchers.length; i++) {
    const [rgex, resultOrFn] = osMatchers[i];
    const match = rgex.exec(user_agent);
    const result = match && (isFunction(resultOrFn) ? resultOrFn(match, user_agent) : resultOrFn);
    if (result) {
      return result;
    }
  }
  return ["", ""];
}

    const detectBrowser = function (user_agent, vendor) {
    function isSafari(userAgent) {
        return includes(userAgent, SAFARI) && !includes(userAgent, CHROME) && !includes(userAgent, ANDROID);
    }

    const safariCheck = (ua, vendor) => (vendor && includes(vendor, APPLE)) || isSafari(ua);
    
    vendor = vendor || '';

    if (includes(user_agent, ' OPR/') && includes(user_agent, 'Mini')) {
        return OPERA_MINI;
    } else if (includes(user_agent, ' OPR/')) {
        return OPERA;
    } else if (BLACKBERRY_REGEX.test(user_agent)) {
        return BLACKBERRY;
    } else if (includes(user_agent, 'IE' + MOBILE) || includes(user_agent, 'WPDesktop')) {
        return INTERNET_EXPLORER_MOBILE;
    } else if (includes(user_agent, SAMSUNG_BROWSER)) {
        return SAMSUNG_INTERNET;
    } else if (includes(user_agent, EDGE) || includes(user_agent, 'Edg/')) {
        return MICROSOFT_EDGE;
    } else if (includes(user_agent, 'FBIOS')) {
        return FACEBOOK + ' ' + MOBILE;
    } else if (includes(user_agent, 'UCWEB') || includes(user_agent, 'UCBrowser')) {
        return 'UC Browser';
    } else if (includes(user_agent, 'CriOS')) {
        return CHROME_IOS;
    } else if (includes(user_agent, 'CrMo')) {
        return CHROME;
    } else if (includes(user_agent, CHROME)) {
        return CHROME;
    } else if (includes(user_agent, ANDROID) && includes(user_agent, SAFARI)) {
        return ANDROID_MOBILE;
    } else if (includes(user_agent, 'FxiOS')) {
        return FIREFOX_IOS;
    } else if (includes(user_agent.toLowerCase(), KONQUEROR.toLowerCase())) {
        return KONQUEROR;
    } else if (safariCheck(user_agent, vendor)) {
        return includes(user_agent, MOBILE) ? MOBILE_SAFARI : SAFARI;
    } else if (includes(user_agent, FIREFOX)) {
        return FIREFOX;
    } else if (includes(user_agent, 'MSIE') || includes(user_agent, 'Trident/')) {
        return INTERNET_EXPLORER;
    } else if (includes(user_agent, 'Gecko')) {
        return FIREFOX;
    }

    return '';
};

    const detectBrowserVersion = function (userAgent, vendor) {
    const versionRegexes = {
        [INTERNET_EXPLORER_MOBILE]: [new RegExp('rv:' + BROWSER_VERSION_REGEX_SUFFIX)],
        [MICROSOFT_EDGE]: [new RegExp(EDGE + '?\\/' + BROWSER_VERSION_REGEX_SUFFIX)],
        [CHROME]: [new RegExp('(' + CHROME + '|CrMo)\\/' + BROWSER_VERSION_REGEX_SUFFIX)],
        [CHROME_IOS]: [new RegExp('CriOS\\/' + BROWSER_VERSION_REGEX_SUFFIX)],
        'UC Browser': [new RegExp('(UCBrowser|UCWEB)\\/' + BROWSER_VERSION_REGEX_SUFFIX)],
        [SAFARI]: [DEFAULT_BROWSER_VERSION_REGEX],
        [MOBILE_SAFARI]: [DEFAULT_BROWSER_VERSION_REGEX],
        [OPERA]: [new RegExp('(' + OPERA + '|OPR)\\/' + BROWSER_VERSION_REGEX_SUFFIX)],
        [FIREFOX]: [new RegExp(FIREFOX + '\\/' + BROWSER_VERSION_REGEX_SUFFIX)],
        [FIREFOX_IOS]: [new RegExp('FxiOS\\/' + BROWSER_VERSION_REGEX_SUFFIX)],
        [KONQUEROR]: [new RegExp('Konqueror[:/]?' + BROWSER_VERSION_REGEX_SUFFIX, 'i')],
        [BLACKBERRY]: [new RegExp(BLACKBERRY + ' ' + BROWSER_VERSION_REGEX_SUFFIX), DEFAULT_BROWSER_VERSION_REGEX],
        [ANDROID_MOBILE]: [new RegExp('android\\s' + BROWSER_VERSION_REGEX_SUFFIX, 'i')],
        [SAMSUNG_INTERNET]: [new RegExp(SAMSUNG_BROWSER + '\\/' + BROWSER_VERSION_REGEX_SUFFIX)],
        [INTERNET_EXPLORER]: [new RegExp('(rv:|MSIE )' + BROWSER_VERSION_REGEX_SUFFIX)],
        Mozilla: [new RegExp('rv:' + BROWSER_VERSION_REGEX_SUFFIX)],
    };
    const browser = detectBrowser(userAgent, vendor);
    const regexes = versionRegexes[browser];
    if (isUndefined(regexes)) {
        return null;
    }

    for (let i = 0; i < regexes.length; i++) {
        const regex = regexes[i];
        const matches = userAgent.match(regex);
        if (matches) {
            return parseFloat(matches[matches.length - 2]);
        }
    }
    return null;
};

    const detectDevice = function (user_agent) {
    if (NINTENDO_REGEX.test(user_agent)) {
        return NINTENDO;
    } else if (PLAYSTATION_REGEX.test(user_agent)) {
        return PLAYSTATION;
    } else if (XBOX_REGEX.test(user_agent)) {
        return XBOX;
    } else if (new RegExp(OUYA, 'i').test(user_agent)) {
        return OUYA;
    } else if (new RegExp('(' + WINDOWS_PHONE + '|WPDesktop)', 'i').test(user_agent)) {
        return WINDOWS_PHONE;
    } else if (/iPad/.test(user_agent)) {
        return IPAD;
    } else if (/iPod/.test(user_agent)) {
        return 'iPod Touch';
    } else if (/iPhone/.test(user_agent)) {
        return 'iPhone';
    } else if (/(watch)(?: ?os[,/]|\d,\d\/)[\d.]+/i.test(user_agent)) {
        return APPLE_WATCH;
    } else if (BLACKBERRY_REGEX.test(user_agent)) {
        return BLACKBERRY;
    } else if (/(kobo)\s(ereader|touch)/i.test(user_agent)) {
        return 'Kobo';
    } else if (new RegExp(NOKIA, 'i').test(user_agent)) {
        return NOKIA;
    } else if (
        /(kf[a-z]{2}wi|aeo[c-r]{2})( bui|\))/i.test(user_agent) ||
        /(kf[a-z]+)( bui|\)).+silk\//i.test(user_agent)
    ) {
        return 'Kindle Fire';
    } else if (/(Android|ZTE)/i.test(user_agent)) {
        if (
            !new RegExp(MOBILE).test(user_agent) ||
            /(9138B|TB782B|Nexus [97]|pixel c|HUAWEISHT|BTV|noble nook|smart ultra 6)/i.test(user_agent)
        ) {
            if (
                (/pixel[\daxl ]{1,6}/i.test(user_agent) && !/pixel c/i.test(user_agent)) ||
                /(huaweimed-al00|tah-|APA|SM-G92|i980|zte|U304AA)/i.test(user_agent) ||
                (/lmy47v/i.test(user_agent) && !/QTAQZ3/i.test(user_agent))
            ) {
                return ANDROID;
            }
            return ANDROID_TABLET;
        } else {
            return ANDROID;
        }
    } else if (new RegExp('(pda|' + MOBILE + ')', 'i').test(user_agent)) {
        return GENERIC_MOBILE;
    } else if (new RegExp(TABLET, 'i').test(user_agent) && !new RegExp(TABLET + ' pc', 'i').test(user_agent)) {
        return GENERIC_TABLET;
    } else {
        return '';
    }
};

    // detectDeviceType depends on detectDevice. The order matters here
    const detectDeviceType = function (user_agent) {
    const device = detectDevice(user_agent);
    if (
        device === IPAD ||
        device === ANDROID_TABLET ||
        device === 'Kobo' ||
        device === 'Kindle Fire' ||
        device === GENERIC_TABLET
    ) {
        return TABLET;
    } else if (device === NINTENDO || device === XBOX || device === PLAYSTATION || device === OUYA) {
        return 'Console';
    } else if (device === APPLE_WATCH) {
        return 'Wearable';
    } else if (device) {
        return MOBILE;
    } else {
        return 'Desktop';
    }
};


    const [osName, osVersion] = detectOs(userAgent);
    const browserName = detectBrowser(userAgent, vendor);
    const browserVersion = detectBrowserVersion(userAgent, vendor);
    const deviceModel = detectDevice(userAgent);
    const deviceType = detectDeviceType(userAgent);

    return {
      os_name: osName,
      os_version: osVersion,
      browser_name: browserName,
      browser_version: browserVersion,
      device_model: deviceModel,
      device_type: deviceType,
    };
  }
  function getReferringDomain(referrer) {
    if (!referrer || referrer === "") return "$direct";
    try {
      const url = new URL(referrer);
      return url.hostname;
    } catch (e) {
      return "$direct";
    }
  }
  function getUserAgentProperties(userAgent, vendor) {
    const parsed = detect(userAgent, vendor);
    return {
      $os: parsed.os_name || null,
      $os_version: parsed.os_version || null,
      $browser: parsed.browser_name || null,
      $browser_version: parsed.browser_version || null,
      $device: parsed.device_model || null,
      $device_type: parsed.device_type || null,
    };
  }
  var SEARCH_ENGINES = {
    google: ["google.", "/search?"],
    bing: ["bing.", "/search?"],
    yahoo: ["yahoo.", "/search"],
    duckduckgo: ["duckduckgo.", "/?q="],
    baidu: ["baidu.", "/s?"],
  };
  function detectSearchEngine(referrer) {
    if (!referrer) return null;
    try {
      const url = new URL(referrer);
      const domain = url.hostname.toLowerCase();
      const path = url.pathname + url.search;
      for (const [engine, [domain_match, path_match]] of Object.entries(SEARCH_ENGINES)) {
        if (domain.includes(domain_match) && path.includes(path_match)) {
          return engine;
        }
      }
      return null;
    } catch (e) {
      return null;
    }
  }
  return __toCommonJS(get_device_properties_exports);
}
)();
        return Info.captureProperties();
      }
    )();
              if (DEBUG) {
                metrics.visitorProperties = getTime();
                console.log('[Optimeleon] Got properties:', metrics.visitorProperties - metrics.start);
              }
            } catch (error) { 
               if (DEBUG) {
                metrics.visitorProperties = getTime();
                console.log('[Optimeleon] Failed to get properties:', metrics.visitorProperties - metrics.start);
                console.log('[Optimeleon] Properties are undefined', error);
              }
            }
            
            try {
              applicableSegments = (

    function findApplicableSegments(properties) {
      if(!properties) return [];
      function matcher0(properties){return true}
      const matches = []; // This should never happen, all traffic is always present for all projects
      
        if(matcher0(properties)) matches.push("e3a808cb-3836-4332-8504-11b08776765e");
      
      localStorage.setItem('opti_segments', JSON.stringify(matches));
      return matches;
    }
  )(visitorProperties);
              if (DEBUG) {
                metrics.segments = getTime();
                console.log('[Optimeleon] Got segments:', metrics.segments - metrics.visitorProperties);
              }
            } catch (error) {
              if (DEBUG) {
                metrics.segments = getTime();
                console.log('[Optimeleon] Failed to get segments:', metrics.segments - metrics.visitorProperties);
                console.log('[Optimeleon] Applicable segments are undefined. Visitor will be matched to default segment', error);
              }
            }
            // all campaign functions
            const campaignMap = {
    'https://service.sairohit.in/': function __ser_r32ug__(t) {
        const e = {
            "ste-r367c": "https://cdn-stag.optimeleon.com/ser-r31sv/sai-r31t5/412d8e85-fb10-49f7-a50b-b40ca898bbb4/4a63758f-67b7-44ee-8d55-0a300df2f842.js",
            "gen-r367c": "https://cdn-stag.optimeleon.com/ser-r31sv/sai-r31t5/412d8e85-fb10-49f7-a50b-b40ca898bbb4/15bf4b9b-b81d-44d2-bf7b-cf4fb1628f6d.js"
        };
        const a = new URL(window.location.href);
        let n = a.searchParams.get("opti_ser-r32ug");

        // --- Start of Modified Logic ---
        if (n) {
            const injectScript = (variant) => {
                const scriptTag = document.createElement("script");
                scriptTag.src = e[variant];
                if (scriptTag.src) document.head.appendChild(scriptTag);
            };

            if (document.readyState === 'loading') {
                document.addEventListener('DOMContentLoaded', () => injectScript(n));
            } else {
                injectScript(n);
            }
            return n;
        }
        // --- End of Modified Logic ---

        const o = function __ser_r32ug_choose_variant__(t = []) {
            const getTime = () => window.performance?.now?.() || Date.now(),
                e = "true" === new URLSearchParams(window.location.search).get("opti_debug"),
                a = {
                    start: getTime()
                },
                n = {
                    "e3a808cb-3836-4332-8504-11b08776765e": () => function thompsonSamplingWithFixedBase(t, e) {
                        return localStorage.getItem(e) || (Math.random() < .1 ? "bas-r367c" : function thompsonSampling(t, e) {
                            const a = localStorage.getItem(e);
                            if (a) return a;

                            function randomNormal() {
                                const t = Math.random(),
                                    e = Math.random(),
                                    a = Math.sqrt(-2 * Math.log(t)),
                                    n = 2 * Math.PI * e;
                                return a * Math.sin(n)
                            }

                            function gammaRand(t) {
                                if (t < 1) return gammaRand(t + 1) * Math.pow(Math.random(), 1 / t);
                                const e = t - 1 / 3,
                                    a = 1 / Math.sqrt(9 * e);
                                for (;;) {
                                    let t, n;
                                    do {
                                        t = randomNormal(), n = 1 + a * t
                                    } while (n <= 0);
                                    n *= n * n;
                                    const o = Math.random(),
                                        r = t * t;
                                    if (o < 1 - r * r * .0331 || Math.log(o) < .5 * r + e * (1 - n + Math.log(n))) return e * n
                                }
                            }

                            function betaRand(t, e) {
                                const a = gammaRand(t);
                                return a / (a + gammaRand(e))
                            }
                            let n = null,
                                o = -1 / 0;
                            for (const {
                                    name: e,
                                    alpha: a,
                                    beta: r
                                } of t) {
                                const t = betaRand(a, r);
                                t > o && (o = t, n = e)
                            }
                            return n || "bas-r367c"
                        }(t, e))
                    }([{
                        name: "bas-r367c",
                        alpha: 1,
                        beta: 11
                    }, {
                        name: "gen-r367c",
                        alpha: 1,
                        beta: 3
                    }], "opti-ser-r32ug-e3a808cb-3836-4332-8504-11b08776765e")
                },
                o = ["e3a808cb-3836-4332-8504-11b08776765e"],
                r = new Set(t);
            let c = "bas-r367c",
                s = o[o.length - 1];
            for (let t = 0; t < o.length; t++) {
                const e = o[t];
                if (r.has(e)) {
                    a.segmentMatch = getTime(), s = e;
                    break
                }
            }
            return e && (console.log("[Optimeleon] Segment match time:", a.segmentMatch - a.start), console.log("[Optimeleon] Calling function for:", s)), c = n[s](), a.end = getTime(), e && (console.log("[Optimeleon] Total time:", a.end - a.start), console.log("[Optimeleon] Selected variant:", c)), localStorage.setItem("opti-ser-r32ug-" + s, c), c
        }(t);
        return n = e[o] ? o : "bas-r367c", n && (a.searchParams.set("opti_ser-r32ug", n), window.location = a), n
    }
};

            // Campaign selection: run only if this URL is part of the allowed campaigns
            const campaignFunctionName = campaignMap[url];
            
            if (campaignFunctionName) {
              campaignFunctionName(applicableSegments);
            } else {
              // Disable anti-flickering for non-campaign pages
              window.rmfk && window.rmfk();
            }

            // Persist opti_ query params and retrieve them
            
    !(function () {
    const STORAGE_KEY = 'opti_params';
  
    function getOptiParamsFromURL() {
      const params = new URLSearchParams(window.location.search);
      const optiParams = {};
      for (const [key, value] of params.entries()) {
        if (key.startsWith('opti_')) {
          optiParams[key] = value;
        }
      }
      return optiParams;
    }
    
    function getPosthogSessionData() {
      const posthogSession = localStorage.getItem('posthog_session');
      if (posthogSession) {
        try {
          const sessionData = JSON.parse(posthogSession);
          return sessionData.session_id;
        } catch (error) {
          console.error('Failed to parse posthog_session:', error);
          return null;
        }
      }
      return null;
    }
  
    function persistOptiParams(params) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(params));
      // persist the session id to check if the session is changed or not
      const sessionId = getPosthogSessionData();
      if (sessionId) {
        localStorage.setItem('opti_session_id', sessionId);
      }
    }
  
    function restoreOptiParams() {
      const stored = localStorage.getItem(STORAGE_KEY);
      return stored ? JSON.parse(stored) : {};
    }
  
    function applyParamsToLinks(params) {
      document.querySelectorAll('a[href]').forEach(link => {
        try {
          const rawHref = link.getAttribute('href');
          if(!rawHref) return;
          // Skip if href starts with "#" or "/#"
          if (rawHref.startsWith('#') || rawHref.startsWith('/#')) {
            return;
          }

          // Continue only for normal links
          const url = new URL(link.href, window.location.origin);
          for (const key in params) {
            url.searchParams.set(key, params[key]);
          }
          link.href = url.toString();

        } catch (error) {
          console.error('Failed to update link href:', link, error);
        }
      });
    }


    function updateBrowserURL(params) {
      const currentURL = new URL(window.location.href);
      let modified = false;
      for (const key in params) {
        if (!currentURL.searchParams.has(key)) {
          currentURL.searchParams.set(key, params[key]);
          modified = true;
        }
      }
      if (modified) {
        history.replaceState({}, '', currentURL.toString());
      }
    }
  
    function handleNavigation() {
      const optiParams = restoreOptiParams();
      if (Object.keys(optiParams).length > 0) {
        updateBrowserURL(optiParams);
        applyParamsToLinks(optiParams);
      }
    }
  
    // Main logic
    let optiParams = getOptiParamsFromURL();
    // check if posthog session is changed or not if changed then empty the local storage
    const sessionId = getPosthogSessionData();
    if (sessionId) {
      const storedSessionId = localStorage.getItem('opti_session_id');
      if (storedSessionId !== sessionId) {
        localStorage.removeItem(STORAGE_KEY); // clear storage
        localStorage.setItem('opti_session_id', sessionId); // update session id
      }
    }

    if (Object.keys(optiParams).length > 0) {
      persistOptiParams(optiParams); // if present in URL, save to storage
    } else {
      // if not present in URL, check local storage
      optiParams = restoreOptiParams(); // fallback from storage
      if (Object.keys(optiParams).length > 0) {
        updateBrowserURL(optiParams); // push them into the URL bar
      }
    }
    
    if (Object.keys(optiParams).length > 0) {
      applyParamsToLinks(optiParams); // update all internal links
    }

    // Listen for navigation events
    window.addEventListener('popstate', handleNavigation);
    window.addEventListener('pushstate', handleNavigation);
    window.addEventListener('replacestate', handleNavigation);

    // Support for SPA routing
    const originalPushState = history.pushState;
    const originalReplaceState = history.replaceState;

    history.pushState = function (...args) {
      originalPushState.apply(this, args);
      window.dispatchEvent(new Event('pushstate'));
    };

    history.replaceState = function (...args) {
      originalReplaceState.apply(this, args);
      window.dispatchEvent(new Event('replacestate'));
    };

    // Trigger handleNavigation on custom SPA navigation events
    window.addEventListener('pushstate', handleNavigation);
    window.addEventListener('replacestate', handleNavigation);
  })();;
            } catch (error) {
            // Top-level error handling to ensure the page load continues even if the script fails
              if (DEBUG) {
                metrics.segments = getTime();
                console.log('[Optimeleon] Failed to get segments:', metrics.segments - metrics.visitorProperties);
                console.error('Error in campaign script:', error);
              }
        }
    }();
    !function(t,e){
        var o,n,p,r;
            if (!e.__SV) {
                window.posthog = e;
                e._i = [];
                e.init = function(i, s, a) {
                    function g(t, e) {
                        var o = e.split(".");
                        2 == o.length && (t = t[o[0]], e = o[1]),
                        t[e] = function() {
                            t.push([e].concat(Array.prototype.slice.call(arguments, 0)))
                        }
                    }
                    (p = t.createElement("script")).type = "text/javascript",
                    p.async = !0,
                    p.src = s.api_host.replace(".i.posthog.com", "-assets.i.posthog.com") + "/static/array.js",
                    (r = t.getElementsByTagName("script")[0]).parentNode.insertBefore(p, r);
                    var u = e;
                    void 0 !== a ? u = e[a] = [] : a = "posthog",
                    u.people = u.people || [],
                    u.toString = function(t) {
                        var e = "posthog";
                        return "posthog" !== a && (e += "." + a), t || (e += " (stub)"), e
                    },
                    u.people.toString = function() {
                        return u.toString(1) + ".people (stub)"
                    };
                    o = "init capture register register_once register_for_session unregister unregister_for_session getFeatureFlag getFeatureFlagPayload isFeatureEnabled reloadFeatureFlags updateEarlyAccessFeatureEnrollment getEarlyAccessFeatures on onFeatureFlags onSessionId getSurveys getActiveMatchingSurveys renderSurvey canRenderSurvey getNextSurveyStep identify setPersonProperties group resetGroups setPersonPropertiesForFlags resetGroupPropertiesForFlags reset get_distinct_id getGroups get_session_id get_session_replay_url alias set_config startSessionRecording stopSessionRecording sessionRecordingStarted captureException loadToolbar get_property getSessionProperty createPersonProfile opt_in_capturing opt_out_capturing has_opted_in_capturing has_opted_out_capturing clear_opt_in_out_capturing debug".split(" "),
                    n = 0;
                    for (;n < o.length; n++) g(u, o[n]);
                    e._i.push([i, s, a])
                };
                e.__SV = 1;
            }
    }(document, window.posthog || []);
    !(function () {
          const consent = localStorage.getItem("opti_consent") || "no";
          const O_PSV = "83-1yq"; // Opti Project Script Version
          window.optimeleon.init = function(autocapture,enablePageEvents, registerProperties) {
            posthog.init("phc_JfVseaFT8MdXMnEcbk5ZE7gCyVtHDERoz98298spogN", {
              api_host: "https://eu.i.posthog.com",
              person_profiles: "identified_only",
              persistence: consent === "yes" ? "localStorage+cookie" : "memory",
              autocapture,
              capture_pageview: enablePageEvents,
              capture_pageleave: enablePageEvents,
              loaded: function (posthog) {
                console.log("Optimeleon loaded successfully");
                if (
                  window.optimeleon.queue &&
                  window.optimeleon.queue.length > 0
                ) {
                  window.optimeleon.queue.forEach((args) => {
                    window.optimeleon.callMethod.apply(null, args);
                  });
                  window.optimeleon.queue = [];
                }
                
              },
            });

            window.optimeleon.loaded = true;
            window.optimeleon.autocapture = autocapture;

            // Register version
            posthog.register({
              "opti_version": "v1",
              "o_psv": O_PSV, // Opti Project Script Version
              ...registerProperties,
            });
          };

          window.optimeleon.callMethod = function (method, ...args) {
            if (method === "init") {
              optimeleon.init(...args);
              return;
            }

            if(method === "shopify_theme") {
              optimeleon.init(true, false, {"shopify": "theme"});
              return;
            }
            
            if(method === "shopify_pixel") {
             optimeleon.init(false, false, { "shopify" :"pixel"});
             return;
            } 

            if (!window.optimeleon.loaded) {
              window.optimeleon.queue.push([method, ...args]);
              return;
            }
            
            if (method === "track") {
              const [event, properties] = args;
              posthog.capture(event, {
                ...properties,
              });
            }else if(method === "page_view"){
             const [event, properties] = args;
               posthog.capture("$pageview", {
                ...properties,
              });
            }
             else if (method === "autocapture") {
               posthog.set_config({ autocapture: true });
              window.optimeleon.autocapture = true;
            } else if (method === "disable_auto") {
              window.optimeleon.autocapture = false;
               posthog.set_config({ autocapture: false });
            }
          };
          if (
            window.optimeleon.queue &&
            window.optimeleon.queue.length > 0
          ) {
            window.optimeleon.queue.forEach((args) => {
              window.optimeleon.callMethod.apply(null, args);
            });
            window.optimeleon.queue = [];
          }
        })(); 
             
    !(function () {
      window.setOptiCookieConsent = (consent) => {
        posthog.set_config({
          persistence: consent === "yes" ? "localStorage+cookie" : "memory",
        });
        localStorage.setItem("opti_consent", consent);
      };
    })();
      
            
(function () {
  const overrideVariantScript = (url) => {
    if (!url) {
      console.error("[Optimeleon] No CDN URL provided for variant override.");
      return;
    }
    const script = document.createElement("script");
    script.src = url;
    document.head.appendChild(script);
    window.optimeleon.overrideApplied = true;
  };

  const searchParams = new URLSearchParams(window.location.search);
  try {
    const overrideVariant = !!searchParams.get("opti_override") && searchParams.get("opti_track") === "false";
    const overrideAlreadyApplied = window.optimeleon && window.optimeleon.overrideApplied;
    if (overrideVariant && !overrideAlreadyApplied) {
      const variantId = searchParams.get("opti_override");
      const baseUrl = searchParams.get("opti_override_base_url") || "https://app-stag.optimeleon.com";
      const variantCdnUrlApi = baseUrl + "/api/v1/variants/cdn-url?id=" + variantId;
      fetch(variantCdnUrlApi)
        .then((response) => {
          if (!response.ok) {
            console.error("Unable to get variant CDN URL:", response.statusText);
            return;
          }
          return response.json();
        })
        .then((data) => {
          overrideVariantScript(data.cdnUrl);
        })
        .catch((error) => {
          console.error("[Optimeleon] Unable to override variant: [" + variantId + "]", error);
        });
    }
  } catch (error) {
    console.error("[Optimeleon] Unable to override variant script", error);
  }
})();

  