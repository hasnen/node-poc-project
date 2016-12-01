/**
 * Created by hasnen on 23/11/16.
 */
// config/auth.js

// expose our config directly to our application using module.exports
module.exports = {

    'facebookAuth' : {
        'clientID'        : '707698209388609', // your App ID
        'clientSecret'    : '1e50751d909701b50a3b752505e85acd', // your App Secret
        'callbackURL'     : 'http://localhost:8080/auth/facebook/callback',
        'profileURL': 'https://graph.facebook.com/v2.5/me?fields=first_name,last_name,email'

    }

};
