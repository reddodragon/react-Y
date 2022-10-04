import { useContext } from "react"
import Gif from "../../components/Gif/Gif"
import GifsContext from "../../context/GifsContext"


export default function Detail ({params}) {

  //console.log(params.id)

  const {gifs} = useContext(GifsContext)
  console.log({gifs})

  const gif = gifs.find(singleGif => singleGif.id === params.id)
  console.log(gif)
  return (
    <Gif {...gif}/>


  )
}

