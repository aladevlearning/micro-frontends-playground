import { Injectable } from '@angular/core';
import { GetPaymentQuery, ListPaymentsQuery, Payment } from 'src/PaymentsAPI';
import { GraphQLResult } from '@aws-amplify/api';
import { API, Auth } from 'aws-amplify';
import * as queries from '../../graphql/queries';

@Injectable({
  providedIn: 'root',
})
export class PaymentsService {
  constructor() {}

  async getPayments() {
    const data = await Auth.signIn('guest', 'awsguest');
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
    const response = (await API.graphql({
      query: queries.getPayment,
      variables: { id },
    })) as GraphQLResult<GetPaymentQuery>;

    return response?.data?.getPayment;
  }
}
