import "./body.css"
import WalletLogo from "../Assets/icons8-wallet-48.png"
import Mobile from "../Assets/89354.jpg";
import water from "../Assets/icons8-droplet-48.png";
import bulb from "../Assets/icons8-light-bulb-48.png";
import card from "../Assets/icons8-credit-card-48.png";
import fire from "../Assets/icons8-fire-48.png";
import house from "../Assets/icons8-house-48.png";
import iphone from "../Assets/icons8-iphone-14-pro-48.png";
import recipt from "../Assets/icons8-receipt-48.png";
import shield from "../Assets/icons8-shield-48.png";
import bag from "../Assets/icons8-shopping-bag-48.png";

const Body = () => {
    return (
        <>
            <div className="logo">
                <div>
                    <img src={WalletLogo} alt="logo" />
                </div>
                <div>
                    <div>THE</div>
                    <div>WALLET</div>
                    <div>BANK</div>
                </div>
            </div>
            <div className="mid-part-1">
                <div className="para">
                    <p>THE</p>
                    <p>MOBILE</p>
                    <p>WALLET</p>
                    <p>|||||||||||</p>
                </div>
                <div className="phone">
                    <img src={Mobile} alt="mobile" />
                    <div className="icons">
                        <img src={water} alt="water" />
                        <img src={bulb} alt="water" />
                        <img src={fire} alt="water" />
                        <img src={bag} alt="water" />
                        <img src={iphone} alt="water" />
                        <img src={card} alt="water" />
                        <img src={shield} alt="water" />
                        <img src={house} alt="water" />
                        <img src={recipt} alt="water" />
                        <button>MORE</button>
                    </div>


                </div>
                <div>
                    <h1>
                        GO
                    </h1>
                    <h1>CASHLESS!</h1>
                    <ul>
                        <li>ALL-IN-ONE APP</li>
                        <li>PAY FOR ALL DAILY NEED</li>
                        <li>APP IN YOUR LANGUAGE</li>
                    </ul>
                    <button>DOWNLOAD NOW</button>
                </div>
            </div>
            <div className="mid-part-2">
                <h1>A COMPLETE FINANCIAL</h1>
                <h1>NEEDS <span>IN ONE APP</span></h1>
            </div>
            <div className="mid-part-3">
                <div><p>SUPPORT ALL PAYMENT</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit nulla hic quae temporibus, officiis ut quos, delectus nesciunt odio odit laboriosam itaque nostrum repudiandae iste impedit autem molestiae veniam ipsum!</p></div>
                <div><p>HIGH SECURITY</p>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero vel soluta eos repellendus maiores deleniti magnam delectus cum modi? Placeat amet nemo ipsam voluptas in dolores recusandae neque repudiandae alias.</p></div>
                <div><p>100% DIGITAL</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex fugiat quasi saepe libero, odit, deserunt placeat, ipsum vel officiis a perspiciatis doloremque dolor porro dolorum accusantium quisquam unde sint molestias.</p></div>
            </div>
            <div className="mid-part-4">
                <div><h1>OUR LATEST TECHNOLOGY &</h1>
                    <h1>INTERESTING FEATURES</h1>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, officiis. Amet, exercitationem suscipit omnis aperiam officia earum nesciunt, odit totam illo quisquam ullam. Corrupti amet cum nulla reiciendis at ex. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad quibusdam repellendus labore deleniti doloremque, sed modi doloribus non fugiat aperiam repellat sapiente, culpa explicabo eum omnis expedita, cupiditate nemo cum?</p>
                </div>
                <div className="icons icons-2">
                    <img src={water} alt="water" />
                    <img src={bulb} alt="water" />
                    <img src={fire} alt="water" />
                    <img src={bag} alt="water" />
                    <img src={iphone} alt="water" />
                    <img src={card} alt="water" />
                    <img src={shield} alt="water" />
                    <img src={house} alt="water" />
                    <img src={recipt} alt="water" />
                    <button>MORE</button>
                </div>
            </div>
            <div className="foot">
                <p>COPYRIGHT@2023 THE WALLET BANK ALL RIGHTS RESERVED</p>
            </div>
        </>

    )
}

export default Body