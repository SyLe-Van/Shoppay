import { default as nc } from "next-connect";

const handler = nc();

handler.post(async (req, res) => {
  res.send("Hello World");
});

export default handler;