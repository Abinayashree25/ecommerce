import Indi from'./Style.module.css'
import heroImg from '../assets/girl11.png'

function Index() {
  return (
    <section>
      <div className={Indi.demo1}>

        <div className={Indi.demo2}  data-aos="fade-right">
          <h4>New in town</h4>
          <h1>The New Beauty Collection</h1>
          <p>
            This new collection brings with it the most exciting lorem ipsum dolor sit amet.
          </p>

          <a href="#Makeup">
            <button data-aos="zoom-in-up">SHOP ME</button>
          </a>
        </div>

        <div className={Indi.heroImg} data-aos="zoom-in ">
          <img className={Indi.demo} src={heroImg} alt="beauty" />
        </div>

      </div>
    </section>
  )
}

export default Index
