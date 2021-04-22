/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createPayment = /* GraphQL */ `
  mutation CreatePayment(
    $input: CreatePaymentInput!
    $condition: ModelPaymentConditionInput
  ) {
    createPayment(input: $input, condition: $condition) {
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
export const updatePayment = /* GraphQL */ `
  mutation UpdatePayment(
    $input: UpdatePaymentInput!
    $condition: ModelPaymentConditionInput
  ) {
    updatePayment(input: $input, condition: $condition) {
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
export const deletePayment = /* GraphQL */ `
  mutation DeletePayment(
    $input: DeletePaymentInput!
    $condition: ModelPaymentConditionInput
  ) {
    deletePayment(input: $input, condition: $condition) {
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
