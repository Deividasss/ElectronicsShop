import "../MainPage/MainPage.scss"
import { Form } from "react-bootstrap"
import { useNavigate } from "react-router-dom"

const MainPage = () => {

    const navigate = useNavigate();

    return (
        <>
            <div className="container">
                <h1 className="header">---- ResiSTORE -------------------</h1>
                <div className="headerInfo">
                    <div className='slider1'>
                        <div class="card1">
                            <div class="card_part card_part-one">
                                <img className='sliderImg1' src="https://picfit.topocentras.lt/xcdn-cgi/image/fit=contain,format=auto,quality=80/cdn-cgi/image/fit=contain,quality=80,format=auto/media/aw_rbslider/slides/Apple-01-Macbook-Air-M2-PIRKTI-976x379_1.jpg" alt="foto" />
                            </div>
                            <div class="card_part card_part-two">
                                <img className='sliderImg' src="https://picfit.topocentras.lt/xcdn-cgi/image/fit=contain,format=auto,quality=80/cdn-cgi/image/fit=contain,quality=80,format=auto/media/aw_rbslider/slides/Apple-Geriausi_-pasi_lym_-dienos-LIEPA-976x379.jpg" alt="foto" />
                            </div>
                            <div class="card_part card_part-three">
                                <img className='sliderImg' src="https://picfit.topocentras.lt/xcdn-cgi/image/fit=contain,format=auto,quality=80/cdn-cgi/image/fit=contain,quality=80,format=auto/media/aw_rbslider/slides/C06-Liepa-Samsung-GW4-_-dovana-976x379.jpg" alt="foto" />
                            </div>
                            <div class="card_part card_part-four">
                                <img className='sliderImg' src="https://picfit.topocentras.lt/xcdn-cgi/image/fit=contain,format=auto,quality=80/cdn-cgi/image/fit=contain,quality=80,format=auto/media/aw_rbslider/slides/Apple-Geriausi_-pasi_lym_-dienos-LIEPA-976x379.jpg" alt="foto" />
                            </div>
                        </div>
                    </div>
                    <div className="logoLinks">
                        <div>
                            <a onClick={() => navigate('mainShop')}>
                                <img className="pcLogo" src="https://www.freeiconspng.com/uploads/pc-computer-screen-png-21.png"></img>
                            </a>
                        </div>
                        <div>
                            <a onClick={() => navigate('mainShop')}>
                                <img className="phoneLogo" src="https://web-mobile-first.s3.eu-west-3.amazonaws.com/production/small_apple_iphone_13_pro_max_2021_1b54b42564.png"></img>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MainPage