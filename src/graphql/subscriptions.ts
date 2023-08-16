/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser($filter: ModelSubscriptionUserFilterInput) {
    onCreateUser(filter: $filter) {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser($filter: ModelSubscriptionUserFilterInput) {
    onUpdateUser(filter: $filter) {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser($filter: ModelSubscriptionUserFilterInput) {
    onDeleteUser(filter: $filter) {
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
export const onCreatePost = /* GraphQL */ `
  subscription OnCreatePost($filter: ModelSubscriptionPostFilterInput) {
    onCreatePost(filter: $filter) {
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
export const onUpdatePost = /* GraphQL */ `
  subscription OnUpdatePost($filter: ModelSubscriptionPostFilterInput) {
    onUpdatePost(filter: $filter) {
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
export const onDeletePost = /* GraphQL */ `
  subscription OnDeletePost($filter: ModelSubscriptionPostFilterInput) {
    onDeletePost(filter: $filter) {
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
export const onCreateSong = /* GraphQL */ `
  subscription OnCreateSong($filter: ModelSubscriptionSongFilterInput) {
    onCreateSong(filter: $filter) {
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
export const onUpdateSong = /* GraphQL */ `
  subscription OnUpdateSong($filter: ModelSubscriptionSongFilterInput) {
    onUpdateSong(filter: $filter) {
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
export const onDeleteSong = /* GraphQL */ `
  subscription OnDeleteSong($filter: ModelSubscriptionSongFilterInput) {
    onDeleteSong(filter: $filter) {
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
