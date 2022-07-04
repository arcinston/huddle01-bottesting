# Whiplash

A closer approximation to real world traffic, especially for video, would be to run headless Chrome instances to join the room. We've created a Chrometester for this purpose. This docker image will start Chromium in headless mode, and use our custom UI to join a test room.
Whiplash can join a room either as a passive subscriber, or to publish their video and audio (via simulated camera/mic source). To use this properly, you'd want to orchestrate many instances of it at the same time.

We've been experimenting with different methods to deploy Whiplash, at scale, and have found success through:

- Kubernetes cluster
- Lambdas (15 mins timeout bottleneck)

<br/>

## How to run

<br/>

```
 $ yarn
 $ node index.js
```
