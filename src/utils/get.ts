export async function get(url:string) {
    const res = await fetch(url,{
        credentials: "include"
    })
    const data = await res.json()
    return data
}