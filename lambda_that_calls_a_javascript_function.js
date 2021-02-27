
var foo_function = (params) => params + 2


exports.handler = async (event) => {
    // TODO implement
    const response = {
        statusCode: 200,
        body: JSON.stringify('Hello from Lambda!'),
    };
    console.log("This is Mamun");
    console.log(foo_function(2));
    return response;
};

