const API_KEY = process.env.API_KEY;
module.exports = {
    reactStrictMode: true,
    // async redirects() {
    //     return [
    //         {
    //             source: '/contact',
    //             destination: 'https://nomadcoders.co',
    //             permanent: false,
    //         },
    //     ];
    // },
    async rewrites() {
        return [
            {
                source: '/api/movies',
                destination: `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`,
            },
            {
                source: '/api/movies/:id',
                //    /api/movies/232123
                destination: `https://api.themoviedb.org/3/movie/:id?api_key=${API_KEY}`,
            },
        ];
    },

};
//contact로 가면 form으로 redirect
//url이 바뀌는게 보임 --redirect
//source:'/old-url/:path*'  '*'는 뒤에 전부다 붙여서 redirect  'path'에는 한가지만

//url이 바뀌는거 안보임 --
