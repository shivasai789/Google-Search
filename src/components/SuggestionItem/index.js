import './index.css'

const SuggestionItem = props => {
  const {eachItem} = props
  return (
    <li>
      <p>{eachItem.suggestion}</p>
      <button type="button">
        <img
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
          alt="arrow"
        />
      </button>
    </li>
  )
}

export default SuggestionItem
