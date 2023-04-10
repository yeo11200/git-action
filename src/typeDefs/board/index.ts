export default `#graphql
  type BoardQuery {
    id: ID!
    title: String
    content: String
    date: String!
  }

  type Query {
    getBoardList: [BoardQuery]
    getBoardDetail(id: ID): BoardQuery
  }

  input BoardInputQuery {
    title: String
    content: String
  }

  type boardCreateResult {
    success: Boolean
  }

  type Mutation {
    boardCreate(input: BoardInputQuery): boardCreateResult!
  }
`