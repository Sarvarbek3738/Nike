import { useState } from 'react'
import './App.css'

function App() {
  const [son, setSon] = useState(1);
  const price = 11495;
  const [totalPrice, setTotalPrice] = useState(price);

  const clickMinus = () => {
    if (son > 1) {
      setSon(son - 1);
      setTotalPrice((son - 1) * price);
    }
  };

  const clickPilus = () => {
    setSon(son + 1);
    setTotalPrice((son + 1) * price);
  };

  // const [mainImg, setMainImg] = useState("/public/imgs/img1.webp")


  // const click = () => {
  //   if (mainImg == "/public/imgs/img1.webp") {
  //     setMainImg("/public/imgs/imgg2.webp")
  //   } else if (mainImg == "/public/imgs/img1.webp") {
  //     setMainImg("/public/imgs/img3.webp")
  //   }
  // }

  const [mainImg, setMainImg] = useState("/imgs/img1.webp");

const changeMainImg = (newImg) => {
    setMainImg(newImg);
};


  return (
    <>

      <header>
        <nav>
          <div className="container">
            <div className="logo">
              <img src="/imgs/Nike logo.svg" alt="" />
            </div>
            <ul className="link">
              <li><a href="">Women</a></li>
              <li><a href="">Men</a></li>
              <li><a href="">Kids</a></li>
              <li><a href="">Collections</a></li>
            </ul>
          </div>
        </nav>
        <div className="hero">
          <div className="container">
            <div className="boxs">
              <div className="box1">
                <div><p>01</p></div>
                <div><p>02</p></div>
                <div><p>03</p></div>
              </div>
              <div className="box2">
                <h1>Nike Air <br />
                  Max Pre-Day
                </h1>
                <h4>
                  Taking the classic look of heritage Nike Running <br /> into a new realm, the Nike Air Max Pre-Day <br /> brings you a fast-paced look that's ready for <br /> today's world.A true nod to the past with a <br /> design made from at least 20% recycled <br /> material by weight.</h4>

                <div className="country">
                  <div><button className='minus' onClick={() => { clickMinus() }} ><span>-</span></button></div>
                  <div><span>{son}</span></div>
                  <div><button className='pilus' onClick={() => { clickPilus() }}><span>+</span></button></div>
                </div>
                <div className="narxlar">
                  <div className="btn">
                    <button>Add to Bag</button>
                  </div>
                  <div className="narx">
                    <h3>₹{totalPrice.toLocaleString()}.00</h3>
                  </div>
                </div>
              </div>

              <div className='HeroImg' >
                <img src={mainImg} alt="" />
              </div>
            </div>

          </div>
          <div className="new">
            <div className="container">
              <div className='nikes' >
              <div className="newNike" onClick={() => changeMainImg("/imgs/img1.webp")}>
                <img src="/imgs/img1.webp" alt="" />
              </div>
              <div className="newNike" onClick={() => changeMainImg("/imgs/img3.webp")}>
                <img src="/imgs/img3.webp" alt="" />
              </div>
              <div className="newNike" onClick={() => changeMainImg("/imgs/img4.webp")}>
                <img src="/imgs/img4.webp" alt="" />
              </div>
              <div className="newNike" onClick={() => changeMainImg("/imgs/img5.webp")}>
                <img src="/imgs/img5.webp" alt="" />
              </div>
              <div className="newNike" onClick={() => changeMainImg("/imgs/img6.webp")}>
                <img src="/imgs/img6.webp" alt="" />
              </div>
              </div>
              <div>
              <div className="Watch">
                <img src="/imgs/Video.svg" alt="" />
                <h3>Watch Video</h3>
              </div>
              </div>
            </div>
          </div>

          {/* <div className="new">
            <div className="container">
              <div className="newNikes">
                <div className="newNike" onClick={()=>{click()}}>
                  <img src='/public/imgs/imgg2.webp' alt="" />
                </div>
                <div className="newNike">
                  <img src="/public/imgs/img3.webp" alt="" />
                </div>
                <div className="newNike">
                  <img src="/public/imgs/img4.webp" alt="" />
                </div>
                <div className="newNike">
                  <img src="/public/imgs/img5.webp" alt="" />
                </div>
                <div className="newNike">
                  <img src="/public/imgs/img6.webp" alt="" />
                </div>


              </div>
              <div className="Watch">
                <img src="/public/imgs/Video.svg" alt="" />
                <h3>Watch Video</h3>
              </div>
            </div>
          </div> */}
        </div>
      </header>
    </>
  )
}

export default App
