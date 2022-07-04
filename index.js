const axios = require("axios");

const roomId = "dev";
const video = "true";
const audio = "true";
const num_peers = 5;
for (let i = 0; i < num_peers; i++) {
  axios
    .get(
      `https://lzemkt4010.execute-api.ap-south-1.amazonaws.com/tester?roomId=${roomId}&video=${video}&audio=${audio}`
    )
    .catch();
}
