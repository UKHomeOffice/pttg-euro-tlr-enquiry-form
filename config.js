module.exports = {
    env: process.env.NODE_ENV || 'development',
    loglevel: process.env.LOG_LEVEL || 'info',
    notify: {
        apiKey: process.env.NOTIFY_API_KEY || 'callbacktest-9eafa895-b7f4-487f-b4fa-8cb3a6796132-817b0178-02ff-45e9-9da2-df251b9c79b2',
        templates: {
            organisation: {
                general: process.env.NOTIFY_TEMPLATE_ORG_GENERAL || 'a9d8c4b9-d315-4d65-a5d1-619a32169930',
                application: process.env.NOTIFY_TEMPLATE_ORG_APP || '71baf484-76e7-4ee1-ae1c-18d8d56d152e'
            },
            individual: {
                general: process.env.NOTIFY_TEMPLATE_IND_GENERAL || '6bf9f478-41c1-4d1f-b9ea-4aef4b84578e',
                application: process.env.NOTIFY_TEMPLATE_IND_APP || '5d1ba7f1-f9a6-4d54-bae7-367bd4252033'
            }
        },
        recipient: process.env.NOTIFY_RECIPIENT || 'simulate-delivered@notifications.service.gov.uk'
    },
    theme: 'govuk',
    routes: [
        './apps/pttg-euro-tlr-enquiry-form'
    ],
    'session': {
        'name': 'pttg-euro-tlr-enquiry-form.hof.sid',
        // NODE_ENV is set by drone during deployments. Leave unset or not equal to 'production' for local develompent
        // so that cookie (and therefore session) works over HTTP
        cookie: {secure: (process.env.NODE_ENV === 'production')}
    },
    redis: {
        host: process.env.REDIS_HOST || 'localhost',
        port: process.env.REDIS_PORT || 6379,
        password: process.env.REDIS_PASSWORD || null
    },
    gaTagId: process.env.GOOGLE_ANALYTICS_UA || 'UA-84737854-3',
    gaCrossGovId: process.env.GOOGLE_ANALYTICS_SECONDARY_UA || 'UA-145652997-1',
    bearerToken: process.env.NOTIFY_BEARER_TOKEN,
    slackWebhookURL: process.env.SLACK_WEBHOOK_URL,
    slackChannelName: process.env.SLACK_CHANNEL_NAME,
    getCookies: false,
    getTerms: false
};
