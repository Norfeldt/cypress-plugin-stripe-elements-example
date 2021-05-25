import React from 'react'

describe('testing typescript', () => {
  it('auto suggest the field names', () => {
    cy.fillElementsInput('')
  })
})

// node_modules/cypress-plugin-stripe-elements/index.d.ts
//
// declare module 'cypress-plugin-stripe-elements' {
//   export type CypressStripeElementsFieldName =
//     | 'cardCvc'
//     | 'cardNumber'
//     | 'cardExpiry'
//     | 'postalCode'
//     | string
// }

// declare namespace Cypress {
//   interface Chainable {
//     /**
//      * Custom command to select DOM element by data-cy attribute.
//      * @example cy.dataCy('greeting')
//      */
//     fillElementsInput(field: CypressStripeElementsFieldName, value: string): Chainable<Element>
//   }
// }
//

// PATCH
// declare module 'cypress-plugin-stripe-elements' {
//   export type CypressStripeElementsFieldName =
//     | 'cardCvc'
//     | 'cardNumber'
//     | 'cardExpiry'
//     | 'postalCode'
//     | string
// }

// declare namespace Cypress {
//   type CypressStripeElementsFieldName = 'cardCvc' | 'cardNumber' | 'cardExpiry' | 'postalCode'

//   interface Chainable {
//     /**
//      * Custom command to select DOM element by data-cy attribute.
//      * @example cy.dataCy('greeting')
//      */

//     fillElementsInput(field: CypressStripeElementsFieldName, value: string): Chainable<Element>
//   }
// }
