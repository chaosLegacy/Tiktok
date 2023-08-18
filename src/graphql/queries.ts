/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      name
      username
      email
      avatar
      posts {
        items {
          id
          videoUri
          description
          userID
          songID
          createdAt
          updatedAt
          __typename
        }
        nextToken
        scannedCount
        count
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        username
        email
        avatar
        posts {
          nextToken
          scannedCount
          count
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      scannedCount
      count
      __typename
    }
  }
`;
export const getPost = /* GraphQL */ `
  query GetPost($id: ID!) {
    getPost(id: $id) {
      id
      videoUri
      description
      userID
      user {
        id
        name
        username
        email
        avatar
        posts {
          nextToken
          scannedCount
          count
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      songID
      song {
        id
        artist
        name
        coverUri
        audioUri
        posts {
          nextToken
          scannedCount
          count
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      likes {
        items {
          id
          postID
          userID
          createdAt
          updatedAt
          __typename
        }
        nextToken
        scannedCount
        count
        __typename
      }
      comments {
        items {
          id
          content
          postID
          userID
          createdAt
          updatedAt
          __typename
        }
        nextToken
        scannedCount
        count
        __typename
      }
      shares {
        items {
          id
          social
          postID
          userID
          createdAt
          updatedAt
          __typename
        }
        nextToken
        scannedCount
        count
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listPosts = /* GraphQL */ `
  query ListPosts(
    $filter: ModelPostFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPosts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        videoUri
        description
        userID
        user {
          id
          name
          username
          email
          avatar
          createdAt
          updatedAt
          __typename
        }
        songID
        song {
          id
          artist
          name
          coverUri
          audioUri
          createdAt
          updatedAt
          __typename
        }
        likes {
          nextToken
          scannedCount
          count
          __typename
        }
        comments {
          nextToken
          scannedCount
          count
          __typename
        }
        shares {
          nextToken
          scannedCount
          count
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      scannedCount
      count
      __typename
    }
  }
`;
export const postsByUserID = /* GraphQL */ `
  query PostsByUserID(
    $userID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelPostFilterInput
    $limit: Int
    $nextToken: String
  ) {
    postsByUserID(
      userID: $userID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        videoUri
        description
        userID
        user {
          id
          name
          username
          email
          avatar
          createdAt
          updatedAt
          __typename
        }
        songID
        song {
          id
          artist
          name
          coverUri
          audioUri
          createdAt
          updatedAt
          __typename
        }
        likes {
          nextToken
          scannedCount
          count
          __typename
        }
        comments {
          nextToken
          scannedCount
          count
          __typename
        }
        shares {
          nextToken
          scannedCount
          count
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      scannedCount
      count
      __typename
    }
  }
`;
export const postsBySongID = /* GraphQL */ `
  query PostsBySongID(
    $songID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelPostFilterInput
    $limit: Int
    $nextToken: String
  ) {
    postsBySongID(
      songID: $songID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        videoUri
        description
        userID
        user {
          id
          name
          username
          email
          avatar
          createdAt
          updatedAt
          __typename
        }
        songID
        song {
          id
          artist
          name
          coverUri
          audioUri
          createdAt
          updatedAt
          __typename
        }
        likes {
          nextToken
          scannedCount
          count
          __typename
        }
        comments {
          nextToken
          scannedCount
          count
          __typename
        }
        shares {
          nextToken
          scannedCount
          count
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      scannedCount
      count
      __typename
    }
  }
`;
export const getSong = /* GraphQL */ `
  query GetSong($id: ID!) {
    getSong(id: $id) {
      id
      artist
      name
      coverUri
      audioUri
      posts {
        items {
          id
          videoUri
          description
          userID
          songID
          createdAt
          updatedAt
          __typename
        }
        nextToken
        scannedCount
        count
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listSongs = /* GraphQL */ `
  query ListSongs(
    $filter: ModelSongFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSongs(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        artist
        name
        coverUri
        audioUri
        posts {
          nextToken
          scannedCount
          count
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getLike = /* GraphQL */ `
  query GetLike($id: ID!) {
    getLike(id: $id) {
      id
      postID
      post {
        id
        videoUri
        description
        userID
        user {
          id
          name
          username
          email
          avatar
          createdAt
          updatedAt
          __typename
        }
        songID
        song {
          id
          artist
          name
          coverUri
          audioUri
          createdAt
          updatedAt
          __typename
        }
        likes {
          nextToken
          scannedCount
          count
          __typename
        }
        comments {
          nextToken
          scannedCount
          count
          __typename
        }
        shares {
          nextToken
          scannedCount
          count
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      userID
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listLikes = /* GraphQL */ `
  query ListLikes(
    $filter: ModelLikeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listLikes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        postID
        post {
          id
          videoUri
          description
          userID
          songID
          createdAt
          updatedAt
          __typename
        }
        userID
        createdAt
        updatedAt
        __typename
      }
      nextToken
      scannedCount
      count
      __typename
    }
  }
`;
export const likesByPostID = /* GraphQL */ `
  query LikesByPostID(
    $postID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelLikeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    likesByPostID(
      postID: $postID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        postID
        post {
          id
          videoUri
          description
          userID
          songID
          createdAt
          updatedAt
          __typename
        }
        userID
        createdAt
        updatedAt
        __typename
      }
      nextToken
      scannedCount
      count
      __typename
    }
  }
`;
export const likesByUserID = /* GraphQL */ `
  query LikesByUserID(
    $userID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelLikeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    likesByUserID(
      userID: $userID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        postID
        post {
          id
          videoUri
          description
          userID
          songID
          createdAt
          updatedAt
          __typename
        }
        userID
        createdAt
        updatedAt
        __typename
      }
      nextToken
      scannedCount
      count
      __typename
    }
  }
`;
export const getComment = /* GraphQL */ `
  query GetComment($id: ID!) {
    getComment(id: $id) {
      id
      content
      postID
      post {
        id
        videoUri
        description
        userID
        user {
          id
          name
          username
          email
          avatar
          createdAt
          updatedAt
          __typename
        }
        songID
        song {
          id
          artist
          name
          coverUri
          audioUri
          createdAt
          updatedAt
          __typename
        }
        likes {
          nextToken
          scannedCount
          count
          __typename
        }
        comments {
          nextToken
          scannedCount
          count
          __typename
        }
        shares {
          nextToken
          scannedCount
          count
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      userID
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listComments = /* GraphQL */ `
  query ListComments(
    $filter: ModelCommentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listComments(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        content
        postID
        post {
          id
          videoUri
          description
          userID
          songID
          createdAt
          updatedAt
          __typename
        }
        userID
        createdAt
        updatedAt
        __typename
      }
      nextToken
      scannedCount
      count
      __typename
    }
  }
`;
export const commentsByPostID = /* GraphQL */ `
  query CommentsByPostID(
    $postID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelCommentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    commentsByPostID(
      postID: $postID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        content
        postID
        post {
          id
          videoUri
          description
          userID
          songID
          createdAt
          updatedAt
          __typename
        }
        userID
        createdAt
        updatedAt
        __typename
      }
      nextToken
      scannedCount
      count
      __typename
    }
  }
`;
export const commentsByUserID = /* GraphQL */ `
  query CommentsByUserID(
    $userID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelCommentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    commentsByUserID(
      userID: $userID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        content
        postID
        post {
          id
          videoUri
          description
          userID
          songID
          createdAt
          updatedAt
          __typename
        }
        userID
        createdAt
        updatedAt
        __typename
      }
      nextToken
      scannedCount
      count
      __typename
    }
  }
`;
export const getShare = /* GraphQL */ `
  query GetShare($id: ID!) {
    getShare(id: $id) {
      id
      social
      postID
      post {
        id
        videoUri
        description
        userID
        user {
          id
          name
          username
          email
          avatar
          createdAt
          updatedAt
          __typename
        }
        songID
        song {
          id
          artist
          name
          coverUri
          audioUri
          createdAt
          updatedAt
          __typename
        }
        likes {
          nextToken
          scannedCount
          count
          __typename
        }
        comments {
          nextToken
          scannedCount
          count
          __typename
        }
        shares {
          nextToken
          scannedCount
          count
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      userID
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listShares = /* GraphQL */ `
  query ListShares(
    $filter: ModelShareFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listShares(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        social
        postID
        post {
          id
          videoUri
          description
          userID
          songID
          createdAt
          updatedAt
          __typename
        }
        userID
        createdAt
        updatedAt
        __typename
      }
      nextToken
      scannedCount
      count
      __typename
    }
  }
`;
export const sharesByPostID = /* GraphQL */ `
  query SharesByPostID(
    $postID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelShareFilterInput
    $limit: Int
    $nextToken: String
  ) {
    sharesByPostID(
      postID: $postID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        social
        postID
        post {
          id
          videoUri
          description
          userID
          songID
          createdAt
          updatedAt
          __typename
        }
        userID
        createdAt
        updatedAt
        __typename
      }
      nextToken
      scannedCount
      count
      __typename
    }
  }
`;
export const sharesByUserID = /* GraphQL */ `
  query SharesByUserID(
    $userID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelShareFilterInput
    $limit: Int
    $nextToken: String
  ) {
    sharesByUserID(
      userID: $userID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        social
        postID
        post {
          id
          videoUri
          description
          userID
          songID
          createdAt
          updatedAt
          __typename
        }
        userID
        createdAt
        updatedAt
        __typename
      }
      nextToken
      scannedCount
      count
      __typename
    }
  }
`;
