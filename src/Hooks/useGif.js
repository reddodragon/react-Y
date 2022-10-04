import { useContext, useEffect, useState } from "react";
import GifsContext from "../context/GifsContext";
import getGifs from "../services/getGifs";

export function useGifs({ keyword } = {keyword: null}) {
  const [loading, setLoading] = useState(false);

  const {gifs, setGifs} = useContext(GifsContext)


  useEffect(() => {
    setLoading(true);
    const keywordToUse = keyword ? keyword : localStorage.getItem('lastKeyword') || 'random'
    
    getGifs({ keyword: keywordToUse }).then((gifs) => {
      setGifs(gifs);
      setLoading(false);
      //Guardamos keyword en localstorage
      localStorage.setItem('lastKeyword', keyword)
    });
  }, [keyword, setGifs]);

  return {loading, gifs}
}
