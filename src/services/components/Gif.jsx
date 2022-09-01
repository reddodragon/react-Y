
const Gif = ({title, id, url}) => {
  return (
    <div>
              <h4>{title}</h4>
              <small>{id}</small>
              <img alt={title} src={url}/> 

            </div>
  )
}

export default Gif