import axios from 'axios';

export default getGithubAccountData = async () => {
    let res = await axios.get("http://localhost:3000/category");
    console.log("getGithubAccountData res.data: ", res.data);
    return res.data;
}