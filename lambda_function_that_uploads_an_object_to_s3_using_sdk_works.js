
'use strict';
const AWS = require('aws-sdk');
AWS.config.update({region:'us-west-2'});
const S3  = new AWS.S3();



var foo_function = (params) => params + 0


exports.handler = ( event, context, callback ) => {
    console.log("This is Mamun");
    console.log(foo_function(14));
    console.log( `FUNCTION STARTED: ${new Date()}` );

    S3.putObject( {
         Bucket: 'foo01211970',
         Key: 'test.txt',
         Body: 'stuff'
    } )
         .promise()
         .then( () => console.log( 'UPLOAD SUCCESS' ) )
         .then( () => callback( null, 'MISSION SUCCESS' ) )
         .catch( e => {
            console.error( 'ERROR', e );
            callback( e );
         } );

};
