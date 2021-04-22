/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getPayment = /* GraphQL */ `
  query GetPayment($id: ID!) {
    getPayment(id: $id) {
      id
      amount
      currency
      dueDate
      from_account
      to_account
      message
      type
      tenantId
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listPayments = /* GraphQL */ `
  query ListPayments(
    $filter: ModelPaymentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPayments(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        amount
        currency
        dueDate
        from_account
        to_account
        message
        type
        tenantId
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
