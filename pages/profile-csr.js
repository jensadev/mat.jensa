// pages/profile.js
import { withPageAuthRequired } from '@auth0/nextjs-auth0';

export default withPageAuthRequired(function ProfileCsr({ user }) {
    return (
        <>
            <h1>This is a CSR profile</h1>
            <div>Hello {user.name}</div>
        </>
    );
});
