import useGlobalGifs from "../../Hooks/UseGlobalGifs"
import Gif from "../../components/Gif/Gif"


export default function Detail ({params}) {

  //console.log(params.id)

  const gifs = useGlobalGifs()
  console.log({gifs})

  const gif = gifs.find(singleGif => singleGif.id === params.id)
  console.log(gif)
  return (
    <Gif {...gif}/>


  )
}

