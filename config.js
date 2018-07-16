/* eslint no-process-env: 0 */

const env = {
    asString: (varName, defaultValue) => {
        return process.env[varName] || defaultValue;
    },
    asBoolean: (varName, defaultValue) => {
        const value = process.env[varName];
        if (!value) {
            return defaultValue;
        }

        switch (value.toUpperCase()) {
        case 'TRUE': return true;
        case 'FALSE': return false;
        default: return defaultValue;
        }
    }
};

module.exports = {
    env: process.env.NODE_ENV || 'development',
    loglevel: process.env.LOG_LEVEL || 'info',
    notify: {
        apiKey: process.env.NOTIFY_API_KEY || '',
        templates: {
            userConfirmation: process.env.NOTIFY_TEMPLATE_USER_CONFIRMATION || '',
            enquirySupport: process.env.NOTIFY_TEMPLATE_ENQUIRY_SUPPORT || ''
        }
    },
    email: {
        transport: 'smtp',
        transportOptions: {
            host: env.asString('SMTP_SERVER', 'localhost'),
            port: env.asString('SMTP_PORT', '25'),
            secure: env.asBoolean('SMTP_SECURE', true),
            auth: {
                user: env.asString('SMTP_USERNAME', ''),
                pass: env.asString('SMTP_PASSWORD', '')
            }
        },
        from: 'enquiry-confirmation@homeoffice.gov.uk'
    }
};
