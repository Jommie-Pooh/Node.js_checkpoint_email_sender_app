const http = require("http");
const app = require("./app");
const envVariable = require("./config/index");
const { PORT } = require("./config/index");
const httpServer = http.createServer(app);

//environmental variable configurstion

const startServer = async () => {
  httpServer.listen(PORT, () => {
    console.log(`server is running on port:${PORT}`);
  });
};

startServer();
