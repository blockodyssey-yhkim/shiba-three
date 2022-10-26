import { useEffect, useState } from 'react';
import Seo from '/components/Seo';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Home = ({ results }) => {
    const router = useRouter();
    const onClick = (id, title, poster_path) => {
        router.push({
            pathname: `/movies/${title}/${id}`,
        });
    };
    console.log(results);
    /**** url query 숨기기
     * as 사용해서 masked url
     * Link도 똑같이 사용 가능.
     * ****/

    return (
        <>
            <div className={'container'}>
                <Seo title={'Home'} />
                {results.map((_, index) => {
                    return (
                        <div className={'movie'} key={_.id} onClick={() => onClick(_.id, _.title, _.poster_path)}>
                            <img src={`https://image.tmdb.org/t/p/w500/${_.poster_path}`} />
                            <Link href={`/movies/${_.original_title}/${_.id}`}>
                                <a>
                                    <h4>{_.title}</h4>
                                </a>
                            </Link>
                        </div>
                    );
                })}
                <style jsx>{`
                    .container {
                        display: grid;
                        grid-template-columns: 1fr 1fr;
                        padding: 20px;
                        gap: 20px;
                    }
                    .movie img {
                        max-width: 100%;
                        border-radius: 12px;
                        transition: transform 0.2s ease-in-out;
                        box-shadow: rgba(0, 0, 0, 0.1) 0 4px 12px;
                    }
                    .movie:hover img {
                        transform: scale(1.05) translateY(-10px);
                    }
                    .movie h4 {
                        font-size: 18px;
                        text-align: center;
                    }
                `}</style>
            </div>
        </>
    );
};
export default Home;

// useEffect(() => {
//     (async () => {
//         const { results } = await (await fetch(`/api/routeExample`)).json();
//         setMovies(results);
//     })();
// }, []);
//서버사이드 렌더링
export async function getServerSideProps() {
    const { results } = await (await fetch(`http://localhost:3000/api/movies`)).json();
    return {
        props: {
            results,
        },
    };
    //api key 안보임 오직 server에서만 처리
}
