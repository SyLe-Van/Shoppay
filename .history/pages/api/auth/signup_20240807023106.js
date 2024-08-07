// import nc from "next-connect";

// const handler = nc();

// handler.post(async (req, res) => {
//   res.send("Hello World");
// });

// export default handler;

import { createRouter } from "next-connect";

const router = createRouter();

router.get(async (req, res) => {
  res.send("Hello World");
});

export default router.handler();
