# Simple Binary Message Encoding Scheme

## Overview

This project implements a simple binary message encoding scheme in JavaScript for use in a signaling protocol. The goal is to facilitate real-time communication between peers in a communication application. The design adheres to the specified constraints and aims to be both clean and production-grade.

## Implementation Details

### Message Structure

The `Message` class represents the structure of a message, consisting of headers and a payload. Headers are name-value pairs, each limited to 1023 bytes, and the payload is limited to 256 KiB. A message can have a maximum of 63 headers.

### MessageCodec Interface

The `MessageCodec` interface defines methods for encoding a `Message` into a binary format and decoding binary data into a `Message` object.

### Assumptions

1. **Encoding Headers:** For simplicity, headers are concatenated into a single string with key-value pairs separated by '&' during encoding.

2. **Encoding Payload:** The payload is directly appended to the encoded message.

### How to Use

1. **Create a Message Object:**
    ```javascript
    const message = new Message();
    message.headers = { "Content-Type": "text/plain", "Length": "128" };
    message.payload = "This is a test payload";
    ```

2. **Create a MessageCodec Object:**
    ```javascript
    const codec = new MessageCodec();
    ```

3. **Encode and Decode:**
    ```javascript
    const encodedData = codec.encode(message);
    const decodedMessage = codec.decode(encodedData);
    ```

### Error Handling

The implementation includes basic error handling to ensure that header and payload sizes do not exceed specified limits.

### Why This Design?

- **Simplicity:** The design is intentionally kept simple to align with the problem's non-complex nature. It uses basic string concatenation for encoding, and decoding logic is straightforward.

- **Readability:** Code readability is prioritized, making it easy for developers to understand and modify the implementation.

- **Assumptions:** Assumptions are explicitly stated in this README to provide transparency about design choices.

### Future Considerations

For a more robust solution, future considerations could include:
- Specialized encoding for headers and payload.
- Use of binary serialization for improved efficiency.
- Enhanced error handling and validation.

## Conclusion

This implementation is a starting point for a binary message encoding scheme, balancing simplicity with the specified requirements. It can be further refined based on specific use cases and production considerations.
