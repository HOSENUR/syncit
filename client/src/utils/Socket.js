import { io } from "socket.io-client";

export const setSocket = async () => {
  const options = {
    "force new connection": true,
    reconnectionAttempts: Infinity,
    timeout: 10000,
    transports: ["websocket"],
  };
  return io("http://localhost:3001", options);
};
