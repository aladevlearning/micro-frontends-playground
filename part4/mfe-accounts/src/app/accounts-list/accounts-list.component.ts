import { FlatTreeControl } from '@angular/cdk/tree';
import { Component, OnInit } from '@angular/core';
import {
  MatTreeFlatDataSource,
  MatTreeFlattener,
} from '@angular/material/tree';
import { API, Auth } from 'aws-amplify';

enum AccountType {
  DOMESTIC = 'domestic',
  INTERNATIONAL = 'international',
}

type Account = {
  id: number;
  nickname: string;
  balance: number;
  type: AccountType;
  account_number: string;
};

/**
 * Food data with nested structure.
 * Each node has a name and an optional list of children.
 */
interface AccountNode {
  name: string;
  children?: AccountNode[];
}

/** Flat node with expandable and level information */
interface ExampleFlatNode {
  expandable: boolean;
  name: string;
  level: number;
}

@Component({
  selector: 'app-accounts-list',
  templateUrl: './accounts-list.component.html',
  styleUrls: ['./accounts-list.component.scss'],
})
export class AccountsListComponent implements OnInit {
  accounts: Account[] = [];
  isLoading = true;

  async ngOnInit() {
    const user = await Auth.signIn('userTenantA', 'passwordA');
    const accounts = await API.get('accountsAPI', '/accounts', {});
    this.isLoading = false;
    this.accounts = accounts;

    const domesticAccounts: AccountNode[] = this.getAccountNumbers(
      AccountType.DOMESTIC
    );
    const internationalAccounts: AccountNode[] = this.getAccountNumbers(
      AccountType.INTERNATIONAL
    );

    this.dataSource.data = [
      {
        name: 'Domestic',
        children: domesticAccounts,
      },
      {
        name: 'International',
        children: internationalAccounts,
      },
    ];
  }

  private getAccountNumbers = (type: AccountType) => {
    return this.accounts
      .filter((account: Account) => {
        return account.type === type;
      })
      .map((domesticAccount: Account) => {
        return {
          name: domesticAccount.account_number,
        };
      });
  };
  // tslint:disable-next-line:variable-name
  private _transformer = (node: AccountNode, level: number) => {
    return {
      expandable: !!node.children && node.children.length > 0,
      name: node.name,
      level,
    };
  };

  // tslint:disable-next-line:member-ordering
  treeControl = new FlatTreeControl<ExampleFlatNode>(
    (node) => node.level,
    (node) => node.expandable
  );

  // tslint:disable-next-line:member-ordering
  treeFlattener = new MatTreeFlattener(
    this._transformer,
    (node) => node.level,
    (node) => node.expandable,
    (node) => node.children
  );

  // tslint:disable-next-line:member-ordering
  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

  hasChild = (_: number, node: ExampleFlatNode) => node.expandable;
}
