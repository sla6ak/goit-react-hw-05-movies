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

export const findFilmsTitle = async (searchQuery, search) => {
    if (!searchQuery) return;
    const query = new URLSearchParams(search).get('query') ?? ''; // если данные формы утеряны то поисковое слово пустая строка
    const meta = new URLSearchParams({
        api_key: KEY,
        page: 1,
        query, // тут будет полученный квери(слово поиска) из формсабмита который прилетает в переменной search
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