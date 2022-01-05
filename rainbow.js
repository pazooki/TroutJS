import { TroutJS } from './js/trout.js';

TroutJS.ready(function () {
    let app = {
        appName: 'rainbow',
        server:'http://localhost:8080',
        settings:{
            debug: true,
            cache: {
                enabled: true, 
                localStorage: true, 
                indexedDB: false
            },
            localization: {
                enabled: true,
                default: 'en',
                languages: {
                    'en': { 'name': 'English', 'code': 'en', 'flag': '' },
                    'zh': { 'name': 'Chinese', 'code': 'zh', 'flag': '🇨🇳' },
                    'hi': { 'name': 'Hindi', 'code': 'hi', 'flag': '🇮🇳' },
                    'es': { 'name': 'Spanish', 'code': 'es', 'flag': '🇪🇸' },
                    'pt': { 'name': 'Portuguese', 'code': 'pt', 'flag': '🇵🇹' },
                    'bn': { 'name': 'Bengali', 'code': 'bn', 'flag': '🇮🇳' },
                    'ru': { 'name': 'Russian', 'code': 'ru', 'flag': '🇷🇺' },
                    'ja': { 'name': 'Japanese', 'code': 'ja', 'flag': '🇯🇵' },
                    'fa': { 'name': 'Farsi', 'code': 'fa', 'flag': '🇮🇷' },
                    'ar': { 'name': 'Arabic', 'code': 'ar', 'flag': '🇮🇶' },
                }
            }
        },
        subapps:{ // "filesystem path": "unique subapp identifier"
            "/rainbow/home/": "home",
            "/rainbow/contact/": "contact",

            "/subapp1/test-page-1/": "test1",
            "/subapp1/test-page-2/": "test2",

            "/invalid/invalid/": "invalid"
        },

    }
    TroutJS.launch(app)
});
