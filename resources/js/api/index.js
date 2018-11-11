import axios from 'axios'

export const baseUrl = 'http://social.loc'


export const fetchUser = async () => {
    const { data } = await axios.get(`${baseUrl}/api/getUserInfo`)
    return data.user
}

export const fetchFeed = async (user) => {
    const { data } = await axios.get(`${baseUrl}/api/getPosts/${user}`)
    return data
}

export const loadMoreFeed = async (url) => {
    const { data } = await axios.get(url)
    return data
}