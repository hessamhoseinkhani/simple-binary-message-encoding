const Message = require('./Message');
const MessageCodec = require('./MessageCodec');

const message = new Message();
message.headers = {"Content-Type": "text/plain", "Length": "128"};
message.payload = "This is a test payload";

const codec = new MessageCodec();
const encodedData = codec.encode(message);
console.log("Encoded Data:", encodedData);

const decodedMessage = codec.decode(encodedData);
console.log("Decoded Message:", decodedMessage);
