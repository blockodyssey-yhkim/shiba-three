// //url id 값
// //example > url/movies/id2313213
// import { useRouter } from 'next/router';
// import { useEffect, useState } from 'react';
//
// export default function Detail() {
//     const router = useRouter();
//     const { id, title, poster_path } = router.query;
//     const [detailData, setDetailData] = useState({
//         title: '',
//         poster_path: '',
//     });
//     //이 id 라는 query변수 명은 이 파일의 [id] 명과 같다. 여기선 'id'
//
//     useEffect(() => {
//         if (title && poster_path) {
//             setDetailData({ title, poster_path });
//         } else if (id) {
//             (async () => {
//                 const { title, poster_path } = await (await fetch(`/api/movies/${id}`)).json();
//                 setDetailData({
//                     title,
//                     poster_path,
//                 });
//             })();
//         }
//     }, [id]);
//     return (
//         <div>
//             <h4>{detailData.title || 'Loading...'}</h4>
//             {detailData.poster_path ? <img src={`https://image.tmdb.org/t/p/w500/${detailData.poster_path}`} /> : null}
//         </div>
//     );
// }
