const Item = props => {
  const {destinationitem} = props
  const {name, imgUrl} = destinationitem

  return (
    <li>
      <img src={imgUrl} alt={name} />
      <p>{name}</p>
    </li>
  )
}

export default Item
