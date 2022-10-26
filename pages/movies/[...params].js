//url id 값
//example > url/movies/id2313213
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Seo from '/components/Seo';

export default function Detail({ params }) {
    const router = useRouter();
    const [title, id] = params || [];
    return (
        <div>
            <Seo title={title} />

            <h4>{title || 'Loading...'}</h4>
        </div>
    );
}
export function getServerSideProps({ params: { params } }) {
    console.log(params);
    return {
        props: {
            params,
        },
    };
}
