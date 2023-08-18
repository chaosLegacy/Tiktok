/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
export const createPost = /* GraphQL */ `
  mutation CreatePost(
    $input: CreatePostInput!
    $condition: ModelPostConditionInput
  ) {
    createPost(input: $input, condition: $condition) {
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
export const updatePost = /* GraphQL */ `
  mutation UpdatePost(
    $input: UpdatePostInput!
    $condition: ModelPostConditionInput
  ) {
    updatePost(input: $input, condition: $condition) {
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
export const deletePost = /* GraphQL */ `
  mutation DeletePost(
    $input: DeletePostInput!
    $condition: ModelPostConditionInput
  ) {
    deletePost(input: $input, condition: $condition) {
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
export const createSong = /* GraphQL */ `
  mutation CreateSong(
    $input: CreateSongInput!
    $condition: ModelSongConditionInput
  ) {
    createSong(input: $input, condition: $condition) {
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
export const updateSong = /* GraphQL */ `
  mutation UpdateSong(
    $input: UpdateSongInput!
    $condition: ModelSongConditionInput
  ) {
    updateSong(input: $input, condition: $condition) {
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
export const deleteSong = /* GraphQL */ `
  mutation DeleteSong(
    $input: DeleteSongInput!
    $condition: ModelSongConditionInput
  ) {
    deleteSong(input: $input, condition: $condition) {
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
export const createLike = /* GraphQL */ `
  mutation CreateLike(
    $input: CreateLikeInput!
    $condition: ModelLikeConditionInput
  ) {
    createLike(input: $input, condition: $condition) {
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
export const updateLike = /* GraphQL */ `
  mutation UpdateLike(
    $input: UpdateLikeInput!
    $condition: ModelLikeConditionInput
  ) {
    updateLike(input: $input, condition: $condition) {
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
export const deleteLike = /* GraphQL */ `
  mutation DeleteLike(
    $input: DeleteLikeInput!
    $condition: ModelLikeConditionInput
  ) {
    deleteLike(input: $input, condition: $condition) {
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
export const createComment = /* GraphQL */ `
  mutation CreateComment(
    $input: CreateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    createComment(input: $input, condition: $condition) {
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
export const updateComment = /* GraphQL */ `
  mutation UpdateComment(
    $input: UpdateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    updateComment(input: $input, condition: $condition) {
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
export const deleteComment = /* GraphQL */ `
  mutation DeleteComment(
    $input: DeleteCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    deleteComment(input: $input, condition: $condition) {
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
export const createShare = /* GraphQL */ `
  mutation CreateShare(
    $input: CreateShareInput!
    $condition: ModelShareConditionInput
  ) {
    createShare(input: $input, condition: $condition) {
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
export const updateShare = /* GraphQL */ `
  mutation UpdateShare(
    $input: UpdateShareInput!
    $condition: ModelShareConditionInput
  ) {
    updateShare(input: $input, condition: $condition) {
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
export const deleteShare = /* GraphQL */ `
  mutation DeleteShare(
    $input: DeleteShareInput!
    $condition: ModelShareConditionInput
  ) {
    deleteShare(input: $input, condition: $condition) {
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
