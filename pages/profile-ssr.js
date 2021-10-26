// pages/profile.js
import { withPageAuthRequired } from '@auth0/nextjs-auth0';

export default function ProfileSsr({ user }) {
    return (
        <>
            <h1>This is a protected SSR</h1>
            <div>Hello {user.name}</div>
        </>
    );
}

// You can optionally pass your own `getServerSideProps` function into
// `withPageAuthRequired` and the props will be merged with the `user` prop
export const getServerSideProps = withPageAuthRequired();
