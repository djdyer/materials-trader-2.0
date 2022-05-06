import { gql } from "@apollo/client";


export const QUERY_USER = gql`
  query user($_id: ID!) {
    user(_id: $_id) {
        _id
        userName
        email
        listings_id
    }
  }
`;

export const QUERY_ME = gql`
  query user {
    me {
        _id
        userName
        email
        listings_id 
    }   
  }
`;

export const QUERY_COMMENTS = gql`
query comments {
    comments {
      _id
      comment
      user_Id {
        _id
        userName
      }
    }
  }
`;

export const QUERY_LISTINGS = gql`
query listings {
    listings {
        _id
        description
        amount
        location
        user_Id {
            _id
            userName
            email
        }
        materials_Id {
            _id
            material
            hazardous
        }
        comments_Id {
            _id
            comment
            user_Id {
                _id
                userName
            }
        }
    }
}
`;