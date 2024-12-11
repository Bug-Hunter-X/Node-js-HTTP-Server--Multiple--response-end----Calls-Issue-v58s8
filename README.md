# Node.js HTTP Server: Multiple `response.end()` Calls Issue

This repository demonstrates an uncommon error in Node.js HTTP servers related to the incorrect use of the `response.end()` method.  Multiple calls to `response.end()` can lead to unpredictable behavior, potentially resulting in incomplete or corrupted responses sent to the client.

## Description
The `bug.js` file contains a simple HTTP server. However, it demonstrates a scenario where `response.end()` is called multiple times, leading to a subtle error.  The client might receive an incomplete response or an unexpected error.

The `bugSolution.js` provides a corrected version that addresses this issue.