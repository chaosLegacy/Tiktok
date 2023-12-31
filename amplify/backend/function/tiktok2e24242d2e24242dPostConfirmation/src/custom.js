/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
const aws = require('aws-sdk');

const ddb = new aws.DynamoDB();

exports.handler = async (event, context) => {
  let date = new Date();
  if (event.request.userAttributes.sub) {
    let params = {
      Item: {
        id: { S: event.request.userAttributes.sub },
        __typename: { S: 'User' },
        username: { S: event.userName },
        avatar: { S: 'https://xsgames.co/randomusers/avatar.php?g=male' },
        email: { S: event.request.userAttributes.email },
        createdAt: { S: date.toISOString() },
        updatedAt: { S: date.toISOString() },
        // Required fields if you eanbled Enable conflict detection
        _lastChangedAt: { S: date.getTime().toString() },
        _version: { S: '1' },
      },
      TableName: process.env.USERTABLE,
    };

    console.log('parent: ', params);

    try {
      await ddb.putItem(params).promise();
      console.log('Success');
    } catch (err) {
      console.log('Error Put', err);
    }

    console.log('Success: Everything executed correctly');
    context.done(null, event);
  } else {
    console.log('Error: Nothing was written to DynamoDB');
    context.done(null, event);
  }
};
