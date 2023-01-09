import sgMail from "@sendgrid/mail";


export default defineNuxtPlugin((nuxtApp) => {
    const config = useRuntimeConfig();
    // const sgMail = require('@sendgrid/mail')
    sgMail.setApiKey(config.public.sendGridBaseKey)

    nuxtApp.provide('sgMail', sgMail);
});

