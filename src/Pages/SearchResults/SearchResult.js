import ListOfGifs from "../../components/ListOfGifs/ListOfGifs"


import { ClockLoader } from 'react-spinners'

import { useGifs } from "../../Hooks/useGif"


const SearResult = ({ params}) => {
  const {keyword} = params
  const {loading, gifs} = useGifs({keyword})

  return(
    <>
      {loading 
        ? <ClockLoader/>
        : <ListOfGifs gifs={gifs}/>
      }
    </>
  )
}

export default SearResult