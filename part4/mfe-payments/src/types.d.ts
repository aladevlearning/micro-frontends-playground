declare module 'graphql/language/ast' {
  export type DocumentNode = any;
}

declare module 'graphql/error/GraphQLError' {
  // tslint:disable-next-line:no-empty-interface
  export interface GraphQLError {}
}
