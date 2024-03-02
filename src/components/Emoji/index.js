import './index.css'

const Emoji = props => {
  const {emojis, feedback} = props
  const onFeedback = () => {
    feedback()
  }

  return (
    <li>
      <button type="button" onClick={onFeedback}>
        <img src={emojis.imageUrl} alt={emojis.name} />
      </button>
      <p>{emojis.name}</p>
    </li>
  )
}
export default Emoji
