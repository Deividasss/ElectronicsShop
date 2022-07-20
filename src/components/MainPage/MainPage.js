import "../MainPage/MainPage.scss"
import { Form } from "react-bootstrap"
import { useNavigate } from "react-router-dom"

const MainPage = () => {

    const navigate = useNavigate();

    return (
        <>
            <div className="container">
                <div className="mainPage">
                    <p className="name">\\\\\\\\\\-|------------------------------ Prisijunk prie SMART NET ir sutaupyk! --- <button onClick={() => alert("PRISIJUNGĖTE")} className="prisijungtiBtn">PRISIJUNK</button> ------------------------------|-//////////</p>
                    <h1 className="mainPageHeader">----| ResiSTORE |---------------------</h1>
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
                                    <p className="line">---------- PREKES RASITE ČIA ----------</p>
                                </a>
                            </div>
                            <div>
                                <a onClick={() => navigate('mainShop')}>
                                    <img className="phoneLogo" src="https://web-mobile-first.s3.eu-west-3.amazonaws.com/production/small_apple_iphone_13_pro_max_2021_1b54b42564.png"></img>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className='slider2'>
                        <div class="card2">
                            <div class="card_part card_part-one">
                                <img className='sliderImg2' src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-og-2021?wid=1200&hei=630&fmt=jpeg&qlt=95&.v=1630076508000" alt="foto" />
                            </div>
                            <div class="card_part card_part-two">
                                <img className='sliderImg2' src="https://images.samsung.com/is/image/samsung/assets/lt/2203/galaxy-a-series/07_Cross-Device-Experience_no_asset_mo.jpg?$FB_TYPE_A_MO_JPG$" alt="foto" />
                            </div>
                            <div class="card_part card_part-three">
                                <img className='sliderImg2' src="https://i.ytimg.com/vi/K5xMRttpPOE/maxresdefault.jpg" alt="foto" />
                            </div>
                            <div class="card_part card_part-four">
                                <img className='sliderImg2' src="https://assets-prd.ignimgs.com/2022/06/24/xbox-series-xs-broll-1656083948065.jpg" alt="foto" />
                            </div>
                        </div>
                    </div>
                    <div className="contacts">
                        <p className="contactsHeader">Turite klausimų?</p>
                        <p>Mūsų specialistai pasirengę <br/> padėti</p>
                        <p className="contactNr">+370 63234637</p>
                        <p className="contactMail">info@resiStore.lt</p>
                        <img className="contactsImg" src="https://www.varle.lt/static/web/img/ask-person.svg"></img>
                    </div>
                    <div className="logos">
                        <img className="appleLogo" src="https://logolook.net/wp-content/uploads/2021/06/Apple-Logo.svg"></img>
                        <img className="samsungLogo" src="https://logos-world.net/wp-content/uploads/2020/04/Samsung-Logo.png"></img>
                        <img className="lenovoLogo" src="https://logodownload.org/wp-content/uploads/2014/09/lenovo-logo-1.png"></img>
                        <img className="asusLogo" src="https://logos-world.net/wp-content/uploads/2020/07/Asus-Logo.png"></img>
                        <img className="xboxLogo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/XBOX_logo_2012.svg/1280px-XBOX_logo_2012.svg.png"></img>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MainPage