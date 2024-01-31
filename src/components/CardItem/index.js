// Write your code here.
import './index.css'

const CardItem = props => {
  const {cardDetails} = props
  const {tittle, description, imageUrl, className} = cardDetails

  return (
    <li className={`${className} card-container`}>
      <h1 className="heading">{tittle}</h1>
      <p className="para">{description}</p>
      <img className="image-sizing" src={imageUrl} alt={tittle} />
    </li>
  )
}
export default CardItem
