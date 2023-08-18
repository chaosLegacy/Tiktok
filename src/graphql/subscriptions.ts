/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser($filter: ModelSubscriptionUserFilterInput) {
    onCreateUser(filter: $filter) {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser($filter: ModelSubscriptionUserFilterInput) {
    onUpdateUser(filter: $filter) {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser($filter: ModelSubscriptionUserFilterInput) {
    onDeleteUser(filter: $filter) {
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
export const onCreatePost = /* GraphQL */ `
  subscription OnCreatePost($filter: ModelSubscriptionPostFilterInput) {
    onCreatePost(filter: $filter) {
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
export const onUpdatePost = /* GraphQL */ `
  subscription OnUpdatePost($filter: ModelSubscriptionPostFilterInput) {
    onUpdatePost(filter: $filter) {
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
export const onDeletePost = /* GraphQL */ `
  subscription OnDeletePost($filter: ModelSubscriptionPostFilterInput) {
    onDeletePost(filter: $filter) {
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
export const onCreateSong = /* GraphQL */ `
  subscription OnCreateSong($filter: ModelSubscriptionSongFilterInput) {
    onCreateSong(filter: $filter) {
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
export const onUpdateSong = /* GraphQL */ `
  subscription OnUpdateSong($filter: ModelSubscriptionSongFilterInput) {
    onUpdateSong(filter: $filter) {
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
export const onDeleteSong = /* GraphQL */ `
  subscription OnDeleteSong($filter: ModelSubscriptionSongFilterInput) {
    onDeleteSong(filter: $filter) {
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
export const onCreateLike = /* GraphQL */ `
  subscription OnCreateLike($filter: ModelSubscriptionLikeFilterInput) {
    onCreateLike(filter: $filter) {
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
export const onUpdateLike = /* GraphQL */ `
  subscription OnUpdateLike($filter: ModelSubscriptionLikeFilterInput) {
    onUpdateLike(filter: $filter) {
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
export const onDeleteLike = /* GraphQL */ `
  subscription OnDeleteLike($filter: ModelSubscriptionLikeFilterInput) {
    onDeleteLike(filter: $filter) {
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
export const onCreateComment = /* GraphQL */ `
  subscription OnCreateComment($filter: ModelSubscriptionCommentFilterInput) {
    onCreateComment(filter: $filter) {
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
export const onUpdateComment = /* GraphQL */ `
  subscription OnUpdateComment($filter: ModelSubscriptionCommentFilterInput) {
    onUpdateComment(filter: $filter) {
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
export const onDeleteComment = /* GraphQL */ `
  subscription OnDeleteComment($filter: ModelSubscriptionCommentFilterInput) {
    onDeleteComment(filter: $filter) {
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
export const onCreateShare = /* GraphQL */ `
  subscription OnCreateShare($filter: ModelSubscriptionShareFilterInput) {
    onCreateShare(filter: $filter) {
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
export const onUpdateShare = /* GraphQL */ `
  subscription OnUpdateShare($filter: ModelSubscriptionShareFilterInput) {
    onUpdateShare(filter: $filter) {
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
export const onDeleteShare = /* GraphQL */ `
  subscription OnDeleteShare($filter: ModelSubscriptionShareFilterInput) {
    onDeleteShare(filter: $filter) {
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
