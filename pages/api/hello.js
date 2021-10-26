// // Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// export default function handler(req, res) {
//   res.status(200).json({ name: 'John Doe' })
// }

// pages/api/protected.js
import { withApiAuthRequired, getSession } from '@auth0/nextjs-auth0';

export default withApiAuthRequired(async function myApiRoute(req, res) {
    const { user } = getSession(req, res);
    res.json({ protected: 'My Secret', id: user.sub });
});
