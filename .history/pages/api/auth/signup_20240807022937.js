// import nc from "next-connect";

// const handler = nc();

// handler.post(async (req, res) => {
//   res.send("Hello World");
// });

// export default handler;
import { NextApiRequest, NextApiResponse } from "next";
import { createRouter, expressWrapper } from "next-connect";

const router = createRouter();

router.post("/api/auth/signup", (req, res, next) => {
  res.send("Hi");
});
