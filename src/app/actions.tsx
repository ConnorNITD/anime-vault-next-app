"use server"

import AnimeCard,{ AnimeProp }  from "@/components/AnimeCard"

export type AnimeCardType = JSX.Element;

export const fetchAnime = async (page:number):Promise<AnimeCardType[]> => {
    const animeData = await fetch(`https:shikimori.one/api/animes?page=${page}&limit=8&order=popularity`)
                                .then(response => response.json())
                    
    return animeData.map((item: AnimeProp, index:number) => (
        <AnimeCard key={item.id} anime={item} index={index} />
      ))
}