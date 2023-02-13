// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app : {
        head : {
            title : 'HD',
            meta : [
                {name : 'description', content : 'HD First Nuxt 3 App'}
            ],
            link : [
                { rel : 'stylesheet', href : ''}
            ]
        }
    },
    // modules
    modules: [
        '@nuxtjs/tailwindcss'
    ]
})
