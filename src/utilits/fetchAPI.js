// https://api.themoviedb.org/3/movie/550?api_key=c4ff5df06d9c3bc212d0ff99e5222626

const baseUrl = "https://api.themoviedb.org/3/"
const KEY = 'c4ff5df06d9c3bc212d0ff99e5222626'

export const findPopularFilms = async () => {
    const meta = new URLSearchParams({
        api_key: KEY,
        page: 1,
    });
    const f = await fetch(`${baseUrl}trending/movie/week?${meta}`)
    const r = await f.json()
    return r
}

export const findFilmsTitle = async (searchWord) => {
    const meta = new URLSearchParams({
        api_key: KEY,
        page: 1,
        query: searchWord,
        include_adult: false,
    });
    const f = await fetch(`${baseUrl}search/movie?${meta}`)
    const r = await f.json()
    return r
}

export const findFilmsInfo = async (id) => {
    const meta = new URLSearchParams({
        api_key: KEY,
    });
    const f = await fetch(`${baseUrl}movie/${id}?${meta}&append_to_response=credits,reviews`)
    const r = await f.json()
    return r
}