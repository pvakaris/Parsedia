import client from 'client';
// this is showing you how you use it with react for example
// if your using node or something else you can import using
// @apollo/client/core!
import { gql } from '@apollo/client'

const RECOMMENDED_PROFILES = `
  query {
    recommendedProfiles {
        id
        name
        attributes {
            displayType
            traitType
            key
            value
        }
        picture {
          ... on MediaSet {
            original {
              url
            }
          }
        }
        handle
        ownedBy
        dispatcher {
          address
          canUseRelay
        }
        stats {
          totalFollowers
          totalFollowing
          totalPosts
          totalComments
          totalMirrors
          totalPublications
          totalCollects
        }
    }
  }
`

// Function to get recommended profiles from the server
// Returns a promise that resolves to an array of profiles
export const getRecommendedProfiles = () => {
  return client.query({
    query: gql(RECOMMENDED_PROFILES),
  })
}