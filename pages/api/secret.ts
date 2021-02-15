import authenticationCheck from './_shared/authenticationCheck';

export default async (req, res) => authenticationCheck(req, res, () => {
  res.send({
    content: 'Welcome to the secret page',
  });
  return null;
});
