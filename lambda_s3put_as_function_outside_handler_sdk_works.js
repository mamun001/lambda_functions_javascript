
'use strict';
const AWS = require('aws-sdk');
AWS.config.update({region:'us-west-2'});
const S3  = new AWS.S3();



var foo_function = (params) => params + 0;

var params = {
  Bucket: 'foo01211970',
  Key: 'test5.txt',
  Body: 'stuff'
};

var s3putfunction = (params)=> {

    S3.putObject( params )
         .promise()
         .then( () => console.log( 'UPLOAD SUCCESS' ) )
         .catch( e => {
            console.error( 'ERROR', e );
            console.log( 'error : did not work')
         } );

}


exports.handler = ( event, context, callback ) => {
    console.log("This is Mamun");
    console.log(foo_function(5));
    console.log( `FUNCTION STARTED: ${new Date()}` );

    s3putfunction( params );

};
