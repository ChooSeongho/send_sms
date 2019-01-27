let request = require('request');

module.exports = function(token, tel, data) {
    let form_data = {
        'Content' : {
            'phone_number' : tel,
            'message' : data,
            'device_id' : "105918"
        }
    }
    let options = {
        url : 'https://smsgateway.me/api/v4/message/send',
        headers : {
            'User-Agent' : 'Mozilla/5.0 (Windows NT 6.3; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.102 Safari/537.36',
            'Authorization' : token // token
        },
        body : JSON.stringify(form_data)
    }

    return new Promise(function(resolve, reject) {
        request.post(options, function(err, res, body) {
            if(!err && res.statusCode == 200) {
                resolve('success');
            } else {
                reject(body);
            }
        });
    });
}