//  This file was automatically generated and should not be edited.
/* tslint:disable */

export interface AddUserMutationVariables {
  firstName: string;
  lastName: string;
}

export interface AddUserMutation {
  addUser: {
    firstName: string | null,
    lastName: string | null,
    emails: Array< {
      address: string | null,
      verified: boolean | null,
    } > | null,
  } | null;
}

export interface BlogsQueryVariables {
  route: string | null;
}

export interface BlogsQuery {
  blogs: Array< {
    route: string | null,
    date: string | null,
    desc: string | null,
    title: string | null,
    abstract: string | null,
    blog: string | null,
    tags: Array< string | null > | null,
    comments: Array< {
      route: string | null,
      date: string | null,
      nickname: string | null,
      email: string | null,
      comment: string | null,
      photo: string | null,
    } > | null,
  } > | null;
}

export interface UsersQueryVariables {
  name: string | null;
}

export interface UsersQuery {
  users: Array< {
    firstName: string | null,
    lastName: string | null,
    email: string | null,
    emails: Array< {
      address: string | null,
      verified: boolean | null,
    } > | null,
  } > | null;
}
/* tslint:enable */
