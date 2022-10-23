
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
})
