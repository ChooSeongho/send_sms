# send_sms
smsgateway(https://smsgateway.me/)를 사용하여 자신의 핸드폰에서 다른사람의 핸드폰으로 sms 발송

ex)
```let send_sms = require('./send_sms');

let option = {
  token : "smsgateway에서 받은 API Token",
  phone_number : "보내고자 하는 사람의 핸드폰 번호",
  message : "보내고자 하는 메시지",
  device_id : "smsgateway에서 받은 device_id"
}
send_sms(option);
```
