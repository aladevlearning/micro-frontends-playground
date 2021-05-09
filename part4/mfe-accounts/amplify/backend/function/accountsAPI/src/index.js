const AWS = require("aws-sdk");
const RDS = new AWS.RDSDataService();


const _normalizeResponse = result => {
    let columns = result.columnMetadata.map(column => column.name);
    let data = result.records.map(r => {
        let obj = {};
        r.map((v, i) => {
            obj[columns[i]] = Object.values(v)[0]
        });
        return obj
    })
    return data
}

exports.handler = async (event) => {

    console.log(event);
    const params = {
        secretArn: process.env.SECRET_ARN,
        resourceArn: process.env.DB_ARN,
        sql: "select * from accounts;",
        database: 'accountsDatabase',
        includeResultMetadata: true
    };

    let result = [];
    console.log(params);
    try {
        result = await RDS.executeStatement(params).promise();
        console.log({ result: JSON.stringify(result) });
    } catch (err) {
        console.log({ err });
    }


    const body = JSON.stringify(_normalizeResponse(result));
    console.log(body);
    const response = {
        statusCode: 200,
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Headers": "*"
        },
        body
    };
    return response;
};
