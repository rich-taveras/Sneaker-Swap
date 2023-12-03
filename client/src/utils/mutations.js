import {gql} from '@apollo/client'

export const ADD_USER=gql`
mutation AddUser($firstName: String!, $lastName: String!, $email: String!, $password: String!) {
  addUser(firstName: $firstName, lastName: $lastName, email: $email, password: $password) {
    user {
      firstName
      lastName
      email
      
    }
    token
  }
}
`
export const LOGIN=gql`
mutation Login($email: String!, $password: String!) {
  login(email: $email, password: $password) {
    token
  }
}
`

// export const SAVE_SHOE=gql`
// mutation SaveShoe($shoe: ShoeInput!) {
//     saveShoe(shoe: $shoe) {
//       savedShoe {
//         title
//       }
//     }
//   }
// `

// export const REMOVE_SHOE=gql`
// mutation RemoveShoe($shoeId: String!) {
//     removeShoe(shoeId: $shoeId) {
//       
//     }
//   }
// `