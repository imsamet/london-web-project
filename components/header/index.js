import Style from './style.module.css'
import Button from "../button"
import Row from '../grid/row'
import Col from '../grid/col'
import { Banner } from '../icon'

const Header = () => {
  return (
    <header className={Style.header}>
      <Row
        align="end"
      >
        <Col col={6} style={{height: "fit-content", marginBottom: 100}}>
          <div className={Style.contentBox}>
            <h1>Share and Search Hundred of Music Sheet in <label>MusicQue</label></h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque lacinia urna orci, id sodales elit viverra ut. Aenean pulvinar condimentum elit. Cras efficitur vulputate suscipit. Nam venenatis eu eros et tincidunt.</p>
            <div className={Style.buttonBox}>
              <Button>Contact</Button>
              <Button secondary>Call Me</Button>
            </div>
          </div>
        </Col>
        <Col col={6}>
          <Banner className={Style.banner}/>
        </Col>
      </Row>
    </header>
  )
}
export default Header