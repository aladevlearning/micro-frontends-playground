/* Amplify Params - DO NOT EDIT
    ENV
    REGION
Amplify Params - DO NOT EDIT */

exports.handler = async (event) => {

    const response = {
        statusCode: 200,

        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Headers": "*"
        },
        body: JSON.stringify({
            text: 'Ciao'
        }),
    };
    return response;
};
