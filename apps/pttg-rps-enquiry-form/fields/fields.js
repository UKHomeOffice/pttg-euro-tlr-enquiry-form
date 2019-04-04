const dateComponent = require('hof-component-date');

module.exports = {
    'your-question-option': {
        mixin: 'radio-group',
        options: [
            {
                value: 'eligibility'
            },
            {
                value: 'how-to-apply',
                child: 'partials/radio-group-option-explanation'
            },
            {
                value: 'change-or-withdraw',
                child: 'partials/radio-group-option-explanation',
            },
            {
                value: 'application-result',
                child: 'partials/radio-group-option-explanation'
            },
            {
                value: 'supporting-organisation',
                child: 'partials/radio-group-option-explanation'
            }
        ],
        validate: 'required'
    },
    'your-email-address': {
        mixin: 'input-text',
        validate: ['required', 'email', {
            type: 'maxlength',
            arguments: '254'
        }]
    },
    'applicant-email-address': {
        mixin: 'input-text',
        validate: ['required', 'email', {
            type: 'maxlength',
            arguments: '254'
        }]
    },
    'nationality': {
        mixin: 'select',
        options: [{label: ' ', value: ''}].concat(require('hof-util-countries')())
    },
    'phone-number': {
        formatter: 'removespaces',
        mixin: 'input-phone',
        validate: 'phonenumber'
    },
    'application-number': {
        mixin: 'input-text',
        validate: [
            'required',
            {
                type: 'maxlength',
                arguments: '25'
            }
        ]
    },
    'question-body': {
        mixin: 'textarea',
        validate: [
            'required', {
                type: 'maxlength',
                arguments: '2000'
            }
        ],
        attributes: [{
            attribute: 'rows',
            value: 8
        }]
    },
    'your-name': {
        mixin: 'input-text',
        validate: ['required', {
            type: 'maxlength',
            arguments: '255'
        }]
    },
    'organisation-name': {
        mixin: 'input-text',
        validate: ['required', {
            type: 'maxlength',
            arguments: '255'
        }]
    },
    'applicant-full-name': {
        mixin: 'input-text',
        validate: ['required', {
            type: 'maxlength',
            arguments: '255'
        }]
    },
    'existing-application': {
        mixin: 'radio-group',
        className: ['inline'],
        options: ['yes', 'no'],
        validate: 'required',
        legend: {
            className: 'visually-hidden' // margin also changed in app.scss
        }
    },
    'date-of-birth': dateComponent('date-of-birth', {
        validate: [
            {type: 'before'},
            {type: 'after', arguments: '1903-01-01'},
            {type: 'date'}
        ]
    })
};
