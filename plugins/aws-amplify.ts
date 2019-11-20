import Vue from 'vue'
import Amplify, * as AmplifyModules from 'aws-amplify'
import { AmplifyPlugin } from 'aws-amplify-vue'

Amplify.configure({
  Auth: {
    identityPoolId: process.env.AWS_AMPLIFY_AUTH_IDENTITY_POOL_ID,
    region: process.env.AWS_AMPLIFY_AUTH_REGION,
    userPoolId: process.env.AWS_AMPLIFY_AUTH_USER_POOL_ID,
    userPoolWebClientId: process.env.AWS_AMPLIFY_AUTH_USER_POOL_WEB_CLIENT_ID
  },
  API: {
    endpoints: [
      {
        name: 'api-gateway',
        endpoint: process.env.APIGATEWAY_REGION,
        region: process.env.APIGATEWAY_ENDPOINT
      }
    ]
  }
})

Vue.use(AmplifyPlugin, AmplifyModules)
