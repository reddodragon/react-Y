

const Detail = ({params}) => {
  console.log(params.id)
  return (
    <h1>Gif con id {params.id}</h1>
  )
}

export default Detail