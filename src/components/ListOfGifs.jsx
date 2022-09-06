
import { useEffect, useState } from "react";
import getGifs from "../services/getGifs";
import Gif from "./Gif"

const ListOfGifs = ({params}) => {

  const {keyword} = params
  const [gifs, setGifs] = useState([]);


  useEffect(() => {
    getGifs({ keyword })
      .then((gifs) => setGifs(gifs));

    //setGifs(DIFERETNS_GIFFS)
  }, [keyword]);

  return (
    <>
        {gifs.map(({id, title, url}) => (
        <Gif key={id} title={title} url={url} id={id}/>
      ))}
    </>
    
  )
}

export default ListOfGifs