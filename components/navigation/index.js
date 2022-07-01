import Style from './style.module.css'
import cn from 'classnames'
import Image from 'next/image'
import Link from 'next/link'
import Button from '../button'
import {Phone} from '../icon'
import Row from '../grid/row'
import Col from '../grid/Col'


const Navigation = () => {
  return <nav className={cn(Style.nav)}>
    <Row>
      <Col col={12}>
        <div className={Style.container}>
          <div className={Style.logo}>
            <Image src="/img/logo.jpg" height={62} layout="fill"/>
          </div>
          <div className={Style.content}>
            <Link href="/">
              <a className={Style.item}>Home</a>
            </Link>
            <Link href="/">
              <a className={Style.item}>About</a>
            </Link>
            <Link href="/">
              <a className={Style.item}>Portfolio</a>
            </Link>
            <Link href="/">
              <a className={Style.item}>Contact</a>
            </Link>
            <Button style={{display: 'flex', gridGap: '10px'}}>
              <Phone/>
              +44 161 676 7770
            </Button>
          </div>
        </div>
      </Col>
    </Row>
  </nav>
}
export default Navigation