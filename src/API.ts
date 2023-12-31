/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateUserInput = {
  id?: string | null,
  name?: string | null,
  username: string,
  email: string,
  avatar: string,
};

export type ModelUserConditionInput = {
  name?: ModelStringInput | null,
  username?: ModelStringInput | null,
  email?: ModelStringInput | null,
  avatar?: ModelStringInput | null,
  and?: Array< ModelUserConditionInput | null > | null,
  or?: Array< ModelUserConditionInput | null > | null,
  not?: ModelUserConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type User = {
  __typename: "User",
  id: string,
  name?: string | null,
  username: string,
  email: string,
  avatar: string,
  posts?: ModelPostConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelPostConnection = {
  __typename: "ModelPostConnection",
  items:  Array<Post | null >,
  nextToken?: string | null,
  scannedCount?: number | null,
  count?: number | null,
};

export type Post = {
  __typename: "Post",
  id: string,
  videoUri: string,
  description?: string | null,
  userID: string,
  user: User,
  songID?: string | null,
  song?: Song | null,
  likes?: ModelLikeConnection | null,
  comments?: ModelCommentConnection | null,
  shares?: ModelShareConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type Song = {
  __typename: "Song",
  id: string,
  artist: string,
  name: string,
  coverUri: string,
  audioUri: string,
  posts?: ModelPostConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelLikeConnection = {
  __typename: "ModelLikeConnection",
  items:  Array<Like | null >,
  nextToken?: string | null,
  scannedCount?: number | null,
  count?: number | null,
};

export type Like = {
  __typename: "Like",
  id: string,
  postID: string,
  post: Post,
  userID: string,
  createdAt: string,
  updatedAt: string,
};

export type ModelCommentConnection = {
  __typename: "ModelCommentConnection",
  items:  Array<Comment | null >,
  nextToken?: string | null,
  scannedCount?: number | null,
  count?: number | null,
};

export type Comment = {
  __typename: "Comment",
  id: string,
  content: string,
  postID: string,
  post: Post,
  userID: string,
  createdAt: string,
  updatedAt: string,
};

export type ModelShareConnection = {
  __typename: "ModelShareConnection",
  items:  Array<Share | null >,
  nextToken?: string | null,
  scannedCount?: number | null,
  count?: number | null,
};

export type Share = {
  __typename: "Share",
  id: string,
  social?: string | null,
  postID: string,
  post: Post,
  userID: string,
  createdAt: string,
  updatedAt: string,
};

export type UpdateUserInput = {
  id: string,
  name?: string | null,
  username?: string | null,
  email?: string | null,
  avatar?: string | null,
};

export type DeleteUserInput = {
  id: string,
};

export type CreatePostInput = {
  id?: string | null,
  videoUri: string,
  description?: string | null,
  userID: string,
  songID?: string | null,
};

export type ModelPostConditionInput = {
  videoUri?: ModelStringInput | null,
  description?: ModelStringInput | null,
  userID?: ModelIDInput | null,
  songID?: ModelIDInput | null,
  and?: Array< ModelPostConditionInput | null > | null,
  or?: Array< ModelPostConditionInput | null > | null,
  not?: ModelPostConditionInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type UpdatePostInput = {
  id: string,
  videoUri?: string | null,
  description?: string | null,
  userID?: string | null,
  songID?: string | null,
};

export type DeletePostInput = {
  id: string,
};

export type CreateSongInput = {
  id?: string | null,
  artist: string,
  name: string,
  coverUri: string,
  audioUri: string,
};

export type ModelSongConditionInput = {
  artist?: ModelStringInput | null,
  name?: ModelStringInput | null,
  coverUri?: ModelStringInput | null,
  audioUri?: ModelStringInput | null,
  and?: Array< ModelSongConditionInput | null > | null,
  or?: Array< ModelSongConditionInput | null > | null,
  not?: ModelSongConditionInput | null,
};

export type UpdateSongInput = {
  id: string,
  artist?: string | null,
  name?: string | null,
  coverUri?: string | null,
  audioUri?: string | null,
};

export type DeleteSongInput = {
  id: string,
};

export type CreateLikeInput = {
  id?: string | null,
  postID: string,
  userID: string,
};

export type ModelLikeConditionInput = {
  postID?: ModelIDInput | null,
  userID?: ModelIDInput | null,
  and?: Array< ModelLikeConditionInput | null > | null,
  or?: Array< ModelLikeConditionInput | null > | null,
  not?: ModelLikeConditionInput | null,
};

export type UpdateLikeInput = {
  id: string,
  postID?: string | null,
  userID?: string | null,
};

export type DeleteLikeInput = {
  id: string,
};

export type CreateCommentInput = {
  id?: string | null,
  content: string,
  postID: string,
  userID: string,
};

export type ModelCommentConditionInput = {
  content?: ModelStringInput | null,
  postID?: ModelIDInput | null,
  userID?: ModelIDInput | null,
  and?: Array< ModelCommentConditionInput | null > | null,
  or?: Array< ModelCommentConditionInput | null > | null,
  not?: ModelCommentConditionInput | null,
};

export type UpdateCommentInput = {
  id: string,
  content?: string | null,
  postID?: string | null,
  userID?: string | null,
};

export type DeleteCommentInput = {
  id: string,
};

export type CreateShareInput = {
  id?: string | null,
  social?: string | null,
  postID: string,
  userID: string,
};

export type ModelShareConditionInput = {
  social?: ModelStringInput | null,
  postID?: ModelIDInput | null,
  userID?: ModelIDInput | null,
  and?: Array< ModelShareConditionInput | null > | null,
  or?: Array< ModelShareConditionInput | null > | null,
  not?: ModelShareConditionInput | null,
};

export type UpdateShareInput = {
  id: string,
  social?: string | null,
  postID?: string | null,
  userID?: string | null,
};

export type DeleteShareInput = {
  id: string,
};

export type ModelUserFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  username?: ModelStringInput | null,
  email?: ModelStringInput | null,
  avatar?: ModelStringInput | null,
  and?: Array< ModelUserFilterInput | null > | null,
  or?: Array< ModelUserFilterInput | null > | null,
  not?: ModelUserFilterInput | null,
};

export type ModelUserConnection = {
  __typename: "ModelUserConnection",
  items:  Array<User | null >,
  nextToken?: string | null,
  scannedCount?: number | null,
  count?: number | null,
};

export type ModelPostFilterInput = {
  id?: ModelIDInput | null,
  videoUri?: ModelStringInput | null,
  description?: ModelStringInput | null,
  userID?: ModelIDInput | null,
  songID?: ModelIDInput | null,
  and?: Array< ModelPostFilterInput | null > | null,
  or?: Array< ModelPostFilterInput | null > | null,
  not?: ModelPostFilterInput | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelSongFilterInput = {
  id?: ModelIDInput | null,
  artist?: ModelStringInput | null,
  name?: ModelStringInput | null,
  coverUri?: ModelStringInput | null,
  audioUri?: ModelStringInput | null,
  and?: Array< ModelSongFilterInput | null > | null,
  or?: Array< ModelSongFilterInput | null > | null,
  not?: ModelSongFilterInput | null,
};

export type ModelSongConnection = {
  __typename: "ModelSongConnection",
  items:  Array<Song | null >,
  nextToken?: string | null,
};

export type ModelLikeFilterInput = {
  id?: ModelIDInput | null,
  postID?: ModelIDInput | null,
  userID?: ModelIDInput | null,
  and?: Array< ModelLikeFilterInput | null > | null,
  or?: Array< ModelLikeFilterInput | null > | null,
  not?: ModelLikeFilterInput | null,
};

export type ModelCommentFilterInput = {
  id?: ModelIDInput | null,
  content?: ModelStringInput | null,
  postID?: ModelIDInput | null,
  userID?: ModelIDInput | null,
  and?: Array< ModelCommentFilterInput | null > | null,
  or?: Array< ModelCommentFilterInput | null > | null,
  not?: ModelCommentFilterInput | null,
};

export type ModelShareFilterInput = {
  id?: ModelIDInput | null,
  social?: ModelStringInput | null,
  postID?: ModelIDInput | null,
  userID?: ModelIDInput | null,
  and?: Array< ModelShareFilterInput | null > | null,
  or?: Array< ModelShareFilterInput | null > | null,
  not?: ModelShareFilterInput | null,
};

export type ModelSubscriptionUserFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  username?: ModelSubscriptionStringInput | null,
  email?: ModelSubscriptionStringInput | null,
  avatar?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionUserFilterInput | null > | null,
  or?: Array< ModelSubscriptionUserFilterInput | null > | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionPostFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  videoUri?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  userID?: ModelSubscriptionIDInput | null,
  songID?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionPostFilterInput | null > | null,
  or?: Array< ModelSubscriptionPostFilterInput | null > | null,
};

export type ModelSubscriptionSongFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  artist?: ModelSubscriptionStringInput | null,
  name?: ModelSubscriptionStringInput | null,
  coverUri?: ModelSubscriptionStringInput | null,
  audioUri?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionSongFilterInput | null > | null,
  or?: Array< ModelSubscriptionSongFilterInput | null > | null,
};

export type ModelSubscriptionLikeFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  postID?: ModelSubscriptionIDInput | null,
  userID?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionLikeFilterInput | null > | null,
  or?: Array< ModelSubscriptionLikeFilterInput | null > | null,
};

export type ModelSubscriptionCommentFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  content?: ModelSubscriptionStringInput | null,
  postID?: ModelSubscriptionIDInput | null,
  userID?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionCommentFilterInput | null > | null,
  or?: Array< ModelSubscriptionCommentFilterInput | null > | null,
};

export type ModelSubscriptionShareFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  social?: ModelSubscriptionStringInput | null,
  postID?: ModelSubscriptionIDInput | null,
  userID?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionShareFilterInput | null > | null,
  or?: Array< ModelSubscriptionShareFilterInput | null > | null,
};

