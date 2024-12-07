import app from "./app.js";
import { connectToDb } from "./config/connectToDb.js";

const port = process.env.PORT || 4000;

if (!port) {
  throw new Error("please ensure ypu have a port number assigned");
}

connectToDb()
  .then(() => startServer())
  .catch((error) => {
    console.error("Invalid database connection", error);
  });

function startServer() {
  app.listen(port, (error) => {
    if (error) {
      console.log("Cannot connect server", error);
    } else {
      console.log(`Server is connected on port ${port}`);
    }
  });
}
