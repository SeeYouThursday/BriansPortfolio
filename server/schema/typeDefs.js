const typeDefs = `
type Contact {
    _id: ID
    email: String
    name: String
    message: String
}

type Query {
    messages: Contact
}

type Mutation {
    contactMe(email: String, name: String, message: String): Contact
}`;

export default typeDefs;
