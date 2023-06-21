import { kv } from "@vercel/kv";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse
) {
  const user = await kv.hgetall("user:me");
  console.log('user: ', user);
  return response.status(200).json(user);
}
