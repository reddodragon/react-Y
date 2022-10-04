import { useState } from "react"
import { Link, useLocation } from "wouter"
import ListOfGifs from "../../components/ListOfGifs/ListOfGifs"
import { useGifs } from "../../Hooks/useGif"



const POPULAR_GIFS = ["Matrix", "Argentina", "Messi", "League of legends"]

const Home = () => {
    const [keyword, setKEyword] = useState('')

    const [path, pushLocation] = useLocation()
    const {loading, gifs} = useGifs()


    const handleSubmit = e => {
        //Navegar a otra ruta
        e.preventDefault()
        pushLocation(`/search/${keyword}`)
        console.log(keyword)
    }

    const handleChange = e => {
        setKEyword(e.target.value)
    }

  return (
    <>
        <form onSubmit={handleSubmit}>
            <input onChange={handleChange} type='text' value={keyword} />
        </form>
        <h3 className="App-tittle">Ultima Búsqueda</h3>
        <ListOfGifs gifs={gifs}/>
        <h3 className="App-tittle"> Los gifs más populares</h3>
        
        <ul>
            {POPULAR_GIFS.map((popularGif) => (
                <li key={popularGif}>
                    <Link to={`/search/${popularGif}`}>
                        Gifs de {popularGif}
                    </Link>
                </li>
            ))}
        </ul>
    </>
  )
}

export default Home