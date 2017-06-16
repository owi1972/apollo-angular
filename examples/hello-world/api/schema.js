import casual from 'casual';



/*
http://localhost:4300/graphiql
type Query {
  users(name: String): [User]
}
>>>>>>>>>>>>>>>>>>>>>>>>
{
  users {
    lastName
  	email
    emails  {
    	address
    }
  }
}
>>>>>>>>>>>>>>>>>>>>>>
{
  blogs{
    route
    date
		desc
    title
    abstract
    blog
    tags
  }
}
*/

export const schema = [`
type Email {
  address: String
  verified: Boolean
}
type User {
  emails: [Email]
  firstName: String
  lastName: String
  email: String
}
type Blog {
  route: String
  date: String
  desc: String
  title: String
  abstract: String
  blog: String
  tags: [String]
  comments: [Comment]
}
type Comment {
  route: String
  date: String
  nickname: String
  email: String
  comment: String
  photo: String
}
type Query {
  users(name: String): [User]
  cats(name: String): [User]
  blogs(route: String): [Blog]
}
type Mutation {
  addUser(
    firstName: String!
    lastName: String!
  ): User
}
schema {
  query: Query
  mutation: Mutation
}
`];

casual.define('user', () => {
	return {
		firstName: casual.first_name,
		lastName: casual.last_name,
    email: casual.email,
    emails: [{
      address: casual.email,
      verified: true,
    }]
	};
});

casual.define('blog', () => {
  const blog_route = casual.uuid;
	return {
      route: blog_route,
      date: casual.date('YYYY-MM-DD'),
      desc: casual.description,
      title: casual.catch_phrase,
      abstract: casual.address1,
      blog: casual.company_name,
      tags: [ casual.card_type ],
      comments: [
        {
        route: blog_route,
        date: casual.date('YYYY-MM-DD'),
        nickname: casual.color_name,
        email: casual.email,
        comment: casual._address,
        photo: casual._city
      },
      {
        route: blog_route,
        date: casual.date('YYYY-MM-DD'),
        nickname: casual.color_name,
        email: casual.email,
        comment: casual._address,
        photo: casual._city
      }
      ]
	};
});

export const resolvers = {
  Query: {
    users(root, args) {
      const data = [];
      for (let i = 0; i < 5; i++) {
        data.push(casual.user);
      }
      return data;
    },
    cats(root, args) {
      const data = [];
      for (let i = 0; i < 5; i++) {
        data.push(casual.user);
      }
      return data;
    },
    blogs(root, args) {
      const data = [];
      for (let i = 0; i < 5; i++) {
        data.push(casual.blog);
      }
      return data;
    },
  },
  User: {
    emails: () => casual.user.emails,
    firstName: ({firstName}) => firstName || casual.user.firstName,
    lastName: ({lastName}) => lastName || casual.user.lastName,
    email: ({email}) => email || casual.user.email,
  },
  Blog: {
    route: ({route}) => route || casual.blog.route,
    date: ({date}) => date || casual.blog.date,
    desc: ({desc}) => desc || casual.blog.desc,
  },
  Mutation: {
    addUser: (_, { firstName, lastName }) => {
      const user = casual.user;

      user.firstName = firstName;
      user.lastName = lastName;

      return user;
    },
  },
};
