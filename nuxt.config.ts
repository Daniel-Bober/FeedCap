export default defineNuxtConfig({
    head: {
        title: 'FeedCap',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            {
                hid: 'description',
                name: 'description',
                content: 'my website description'
            }
        ],
        // link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
    },
    ssr: false,
    target: 'static',
    // router: {
    //     base: '/FeedCap/'
    // },
    app: {
      baseURL: '/FeedCap/',
        cdnURL: './',
        buildAssetsDir: '/_nuxt'
    },
    css: ["@/assets/style/main.scss"],
    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData:
                        '@import "@/assets/style/variables.scss"; ' +
                        '@import "@/assets/style/mixins.scss";',
                },
            },
        },
    },
    modules: [
        [
            '@pinia/nuxt',
            {
                autoImports: [
                    'defineStore',
                    ['defineStore', 'definePiniaStore'],
                ],
            },
        ],
    ],
    runtimeConfig: {
        firestoreSecretKey: process.env.FIREBASE_API_KEY,
        sendGridSecretKey: process.env.SENDGRID_API_KEY,
        public: {
            firestoreBaseKey: process.env.FIREBASE_API_KEY,
            sendGridBaseKey: process.env.SENDGRID_API_KEY,
        }
    },
})
