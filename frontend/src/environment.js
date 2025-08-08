const IS_PROD = process.env.NODE_ENV === "production";

const server = IS_PROD
  ? "https://zync-backend.onrender.com"
  : "http://localhost:8000";

console.log("Frontend is calling backend at:", server);
export default server;
