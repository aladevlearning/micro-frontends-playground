/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreatePayment = /* GraphQL */ `
  subscription OnCreatePayment($tenantId: String!) {
    onCreatePayment(tenantId: $tenantId) {
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
    }
  }
`;
export const onUpdatePayment = /* GraphQL */ `
  subscription OnUpdatePayment($tenantId: String!) {
    onUpdatePayment(tenantId: $tenantId) {
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
    }
  }
`;
export const onDeletePayment = /* GraphQL */ `
  subscription OnDeletePayment($tenantId: String!) {
    onDeletePayment(tenantId: $tenantId) {
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
    }
  }
`;
