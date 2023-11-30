import Photo from "./Photo"

const Card = ({name, tel, src}) => {
  return (
    <div>
      <h2>Hello {name}</h2>
      <Photo src={src} />
      <p>telephone:{tel}</p>
    </div>
  )
}

export default Card
