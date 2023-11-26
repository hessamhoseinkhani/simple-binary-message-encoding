const Message = require('./Message');

const MAX_HEADER_SIZE = 1023;
const MAX_PAYLOAD_SIZE = 256 * 1024;

class MessageCodec {
    encode(message) {
        // Encoding logic here
        // Concatenate headers and payload into a byte array
        // Use a specific delimiter or length prefix to separate headers
        // Ensure the size limits are not exceeded

        // For simplicity, let's assume headers are just concatenated without any special encoding
        // and payload is appended to the end

        let encodedMessage = "";

        // Encode headers
        for (const [key, value] of Object.entries(message.headers)) {
            const header = `${key}=${value}&`;
            if (encodedMessage.length + header.length > MAX_HEADER_SIZE) {
                throw new Error("Header size exceeds limit");
            }
            encodedMessage += header;
        }

        // Encode payload
        if (message.payload.length > MAX_PAYLOAD_SIZE) {
            throw new Error("Payload size exceeds limit");
        }
        encodedMessage += message.payload;

        return encodedMessage;
    }

    decode(data) {
        // Decoding logic here
        // Split the byte array into headers and payload based on the encoding used in encode()

        // For simplicity, let's assume headers are separated by '&' and have key-value pairs
        const encodedMessage = data.toString();
        const parts = encodedMessage.split('&');

        // Decode headers
        const headers = {};
        for (let i = 0; i < parts.length - 1; i++) {
            const pair = parts[i].split('=');
            headers[pair[0]] = pair[1];
        }

        // Decode payload
        const payload = parts[parts.length - 1];

        const decodedMessage = new Message();
        decodedMessage.headers = headers;
        decodedMessage.payload = payload;

        return decodedMessage;
    }
}

module.exports = MessageCodec;
