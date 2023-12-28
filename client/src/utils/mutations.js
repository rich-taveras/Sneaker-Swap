import { gql } from '@apollo/client';

<<<<<<< HEAD
export const ADD_USER = gql`
  mutation addUser(
    $firstName: String!
    $lastName: String!
    $email: String!
    $password: String!
  ) {
    addUser(
      firstName: $firstName
      lastName: $lastName
      email: $email
      password: $password
    ) {
=======
export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
>>>>>>> 0b6f354e6ec9a6a759b5adf7330cf41fe05afd3e
      token
      user {
        _id
      }
    }
  }
`;

<<<<<<< HEAD
export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
=======
export const ADD_ORDER = gql`
  mutation addOrder($products: [ID]!) {
    addOrder(products: $products) {
      purchaseDate
      products {
        _id
        name
        description
        price
        quantity
        category {
          name
        }
>>>>>>> 0b6f354e6ec9a6a759b5adf7330cf41fe05afd3e
      }
    }
  }
`;

<<<<<<< HEAD
export const ADD_ORDER = gql`
  mutation addOrder($products: [ID]!) {
    addOrder(products: $products) {
      purchaseDate
      products {
        _id
        name
        description
        price
        quantity
        category {
          name
        }
=======
export const ADD_USER = gql`
  mutation addUser(
    $firstName: String!
    $lastName: String!
    $email: String!
    $password: String!
  ) {
    addUser(
      firstName: $firstName
      lastName: $lastName
      email: $email
      password: $password
    ) {
      token
      user {
        _id
>>>>>>> 0b6f354e6ec9a6a759b5adf7330cf41fe05afd3e
      }
    }
  }
`;