import nextConnect from "next-connect";

const handler = nextConnect();

handler.post(async (req, res) => {
  res.send("Hello World");
});

export default handler;
