const { kafka } = require("./client");

async function init() {
  const admin = kafka.admin();
  console.log("admin connecting");
  admin.connect();
  console.log("admin connection success");

  console.log("Creating Topic [rider-status]");
  admin.createTopics({
    topics: [
      {
        topic: "rider-status",
        numPartitions: 2,
      },
    ],
  });
  console.log("topic created success");
  console.log("disconnecting admin");
  await admin.disconnect();
}

init();
