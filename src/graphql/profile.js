export const USER_INFO_QUERY = /* GraphQL */ `
query {
  user_info: user {
    attrs
  }
  xp_amount: transaction_aggregate(
    where: { type: { _eq: "xp" }, event: { path: { _eq: "/dakar/div-01" } } }
  ) {
    aggregate {
      sum {
        amount
      }
    }
  }
}
`
