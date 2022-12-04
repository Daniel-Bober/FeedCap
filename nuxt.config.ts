export default defineNuxtConfig({
    ssr: false,
    target: 'static',
    router: {
        base: '/FeedCap/'
    },
    css: ["@/assets/style/main.scss"],
    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData:
                        '@import "~/assets/style/variables.scss"; ' +
                        '@import "~/assets/style/mixins.scss";',
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
        apiSecret: process.env.FIREBASE_API_KEY,
        public: {
            apiBase: process.env.FIREBASE_API_KEY,
        }
    },
})
