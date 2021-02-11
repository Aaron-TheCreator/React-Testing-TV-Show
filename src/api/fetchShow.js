import axios from "axios";

// const apiUrl = `https://api.tvmaze.com/singlesearch/shows?q=stranger-things&embed=episodes`;

export const fetchShow = (apiUrl) => {
    return axios
        .get(apiUrl)
        .then( res => {
            console.log(res);
            return res;
        })
        .catch(err => {
            console.log(err);
            return err;
        });
};

// const fetchShow = () => {
//     axios
//     .get(
//       "https://api.tvmaze.com/singlesearch/shows?q=stranger-things&embed=episodes"
//     )
//     .then(res => {
//       setShow(res.data);
//       setSeasons(formatSeasons(res.data._embedded.episodes));
//     });
// };