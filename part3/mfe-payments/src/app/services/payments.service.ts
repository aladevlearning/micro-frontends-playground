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
    const data = await Auth.signIn('guest', 'awsguest');
    const cs: any = await Auth.currentSession();
    console.log('idToken:', cs.idToken);

    const response = (await API.graphql({
      query: queries.listPayments,
    })) as GraphQLResult<ListPaymentsQuery>;

    return response?.data?.listPayments?.items;
  }

  async getPaymentById(id: string | undefined) {
    if (!id) {
      return Promise.resolve();
    }

    const data = await Auth.signIn('guest', 'awsguest');
    const cs: any = await Auth.currentSession();
    console.log('idToken:', cs.idToken);

    const response = (await API.graphql({
      query: queries.getPayment,
      variables: { id },
    })) as GraphQLResult<GetPaymentQuery>;

    return response?.data?.getPayment;
  }

  async createPayment(payment: Payment) {
    const data = await Auth.signIn('guest', 'awsguest');
    const cs: any = await Auth.currentSession();
    console.log('idToken:', cs.idToken);

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

    const data = await Auth.signIn('guest', 'awsguest');
    const cs: any = await Auth.currentSession();
    console.log('idToken:', cs.idToken);

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
