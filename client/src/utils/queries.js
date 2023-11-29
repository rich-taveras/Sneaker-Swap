import { gql } from '@apollo/client';

export const QUERY_PRODUCTS = gql`
query Products($category: ID) {
  products(category: $category) {
    _id
    brand
    category {
      name
    }
    image
    model
    price
    size
  }
}
`;

export const QUERY_CHECKOUT = gql`
  query getCheckout($products: [ProductInput]) {
    checkout(products: $products) {
      session
    }
  }
`;

export const QUERY_ALL_PRODUCTS = gql`
query Products($category: ID) {
  products(category: $category) {
    _id
    brand
    category {
      name
    }
    image
    model
    price
    size
  }
}
`;

export const QUERY_CATEGORIES = gql`
query Categories {
  categories {
    _id
    name
  }
}
`;

export const QUERY_USER = gql`
query User {
  user {
    _id
    email
    firstName
    orders {
      _id
      products {
        model
        brand
        price
        size
      }
    }
  }
}
`;
