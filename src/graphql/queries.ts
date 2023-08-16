/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      name
      userName
      email
      avatar
      posts {
        items {
          id
          videoUri
          description
          userID
          createdAt
          updatedAt
          postSongId
          __typename
        }
        nextToken
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
        userName
        email
        avatar
        posts {
          nextToken
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
export const getPost = /* GraphQL */ `
  query GetPost($id: ID!) {
    getPost(id: $id) {
      id
      videoUri
      description
      userID
      song {
        id
        artist
        name
        coverUri
        audioUri
        post {
          id
          videoUri
          description
          userID
          createdAt
          updatedAt
          postSongId
          __typename
        }
        createdAt
        updatedAt
        songPostId
        __typename
      }
      likes {
        items {
          id
          postID
          createdAt
          updatedAt
          likeUserId
          __typename
        }
        nextToken
        __typename
      }
      comments {
        items {
          id
          content
          postID
          createdAt
          updatedAt
          commentUserId
          __typename
        }
        nextToken
        __typename
      }
      shares {
        items {
          id
          social
          postID
          createdAt
          updatedAt
          shareUserId
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      postSongId
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
        song {
          id
          artist
          name
          coverUri
          audioUri
          createdAt
          updatedAt
          songPostId
          __typename
        }
        likes {
          nextToken
          __typename
        }
        comments {
          nextToken
          __typename
        }
        shares {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        postSongId
        __typename
      }
      nextToken
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
      post {
        id
        videoUri
        description
        userID
        song {
          id
          artist
          name
          coverUri
          audioUri
          createdAt
          updatedAt
          songPostId
          __typename
        }
        likes {
          nextToken
          __typename
        }
        comments {
          nextToken
          __typename
        }
        shares {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        postSongId
        __typename
      }
      createdAt
      updatedAt
      songPostId
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
        post {
          id
          videoUri
          description
          userID
          createdAt
          updatedAt
          postSongId
          __typename
        }
        createdAt
        updatedAt
        songPostId
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
        song {
          id
          artist
          name
          coverUri
          audioUri
          createdAt
          updatedAt
          songPostId
          __typename
        }
        likes {
          nextToken
          __typename
        }
        comments {
          nextToken
          __typename
        }
        shares {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        postSongId
        __typename
      }
      user {
        id
        name
        userName
        email
        avatar
        posts {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      likeUserId
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
          createdAt
          updatedAt
          postSongId
          __typename
        }
        user {
          id
          name
          userName
          email
          avatar
          createdAt
          updatedAt
          __typename
        }
        createdAt
        updatedAt
        likeUserId
        __typename
      }
      nextToken
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
        song {
          id
          artist
          name
          coverUri
          audioUri
          createdAt
          updatedAt
          songPostId
          __typename
        }
        likes {
          nextToken
          __typename
        }
        comments {
          nextToken
          __typename
        }
        shares {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        postSongId
        __typename
      }
      user {
        id
        name
        userName
        email
        avatar
        posts {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      commentUserId
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
          createdAt
          updatedAt
          postSongId
          __typename
        }
        user {
          id
          name
          userName
          email
          avatar
          createdAt
          updatedAt
          __typename
        }
        createdAt
        updatedAt
        commentUserId
        __typename
      }
      nextToken
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
        song {
          id
          artist
          name
          coverUri
          audioUri
          createdAt
          updatedAt
          songPostId
          __typename
        }
        likes {
          nextToken
          __typename
        }
        comments {
          nextToken
          __typename
        }
        shares {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        postSongId
        __typename
      }
      user {
        id
        name
        userName
        email
        avatar
        posts {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      shareUserId
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
          createdAt
          updatedAt
          postSongId
          __typename
        }
        user {
          id
          name
          userName
          email
          avatar
          createdAt
          updatedAt
          __typename
        }
        createdAt
        updatedAt
        shareUserId
        __typename
      }
      nextToken
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
        song {
          id
          artist
          name
          coverUri
          audioUri
          createdAt
          updatedAt
          songPostId
          __typename
        }
        likes {
          nextToken
          __typename
        }
        comments {
          nextToken
          __typename
        }
        shares {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        postSongId
        __typename
      }
      nextToken
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
          createdAt
          updatedAt
          postSongId
          __typename
        }
        user {
          id
          name
          userName
          email
          avatar
          createdAt
          updatedAt
          __typename
        }
        createdAt
        updatedAt
        likeUserId
        __typename
      }
      nextToken
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
          createdAt
          updatedAt
          postSongId
          __typename
        }
        user {
          id
          name
          userName
          email
          avatar
          createdAt
          updatedAt
          __typename
        }
        createdAt
        updatedAt
        commentUserId
        __typename
      }
      nextToken
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
          createdAt
          updatedAt
          postSongId
          __typename
        }
        user {
          id
          name
          userName
          email
          avatar
          createdAt
          updatedAt
          __typename
        }
        createdAt
        updatedAt
        shareUserId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
