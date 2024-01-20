export async function fetchAnime(){
    const response = await fetch('https://shikimori.one/api/animes?pages=1');
    
    const data = await response.json();
    console.log(data);
    return data;
}