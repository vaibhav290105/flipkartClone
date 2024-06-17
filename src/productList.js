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
  const ProductList = ({ addToCart }) => {
    return (
        <div>
            <h2>Products</h2>
            <ul>
                {database.map(product => (
                    <li key={product.item1}>
                        {product.name} - ${product.price}
                        <button onClick={() => addToCart(product)}>Add to Cart</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};
export default ProductList;