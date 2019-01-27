let request = require('request');

module.exports = function(option) {
    let form_data = {
        'Content' : {
            'phone_number' : option.phone_number,
            'message' : option.message,
            'device_id' : option.device_id
        }
    }
    let options = {
        url : 'https://smsgateway.me/api/v4/message/send',
        headers : {
            'Authorization' : option.token // API token
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