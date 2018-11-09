import gql from 'graphql-tag';

export const LOGIN_MUTATION = gql`
  mutation LoginMutation($email: String!, $password: String!) {
    login(
      input: {
        tenantId: "4a251be7c5e164f1bcc45902940894b8"
        usernameOrEmail: $email
        password: $password
      }
    ) {
      ok
      token
      user {
        #id
        first_name
        last_name
        full_name
        email
        created_at
        suspended
        suspended_at
        manager {
          id
        }
      }
    }
  }
`;
