// pages/products
import useSWR from 'swr';
import { withPageAuthRequired } from '@auth0/nextjs-auth0';

const fetcher = async (uri) => {
    const response = await fetch(uri);
    return response.json();
};

export default withPageAuthRequired(function Products() {
    const { data, error } = useSWR('/api/hello', fetcher);
    if (error) return <div>oops... {error.message}</div>;
    if (data === undefined) return <div>Loading...</div>;
    return (
        <>
            <pre>{JSON.stringify(data, null, 2)}</pre>
            <div>{data.protected}</div>
        </>
    );
});
