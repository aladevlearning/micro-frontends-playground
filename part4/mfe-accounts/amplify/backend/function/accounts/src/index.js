

exports.handler = async (event) => {
    // TODO implement
    const response = {
        statusCode: 200,
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Headers": "*",
            "Access-Control-Allow-Methods": "OPTIONS,POST,GET",
            "Access-Control-Allow-Credentials": true
        },
        body: JSON.stringify('Hello from Lambda!'),
    };
    return response;
};
