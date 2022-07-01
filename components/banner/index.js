import Image from "next/image"
import Style from './style.module.css'
const Banner = () => {
  return (
    <section>
      <div className={Style.container}>
        <div className={Style.imgBox}>
          <Image src="/img/banner.jpg" height={62} layout="fill"/>
          <div className={Style.imgFilter}/>
        </div>
        <div className={Style.contentBox}>
          <div className={Style.textBox}>
            <h2>Lorem ipsum dolor sit <label>Amet!</label></h2>
            <p>“Lorem ipsum dolor sit amet”</p>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Banner