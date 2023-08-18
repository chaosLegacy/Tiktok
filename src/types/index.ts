import { CognitoUser } from 'amazon-cognito-identity-js';

type UserAttributes = {
  sub: string;
  email: string;
  email_verified: string;
  name: string;
  updated_at: string;
  'custom:bytesQuota': string;
  'custom:bytesUsed': string;
};
/*
 * The following interface extends the CognitoUser type because it has issues
 * (see github.com/aws-amplify/amplify-js/issues/4927). Eventually (when you
 * no longer get an error accessing a CognitoUser's 'attribute' property) you
 * will be able to use the CognitoUser type instead of CognitoUserExt.
 */
interface CognitoUserExt extends CognitoUser {
  attributes: UserAttributes;
}

export type { CognitoUserExt };
