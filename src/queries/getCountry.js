import { gql } from 'graphql-tag';

export const GET_COUNTRY_QUERY = gql`
  query getCountry($ip: String!) {
    location(ip: $ip) {
      country
      holidays {
        country
        name
        date
        desc
      }
    }
  }
`;
