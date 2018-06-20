'use strict';

module.exports = {
  'do-you-have-existing-enquiry': {
    mixin: 'radio-group',
    options: [{
      value: 'yes',
      toggle: 'have-existing-enquiry-toggle-content',
      child: 'partials/enter-contact-reference-number'
    }, {
      value: 'no'
    }],
    validate: 'required'
  },
  'submitted-application': {
    mixin: 'radio-group',
    options: ['yes', 'no'],
    validate: 'required'
  },
  'enter-contact-reference-number': {
    mixin: 'input-text'
  },
  'liveapp-or-decision': {
    mixin: 'radio-group',
    options: ['yes', 'no'],
    validate: 'required'
  },
  'have-you-started-application': {
    mixin: 'radio-group',
    options: ['yes', 'no'],
    validate: 'required'
  }
};
