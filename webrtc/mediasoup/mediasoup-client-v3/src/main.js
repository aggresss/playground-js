/* eslint-disable require-atomic-updates */
import * as mediasoupClient from "mediasoup-client";

console.log(mediasoupClient.version);

const handlerName = mediasoupClient.detectDevice();

if (handlerName) {
  console.log("detected handler: %s", handlerName);
} else {
  console.warn("no suitable handler found for current browser/device");
}
