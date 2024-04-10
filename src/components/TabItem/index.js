import './index.css'

const TabItem = props => {
  const {tabDetails, updateActiveTabId, isActive} = props
  const {tabId, displayText} = tabDetails
  const onClickTabItem = () => {
    updateActiveTabId(tabId)
  }
  const btnActive = isActive ? 'btn-active' : ''
  return (
    <li>
      <button
        type="button"
        className={`btn ${btnActive} `}
        onClick={onClickTabItem}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
