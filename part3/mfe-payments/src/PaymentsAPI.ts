/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreatePaymentInput = {
  id?: string | null,
  amount: number,
  currency: string,
  dueDate: string,
  from_account: string,
  to_account: string,
  message?: string | null,
  type: PaymentType,
  tenantId: string,
};

export enum PaymentType {
  DOMESTIC = "DOMESTIC",
  INTERNATIONAL = "INTERNATIONAL",
}


export type ModelPaymentConditionInput = {
  amount?: ModelFloatInput | null,
  currency?: ModelStringInput | null,
  dueDate?: ModelStringInput | null,
  from_account?: ModelStringInput | null,
  to_account?: ModelStringInput | null,
  message?: ModelStringInput | null,
  type?: ModelPaymentTypeInput | null,
  and?: Array< ModelPaymentConditionInput | null > | null,
  or?: Array< ModelPaymentConditionInput | null > | null,
  not?: ModelPaymentConditionInput | null,
};

export type ModelFloatInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelPaymentTypeInput = {
  eq?: PaymentType | null,
  ne?: PaymentType | null,
};

export type Payment = {
  __typename: "Payment",
  id?: string,
  amount?: number,
  currency?: string,
  dueDate?: string,
  from_account?: string,
  to_account?: string,
  message?: string | null,
  type?: PaymentType,
  tenantId?: string,
  createdAt?: string,
  updatedAt?: string,
};

export type UpdatePaymentInput = {
  id: string,
  amount?: number | null,
  currency?: string | null,
  dueDate?: string | null,
  from_account?: string | null,
  to_account?: string | null,
  message?: string | null,
  type?: PaymentType | null,
  tenantId?: string | null,
};

export type DeletePaymentInput = {
  id?: string | null,
};

export type ModelPaymentFilterInput = {
  id?: ModelIDInput | null,
  amount?: ModelFloatInput | null,
  currency?: ModelStringInput | null,
  dueDate?: ModelStringInput | null,
  from_account?: ModelStringInput | null,
  to_account?: ModelStringInput | null,
  message?: ModelStringInput | null,
  type?: ModelPaymentTypeInput | null,
  tenantId?: ModelIDInput | null,
  and?: Array< ModelPaymentFilterInput | null > | null,
  or?: Array< ModelPaymentFilterInput | null > | null,
  not?: ModelPaymentFilterInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelPaymentConnection = {
  __typename: "ModelPaymentConnection",
  items?:  Array<Payment | null > | null,
  nextToken?: string | null,
};

export type CreatePaymentMutationVariables = {
  input?: CreatePaymentInput,
  condition?: ModelPaymentConditionInput | null,
};

export type CreatePaymentMutation = {
  createPayment?:  {
    __typename: "Payment",
    id: string,
    amount: number,
    currency: string,
    dueDate: string,
    from_account: string,
    to_account: string,
    message?: string | null,
    type: PaymentType,
    tenantId: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdatePaymentMutationVariables = {
  input?: UpdatePaymentInput,
  condition?: ModelPaymentConditionInput | null,
};

export type UpdatePaymentMutation = {
  updatePayment?:  {
    __typename: "Payment",
    id: string,
    amount: number,
    currency: string,
    dueDate: string,
    from_account: string,
    to_account: string,
    message?: string | null,
    type: PaymentType,
    tenantId: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeletePaymentMutationVariables = {
  input?: DeletePaymentInput,
  condition?: ModelPaymentConditionInput | null,
};

export type DeletePaymentMutation = {
  deletePayment?:  {
    __typename: "Payment",
    id: string,
    amount: number,
    currency: string,
    dueDate: string,
    from_account: string,
    to_account: string,
    message?: string | null,
    type: PaymentType,
    tenantId: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetPaymentQueryVariables = {
  id?: string,
};

export type GetPaymentQuery = {
  getPayment?:  {
    __typename: "Payment",
    id: string,
    amount: number,
    currency: string,
    dueDate: string,
    from_account: string,
    to_account: string,
    message?: string | null,
    type: PaymentType,
    tenantId: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListPaymentsQueryVariables = {
  filter?: ModelPaymentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPaymentsQuery = {
  listPayments?:  {
    __typename: "ModelPaymentConnection",
    items?:  Array< {
      __typename: "Payment",
      id: string,
      amount: number,
      currency: string,
      dueDate: string,
      from_account: string,
      to_account: string,
      message?: string | null,
      type: PaymentType,
      tenantId: string,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type OnCreatePaymentSubscriptionVariables = {
  tenantId?: string,
};

export type OnCreatePaymentSubscription = {
  onCreatePayment?:  {
    __typename: "Payment",
    id: string,
    amount: number,
    currency: string,
    dueDate: string,
    from_account: string,
    to_account: string,
    message?: string | null,
    type: PaymentType,
    tenantId: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdatePaymentSubscriptionVariables = {
  tenantId?: string,
};

export type OnUpdatePaymentSubscription = {
  onUpdatePayment?:  {
    __typename: "Payment",
    id: string,
    amount: number,
    currency: string,
    dueDate: string,
    from_account: string,
    to_account: string,
    message?: string | null,
    type: PaymentType,
    tenantId: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeletePaymentSubscriptionVariables = {
  tenantId?: string,
};

export type OnDeletePaymentSubscription = {
  onDeletePayment?:  {
    __typename: "Payment",
    id: string,
    amount: number,
    currency: string,
    dueDate: string,
    from_account: string,
    to_account: string,
    message?: string | null,
    type: PaymentType,
    tenantId: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};
