// Write your code here
import './index.css'

const AppItem = props => {
  const {updateAppDetails} = props
  const {appName, imageUrl} = updateAppDetails
  return (
    <li className="cardContainer">
      <img alt={appName} src={imageUrl} className="imgProperties" />
      <p>{appName}</p>
    </li>
  )
}
export default AppItem
