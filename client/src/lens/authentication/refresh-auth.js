import client from 'client';
import { gql } from '@apollo/client'

// Following functions use client to make graphql queries and mutations directly to the server


const REFRESH_AUTHENTICATION = `
  mutation($request: RefreshRequest!) { 
    refresh(request: $request) {
      accessToken
      refreshToken
    }
 }
`

// Refresh authentication function to refresh the authentication token
// @Param refreshToken: refresh token of the user
export const refreshAuth = (refreshToken) => {
  return client.mutate({
    mutation: gql(REFRESH_AUTHENTICATION),
    variables: {
      request: {
        refreshToken,
      },
    },
  })
}