export async function fetchAnime(pages:number){
    const response = await fetch(`https://shikimori.one/api/animes?pages=${pages}&limit=12`);
    
    const data = await response.json();
    console.log(data);
    return data;
}