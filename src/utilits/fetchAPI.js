// https://api.themoviedb.org/3/movie/550?api_key=c4ff5df06d9c3bc212d0ff99e5222626

const baseUrl = "https://api.themoviedb.org/3/movie/550"
const KEY = 'c4ff5df06d9c3bc212d0ff99e5222626'

export const findPopularFilms = async () => {
    const meta = new URLSearchParams({
    api_key: KEY,
    });
    const f = await fetch(`${baseUrl}?${meta}`)
    const r = await f.json()
    return r
}

export const findFilmsTitle = async (searchWord) => {
    const meta = new URLSearchParams({
    api_key: KEY,
    });
    const f = await fetch(`${baseUrl}?${meta}`)
    const r = await f.json()
    return r
}

export const findFilmsInfo = async () => {
    const meta = new URLSearchParams({
    api_key: KEY,
    });
    const f = await fetch(`${baseUrl}?${meta}`)
    const r = await f.json()
    return r
}