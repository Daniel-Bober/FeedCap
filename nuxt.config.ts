
export default defineNuxtConfig({
    ssr: false,
    css: ["~/assets/style/main.scss"],
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
        // [
        //     '@nuxtjs/firebase',
        //     {
        //         config: {
        //             firebaseConfig: {
        //                 apiKey: "AIzaSyAN7Za7vxiJibO2QpD1in0UIRuwqTJLUN4",
        //                 authDomain: "feedcap.firebaseapp.com",
        //                 projectId: "feedcap",
        //                 storageBucket: "feedcap.appspot.com",
        //                 messagingSenderId: "389528107111",
        //                 appId: "1:389528107111:web:b2ae49eb1416ac4f6d7cc2",
        //             }
        //         },
        //         services: {
        //             auth: true,
        //         }
        //     }
        // ],

    ]
})
