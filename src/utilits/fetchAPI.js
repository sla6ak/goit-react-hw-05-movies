// https://api.themoviedb.org/3/movie/550?api_key=c4ff5df06d9c3bc212d0ff99e5222626

export const responseUrl = async () => {
    const baseUrl = "https://api.themoviedb.org/3/movie/550"
    const meta = new URLSearchParams({
    api_key: 'c4ff5df06d9c3bc212d0ff99e5222626',
    });
    const f = await fetch(`${baseUrl}?${meta}`)
    const r = await f.json()
    return r
}