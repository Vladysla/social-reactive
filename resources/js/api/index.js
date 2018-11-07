import axios from 'axios'


export const fetchUser = async () => {
    const { data } = await axios.get('/api/getUserInfo')
    return data.user
}

export const fetchFeed = async () => {
    const { data } = await axios.get('http://www.mocky.io/v2/5bd58ac9310000600041db0b')
    return data.posts
}