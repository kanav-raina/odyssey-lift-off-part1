const {gql} = require('apollo-server')

const typeDefs =gql`

type Query{
    tracksForHome:[Track!]!
    track(id:ID!):Track
}

type Track {
    id:ID!
    title:String!
    author:Author!
    thumbnail:String
    length:Int
    modulesCount:Int
    description:String
    numberOfViews:Int
    modules:[Module!]!
}

type Module{
    id:ID!
    title:String!
    length:Int
}

type Author{
    id:ID!
    name:String!
    photo:String
}
`
module.exports=typeDefs