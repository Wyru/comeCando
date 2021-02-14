import { getSession } from "next-auth/client";
import type { NextApiRequest, NextApiResponse } from 'next'

export default async (req: NextApiRequest, res: NextApiResponse, route: (req: NextApiRequest, res: NextApiResponse) => Promise<NextApiResponse> | void) => {
  const session = await getSession({ req });

  if (session) {
    return route(req, res);
  } else {
    res.status(401).send({
      error: "You shall not pass 🧙‍♂️‍",
    });
  }
};