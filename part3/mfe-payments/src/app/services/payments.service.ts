import { Injectable } from '@angular/core';
import {
  CreatePaymentMutation,
  DeletePaymentInput,
  DeletePaymentMutation,
  GetPaymentQuery,
  ListPaymentsQuery,
  Payment,
} from 'src/PaymentsAPI';
import { GraphQLResult } from '@aws-amplify/api';
import { API, Auth } from 'aws-amplify';
import * as queries from '../../graphql/queries';
import * as mutations from '../../graphql/mutations';

@Injectable({
  providedIn: 'root',
})
export class PaymentsService {
  constructor() {}

  // tslint:disable-next-line:typedef
  async getPayments() {
    const tenantId = await this.getTenantId();

    const response = (await API.graphql({
      query: queries.listPayments,
      variables: {
        filter: {
          tenantId: {
            eq: tenantId,
          },
        },
      },
    })) as GraphQLResult<ListPaymentsQuery>;

    return response?.data?.listPayments?.items;
  }

  async getPaymentById(id: string | undefined) {
    if (!id) {
      return Promise.resolve();
    }

    const data = await Auth.signIn('guest', 'awsguest');

    const response = (await API.graphql({
      query: queries.getPayment,
      variables: { id },
    })) as GraphQLResult<GetPaymentQuery>;

    return response?.data?.getPayment;
  }

  async getTenantId() {
    const currentUserInfo = await Auth.currentUserInfo();
    const tenantId = currentUserInfo.attributes['custom:tenantId'];
    return tenantId;
  }

  async createPayment(payment: Payment) {
    const tenantId = await this.getTenantId();
    payment.tenantId = tenantId;

    const response = (await API.graphql({
      query: mutations.createPayment,
      variables: {
        input: payment,
      },
    })) as GraphQLResult<CreatePaymentMutation>;

    return response?.data;
  }

  async deletePaymentById(id: string | undefined) {
    if (!id) {
      return Promise.resolve();
    }

    const tenantId = await this.getTenantId();

    const response = (await API.graphql({
      query: mutations.deletePayment,
      variables: {
        input: {
          id,
        },
      },
    })) as GraphQLResult<DeletePaymentMutation>;

    return response?.data;
  }
}