export type CreateUserMutationVariables = {
  input: CreateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type CreateUserMutation = {
  createUser?:  {
    __typename: "User",
    id: string,
    name?: string | null,
    username: string,
    email: string,
    avatar: string,
    posts?:  {
      __typename: "ModelPostConnection",
      items:  Array< {
        __typename: "Post",
        id: string,
        videoUri: string,
        description?: string | null,
        userID: string,
        songID?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
      scannedCount?: number | null,
      count?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateUserMutationVariables = {
  input: UpdateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type UpdateUserMutation = {
  updateUser?:  {
    __typename: "User",
    id: string,
    name?: string | null,
    username: string,
    email: string,
    avatar: string,
    posts?:  {
      __typename: "ModelPostConnection",
      items:  Array< {
        __typename: "Post",
        id: string,
        videoUri: string,
        description?: string | null,
        userID: string,
        songID?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
      scannedCount?: number | null,
      count?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteUserMutationVariables = {
  input: DeleteUserInput,
  condition?: ModelUserConditionInput | null,
};

export type DeleteUserMutation = {
  deleteUser?:  {
    __typename: "User",
    id: string,
    name?: string | null,
    username: string,
    email: string,
    avatar: string,
    posts?:  {
      __typename: "ModelPostConnection",
      items:  Array< {
        __typename: "Post",
        id: string,
        videoUri: string,
        description?: string | null,
        userID: string,
        songID?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
      scannedCount?: number | null,
      count?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreatePostMutationVariables = {
  input: CreatePostInput,
  condition?: ModelPostConditionInput | null,
};

export type CreatePostMutation = {
  createPost?:  {
    __typename: "Post",
    id: string,
    videoUri: string,
    description?: string | null,
    userID: string,
    user:  {
      __typename: "User",
      id: string,
      name?: string | null,
      username: string,
      email: string,
      avatar: string,
      posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
        scannedCount?: number | null,
        count?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    songID?: string | null,
    song?:  {
      __typename: "Song",
      id: string,
      artist: string,
      name: string,
      coverUri: string,
      audioUri: string,
      posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
        scannedCount?: number | null,
        count?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    likes?:  {
      __typename: "ModelLikeConnection",
      items:  Array< {
        __typename: "Like",
        id: string,
        postID: string,
        userID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
      scannedCount?: number | null,
      count?: number | null,
    } | null,
    comments?:  {
      __typename: "ModelCommentConnection",
      items:  Array< {
        __typename: "Comment",
        id: string,
        content: string,
        postID: string,
        userID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
      scannedCount?: number | null,
      count?: number | null,
    } | null,
    shares?:  {
      __typename: "ModelShareConnection",
      items:  Array< {
        __typename: "Share",
        id: string,
        social?: string | null,
        postID: string,
        userID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
      scannedCount?: number | null,
      count?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdatePostMutationVariables = {
  input: UpdatePostInput,
  condition?: ModelPostConditionInput | null,
};

export type UpdatePostMutation = {
  updatePost?:  {
    __typename: "Post",
    id: string,
    videoUri: string,
    description?: string | null,
    userID: string,
    user:  {
      __typename: "User",
      id: string,
      name?: string | null,
      username: string,
      email: string,
      avatar: string,
      posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
        scannedCount?: number | null,
        count?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    songID?: string | null,
    song?:  {
      __typename: "Song",
      id: string,
      artist: string,
      name: string,
      coverUri: string,
      audioUri: string,
      posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
        scannedCount?: number | null,
        count?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    likes?:  {
      __typename: "ModelLikeConnection",
      items:  Array< {
        __typename: "Like",
        id: string,
        postID: string,
        userID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
      scannedCount?: number | null,
      count?: number | null,
    } | null,
    comments?:  {
      __typename: "ModelCommentConnection",
      items:  Array< {
        __typename: "Comment",
        id: string,
        content: string,
        postID: string,
        userID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
      scannedCount?: number | null,
      count?: number | null,
    } | null,
    shares?:  {
      __typename: "ModelShareConnection",
      items:  Array< {
        __typename: "Share",
        id: string,
        social?: string | null,
        postID: string,
        userID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
      scannedCount?: number | null,
      count?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeletePostMutationVariables = {
  input: DeletePostInput,
  condition?: ModelPostConditionInput | null,
};

export type DeletePostMutation = {
  deletePost?:  {
    __typename: "Post",
    id: string,
    videoUri: string,
    description?: string | null,
    userID: string,
    user:  {
      __typename: "User",
      id: string,
      name?: string | null,
      username: string,
      email: string,
      avatar: string,
      posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
        scannedCount?: number | null,
        count?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    songID?: string | null,
    song?:  {
      __typename: "Song",
      id: string,
      artist: string,
      name: string,
      coverUri: string,
      audioUri: string,
      posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
        scannedCount?: number | null,
        count?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    likes?:  {
      __typename: "ModelLikeConnection",
      items:  Array< {
        __typename: "Like",
        id: string,
        postID: string,
        userID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
      scannedCount?: number | null,
      count?: number | null,
    } | null,
    comments?:  {
      __typename: "ModelCommentConnection",
      items:  Array< {
        __typename: "Comment",
        id: string,
        content: string,
        postID: string,
        userID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
      scannedCount?: number | null,
      count?: number | null,
    } | null,
    shares?:  {
      __typename: "ModelShareConnection",
      items:  Array< {
        __typename: "Share",
        id: string,
        social?: string | null,
        postID: string,
        userID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
      scannedCount?: number | null,
      count?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateSongMutationVariables = {
  input: CreateSongInput,
  condition?: ModelSongConditionInput | null,
};

export type CreateSongMutation = {
  createSong?:  {
    __typename: "Song",
    id: string,
    artist: string,
    name: string,
    coverUri: string,
    audioUri: string,
    posts?:  {
      __typename: "ModelPostConnection",
      items:  Array< {
        __typename: "Post",
        id: string,
        videoUri: string,
        description?: string | null,
        userID: string,
        songID?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
      scannedCount?: number | null,
      count?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateSongMutationVariables = {
  input: UpdateSongInput,
  condition?: ModelSongConditionInput | null,
};

export type UpdateSongMutation = {
  updateSong?:  {
    __typename: "Song",
    id: string,
    artist: string,
    name: string,
    coverUri: string,
    audioUri: string,
    posts?:  {
      __typename: "ModelPostConnection",
      items:  Array< {
        __typename: "Post",
        id: string,
        videoUri: string,
        description?: string | null,
        userID: string,
        songID?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
      scannedCount?: number | null,
      count?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteSongMutationVariables = {
  input: DeleteSongInput,
  condition?: ModelSongConditionInput | null,
};

export type DeleteSongMutation = {
  deleteSong?:  {
    __typename: "Song",
    id: string,
    artist: string,
    name: string,
    coverUri: string,
    audioUri: string,
    posts?:  {
      __typename: "ModelPostConnection",
      items:  Array< {
        __typename: "Post",
        id: string,
        videoUri: string,
        description?: string | null,
        userID: string,
        songID?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
      scannedCount?: number | null,
      count?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateLikeMutationVariables = {
  input: CreateLikeInput,
  condition?: ModelLikeConditionInput | null,
};

export type CreateLikeMutation = {
  createLike?:  {
    __typename: "Like",
    id: string,
    postID: string,
    post:  {
      __typename: "Post",
      id: string,
      videoUri: string,
      description?: string | null,
      userID: string,
      user:  {
        __typename: "User",
        id: string,
        name?: string | null,
        username: string,
        email: string,
        avatar: string,
        createdAt: string,
        updatedAt: string,
      },
      songID?: string | null,
      song?:  {
        __typename: "Song",
        id: string,
        artist: string,
        name: string,
        coverUri: string,
        audioUri: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      likes?:  {
        __typename: "ModelLikeConnection",
        nextToken?: string | null,
        scannedCount?: number | null,
        count?: number | null,
      } | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
        scannedCount?: number | null,
        count?: number | null,
      } | null,
      shares?:  {
        __typename: "ModelShareConnection",
        nextToken?: string | null,
        scannedCount?: number | null,
        count?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    userID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateLikeMutationVariables = {
  input: UpdateLikeInput,
  condition?: ModelLikeConditionInput | null,
};

export type UpdateLikeMutation = {
  updateLike?:  {
    __typename: "Like",
    id: string,
    postID: string,
    post:  {
      __typename: "Post",
      id: string,
      videoUri: string,
      description?: string | null,
      userID: string,
      user:  {
        __typename: "User",
        id: string,
        name?: string | null,
        username: string,
        email: string,
        avatar: string,
        createdAt: string,
        updatedAt: string,
      },
      songID?: string | null,
      song?:  {
        __typename: "Song",
        id: string,
        artist: string,
        name: string,
        coverUri: string,
        audioUri: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      likes?:  {
        __typename: "ModelLikeConnection",
        nextToken?: string | null,
        scannedCount?: number | null,
        count?: number | null,
      } | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
        scannedCount?: number | null,
        count?: number | null,
      } | null,
      shares?:  {
        __typename: "ModelShareConnection",
        nextToken?: string | null,
        scannedCount?: number | null,
        count?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    userID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteLikeMutationVariables = {
  input: DeleteLikeInput,
  condition?: ModelLikeConditionInput | null,
};

export type DeleteLikeMutation = {
  deleteLike?:  {
    __typename: "Like",
    id: string,
    postID: string,
    post:  {
      __typename: "Post",
      id: string,
      videoUri: string,
      description?: string | null,
      userID: string,
      user:  {
        __typename: "User",
        id: string,
        name?: string | null,
        username: string,
        email: string,
        avatar: string,
        createdAt: string,
        updatedAt: string,
      },
      songID?: string | null,
      song?:  {
        __typename: "Song",
        id: string,
        artist: string,
        name: string,
        coverUri: string,
        audioUri: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      likes?:  {
        __typename: "ModelLikeConnection",
        nextToken?: string | null,
        scannedCount?: number | null,
        count?: number | null,
      } | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
        scannedCount?: number | null,
        count?: number | null,
      } | null,
      shares?:  {
        __typename: "ModelShareConnection",
        nextToken?: string | null,
        scannedCount?: number | null,
        count?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    userID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateCommentMutationVariables = {
  input: CreateCommentInput,
  condition?: ModelCommentConditionInput | null,
};

export type CreateCommentMutation = {
  createComment?:  {
    __typename: "Comment",
    id: string,
    content: string,
    postID: string,
    post:  {
      __typename: "Post",
      id: string,
      videoUri: string,
      description?: string | null,
      userID: string,
      user:  {
        __typename: "User",
        id: string,
        name?: string | null,
        username: string,
        email: string,
        avatar: string,
        createdAt: string,
        updatedAt: string,
      },
      songID?: string | null,
      song?:  {
        __typename: "Song",
        id: string,
        artist: string,
        name: string,
        coverUri: string,
        audioUri: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      likes?:  {
        __typename: "ModelLikeConnection",
        nextToken?: string | null,
        scannedCount?: number | null,
        count?: number | null,
      } | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
        scannedCount?: number | null,
        count?: number | null,
      } | null,
      shares?:  {
        __typename: "ModelShareConnection",
        nextToken?: string | null,
        scannedCount?: number | null,
        count?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    userID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateCommentMutationVariables = {
  input: UpdateCommentInput,
  condition?: ModelCommentConditionInput | null,
};

export type UpdateCommentMutation = {
  updateComment?:  {
    __typename: "Comment",
    id: string,
    content: string,
    postID: string,
    post:  {
      __typename: "Post",
      id: string,
      videoUri: string,
      description?: string | null,
      userID: string,
      user:  {
        __typename: "User",
        id: string,
        name?: string | null,
        username: string,
        email: string,
        avatar: string,
        createdAt: string,
        updatedAt: string,
      },
      songID?: string | null,
      song?:  {
        __typename: "Song",
        id: string,
        artist: string,
        name: string,
        coverUri: string,
        audioUri: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      likes?:  {
        __typename: "ModelLikeConnection",
        nextToken?: string | null,
        scannedCount?: number | null,
        count?: number | null,
      } | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
        scannedCount?: number | null,
        count?: number | null,
      } | null,
      shares?:  {
        __typename: "ModelShareConnection",
        nextToken?: string | null,
        scannedCount?: number | null,
        count?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    userID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteCommentMutationVariables = {
  input: DeleteCommentInput,
  condition?: ModelCommentConditionInput | null,
};

export type DeleteCommentMutation = {
  deleteComment?:  {
    __typename: "Comment",
    id: string,
    content: string,
    postID: string,
    post:  {
      __typename: "Post",
      id: string,
      videoUri: string,
      description?: string | null,
      userID: string,
      user:  {
        __typename: "User",
        id: string,
        name?: string | null,
        username: string,
        email: string,
        avatar: string,
        createdAt: string,
        updatedAt: string,
      },
      songID?: string | null,
      song?:  {
        __typename: "Song",
        id: string,
        artist: string,
        name: string,
        coverUri: string,
        audioUri: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      likes?:  {
        __typename: "ModelLikeConnection",
        nextToken?: string | null,
        scannedCount?: number | null,
        count?: number | null,
      } | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
        scannedCount?: number | null,
        count?: number | null,
      } | null,
      shares?:  {
        __typename: "ModelShareConnection",
        nextToken?: string | null,
        scannedCount?: number | null,
        count?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    userID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateShareMutationVariables = {
  input: CreateShareInput,
  condition?: ModelShareConditionInput | null,
};

export type CreateShareMutation = {
  createShare?:  {
    __typename: "Share",
    id: string,
    social?: string | null,
    postID: string,
    post:  {
      __typename: "Post",
      id: string,
      videoUri: string,
      description?: string | null,
      userID: string,
      user:  {
        __typename: "User",
        id: string,
        name?: string | null,
        username: string,
        email: string,
        avatar: string,
        createdAt: string,
        updatedAt: string,
      },
      songID?: string | null,
      song?:  {
        __typename: "Song",
        id: string,
        artist: string,
        name: string,
        coverUri: string,
        audioUri: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      likes?:  {
        __typename: "ModelLikeConnection",
        nextToken?: string | null,
        scannedCount?: number | null,
        count?: number | null,
      } | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
        scannedCount?: number | null,
        count?: number | null,
      } | null,
      shares?:  {
        __typename: "ModelShareConnection",
        nextToken?: string | null,
        scannedCount?: number | null,
        count?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    userID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateShareMutationVariables = {
  input: UpdateShareInput,
  condition?: ModelShareConditionInput | null,
};

export type UpdateShareMutation = {
  updateShare?:  {
    __typename: "Share",
    id: string,
    social?: string | null,
    postID: string,
    post:  {
      __typename: "Post",
      id: string,
      videoUri: string,
      description?: string | null,
      userID: string,
      user:  {
        __typename: "User",
        id: string,
        name?: string | null,
        username: string,
        email: string,
        avatar: string,
        createdAt: string,
        updatedAt: string,
      },
      songID?: string | null,
      song?:  {
        __typename: "Song",
        id: string,
        artist: string,
        name: string,
        coverUri: string,
        audioUri: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      likes?:  {
        __typename: "ModelLikeConnection",
        nextToken?: string | null,
        scannedCount?: number | null,
        count?: number | null,
      } | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
        scannedCount?: number | null,
        count?: number | null,
      } | null,
      shares?:  {
        __typename: "ModelShareConnection",
        nextToken?: string | null,
        scannedCount?: number | null,
        count?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    userID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteShareMutationVariables = {
  input: DeleteShareInput,
  condition?: ModelShareConditionInput | null,
};

export type DeleteShareMutation = {
  deleteShare?:  {
    __typename: "Share",
    id: string,
    social?: string | null,
    postID: string,
    post:  {
      __typename: "Post",
      id: string,
      videoUri: string,
      description?: string | null,
      userID: string,
      user:  {
        __typename: "User",
        id: string,
        name?: string | null,
        username: string,
        email: string,
        avatar: string,
        createdAt: string,
        updatedAt: string,
      },
      songID?: string | null,
      song?:  {
        __typename: "Song",
        id: string,
        artist: string,
        name: string,
        coverUri: string,
        audioUri: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      likes?:  {
        __typename: "ModelLikeConnection",
        nextToken?: string | null,
        scannedCount?: number | null,
        count?: number | null,
      } | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
        scannedCount?: number | null,
        count?: number | null,
      } | null,
      shares?:  {
        __typename: "ModelShareConnection",
        nextToken?: string | null,
        scannedCount?: number | null,
        count?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    userID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetUserQueryVariables = {
  id: string,
};

export type GetUserQuery = {
  getUser?:  {
    __typename: "User",
    id: string,
    name?: string | null,
    username: string,
    email: string,
    avatar: string,
    posts?:  {
      __typename: "ModelPostConnection",
      items:  Array< {
        __typename: "Post",
        id: string,
        videoUri: string,
        description?: string | null,
        userID: string,
        songID?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
      scannedCount?: number | null,
      count?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListUsersQueryVariables = {
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUsersQuery = {
  listUsers?:  {
    __typename: "ModelUserConnection",
    items:  Array< {
      __typename: "User",
      id: string,
      name?: string | null,
      username: string,
      email: string,
      avatar: string,
      posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
        scannedCount?: number | null,
        count?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
    scannedCount?: number | null,
    count?: number | null,
  } | null,
};

export type GetPostQueryVariables = {
  id: string,
};

export type GetPostQuery = {
  getPost?:  {
    __typename: "Post",
    id: string,
    videoUri: string,
    description?: string | null,
    userID: string,
    user:  {
      __typename: "User",
      id: string,
      name?: string | null,
      username: string,
      email: string,
      avatar: string,
      posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
        scannedCount?: number | null,
        count?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    songID?: string | null,
    song?:  {
      __typename: "Song",
      id: string,
      artist: string,
      name: string,
      coverUri: string,
      audioUri: string,
      posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
        scannedCount?: number | null,
        count?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    likes?:  {
      __typename: "ModelLikeConnection",
      items:  Array< {
        __typename: "Like",
        id: string,
        postID: string,
        userID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
      scannedCount?: number | null,
      count?: number | null,
    } | null,
    comments?:  {
      __typename: "ModelCommentConnection",
      items:  Array< {
        __typename: "Comment",
        id: string,
        content: string,
        postID: string,
        userID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
      scannedCount?: number | null,
      count?: number | null,
    } | null,
    shares?:  {
      __typename: "ModelShareConnection",
      items:  Array< {
        __typename: "Share",
        id: string,
        social?: string | null,
        postID: string,
        userID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
      scannedCount?: number | null,
      count?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListPostsQueryVariables = {
  filter?: ModelPostFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPostsQuery = {
  listPosts?:  {
    __typename: "ModelPostConnection",
    items:  Array< {
      __typename: "Post",
      id: string,
      videoUri: string,
      description?: string | null,
      userID: string,
      user:  {
        __typename: "User",
        id: string,
        name?: string | null,
        username: string,
        email: string,
        avatar: string,
        createdAt: string,
        updatedAt: string,
      },
      songID?: string | null,
      song?:  {
        __typename: "Song",
        id: string,
        artist: string,
        name: string,
        coverUri: string,
        audioUri: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      likes?:  {
        __typename: "ModelLikeConnection",
        nextToken?: string | null,
        scannedCount?: number | null,
        count?: number | null,
      } | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
        scannedCount?: number | null,
        count?: number | null,
      } | null,
      shares?:  {
        __typename: "ModelShareConnection",
        nextToken?: string | null,
        scannedCount?: number | null,
        count?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
    scannedCount?: number | null,
    count?: number | null,
  } | null,
};

export type PostsByUserIDQueryVariables = {
  userID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelPostFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type PostsByUserIDQuery = {
  postsByUserID?:  {
    __typename: "ModelPostConnection",
    items:  Array< {
      __typename: "Post",
      id: string,
      videoUri: string,
      description?: string | null,
      userID: string,
      user:  {
        __typename: "User",
        id: string,
        name?: string | null,
        username: string,
        email: string,
        avatar: string,
        createdAt: string,
        updatedAt: string,
      },
      songID?: string | null,
      song?:  {
        __typename: "Song",
        id: string,
        artist: string,
        name: string,
        coverUri: string,
        audioUri: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      likes?:  {
        __typename: "ModelLikeConnection",
        nextToken?: string | null,
        scannedCount?: number | null,
        count?: number | null,
      } | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
        scannedCount?: number | null,
        count?: number | null,
      } | null,
      shares?:  {
        __typename: "ModelShareConnection",
        nextToken?: string | null,
        scannedCount?: number | null,
        count?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
    scannedCount?: number | null,
    count?: number | null,
  } | null,
};

export type PostsBySongIDQueryVariables = {
  songID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelPostFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type PostsBySongIDQuery = {
  postsBySongID?:  {
    __typename: "ModelPostConnection",
    items:  Array< {
      __typename: "Post",
      id: string,
      videoUri: string,
      description?: string | null,
      userID: string,
      user:  {
        __typename: "User",
        id: string,
        name?: string | null,
        username: string,
        email: string,
        avatar: string,
        createdAt: string,
        updatedAt: string,
      },
      songID?: string | null,
      song?:  {
        __typename: "Song",
        id: string,
        artist: string,
        name: string,
        coverUri: string,
        audioUri: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      likes?:  {
        __typename: "ModelLikeConnection",
        nextToken?: string | null,
        scannedCount?: number | null,
        count?: number | null,
      } | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
        scannedCount?: number | null,
        count?: number | null,
      } | null,
      shares?:  {
        __typename: "ModelShareConnection",
        nextToken?: string | null,
        scannedCount?: number | null,
        count?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
    scannedCount?: number | null,
    count?: number | null,
  } | null,
};

export type GetSongQueryVariables = {
  id: string,
};

export type GetSongQuery = {
  getSong?:  {
    __typename: "Song",
    id: string,
    artist: string,
    name: string,
    coverUri: string,
    audioUri: string,
    posts?:  {
      __typename: "ModelPostConnection",
      items:  Array< {
        __typename: "Post",
        id: string,
        videoUri: string,
        description?: string | null,
        userID: string,
        songID?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
      scannedCount?: number | null,
      count?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListSongsQueryVariables = {
  filter?: ModelSongFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListSongsQuery = {
  listSongs?:  {
    __typename: "ModelSongConnection",
    items:  Array< {
      __typename: "Song",
      id: string,
      artist: string,
      name: string,
      coverUri: string,
      audioUri: string,
      posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
        scannedCount?: number | null,
        count?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetLikeQueryVariables = {
  id: string,
};

export type GetLikeQuery = {
  getLike?:  {
    __typename: "Like",
    id: string,
    postID: string,
    post:  {
      __typename: "Post",
      id: string,
      videoUri: string,
      description?: string | null,
      userID: string,
      user:  {
        __typename: "User",
        id: string,
        name?: string | null,
        username: string,
        email: string,
        avatar: string,
        createdAt: string,
        updatedAt: string,
      },
      songID?: string | null,
      song?:  {
        __typename: "Song",
        id: string,
        artist: string,
        name: string,
        coverUri: string,
        audioUri: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      likes?:  {
        __typename: "ModelLikeConnection",
        nextToken?: string | null,
        scannedCount?: number | null,
        count?: number | null,
      } | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
        scannedCount?: number | null,
        count?: number | null,
      } | null,
      shares?:  {
        __typename: "ModelShareConnection",
        nextToken?: string | null,
        scannedCount?: number | null,
        count?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    userID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListLikesQueryVariables = {
  filter?: ModelLikeFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListLikesQuery = {
  listLikes?:  {
    __typename: "ModelLikeConnection",
    items:  Array< {
      __typename: "Like",
      id: string,
      postID: string,
      post:  {
        __typename: "Post",
        id: string,
        videoUri: string,
        description?: string | null,
        userID: string,
        songID?: string | null,
        createdAt: string,
        updatedAt: string,
      },
      userID: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
    scannedCount?: number | null,
    count?: number | null,
  } | null,
};

export type LikesByPostIDQueryVariables = {
  postID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelLikeFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type LikesByPostIDQuery = {
  likesByPostID?:  {
    __typename: "ModelLikeConnection",
    items:  Array< {
      __typename: "Like",
      id: string,
      postID: string,
      post:  {
        __typename: "Post",
        id: string,
        videoUri: string,
        description?: string | null,
        userID: string,
        songID?: string | null,
        createdAt: string,
        updatedAt: string,
      },
      userID: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
    scannedCount?: number | null,
    count?: number | null,
  } | null,
};

export type LikesByUserIDQueryVariables = {
  userID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelLikeFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type LikesByUserIDQuery = {
  likesByUserID?:  {
    __typename: "ModelLikeConnection",
    items:  Array< {
      __typename: "Like",
      id: string,
      postID: string,
      post:  {
        __typename: "Post",
        id: string,
        videoUri: string,
        description?: string | null,
        userID: string,
        songID?: string | null,
        createdAt: string,
        updatedAt: string,
      },
      userID: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
    scannedCount?: number | null,
    count?: number | null,
  } | null,
};

export type GetCommentQueryVariables = {
  id: string,
};

export type GetCommentQuery = {
  getComment?:  {
    __typename: "Comment",
    id: string,
    content: string,
    postID: string,
    post:  {
      __typename: "Post",
      id: string,
      videoUri: string,
      description?: string | null,
      userID: string,
      user:  {
        __typename: "User",
        id: string,
        name?: string | null,
        username: string,
        email: string,
        avatar: string,
        createdAt: string,
        updatedAt: string,
      },
      songID?: string | null,
      song?:  {
        __typename: "Song",
        id: string,
        artist: string,
        name: string,
        coverUri: string,
        audioUri: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      likes?:  {
        __typename: "ModelLikeConnection",
        nextToken?: string | null,
        scannedCount?: number | null,
        count?: number | null,
      } | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
        scannedCount?: number | null,
        count?: number | null,
      } | null,
      shares?:  {
        __typename: "ModelShareConnection",
        nextToken?: string | null,
        scannedCount?: number | null,
        count?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    userID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListCommentsQueryVariables = {
  filter?: ModelCommentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCommentsQuery = {
  listComments?:  {
    __typename: "ModelCommentConnection",
    items:  Array< {
      __typename: "Comment",
      id: string,
      content: string,
      postID: string,
      post:  {
        __typename: "Post",
        id: string,
        videoUri: string,
        description?: string | null,
        userID: string,
        songID?: string | null,
        createdAt: string,
        updatedAt: string,
      },
      userID: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
    scannedCount?: number | null,
    count?: number | null,
  } | null,
};

export type CommentsByPostIDQueryVariables = {
  postID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelCommentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type CommentsByPostIDQuery = {
  commentsByPostID?:  {
    __typename: "ModelCommentConnection",
    items:  Array< {
      __typename: "Comment",
      id: string,
      content: string,
      postID: string,
      post:  {
        __typename: "Post",
        id: string,
        videoUri: string,
        description?: string | null,
        userID: string,
        songID?: string | null,
        createdAt: string,
        updatedAt: string,
      },
      userID: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
    scannedCount?: number | null,
    count?: number | null,
  } | null,
};

export type CommentsByUserIDQueryVariables = {
  userID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelCommentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type CommentsByUserIDQuery = {
  commentsByUserID?:  {
    __typename: "ModelCommentConnection",
    items:  Array< {
      __typename: "Comment",
      id: string,
      content: string,
      postID: string,
      post:  {
        __typename: "Post",
        id: string,
        videoUri: string,
        description?: string | null,
        userID: string,
        songID?: string | null,
        createdAt: string,
        updatedAt: string,
      },
      userID: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
    scannedCount?: number | null,
    count?: number | null,
  } | null,
};

export type GetShareQueryVariables = {
  id: string,
};

export type GetShareQuery = {
  getShare?:  {
    __typename: "Share",
    id: string,
    social?: string | null,
    postID: string,
    post:  {
      __typename: "Post",
      id: string,
      videoUri: string,
      description?: string | null,
      userID: string,
      user:  {
        __typename: "User",
        id: string,
        name?: string | null,
        username: string,
        email: string,
        avatar: string,
        createdAt: string,
        updatedAt: string,
      },
      songID?: string | null,
      song?:  {
        __typename: "Song",
        id: string,
        artist: string,
        name: string,
        coverUri: string,
        audioUri: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      likes?:  {
        __typename: "ModelLikeConnection",
        nextToken?: string | null,
        scannedCount?: number | null,
        count?: number | null,
      } | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
        scannedCount?: number | null,
        count?: number | null,
      } | null,
      shares?:  {
        __typename: "ModelShareConnection",
        nextToken?: string | null,
        scannedCount?: number | null,
        count?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    userID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListSharesQueryVariables = {
  filter?: ModelShareFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListSharesQuery = {
  listShares?:  {
    __typename: "ModelShareConnection",
    items:  Array< {
      __typename: "Share",
      id: string,
      social?: string | null,
      postID: string,
      post:  {
        __typename: "Post",
        id: string,
        videoUri: string,
        description?: string | null,
        userID: string,
        songID?: string | null,
        createdAt: string,
        updatedAt: string,
      },
      userID: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
    scannedCount?: number | null,
    count?: number | null,
  } | null,
};

export type SharesByPostIDQueryVariables = {
  postID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelShareFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type SharesByPostIDQuery = {
  sharesByPostID?:  {
    __typename: "ModelShareConnection",
    items:  Array< {
      __typename: "Share",
      id: string,
      social?: string | null,
      postID: string,
      post:  {
        __typename: "Post",
        id: string,
        videoUri: string,
        description?: string | null,
        userID: string,
        songID?: string | null,
        createdAt: string,
        updatedAt: string,
      },
      userID: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
    scannedCount?: number | null,
    count?: number | null,
  } | null,
};

export type SharesByUserIDQueryVariables = {
  userID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelShareFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type SharesByUserIDQuery = {
  sharesByUserID?:  {
    __typename: "ModelShareConnection",
    items:  Array< {
      __typename: "Share",
      id: string,
      social?: string | null,
      postID: string,
      post:  {
        __typename: "Post",
        id: string,
        videoUri: string,
        description?: string | null,
        userID: string,
        songID?: string | null,
        createdAt: string,
        updatedAt: string,
      },
      userID: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
    scannedCount?: number | null,
    count?: number | null,
  } | null,
};

export type OnCreateUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
};

export type OnCreateUserSubscription = {
  onCreateUser?:  {
    __typename: "User",
    id: string,
    name?: string | null,
    username: string,
    email: string,
    avatar: string,
    posts?:  {
      __typename: "ModelPostConnection",
      items:  Array< {
        __typename: "Post",
        id: string,
        videoUri: string,
        description?: string | null,
        userID: string,
        songID?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
      scannedCount?: number | null,
      count?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
};

export type OnUpdateUserSubscription = {
  onUpdateUser?:  {
    __typename: "User",
    id: string,
    name?: string | null,
    username: string,
    email: string,
    avatar: string,
    posts?:  {
      __typename: "ModelPostConnection",
      items:  Array< {
        __typename: "Post",
        id: string,
        videoUri: string,
        description?: string | null,
        userID: string,
        songID?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
      scannedCount?: number | null,
      count?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
};

export type OnDeleteUserSubscription = {
  onDeleteUser?:  {
    __typename: "User",
    id: string,
    name?: string | null,
    username: string,
    email: string,
    avatar: string,
    posts?:  {
      __typename: "ModelPostConnection",
      items:  Array< {
        __typename: "Post",
        id: string,
        videoUri: string,
        description?: string | null,
        userID: string,
        songID?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
      scannedCount?: number | null,
      count?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreatePostSubscriptionVariables = {
  filter?: ModelSubscriptionPostFilterInput | null,
};

export type OnCreatePostSubscription = {
  onCreatePost?:  {
    __typename: "Post",
    id: string,
    videoUri: string,
    description?: string | null,
    userID: string,
    user:  {
      __typename: "User",
      id: string,
      name?: string | null,
      username: string,
      email: string,
      avatar: string,
      posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
        scannedCount?: number | null,
        count?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    songID?: string | null,
    song?:  {
      __typename: "Song",
      id: string,
      artist: string,
      name: string,
      coverUri: string,
      audioUri: string,
      posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
        scannedCount?: number | null,
        count?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    likes?:  {
      __typename: "ModelLikeConnection",
      items:  Array< {
        __typename: "Like",
        id: string,
        postID: string,
        userID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
      scannedCount?: number | null,
      count?: number | null,
    } | null,
    comments?:  {
      __typename: "ModelCommentConnection",
      items:  Array< {
        __typename: "Comment",
        id: string,
        content: string,
        postID: string,
        userID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
      scannedCount?: number | null,
      count?: number | null,
    } | null,
    shares?:  {
      __typename: "ModelShareConnection",
      items:  Array< {
        __typename: "Share",
        id: string,
        social?: string | null,
        postID: string,
        userID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
      scannedCount?: number | null,
      count?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdatePostSubscriptionVariables = {
  filter?: ModelSubscriptionPostFilterInput | null,
};

export type OnUpdatePostSubscription = {
  onUpdatePost?:  {
    __typename: "Post",
    id: string,
    videoUri: string,
    description?: string | null,
    userID: string,
    user:  {
      __typename: "User",
      id: string,
      name?: string | null,
      username: string,
      email: string,
      avatar: string,
      posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
        scannedCount?: number | null,
        count?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    songID?: string | null,
    song?:  {
      __typename: "Song",
      id: string,
      artist: string,
      name: string,
      coverUri: string,
      audioUri: string,
      posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
        scannedCount?: number | null,
        count?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    likes?:  {
      __typename: "ModelLikeConnection",
      items:  Array< {
        __typename: "Like",
        id: string,
        postID: string,
        userID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
      scannedCount?: number | null,
      count?: number | null,
    } | null,
    comments?:  {
      __typename: "ModelCommentConnection",
      items:  Array< {
        __typename: "Comment",
        id: string,
        content: string,
        postID: string,
        userID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
      scannedCount?: number | null,
      count?: number | null,
    } | null,
    shares?:  {
      __typename: "ModelShareConnection",
      items:  Array< {
        __typename: "Share",
        id: string,
        social?: string | null,
        postID: string,
        userID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
      scannedCount?: number | null,
      count?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeletePostSubscriptionVariables = {
  filter?: ModelSubscriptionPostFilterInput | null,
};

export type OnDeletePostSubscription = {
  onDeletePost?:  {
    __typename: "Post",
    id: string,
    videoUri: string,
    description?: string | null,
    userID: string,
    user:  {
      __typename: "User",
      id: string,
      name?: string | null,
      username: string,
      email: string,
      avatar: string,
      posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
        scannedCount?: number | null,
        count?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    songID?: string | null,
    song?:  {
      __typename: "Song",
      id: string,
      artist: string,
      name: string,
      coverUri: string,
      audioUri: string,
      posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
        scannedCount?: number | null,
        count?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    likes?:  {
      __typename: "ModelLikeConnection",
      items:  Array< {
        __typename: "Like",
        id: string,
        postID: string,
        userID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
      scannedCount?: number | null,
      count?: number | null,
    } | null,
    comments?:  {
      __typename: "ModelCommentConnection",
      items:  Array< {
        __typename: "Comment",
        id: string,
        content: string,
        postID: string,
        userID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
      scannedCount?: number | null,
      count?: number | null,
    } | null,
    shares?:  {
      __typename: "ModelShareConnection",
      items:  Array< {
        __typename: "Share",
        id: string,
        social?: string | null,
        postID: string,
        userID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
      scannedCount?: number | null,
      count?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateSongSubscriptionVariables = {
  filter?: ModelSubscriptionSongFilterInput | null,
};

export type OnCreateSongSubscription = {
  onCreateSong?:  {
    __typename: "Song",
    id: string,
    artist: string,
    name: string,
    coverUri: string,
    audioUri: string,
    posts?:  {
      __typename: "ModelPostConnection",
      items:  Array< {
        __typename: "Post",
        id: string,
        videoUri: string,
        description?: string | null,
        userID: string,
        songID?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
      scannedCount?: number | null,
      count?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateSongSubscriptionVariables = {
  filter?: ModelSubscriptionSongFilterInput | null,
};

export type OnUpdateSongSubscription = {
  onUpdateSong?:  {
    __typename: "Song",
    id: string,
    artist: string,
    name: string,
    coverUri: string,
    audioUri: string,
    posts?:  {
      __typename: "ModelPostConnection",
      items:  Array< {
        __typename: "Post",
        id: string,
        videoUri: string,
        description?: string | null,
        userID: string,
        songID?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
      scannedCount?: number | null,
      count?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteSongSubscriptionVariables = {
  filter?: ModelSubscriptionSongFilterInput | null,
};

export type OnDeleteSongSubscription = {
  onDeleteSong?:  {
    __typename: "Song",
    id: string,
    artist: string,
    name: string,
    coverUri: string,
    audioUri: string,
    posts?:  {
      __typename: "ModelPostConnection",
      items:  Array< {
        __typename: "Post",
        id: string,
        videoUri: string,
        description?: string | null,
        userID: string,
        songID?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
      scannedCount?: number | null,
      count?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateLikeSubscriptionVariables = {
  filter?: ModelSubscriptionLikeFilterInput | null,
};

export type OnCreateLikeSubscription = {
  onCreateLike?:  {
    __typename: "Like",
    id: string,
    postID: string,
    post:  {
      __typename: "Post",
      id: string,
      videoUri: string,
      description?: string | null,
      userID: string,
      user:  {
        __typename: "User",
        id: string,
        name?: string | null,
        username: string,
        email: string,
        avatar: string,
        createdAt: string,
        updatedAt: string,
      },
      songID?: string | null,
      song?:  {
        __typename: "Song",
        id: string,
        artist: string,
        name: string,
        coverUri: string,
        audioUri: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      likes?:  {
        __typename: "ModelLikeConnection",
        nextToken?: string | null,
        scannedCount?: number | null,
        count?: number | null,
      } | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
        scannedCount?: number | null,
        count?: number | null,
      } | null,
      shares?:  {
        __typename: "ModelShareConnection",
        nextToken?: string | null,
        scannedCount?: number | null,
        count?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    userID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateLikeSubscriptionVariables = {
  filter?: ModelSubscriptionLikeFilterInput | null,
};

export type OnUpdateLikeSubscription = {
  onUpdateLike?:  {
    __typename: "Like",
    id: string,
    postID: string,
    post:  {
      __typename: "Post",
      id: string,
      videoUri: string,
      description?: string | null,
      userID: string,
      user:  {
        __typename: "User",
        id: string,
        name?: string | null,
        username: string,
        email: string,
        avatar: string,
        createdAt: string,
        updatedAt: string,
      },
      songID?: string | null,
      song?:  {
        __typename: "Song",
        id: string,
        artist: string,
        name: string,
        coverUri: string,
        audioUri: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      likes?:  {
        __typename: "ModelLikeConnection",
        nextToken?: string | null,
        scannedCount?: number | null,
        count?: number | null,
      } | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
        scannedCount?: number | null,
        count?: number | null,
      } | null,
      shares?:  {
        __typename: "ModelShareConnection",
        nextToken?: string | null,
        scannedCount?: number | null,
        count?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    userID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteLikeSubscriptionVariables = {
  filter?: ModelSubscriptionLikeFilterInput | null,
};

export type OnDeleteLikeSubscription = {
  onDeleteLike?:  {
    __typename: "Like",
    id: string,
    postID: string,
    post:  {
      __typename: "Post",
      id: string,
      videoUri: string,
      description?: string | null,
      userID: string,
      user:  {
        __typename: "User",
        id: string,
        name?: string | null,
        username: string,
        email: string,
        avatar: string,
        createdAt: string,
        updatedAt: string,
      },
      songID?: string | null,
      song?:  {
        __typename: "Song",
        id: string,
        artist: string,
        name: string,
        coverUri: string,
        audioUri: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      likes?:  {
        __typename: "ModelLikeConnection",
        nextToken?: string | null,
        scannedCount?: number | null,
        count?: number | null,
      } | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
        scannedCount?: number | null,
        count?: number | null,
      } | null,
      shares?:  {
        __typename: "ModelShareConnection",
        nextToken?: string | null,
        scannedCount?: number | null,
        count?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    userID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateCommentSubscriptionVariables = {
  filter?: ModelSubscriptionCommentFilterInput | null,
};

export type OnCreateCommentSubscription = {
  onCreateComment?:  {
    __typename: "Comment",
    id: string,
    content: string,
    postID: string,
    post:  {
      __typename: "Post",
      id: string,
      videoUri: string,
      description?: string | null,
      userID: string,
      user:  {
        __typename: "User",
        id: string,
        name?: string | null,
        username: string,
        email: string,
        avatar: string,
        createdAt: string,
        updatedAt: string,
      },
      songID?: string | null,
      song?:  {
        __typename: "Song",
        id: string,
        artist: string,
        name: string,
        coverUri: string,
        audioUri: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      likes?:  {
        __typename: "ModelLikeConnection",
        nextToken?: string | null,
        scannedCount?: number | null,
        count?: number | null,
      } | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
        scannedCount?: number | null,
        count?: number | null,
      } | null,
      shares?:  {
        __typename: "ModelShareConnection",
        nextToken?: string | null,
        scannedCount?: number | null,
        count?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    userID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateCommentSubscriptionVariables = {
  filter?: ModelSubscriptionCommentFilterInput | null,
};

export type OnUpdateCommentSubscription = {
  onUpdateComment?:  {
    __typename: "Comment",
    id: string,
    content: string,
    postID: string,
    post:  {
      __typename: "Post",
      id: string,
      videoUri: string,
      description?: string | null,
      userID: string,
      user:  {
        __typename: "User",
        id: string,
        name?: string | null,
        username: string,
        email: string,
        avatar: string,
        createdAt: string,
        updatedAt: string,
      },
      songID?: string | null,
      song?:  {
        __typename: "Song",
        id: string,
        artist: string,
        name: string,
        coverUri: string,
        audioUri: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      likes?:  {
        __typename: "ModelLikeConnection",
        nextToken?: string | null,
        scannedCount?: number | null,
        count?: number | null,
      } | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
        scannedCount?: number | null,
        count?: number | null,
      } | null,
      shares?:  {
        __typename: "ModelShareConnection",
        nextToken?: string | null,
        scannedCount?: number | null,
        count?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    userID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteCommentSubscriptionVariables = {
  filter?: ModelSubscriptionCommentFilterInput | null,
};

export type OnDeleteCommentSubscription = {
  onDeleteComment?:  {
    __typename: "Comment",
    id: string,
    content: string,
    postID: string,
    post:  {
      __typename: "Post",
      id: string,
      videoUri: string,
      description?: string | null,
      userID: string,
      user:  {
        __typename: "User",
        id: string,
        name?: string | null,
        username: string,
        email: string,
        avatar: string,
        createdAt: string,
        updatedAt: string,
      },
      songID?: string | null,
      song?:  {
        __typename: "Song",
        id: string,
        artist: string,
        name: string,
        coverUri: string,
        audioUri: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      likes?:  {
        __typename: "ModelLikeConnection",
        nextToken?: string | null,
        scannedCount?: number | null,
        count?: number | null,
      } | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
        scannedCount?: number | null,
        count?: number | null,
      } | null,
      shares?:  {
        __typename: "ModelShareConnection",
        nextToken?: string | null,
        scannedCount?: number | null,
        count?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    userID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateShareSubscriptionVariables = {
  filter?: ModelSubscriptionShareFilterInput | null,
};

export type OnCreateShareSubscription = {
  onCreateShare?:  {
    __typename: "Share",
    id: string,
    social?: string | null,
    postID: string,
    post:  {
      __typename: "Post",
      id: string,
      videoUri: string,
      description?: string | null,
      userID: string,
      user:  {
        __typename: "User",
        id: string,
        name?: string | null,
        username: string,
        email: string,
        avatar: string,
        createdAt: string,
        updatedAt: string,
      },
      songID?: string | null,
      song?:  {
        __typename: "Song",
        id: string,
        artist: string,
        name: string,
        coverUri: string,
        audioUri: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      likes?:  {
        __typename: "ModelLikeConnection",
        nextToken?: string | null,
        scannedCount?: number | null,
        count?: number | null,
      } | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
        scannedCount?: number | null,
        count?: number | null,
      } | null,
      shares?:  {
        __typename: "ModelShareConnection",
        nextToken?: string | null,
        scannedCount?: number | null,
        count?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    userID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateShareSubscriptionVariables = {
  filter?: ModelSubscriptionShareFilterInput | null,
};

export type OnUpdateShareSubscription = {
  onUpdateShare?:  {
    __typename: "Share",
    id: string,
    social?: string | null,
    postID: string,
    post:  {
      __typename: "Post",
      id: string,
      videoUri: string,
      description?: string | null,
      userID: string,
      user:  {
        __typename: "User",
        id: string,
        name?: string | null,
        username: string,
        email: string,
        avatar: string,
        createdAt: string,
        updatedAt: string,
      },
      songID?: string | null,
      song?:  {
        __typename: "Song",
        id: string,
        artist: string,
        name: string,
        coverUri: string,
        audioUri: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      likes?:  {
        __typename: "ModelLikeConnection",
        nextToken?: string | null,
        scannedCount?: number | null,
        count?: number | null,
      } | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
        scannedCount?: number | null,
        count?: number | null,
      } | null,
      shares?:  {
        __typename: "ModelShareConnection",
        nextToken?: string | null,
        scannedCount?: number | null,
        count?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    userID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteShareSubscriptionVariables = {
  filter?: ModelSubscriptionShareFilterInput | null,
};

export type OnDeleteShareSubscription = {
  onDeleteShare?:  {
    __typename: "Share",
    id: string,
    social?: string | null,
    postID: string,
    post:  {
      __typename: "Post",
      id: string,
      videoUri: string,
      description?: string | null,
      userID: string,
      user:  {
        __typename: "User",
        id: string,
        name?: string | null,
        username: string,
        email: string,
        avatar: string,
        createdAt: string,
        updatedAt: string,
      },
      songID?: string | null,
      song?:  {
        __typename: "Song",
        id: string,
        artist: string,
        name: string,
        coverUri: string,
        audioUri: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      likes?:  {
        __typename: "ModelLikeConnection",
        nextToken?: string | null,
        scannedCount?: number | null,
        count?: number | null,
      } | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
        scannedCount?: number | null,
        count?: number | null,
      } | null,
      shares?:  {
        __typename: "ModelShareConnection",
        nextToken?: string | null,
        scannedCount?: number | null,
        count?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    userID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};
