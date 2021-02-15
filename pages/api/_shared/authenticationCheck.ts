import { getSession } from 'next-auth/client';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async (
  req: NextApiRequest,
  res: NextApiResponse,
  route: (request: NextApiRequest, response: NextApiResponse) => Promise<NextApiResponse> | null,
) => {
  const session = await getSession({ req });

  if (session) {
    return route(req, res);
  }
  res.status(401).send({
    error: 'You shall not pass 🧙‍♂️‍',
  });
  return null;
};
