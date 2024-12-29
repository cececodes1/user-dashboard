import { gql } from '@apollo/client';

export const GET_USER_DATA = gql`
  query GetUser {
    user {
      name
      email
      address {
        street
        city
      }
      phone
      website
      company {
        name
      }
      posts {
        id
        title
        body
        comments {
          id
          body
        }
      }
      albums {
        id
        title
        photos {
          url
        }
      }
      todos {
        id
        title
        completed
      }
    }
  }
`;
