module.exports = {
    env: process.env.NODE_ENV || 'development',
    loglevel: process.env.LOG_LEVEL || 'info',
    notify: {
        apiKey: process.env.NOTIFY_API_KEY || 'callbacktest-9eafa895-b7f4-487f-b4fa-8cb3a6796132-817b0178-02ff-45e9-9da2-df251b9c79b2',
        templates: {
            organisation: {
                general: process.env.NOTIFY_TEMPLATE_ORG_GENERAL || '4fdc0fd3-31f6-447c-9184-ddfcd5042f42',
                application: process.env.NOTIFY_TEMPLATE_ORG_APP || '6e20e03e-0fff-4202-be11-0478aa502b42'
            },
            individual: {
                general: process.env.NOTIFY_TEMPLATE_IND_GENERAL || '9867fbb4-3c0c-4377-a57c-be2929e2e2f6',
                application: process.env.NOTIFY_TEMPLATE_IND_APP || '85ea4e91-ecaf-4447-b6dc-1cfd245d8dbc'
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
        host: process.env.REDIS_SERVICE_HOST || process.env.REDIS_HOST || 'localhost',
        port: process.env.REDIS_SERVICE_PORT || process.env.REDIS_PORT || 6379,
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
