import logo from './logo.svg';
import './App.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import React, { useState } from 'react';
import SignUpPage from './signup';
import Login from './login';
// Header Component
const Header = ({onSignupButtonClick,onLoginButtonClick}) => (
  <header className="header">
    <h1>Flipkart</h1>
    <nav className="nav">
      <a href="#" onClick={onLoginButtonClick}>Login</a>
      <a href="#" onClick={onSignupButtonClick}>Sign-Up</a>
      <a href="#">Cart</a>
      <a href="#" id="home">Home</a>
    </nav>
    <div className="search-container">
      <input
        type="text"
        className="search-bar"
        placeholder="Search items..."
      />
      <button id="search-button">Search</button>
    </div>
  </header>
);


// Product Card Component
const ProductCard = ({ item }) => {
  const extractImageUrl = (htmlString) => {
    const doc = new DOMParser().parseFromString(htmlString, 'text/html');
    const imgElement = doc.querySelector('img');
    return imgElement ? imgElement.src : '';
  }
  const extractStyles = (htmlString) => {
    const doc = new DOMParser().parseFromString(htmlString, 'text/html');
    const imgElement = doc.querySelector('img');
    return imgElement ? imgElement.getAttribute('style') : '';
  };
  const imageUrl = extractImageUrl(item.item1);
  const imageStyles = extractStyles(item.item1);

  return (
    <div className={`${item.class}`}>
      
      <img className='i' src={imageUrl}  style={{ maxWidth: '100%', height: '130px'}} />
      <p>{item.name}</p>
      
    </div>
  );
};
function MainComponent() {
 
  const [searchValue, setSearchValue] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearchChange = (event) => {
    setSearchValue(event.target.value);
  };
  const database = [
    {name:'iphone',item1:'<div class="class1"><img src="https://support.apple.com/library/content/dam/edam/applecare/images/en_US/iphone/fall-2023-iphone-colors-iphone-15-pro.png" style="max-width: 100%; height:auto;"><p>iphone11</p></div>'},
    {name:'iphone',item1:'<div class="class2"><img src="https://img1.gadgetsnow.com/gd/images/products/medium/G201748.jpg" style="max-width: 100%; height:130px;"><p>iphone12</p></div>'},
    {name:'iphone',item1:'<div class="class3"><img src="https://www.apple.com/newsroom/images/product/iphone/standard/Apple-iPhone-14-Pro-iPhone-14-Pro-Max-hero-220907.jpg.og.jpg?202310101643" style="max-width: 100%; height:130px;"><p>iphone13</p></div>'},
    {name:'samsung',item1:'<div class="class1"><img src="https://www.91-img.com/pictures/137136-v10-samsung-galaxy-a12-mobile-phone-large-2.jpg?tr=h-271,c-at_max,q-60,pr-true" style="max-width: 100%; height:130px;"><p>Galaxy A12</p></div>'},
    {name:'samsung',item1:'<div class="class2"><img src="https://www.91-img.com/pictures/143501-v6-samsung-galaxy-s21-fe-mobile-phone-large-1.jpg?tr=h-271,c-at_max,q-60,pr-true" style="max-width: 100%; height:130px;"><p>Galaxy S21</p></div>'},
    {name:'samsung',item1:'<div class="class3"><img src="https://www.myg.in/images/thumbnails/2035/1500/detailed/46/a05s-1.jpg" style="max-width: 100%; height:130px;"><p>Galaxy A05</p></div>'},
    {name:'OPPO',item1:'<div class="class1"><img src="https://akm-img-a-in.tosshub.com/sites/visualstory/wp/2023/07/Oppo-Reno-10.jpg?size=*:900" style="max-width: 100%; height:130px;"><p>RENO 10</p></div>'},
    {name:'OPPO',item1:'<div class="class2"><img src="https://cdn1.smartprix.com/rx-iQaWkh90Y-w1200-h1200/QaWkh90Y.jpg" style="max-width: 100%; height:130px;"><p>A58</p></div>'},
    {name:'OPPO',item1:'<div class="class3"><img src="https://static.toiimg.com/thumb/resizemode-4,msid-70995876,imgsize-500,width-800/70995876.jpg" style="max-width: 100%; height:130px;"><p>Galaxy A5</p></div>'},
    {name:'Xiaomi',item1:'<div class="class1"><img src="https://i.gadgets360cdn.com/products/large/xiaomi-mi-11-367x800-1609163900.jpg" style="max-width: 100%; height:130px;"><p>Mi11</p></div>'},
    {name:'Xiaomi',item1:'<div class="class2"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1plYTxrcSjrU2ZLdiqaSj3M88MqWrZp4caQ&usqp=CAU" style="max-width: 100%; height:130px;"><p>Readmi Note 12</p></div>'},
    {name:'Xiaomi',item1:'<div class="class3"><img src="https://www.corning.com/microsites/csm/gorillaglass/Xiaomi/CGG_Xiaomi-11T-Pro.jpg" style="max-width: 100%; height:130px;"><p>11T pro</p></div>'},
    {name:'Vivo',item1:'<div class="class1"><img src="https://rukminim2.flixcart.com/image/850/1000/xif0q/mobile/k/u/n/-original-imagzjhwtfthcmzz.jpeg?q=90" style="max-width: 100%; height:130px;"><p>T2 X</p></div>'},
    {name:'Vivo',item1:'<div class="class2"><img src="https://d2xamzlzrdbdbn.cloudfront.net/products/70834f97-9b4c-44ce-bb75-0dc998b44e0a21081259.jpg" style="max-width: 100%; height:130px;"><p>Y21</p></div>'},
    {name:'Vivo',item1:'<div class="class3"><img src="https://cdn1.smartprix.com/rx-iz3nnCfxy-w1200-h1200/z3nnCfxy.jpg" style="max-width: 100%; height:130px;"><p>U3</p></div>'},
    {name:'Milk',item1:'<div class="class1"><img src="https://www.southernliving.com/thmb/zCKBQZG85v0gxUpn5Nm_8elGJaA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-1413944242-79c406e0bbe4435596bc671f95a949cb.jpg" style="max-width: 100%; height:auto;"><p>Amul</p></div>'},
    {name:'milk',item1:'<div class="class2"><img src="https://5.imimg.com/data5/KH/EN/GLADMIN-56046954/mother-dairy-toned-milk.png" style="max-width: 100%; height:130px;"><p>Mother Dairy</p></div>'},
    {name:'milk',item1:'<div class="class3"><img src="https://static.wixstatic.com/media/cdf1d3_12384d4383d84fe78dc9a629bc1ddc7d~mv2.jpeg/v1/fit/w_500,h_500,q_90/file.jpg" style="max-width: 100%; height:130px;"><p>Patanjali</p></div>'},
    {name:'icecream',item1:'<div class="class1"><img src="https://5.imimg.com/data5/OW/WE/MY-30494656/amul-realmilk-ice-cream.jpg" style="max-width: 100%; height:130px;"><p>Amul</p></div>'},
    {name:'icecream',item1:'<div class="class2"><img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=900/app/images/products/sliding_image/496535a.jpg?ts=1671777806" style="max-width: 100%; height:130px;"><p>Kwality Walls</p></div>'},
    {name:'icecream',item1:'<div class="class3"><img src="https://im1.dineout.co.in/images/uploads/restaurant/sharpen/4/i/i/p4002-167169473063a4098a737af.jpg?tr=tr:n-large" style="max-width: 100%; height:130px;"><p>Havmor</p></div>'},
    {name:'whey',item1:'<div class="class1"><img src="https://www.madmillie.com/media/recipe/resized/370x300/recipe/whey_ricotta_thumbnail.jpg" style="max-width: 100%; height:130px;"><p>WHEY ricotta</p></div>'},
    {name:'whey',item1:'<div class="class2"><img src="https://5.imimg.com/data5/SELLER/Default/2021/7/UP/ZV/DA/133152547/img-20210709-155842.jpg" style="max-width: 100%; height:130px;"><p>WHEY butter</p></div>'},
    {name:'whey',item1:'<div class="class3"><img src="https://www.si.com/.image/t_share/MjAxNjk4OTgzNjQ5NzQ4NjIz/optimum-nutrition-gold-standard-whey_hero.png" style="max-width: 100%; height:130px;"><p>WHEY protein</p></div>'},
    {name:'cheese',item1:'<div class="class1"><img src="https://static.independent.co.uk/2023/08/01/15/newFile-1.jpg" style="max-width: 100%; height:130px;"><p>Burrata</p></div>'},
    {name:'cheese',item1:'<div class="class2"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQKBgtdl7Ey7hP_uga8VM5FuAtLh075JFddw&usqp=CAU" style="max-width: 100%; height:130px;"><p>Bocconcini</p></div>'},
    {name:'cheese',item1:'<div class="class3"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQa5HI_rJwRuW9OxjwdzkuYYcC9314nwla5Kg&usqp=CAU" style="max-width: 100%; height:130px;"><p>Asiago</p></div>'},
    {name:'Eggs',item1:'<div class="class1"><img src="https://keepquail.com/media/posts/9/a-comparison-of-all-the-common-quail-egg-sizes.jpg" style="max-width: 100%; height:130px;"><p>Quail eggs</p></div>'},
    {name:'Eggs',item1:'<div class="class2"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTunnyrRssbNTlHYTMcResGclcG6Cd9KX14cw&usqp=CAU" style="max-width: 100%; height:130px;"><p>Cage free eggs</p></div>'},
    {name:'Eggs',item1:'<div class="class3"><img src="https://bynature.vn/wp-content/uploads/2022/01/bynature-why-free-range-eggs-blog.jpg" style="max-width: 100%; height:130px;"><p>Range free eggs</p></div>'},
    {name:'computer',item1:'<div class="class1"><img src="https://cdn.britannica.com/77/170477-050-1C747EE3/Laptop-computer.jpg" style="max-width: 100%; height:130px;"><p>laptop</p></div>'},
    {name:'computer',item1:'<div class="class2"><img src="https://cdn.britannica.com/11/23611-050-81E61C8A/Cray-1-supercomputer-diameter-1976.jpg" style="max-width: 100%; height:130px;"><p>supercomputer</p></div>'},
    {name:'computer',item1:'<div class="class3"><img src="https://5.imimg.com/data5/SELLER/Default/2023/10/352998249/LA/TU/HJ/34791476/office-desktop-computer.jpg" style="max-width: 100%; height:130px;"><p>desktop computer</p></div>'},
    {name:'tv',item1:'<div class="class1"><img src="https://www.livemint.com/lm-img/img/2023/11/17/600x338/oled_tv_1700212285518_1700212285718.jpg" style="max-width: 100%; height:130px;"><p>OLED</p></div>'},
    {name:'tv',item1:'<div class="class2"><img src="https://5.imimg.com/data5/SL/CL/MY-16223982/1-500x500.jpg" style="max-width: 100%; height:130px;"><p>LCD</p></div>'},
    {name:'tv',item1:'<div class="class3"><img src="https://5.imimg.com/data5/HE/TU/MY-61621138/50.jpg" style="max-width: 100%; height:130px;"><p>Curved TV</p></div>'},
    {name:'appliances',item1:'<div class="class1"><img src="https://www.hindustantimes.com/ht-img/img/2023/12/08/1600x900/oven__1702031527383_1702031527695.jpg" style="max-width: 100%; height:130px;"><p>microwave</p></div>'},
    {name:'appliances',item1:'<div class="class2"><img src="https://5.imimg.com/data5/XL/MI/MY-45738738/samsung-washing-machine.jpg" style="max-width: 100%; height:130px;"><p>washing machine</p></div>'},
    {name:'appliances',item1:'<div class="class3"><img src="https://5.imimg.com/data5/LO/PA/MY-13208987/samsung-refrigerator.jpg" style="max-width: 100%; height:130px;"><p>refrigerator</p></div>'},
    {name:'printers',item1:'<div class="class1"><img src="https://5.imimg.com/data5/SELLER/Default/2022/9/GQ/LW/LK/30785948/canon-pixma-g1010-inkjet-printer.jpg" style="max-width: 100%; height:130px;"><p>inkjet printer</p></div>'},
    {name:'printers',item1:'<div class="class2"><img src="https://5.imimg.com/data5/NM/AK/MY-3529379/laser-printer.jpg" style="max-width: 100%; height:130px;"><p>Laser printer</p></div>'},
    {name:'printers',item1:'<div class="class3"><img src="https://5.imimg.com/data5/IK/UT/TV/SELLER-41169932/colour-led-printers-mfcs.jpg" style="max-width: 100%; height:130px;"><p>LED printer</p></div>'},
    {name:'Wearables',item1:'<div class="class1"><img src="https://cdn.shopify.com/s/files/1/0549/4043/4563/products/1_f30cff17-aac1-48aa-a5e5-4da3e71bea10.jpg?v=1670222277&width=1200" style="max-width: 100%; height:130px;"><p>smartwatch</p></div>'},
    {name:'Wearables',item1:'<div class="class2"><img src="https://i.ytimg.com/vi/h5W633MJjz4/maxresdefault.jpg" style="max-width: 100%; height:130px;"><p>smartglasses</p></div>'},
    {name:'Wearables',item1:'<div class="class3"><img src="https://www.ooberpad.com/cdn/shop/products/B_WPX7-silver.jpg?v=1670999441" style="max-width: 100%; height:130px;"><p>headphones</p></div>'},

    
  ];

  

  const searchData = () => {
    const filteredData = database.filter(item => item.name.toLowerCase().includes(searchValue.toLowerCase()));
    setSearchResults(filteredData);
  };
  const CustomPrevArrow = (props) => {
    const { onClick } = props;
    return (
      <div className="slick-arrowslick-prev" onClick={onClick}>
        &#8592;
      </div>
    
    );
  };
  const CustomNextArrow = (props) => {
    const { onClick } = props;
    return (
      <div className="slick-arrowslick-next" onClick={onClick}>
        
        &#8594;
      
      </div>
    );
  };
  const settings = {
    dots: true,
    infinite:true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    prevArrow: <CustomPrevArrow />, 
    nextArrow: <CustomNextArrow />,
    
  };
  
  
  
  

  return (
    
    
    <main id="main">
      
     
      <div className="search-container">
        
        <input
          type="text"
          id="searchInput"
          placeholder="Search items..."
          value={searchValue}
          onChange={handleSearchChange}
        />
        <button id="search-button" onClick={searchData}>
          Search
        </button>
      </div>
      
      {searchResults.length === 0 ? (
        
        <div className="slider-container">
          <Slider {...settings}>
              <div>
                <img
                  src="https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/8873a881045d7aa0.png?q=20"
                  alt="First Slide"
                  style={{ maxWidth: '100%', height: 'auto' }}
                />
              </div>
              <div>
                <img
                  src="https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/9e56874ad46434be.jpg?q=20"
                  alt="Second Slide"
                  style={{ maxWidth: '100%', height: 'auto' }}
                />
              </div>
              <div>
                <img
                  src="https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/b8783f449f0041d4.png?q=20"
                  alt="Third Slide"
                  style={{ maxWidth: '100%', height: 'auto' }}
                />
              </div>
              
            
              
          </Slider> 

          <div className="product-container">
          
            <div class="product-card">
              <img
                class='i'
                src="https://imgnew.outlookindia.com/uploadimage/library/16_9/16_9_5/IMAGE_1667712788.jpg"
                style={{ maxWidth: '100%', height: 'auto' }}
              />
              <p>Mobiles</p>
              <select class="mobiles" name="mobile">
                <option defaultValue>More Items</option>
                <option value="Apple iPhone">Apple iPhone</option>
                <option value="OPPO">OPPO</option>
                <option value="Xiaomi">Xiaomi</option>
                <option value="Vivo">Vivo</option>
                <option value="Samsung">Samsung</option>
              </select>
            </div>
            <div class="product-card1">
              <img
                class='i'
                src="https://5.imimg.com/data5/SELLER/Default/2022/12/YS/VN/PR/3922575/grocery-products.jpg"
                style={{ maxWidth: '100%', height: '110px' }}
              />
              <p>Grocery</p>
              <select class="Grocery" name="Grocery">
                <option defaultValue>More Items</option>
                <option value="milk">milk</option>
                <option value="eggs">snacks</option>
                <option value="whey">whey</option>
                <option value="icecream">icecream</option>
                <option value="cheese">cheese</option>
              </select>
            </div>
            
            <div class="product-card2">
              <img
                class='i'
                src="https://images-cdn.ubuy.co.in/63400828da17551acd788ca4-mystery-electronic-box-unexpected-gift.jpg"
                style={{ maxWidth: '100%', height: '110px' }}
              />
              <p>Electronics</p>
              <select class="Electronics" name="Electronics">
                  <option defaultValue>More Items</option>
                  <option value="Computers">Computers</option>
                  <option value="Tv">Tv</option>
                  <option value="Appliances">Appliances</option>
                  <option value="Printers">Printers</option>
                  <option value="Wearables">Wearables</option>
              </select>
            </div>
            <div className="bottom-product-container">
              <div class="product-card3">
                <img
                  class='i'
                  src="https://www.ikea.com/in/en/images/products/songesand-bedroom-furniture-set-of-5-brown__1101651_pe866465_s5.jpg?f=s"
                  style={{ maxWidth: '100%', height: '150px' }}
                />
                <p>Furniture</p>
                <select class="Furniture" name="Furniture">
                    <option defaultValue>More Items</option>
                    <option value="Chairs">Chairs</option>
                    <option value="Couch">Couch</option>
                    <option value="Bed">Bed</option>
                    <option value="Bookcase">Bookcase</option>
                    <option value="Wardrobe">Wardrobe</option>
                </select>
              </div>
              
              <div class="product-card4">
                <img
                  class='i'
                  src="https://rukminim2.flixcart.com/image/850/1000/xif0q/stuffed-toy/y/w/v/soft-toys-teddy-bear-42-sterling-original-imagzhfc9fybyp4f.jpeg?q=90"
                  style={{ maxWidth: '100%', height: '150px' }}
                />
                <p>Toys</p>
                <select class="Toys" name="Toys">
                    <option defaultValue>More Items</option>
                    <option value="puzzle">puzzle</option>
                    <option value="Doll">Doll</option>
                    <option value="stuffed-toy">Stuffed Toy</option>
                    <option value="Educational Toy">Educational Toy</option>
                    <option value="Action Figure">Action Figure</option>
                </select>
              </div>
              
              <div class="product-card5">
                <img
                  class='i'
                  src="https://financialexpresswpcontent.s3.amazonaws.com/uploads/2020/01/hero-2-wheelers.jpg"
                  style={{ maxWidth: '100%', height: '150px' }}
                />
                <p>two-Wheelers</p>
                <select class="two-Wheelers" name="two-Wheelers">
                    <option defaultValue>More Items</option>
                    <option value="Cruisers">Cruisers</option>
                    <option value="Naked">Naked</option>
                    <option value="Scooter">Scooter</option>
                    <option value="Touring">Touring</option>
                    <option value="Chopper">Chopper</option>
                </select>
              </div>
            </div>
          </div>
          
        </div>
      ) : (
        searchResults.map((item, index) => (
          <ProductCard key={index} item={item} />
        ))
      )}
    </main>
  );

}




  

    
const App = () => {
  const [isSignupOpen, setSignupOpen] = useState(false);
  const [isLoginOpen, setLoginOpen] = useState(false);

  const handleSignupButtonClick = () => {
    setSignupOpen(true);
  };
  const handleLoginButtonClick = () => {
    setLoginOpen(true);
  };

  const handleCloseSignup = () => {
    setSignupOpen(false);
  };
  const handleCloseLogin = () => {
    setLoginOpen(false);
  };
  
  
  return (
    <div>
      {isSignupOpen ? (
        <SignUpPage isOpen={handleSignupButtonClick} onClose={handleCloseSignup} />
      ) : isLoginOpen ? (
        <Login isOpen={handleLoginButtonClick} onClose={handleCloseLogin} />
      ) : (
        <Header 
          onSignupButtonClick={handleSignupButtonClick} 
          onLoginButtonClick={handleLoginButtonClick} 
        />
      )}
      {!isSignupOpen && !isLoginOpen && <MainComponent />}
    </div>
  );
}

export default App;

