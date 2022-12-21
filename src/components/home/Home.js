import React,{useEffect} from 'react'
import Blog from '../blog/Blog'
import {Link} from 'react-router-dom'
import './home.css'
function Home() {

  useEffect(()=>{
    const poterContent=document.querySelector('.slilde-content-poster')
    setTimeout(() => {
      poterContent.classList.add('slilde-content-poster-remove')
    }, 100);
  })
    
  window.onscroll=()=>{
    if(window.pageYOffset> 1200 && window.pageYOffset<1300) {
        const miniBanner1 = document.querySelector(".poster-mini-left");
        const miniBanner2 = document.querySelector(".poster-mini-right");
        miniBanner1.classList.add('poster-mini-left-remove')
        miniBanner2.classList.add('poster-mini-left-remove')
        
      }
      if(window.pageYOffset> 1800 && window.pageYOffset<1900) {
        
          const bannerContecnt2=document.querySelector(".slilde-poster-2")
          bannerContecnt2.classList.add('poster-mini-left-remove')   
        }
  }

  return (
    <div>
        <section className="slider_section outer-section" >
        <div className="slider_area">
            <div className="single_slider d-flex align-items-center" style={{'backgroundImage':'url("assets/img/bg/banner18.jpg")', 'backgroundPosition':'center','backgroundSize':'cover'}}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="slider_content slilde-content-poster ">
                                <h1>Vegetables Big Sale</h1>
                                <h2>Fresh Farm Products</h2>
                                <p>
								                10% certifled-organic mix of fruit and veggies. Perfect for weekly cooking and snacking!
							                    </p> 
                                <a href="shop.html">Read more </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    </section>
    <div className="shipping_area">
        <div className="container">
            <div className="row">
                <div className="col-lg-3 col-md-6">
                    <div className="single_shipping">
                        <div className="shipping_icone">
                            <img src="assets/img/about/shipping1.jpg" alt=""/>
                        </div>
                        <div className="shipping_content">
                            <h3>Free Shipping</h3>
                            <p>Free shipping on all US order or order above $200</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6">
                    <div className="single_shipping col_2">
                        <div className="shipping_icone">
                            <img src="assets/img/about/shipping2.jpg" alt=""/>
                        </div>
                        <div className="shipping_content">
                            <h3>Support 24/7</h3>
                            <p>Contact us 24 hours a day, 7 days a week</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6">
                    <div className="single_shipping col_3">
                        <div className="shipping_icone">
                            <img src="assets/img/about/shipping3.jpg" alt=""/>
                        </div>
                        <div className="shipping_content">
                            <h3>30 Days Return</h3>
                            <p>Simply return it within 30 days for an exchange</p>

                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6">
                    <div className="single_shipping col_4">
                        <div className="shipping_icone">
                            <img src="assets/img/about/shipping4.jpg" alt=""/>
                        </div>
                        <div className="shipping_content">
                            <h3>100% Payment Secure</h3>
                            <p>We ensure secure payment with PEV</p>
                        </div>
                    </div>
                </div>
            </div>   
        </div>
    </div>
   {/* products===================================================== */}
    <div className="product_area  mb-64">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="product_header">
                        <div className="section_title">
                           <p>Recently added our store</p>
                           <h2>Trending Products</h2>
                        </div>
                        <div className="product_tab_btn">
                            <ul className="nav" role="tablist" id="nav-tab">
                                <li>
                                    <a className="active" data-toggle="tab" href="#plant1" role="tab" aria-controls="plant1" aria-selected="true"> 
                                       Cakes
                                    </a>
                                </li>
                                <li>
                                    <a data-toggle="tab" href="#plant2" role="tab" aria-controls="plant2" aria-selected="false">
                                    Occasions
                                    </a>
                                </li>
                                <li>
                                    <a data-toggle="tab" href="#plant3" role="tab" aria-controls="plant3" aria-selected="false">
                                        Backery
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div> 
            <div className='product-container-trending'>
              
              <div  className="single_product">
    
                <div className="product_thumb">
                  <Link className="primary_img" to="/productDetail"><img src="assets\img\customImages\product1.jpg" alt=""/></Link>
                  <Link className="secondary_img" to="/productDetail"><img src="assets\img\customImages\product2.webp" alt=""/></Link>
                  <div className="label_product">
                    <span className="label_sale">Sale</span>
                    <span className="label_new">New</span>
                  </div>
                  <div className="action_links">
                    <ul>
                      <li className="add_to_cart"><Link to="./cart" data-tippy="Add to cart" data-tippy-placement="top" data-tippy-arrow="true" data-tippy-inertia="true"> <span className="lnr lnr-cart"></span></Link></li>
                      <li className="quick_button"><a href="#" data-tippy="quick view" data-tippy-placement="top" data-tippy-arrow="true" data-tippy-inertia="true" data-bs-toggle="modal" data-bs-target="#modal_box" > <span className="lnr lnr-magnifier"></span></a></li>
                      <li className="wishlist"><a href="wishlist.html" data-tippy="Add to Wishlist" data-tippy-placement="top" data-tippy-arrow="true" data-tippy-inertia="true"><span className="lnr lnr-heart"></span></a></li>  
                    </ul>
                  </div>
                </div>
              <figcaption className="product_content">
                <h4 className="product_name"><a href="product-details.html">Aliquam Consequat</a></h4>
                <p><a href="#">cacke</a></p>
                <div className="price_box"> 
                  <span className="current_price">$26.00</span>
                  <span className="old_price">$362.00</span>
                </div>
              </figcaption>
    
            </div>
                          
            <div  className="single_product">
    
    <div className="product_thumb">
      <Link className="primary_img" to="/productDetail"><img src="assets\img\customImages\product1.jpg" alt=""/></Link>
      <Link className="secondary_img" to="/productDetail"><img src="assets\img\customImages\product2.webp" alt=""/></Link>
      <div className="label_product">
        <span className="label_sale">Sale</span>
        <span className="label_new">New</span>
      </div>
      <div className="action_links">
        <ul>
          <li className="add_to_cart"><Link to="./cart" data-tippy="Add to cart" data-tippy-placement="top" data-tippy-arrow="true" data-tippy-inertia="true"> <span className="lnr lnr-cart"></span></Link></li>
          <li className="quick_button"><a href="#" data-tippy="quick view" data-tippy-placement="top" data-tippy-arrow="true" data-tippy-inertia="true" data-bs-toggle="modal" data-bs-target="#modal_box" > <span className="lnr lnr-magnifier"></span></a></li>
          <li className="wishlist"><a href="wishlist.html" data-tippy="Add to Wishlist" data-tippy-placement="top" data-tippy-arrow="true" data-tippy-inertia="true"><span className="lnr lnr-heart"></span></a></li>  
        </ul>
      </div>
    </div>
  <figcaption className="product_content">
    <h4 className="product_name"><a href="product-details.html">Aliquam Consequat</a></h4>
    <p><a href="#">cacke</a></p>
    <div className="price_box"> 
      <span className="current_price">$26.00</span>
      <span className="old_price">$362.00</span>
    </div>
  </figcaption>

</div>
              
<div  className="single_product">
    
    <div className="product_thumb">
      <Link className="primary_img" to="/productDetail"><img src="assets\img\customImages\product1.jpg" alt=""/></Link>
      <Link className="secondary_img" to="/productDetail"><img src="assets\img\customImages\product2.webp" alt=""/></Link>
      <div className="label_product">
        <span className="label_sale">Sale</span>
        <span className="label_new">New</span>
      </div>
      <div className="action_links">
        <ul>
          <li className="add_to_cart"><Link to="./cart" data-tippy="Add to cart" data-tippy-placement="top" data-tippy-arrow="true" data-tippy-inertia="true"> <span className="lnr lnr-cart"></span></Link></li>
          <li className="quick_button"><a href="#" data-tippy="quick view" data-tippy-placement="top" data-tippy-arrow="true" data-tippy-inertia="true" data-bs-toggle="modal" data-bs-target="#modal_box" > <span className="lnr lnr-magnifier"></span></a></li>
          <li className="wishlist"><a href="wishlist.html" data-tippy="Add to Wishlist" data-tippy-placement="top" data-tippy-arrow="true" data-tippy-inertia="true"><span className="lnr lnr-heart"></span></a></li>  
        </ul>
      </div>
    </div>
  <figcaption className="product_content">
    <h4 className="product_name"><a href="product-details.html">Aliquam Consequat</a></h4>
    <p><a href="#">cacke</a></p>
    <div className="price_box"> 
      <span className="current_price">$26.00</span>
      <span className="old_price">$362.00</span>
    </div>
  </figcaption>

</div>              
              <div  className="single_product">
    
                <div className="product_thumb">
                  <Link className="primary_img" to="/productDetail"><img src="assets\img\customImages\product1.jpg" alt=""/></Link>
                  <Link className="secondary_img" to="/productDetail"><img src="assets\img\customImages\product2.webp" alt=""/></Link>
                  <div className="label_product">
                    <span className="label_sale">Sale</span>
                    <span className="label_new">New</span>
                  </div>
                  <div className="action_links">
                    <ul>
                      <li className="add_to_cart"><Link to="./cart" data-tippy="Add to cart" data-tippy-placement="top" data-tippy-arrow="true" data-tippy-inertia="true"> <span className="lnr lnr-cart"></span></Link></li>
                      <li className="quick_button"><a href="#" data-tippy="quick view" data-tippy-placement="top" data-tippy-arrow="true" data-tippy-inertia="true" data-bs-toggle="modal" data-bs-target="#modal_box" > <span className="lnr lnr-magnifier"></span></a></li>
                      <li className="wishlist"><a href="wishlist.html" data-tippy="Add to Wishlist" data-tippy-placement="top" data-tippy-arrow="true" data-tippy-inertia="true"><span className="lnr lnr-heart"></span></a></li>  
                    </ul>
                  </div>
                </div>
              <figcaption className="product_content">
                <h4 className="product_name"><a href="product-details.html">Aliquam Consequat</a></h4>
                <p><a href="#">cacke</a></p>
                <div className="price_box"> 
                  <span className="current_price">$26.00</span>
                  <span className="old_price">$362.00</span>
                </div>
              </figcaption>
    
            </div>              
              <div  className="single_product">
    
                <div className="product_thumb">
                  <Link className="primary_img" to="/productDetail"><img src="assets\img\customImages\product1.jpg" alt=""/></Link>
                  <Link className="secondary_img" to="/productDetail"><img src="assets\img\customImages\product2.webp" alt=""/></Link>
                  <div className="label_product">
                    <span className="label_sale">Sale</span>
                    <span className="label_new">New</span>
                  </div>
                  <div className="action_links">
                    <ul>
                      <li className="add_to_cart"><Link to="./cart" data-tippy="Add to cart" data-tippy-placement="top" data-tippy-arrow="true" data-tippy-inertia="true"> <span className="lnr lnr-cart"></span></Link></li>
                      <li className="quick_button"><a href="#" data-tippy="quick view" data-tippy-placement="top" data-tippy-arrow="true" data-tippy-inertia="true" data-bs-toggle="modal" data-bs-target="#modal_box" > <span className="lnr lnr-magnifier"></span></a></li>
                      <li className="wishlist"><a href="wishlist.html" data-tippy="Add to Wishlist" data-tippy-placement="top" data-tippy-arrow="true" data-tippy-inertia="true"><span className="lnr lnr-heart"></span></a></li>  
                    </ul>
                  </div>
                </div>
              <figcaption className="product_content">
                <h4 className="product_name"><a href="product-details.html">Aliquam Consequat</a></h4>
                <p><a href="#">cacke</a></p>
                <div className="price_box"> 
                  <span className="current_price">$26.00</span>
                  <span className="old_price">$362.00</span>
                </div>
              </figcaption>
    
            </div>              
              <div  className="single_product">
    
                <div className="product_thumb">
                  <Link className="primary_img" to="/productDetail"><img src="assets\img\customImages\product1.jpg" alt=""/></Link>
                  <Link className="secondary_img" to="/productDetail"><img src="assets\img\customImages\product2.webp" alt=""/></Link>
                  <div className="label_product">
                    <span className="label_sale">Sale</span>
                    <span className="label_new">New</span>
                  </div>
                  <div className="action_links">
                    <ul>
                      <li className="add_to_cart"><Link to="./cart" data-tippy="Add to cart" data-tippy-placement="top" data-tippy-arrow="true" data-tippy-inertia="true"> <span className="lnr lnr-cart"></span></Link></li>
                      <li className="quick_button"><a href="#" data-tippy="quick view" data-tippy-placement="top" data-tippy-arrow="true" data-tippy-inertia="true" data-bs-toggle="modal" data-bs-target="#modal_box" > <span className="lnr lnr-magnifier"></span></a></li>
                      <li className="wishlist"><a href="wishlist.html" data-tippy="Add to Wishlist" data-tippy-placement="top" data-tippy-arrow="true" data-tippy-inertia="true"><span className="lnr lnr-heart"></span></a></li>  
                    </ul>
                  </div>
                </div>
              <figcaption className="product_content">
                <h4 className="product_name"><a href="product-details.html">Aliquam Consequat</a></h4>
                <p><a href="#">cacke</a></p>
                <div className="price_box"> 
                  <span className="current_price">$26.00</span>
                  <span className="old_price">$362.00</span>
                </div>
              </figcaption>
    
            </div>              
              <div  className="single_product">
    
                <div className="product_thumb">
                  <Link className="primary_img" to="/productDetail"><img src="assets\img\customImages\product1.jpg" alt=""/></Link>
                  <Link className="secondary_img" to="/productDetail"><img src="assets\img\customImages\product2.webp" alt=""/></Link>
                  <div className="label_product">
                    <span className="label_sale">Sale</span>
                    <span className="label_new">New</span>
                  </div>
                  <div className="action_links">
                    <ul>
                      <li className="add_to_cart"><Link to="./cart" data-tippy="Add to cart" data-tippy-placement="top" data-tippy-arrow="true" data-tippy-inertia="true"> <span className="lnr lnr-cart"></span></Link></li>
                      <li className="quick_button"><a href="#" data-tippy="quick view" data-tippy-placement="top" data-tippy-arrow="true" data-tippy-inertia="true" data-bs-toggle="modal" data-bs-target="#modal_box" > <span className="lnr lnr-magnifier"></span></a></li>
                      <li className="wishlist"><a href="wishlist.html" data-tippy="Add to Wishlist" data-tippy-placement="top" data-tippy-arrow="true" data-tippy-inertia="true"><span className="lnr lnr-heart"></span></a></li>  
                    </ul>
                  </div>
                </div>
              <figcaption className="product_content">
                <h4 className="product_name"><a href="product-details.html">Aliquam Consequat</a></h4>
                <p><a href="#">cacke</a></p>
                <div className="price_box"> 
                  <span className="current_price">$26.00</span>
                  <span className="old_price">$362.00</span>
                </div>
              </figcaption>
    
            </div>
                          
            <div  className="single_product">
    
    <div className="product_thumb">
      <Link className="primary_img" to="/productDetail"><img src="assets\img\customImages\product1.jpg" alt=""/></Link>
      <Link className="secondary_img" to="/productDetail"><img src="assets\img\customImages\product2.webp" alt=""/></Link>
      <div className="label_product">
        <span className="label_sale">Sale</span>
        <span className="label_new">New</span>
      </div>
      <div className="action_links">
        <ul>
          <li className="add_to_cart"><Link to="./cart" data-tippy="Add to cart" data-tippy-placement="top" data-tippy-arrow="true" data-tippy-inertia="true"> <span className="lnr lnr-cart"></span></Link></li>
          <li className="quick_button"><a href="#" data-tippy="quick view" data-tippy-placement="top" data-tippy-arrow="true" data-tippy-inertia="true" data-bs-toggle="modal" data-bs-target="#modal_box" > <span className="lnr lnr-magnifier"></span></a></li>
          <li className="wishlist"><a href="wishlist.html" data-tippy="Add to Wishlist" data-tippy-placement="top" data-tippy-arrow="true" data-tippy-inertia="true"><span className="lnr lnr-heart"></span></a></li>  
        </ul>
      </div>
    </div>
  <figcaption className="product_content">
    <h4 className="product_name"><a href="product-details.html">Aliquam Consequat</a></h4>
    <p><a href="#">cacke</a></p>
    <div className="price_box"> 
      <span className="current_price">$26.00</span>
      <span className="old_price">$362.00</span>
    </div>
  </figcaption>

</div>
         

              
          </div>  
        </div> 
    </div>

    <div className="banner_area outer-section">
        <div className="container">
            <div className="row">
                <div className="col-lg-6 col-md-6 poster-mini-left">
                    <div className="single_banner">
                        <div className="banner_thumb">
                            <a href="shop.html"><img src="assets/img/bg/banner2.jpg" alt=""/></a> 
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 col-md-6 poster-mini-right">
                    <div className="single_banner">
                        <div className="banner_thumb">
                            <a href="shop.html"><img src="assets/img/bg/banner2.jpg" alt=""/></a> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
      {/* deals =========================================================*/}
    <div className="product_area product_deals mb-65">
        <div className="container-fluid">
            <div className="row">
                <div className="col-12">
                    <div className="section_title">
                      <p>Recently added our store </p>
                       <h2>Deals Of The Weeks</h2>
                    </div>
                </div>
            </div> 
             <div className="product-container-trending">  
             <article className="single_product">
                                <figure>
                                    <div className="product_thumb">
                                        <a className="primary_img" href="product-details.html"><img src="assets/img/product/product14.jpg" alt=""/></a>
                                        <a className="secondary_img" href="product-details.html"><img src="assets/img/product/product15.jpg" alt=""/></a>
                                        <div className="label_product">
                                            <span className="label_sale">Sale</span>
                                            <span className="label_new">New</span>
                                        </div>
                                        <div className="product_timing">
                                            <div data-countdown="2021/12/15">
                                              <div className="countdown_area">
                                                <div className="single_countdown">
                                                  <div className="countdown_number">
                                                    00
                                                  </div>
                                                  <div className="countdown_title">
                                                    day
                                                  </div>
                                                </div>
                                                <div className="single_countdown">
                                                  <div className="countdown_number">
                                                    00
                                                  </div>
                                                  <div className="countdown_title">
                                                    Hour
                                                  </div>
                                                </div>
                                                <div className="single_countdown">
                                                  <div className="countdown_number">
                                                    00
                                                  </div>
                                                  <div className="countdown_title">
                                                    Min
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                        </div>
                                        <div className="action_links">
                                            <ul>
                                                <li className="add_to_cart"><a href="cart.html" data-tippy="Add to cart" data-tippy-placement="top" data-tippy-arrow="true" data-tippy-inertia="true"> <span className="lnr lnr-cart"></span></a></li>
                                               <li className="quick_button"><a href="#" data-tippy="quick view" data-tippy-placement="top" data-tippy-arrow="true" data-tippy-inertia="true" data-bs-toggle="modal" data-bs-target="#modal_box" > <span className="lnr lnr-magnifier"></span></a></li>
                                                 <li className="wishlist"><a href="wishlist.html" data-tippy="Add to Wishlist" data-tippy-placement="top" data-tippy-arrow="true" data-tippy-inertia="true"><span className="lnr lnr-heart"></span></a></li> 
                                                <li className="compare"><a href="#" data-tippy="Add to Compare" data-tippy-placement="top" data-tippy-arrow="true" data-tippy-inertia="true"><span className="lnr lnr-sync"></span></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <figcaption className="product_content">
                                        <h4 className="product_name"><a href="product-details.html">Mauris Vel Tellus</a></h4>
                                        <p><a href="#">Fruits</a></p>
                                        <div className="price_box"> 
                                            <span className="current_price">$48.00</span>
                                            <span className="old_price">$257.00</span>
                                        </div>
                                    </figcaption>
                                </figure>
              </article>  
              <article className="single_product">
                                <figure>
                                    <div className="product_thumb">
                                        <a className="primary_img" href="product-details.html"><img src="assets/img/product/product14.jpg" alt=""/></a>
                                        <a className="secondary_img" href="product-details.html"><img src="assets/img/product/product15.jpg" alt=""/></a>
                                        <div className="label_product">
                                            <span className="label_sale">Sale</span>
                                            <span className="label_new">New</span>
                                        </div>
                                        <div className="product_timing">
                                            <div data-countdown="2021/12/15">
                                              <div className="countdown_area">
                                                <div className="single_countdown">
                                                  <div className="countdown_number">
                                                    00
                                                  </div>
                                                  <div className="countdown_title">
                                                    day
                                                  </div>
                                                </div>
                                                <div className="single_countdown">
                                                  <div className="countdown_number">
                                                    00
                                                  </div>
                                                  <div className="countdown_title">
                                                    Hour
                                                  </div>
                                                </div>
                                                <div className="single_countdown">
                                                  <div className="countdown_number">
                                                    00
                                                  </div>
                                                  <div className="countdown_title">
                                                    Min
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                        </div>
                                        <div className="action_links">
                                            <ul>
                                                <li className="add_to_cart"><a href="cart.html" data-tippy="Add to cart" data-tippy-placement="top" data-tippy-arrow="true" data-tippy-inertia="true"> <span className="lnr lnr-cart"></span></a></li>
                                               <li className="quick_button"><a href="#" data-tippy="quick view" data-tippy-placement="top" data-tippy-arrow="true" data-tippy-inertia="true" data-bs-toggle="modal" data-bs-target="#modal_box" > <span className="lnr lnr-magnifier"></span></a></li>
                                                 <li className="wishlist"><a href="wishlist.html" data-tippy="Add to Wishlist" data-tippy-placement="top" data-tippy-arrow="true" data-tippy-inertia="true"><span className="lnr lnr-heart"></span></a></li> 
                                                <li className="compare"><a href="#" data-tippy="Add to Compare" data-tippy-placement="top" data-tippy-arrow="true" data-tippy-inertia="true"><span className="lnr lnr-sync"></span></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <figcaption className="product_content">
                                        <h4 className="product_name"><a href="product-details.html">Mauris Vel Tellus</a></h4>
                                        <p><a href="#">Fruits</a></p>
                                        <div className="price_box"> 
                                            <span className="current_price">$48.00</span>
                                            <span className="old_price">$257.00</span>
                                        </div>
                                    </figcaption>
                                </figure>
              </article>  
              <article className="single_product">
                                <figure>
                                    <div className="product_thumb">
                                        <a className="primary_img" href="product-details.html"><img src="assets/img/product/product14.jpg" alt=""/></a>
                                        <a className="secondary_img" href="product-details.html"><img src="assets/img/product/product15.jpg" alt=""/></a>
                                        <div className="label_product">
                                            <span className="label_sale">Sale</span>
                                            <span className="label_new">New</span>
                                        </div>
                                        <div className="product_timing">
                                            <div data-countdown="2021/12/15">
                                              <div className="countdown_area">
                                                <div className="single_countdown">
                                                  <div className="countdown_number">
                                                    00
                                                  </div>
                                                  <div className="countdown_title">
                                                    day
                                                  </div>
                                                </div>
                                                <div className="single_countdown">
                                                  <div className="countdown_number">
                                                    00
                                                  </div>
                                                  <div className="countdown_title">
                                                    Hour
                                                  </div>
                                                </div>
                                                <div className="single_countdown">
                                                  <div className="countdown_number">
                                                    00
                                                  </div>
                                                  <div className="countdown_title">
                                                    Min
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                        </div>
                                        <div className="action_links">
                                            <ul>
                                                <li className="add_to_cart"><a href="cart.html" data-tippy="Add to cart" data-tippy-placement="top" data-tippy-arrow="true" data-tippy-inertia="true"> <span className="lnr lnr-cart"></span></a></li>
                                               <li className="quick_button"><a href="#" data-tippy="quick view" data-tippy-placement="top" data-tippy-arrow="true" data-tippy-inertia="true" data-bs-toggle="modal" data-bs-target="#modal_box" > <span className="lnr lnr-magnifier"></span></a></li>
                                                 <li className="wishlist"><a href="wishlist.html" data-tippy="Add to Wishlist" data-tippy-placement="top" data-tippy-arrow="true" data-tippy-inertia="true"><span className="lnr lnr-heart"></span></a></li> 
                                                <li className="compare"><a href="#" data-tippy="Add to Compare" data-tippy-placement="top" data-tippy-arrow="true" data-tippy-inertia="true"><span className="lnr lnr-sync"></span></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <figcaption className="product_content">
                                        <h4 className="product_name"><a href="product-details.html">Mauris Vel Tellus</a></h4>
                                        <p><a href="#">Fruits</a></p>
                                        <div className="price_box"> 
                                            <span className="current_price">$48.00</span>
                                            <span className="old_price">$257.00</span>
                                        </div>
                                    </figcaption>
                                </figure>
              </article>  
              <article className="single_product">
                                <figure>
                                    <div className="product_thumb">
                                        <a className="primary_img" href="product-details.html"><img src="assets/img/product/product14.jpg" alt=""/></a>
                                        <a className="secondary_img" href="product-details.html"><img src="assets/img/product/product15.jpg" alt=""/></a>
                                        <div className="label_product">
                                            <span className="label_sale">Sale</span>
                                            <span className="label_new">New</span>
                                        </div>
                                        <div className="product_timing">
                                            <div data-countdown="2021/12/15">
                                              <div className="countdown_area">
                                                <div className="single_countdown">
                                                  <div className="countdown_number">
                                                    00
                                                  </div>
                                                  <div className="countdown_title">
                                                    day
                                                  </div>
                                                </div>
                                                <div className="single_countdown">
                                                  <div className="countdown_number">
                                                    00
                                                  </div>
                                                  <div className="countdown_title">
                                                    Hour
                                                  </div>
                                                </div>
                                                <div className="single_countdown">
                                                  <div className="countdown_number">
                                                    00
                                                  </div>
                                                  <div className="countdown_title">
                                                    Min
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                        </div>
                                        <div className="action_links">
                                            <ul>
                                                <li className="add_to_cart"><a href="cart.html" data-tippy="Add to cart" data-tippy-placement="top" data-tippy-arrow="true" data-tippy-inertia="true"> <span className="lnr lnr-cart"></span></a></li>
                                               <li className="quick_button"><a href="#" data-tippy="quick view" data-tippy-placement="top" data-tippy-arrow="true" data-tippy-inertia="true" data-bs-toggle="modal" data-bs-target="#modal_box" > <span className="lnr lnr-magnifier"></span></a></li>
                                                 <li className="wishlist"><a href="wishlist.html" data-tippy="Add to Wishlist" data-tippy-placement="top" data-tippy-arrow="true" data-tippy-inertia="true"><span className="lnr lnr-heart"></span></a></li> 
                                                <li className="compare"><a href="#" data-tippy="Add to Compare" data-tippy-placement="top" data-tippy-arrow="true" data-tippy-inertia="true"><span className="lnr lnr-sync"></span></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <figcaption className="product_content">
                                        <h4 className="product_name"><a href="product-details.html">Mauris Vel Tellus</a></h4>
                                        <p><a href="#">Fruits</a></p>
                                        <div className="price_box"> 
                                            <span className="current_price">$48.00</span>
                                            <span className="old_price">$257.00</span>
                                        </div>
                                    </figcaption>
                                </figure>
              </article>  
                    
            </div>  
        </div> 
    </div>

    <div className="banner_fullwidth outer-section" >
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="banner_full_content slilde-poster-2">
                        <p>Black Fridays !</p>
                        <h2>Sale 50% OFf <span>all vegetable products</span></h2>
                        <a href="shop.html">discover now</a>
                    </div>
                </div>
            </div>
        </div>
    </div>

    {/* feature products==================================================== */}
    
    <Blog/>
    <div className="custom_product_area">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="section_title">
                       <p>Recently added our store </p>
                       <h2>Featured Products</h2>
                    </div>
                </div>
            </div> 
            <div className="row">
                <div className="col-12">
                    <div className="small_product_area product_carousel product_column3 ">
                        <div className="product_items product-container-trending">
                        <article className="single_product">
                                <figure>
                                    <div className="product_thumb">
                                        <a className="primary_img" href="product-details.html"><img src="assets/img/product/product5.jpg" alt=""/></a>
                                        <a className="secondary_img" href="product-details.html"><img src="assets/img/product/product6.jpg" alt=""/></a>
                                    </div>
                                    <figcaption className="product_content">
                                        <h4 className="product_name"><a href="product-details.html">Mauris Vel Tellus</a></h4>
                                        <p><a href="#">Fruits</a></p>
                                        <div className="action_links">
                                            <ul>
                                                <li className="add_to_cart"><a href="cart.html" data-tippy="Add to cart" data-tippy-placement="top" data-tippy-arrow="true" data-tippy-inertia="true"> <span className="lnr lnr-cart"></span></a></li>
                                               <li className="quick_button"><a href="#" data-tippy="quick view" data-tippy-placement="top" data-tippy-arrow="true" data-tippy-inertia="true" data-bs-toggle="modal" data-bs-target="#modal_box" > <span className="lnr lnr-magnifier"></span></a></li>
                                                 <li className="wishlist"><a href="wishlist.html" data-tippy="Add to Wishlist" data-tippy-placement="top" data-tippy-arrow="true" data-tippy-inertia="true"><span className="lnr lnr-heart"></span></a></li> 
                                                <li className="compare"><a href="#" data-tippy="Add to Compare" data-tippy-placement="top" data-tippy-arrow="true" data-tippy-inertia="true"><span className="lnr lnr-sync"></span></a></li>
                                            </ul>
                                        </div>
                                        <div className="price_box"> 
                                            <span className="current_price">$56.00</span>
                                            <span className="old_price">$362.00</span>
                                        </div>
                                    </figcaption>
                                </figure>
                            </article>
                            <article className="single_product">
                                <figure>
                                    <div className="product_thumb">
                                        <a className="primary_img" href="product-details.html"><img src="assets/img/product/product5.jpg" alt=""/></a>
                                        <a className="secondary_img" href="product-details.html"><img src="assets/img/product/product6.jpg" alt=""/></a>
                                    </div>
                                    <figcaption className="product_content">
                                        <h4 className="product_name"><a href="product-details.html">Mauris Vel Tellus</a></h4>
                                        <p><a href="#">Fruits</a></p>
                                        <div className="action_links">
                                            <ul>
                                                <li className="add_to_cart"><a href="cart.html" data-tippy="Add to cart" data-tippy-placement="top" data-tippy-arrow="true" data-tippy-inertia="true"> <span className="lnr lnr-cart"></span></a></li>
                                               <li className="quick_button"><a href="#" data-tippy="quick view" data-tippy-placement="top" data-tippy-arrow="true" data-tippy-inertia="true" data-bs-toggle="modal" data-bs-target="#modal_box" > <span className="lnr lnr-magnifier"></span></a></li>
                                                 <li className="wishlist"><a href="wishlist.html" data-tippy="Add to Wishlist" data-tippy-placement="top" data-tippy-arrow="true" data-tippy-inertia="true"><span className="lnr lnr-heart"></span></a></li> 
                                                <li className="compare"><a href="#" data-tippy="Add to Compare" data-tippy-placement="top" data-tippy-arrow="true" data-tippy-inertia="true"><span className="lnr lnr-sync"></span></a></li>
                                            </ul>
                                        </div>
                                        <div className="price_box"> 
                                            <span className="current_price">$56.00</span>
                                            <span className="old_price">$362.00</span>
                                        </div>
                                    </figcaption>
                                </figure>
                            </article>                   
                           
                            <article className="single_product">
                                <figure>
                                    <div className="product_thumb">
                                        <a className="primary_img" href="product-details.html"><img src="assets/img/product/product5.jpg" alt=""/></a>
                                        <a className="secondary_img" href="product-details.html"><img src="assets/img/product/product6.jpg" alt=""/></a>
                                    </div>
                                    <figcaption className="product_content">
                                        <h4 className="product_name"><a href="product-details.html">Mauris Vel Tellus</a></h4>
                                        <p><a href="#">Fruits</a></p>
                                        <div className="action_links">
                                            <ul>
                                                <li className="add_to_cart"><a href="cart.html" data-tippy="Add to cart" data-tippy-placement="top" data-tippy-arrow="true" data-tippy-inertia="true"> <span className="lnr lnr-cart"></span></a></li>
                                               <li className="quick_button"><a href="#" data-tippy="quick view" data-tippy-placement="top" data-tippy-arrow="true" data-tippy-inertia="true" data-bs-toggle="modal" data-bs-target="#modal_box" > <span className="lnr lnr-magnifier"></span></a></li>
                                                 <li className="wishlist"><a href="wishlist.html" data-tippy="Add to Wishlist" data-tippy-placement="top" data-tippy-arrow="true" data-tippy-inertia="true"><span className="lnr lnr-heart"></span></a></li> 
                                                <li className="compare"><a href="#" data-tippy="Add to Compare" data-tippy-placement="top" data-tippy-arrow="true" data-tippy-inertia="true"><span className="lnr lnr-sync"></span></a></li>
                                            </ul>
                                        </div>
                                        <div className="price_box"> 
                                            <span className="current_price">$56.00</span>
                                            <span className="old_price">$362.00</span>
                                        </div>
                                    </figcaption>
                                </figure>
                            </article>
                            <article className="single_product">
                                <figure>
                                    <div className="product_thumb">
                                        <a className="primary_img" href="product-details.html"><img src="assets/img/product/product5.jpg" alt=""/></a>
                                        <a className="secondary_img" href="product-details.html"><img src="assets/img/product/product6.jpg" alt=""/></a>
                                    </div>
                                    <figcaption className="product_content">
                                        <h4 className="product_name"><a href="product-details.html">Mauris Vel Tellus</a></h4>
                                        <p><a href="#">Fruits</a></p>
                                        <div className="action_links">
                                            <ul>
                                                <li className="add_to_cart"><a href="cart.html" data-tippy="Add to cart" data-tippy-placement="top" data-tippy-arrow="true" data-tippy-inertia="true"> <span className="lnr lnr-cart"></span></a></li>
                                               <li className="quick_button"><a href="#" data-tippy="quick view" data-tippy-placement="top" data-tippy-arrow="true" data-tippy-inertia="true" data-bs-toggle="modal" data-bs-target="#modal_box" > <span className="lnr lnr-magnifier"></span></a></li>
                                                 <li className="wishlist"><a href="wishlist.html" data-tippy="Add to Wishlist" data-tippy-placement="top" data-tippy-arrow="true" data-tippy-inertia="true"><span className="lnr lnr-heart"></span></a></li> 
                                                <li className="compare"><a href="#" data-tippy="Add to Compare" data-tippy-placement="top" data-tippy-arrow="true" data-tippy-inertia="true"><span className="lnr lnr-sync"></span></a></li>
                                            </ul>
                                        </div>
                                        <div className="price_box"> 
                                            <span className="current_price">$56.00</span>
                                            <span className="old_price">$362.00</span>
                                        </div>
                                    </figcaption>
                                </figure>
                            </article>
                            <article className="single_product">
                                <figure>
                                    <div className="product_thumb">
                                        <a className="primary_img" href="product-details.html"><img src="assets/img/product/product5.jpg" alt=""/></a>
                                        <a className="secondary_img" href="product-details.html"><img src="assets/img/product/product6.jpg" alt=""/></a>
                                    </div>
                                    <figcaption className="product_content">
                                        <h4 className="product_name"><a href="product-details.html">Mauris Vel Tellus</a></h4>
                                        <p><a href="#">Fruits</a></p>
                                        <div className="action_links">
                                            <ul>
                                                <li className="add_to_cart"><a href="cart.html" data-tippy="Add to cart" data-tippy-placement="top" data-tippy-arrow="true" data-tippy-inertia="true"> <span className="lnr lnr-cart"></span></a></li>
                                               <li className="quick_button"><a href="#" data-tippy="quick view" data-tippy-placement="top" data-tippy-arrow="true" data-tippy-inertia="true" data-bs-toggle="modal" data-bs-target="#modal_box" > <span className="lnr lnr-magnifier"></span></a></li>
                                                 <li className="wishlist"><a href="wishlist.html" data-tippy="Add to Wishlist" data-tippy-placement="top" data-tippy-arrow="true" data-tippy-inertia="true"><span className="lnr lnr-heart"></span></a></li> 
                                                <li className="compare"><a href="#" data-tippy="Add to Compare" data-tippy-placement="top" data-tippy-arrow="true" data-tippy-inertia="true"><span className="lnr lnr-sync"></span></a></li>
                                            </ul>
                                        </div>
                                        <div className="price_box"> 
                                            <span className="current_price">$56.00</span>
                                            <span className="old_price">$362.00</span>
                                        </div>
                                    </figcaption>
                                </figure>
                            </article>
                            <article className="single_product">
                                <figure>
                                    <div className="product_thumb">
                                        <a className="primary_img" href="product-details.html"><img src="assets/img/product/product5.jpg" alt=""/></a>
                                        <a className="secondary_img" href="product-details.html"><img src="assets/img/product/product6.jpg" alt=""/></a>
                                    </div>
                                    <figcaption className="product_content">
                                        <h4 className="product_name"><a href="product-details.html">Mauris Vel Tellus</a></h4>
                                        <p><a href="#">Fruits</a></p>
                                        <div className="action_links">
                                            <ul>
                                                <li className="add_to_cart"><a href="cart.html" data-tippy="Add to cart" data-tippy-placement="top" data-tippy-arrow="true" data-tippy-inertia="true"> <span className="lnr lnr-cart"></span></a></li>
                                               <li className="quick_button"><a href="#" data-tippy="quick view" data-tippy-placement="top" data-tippy-arrow="true" data-tippy-inertia="true" data-bs-toggle="modal" data-bs-target="#modal_box" > <span className="lnr lnr-magnifier"></span></a></li>
                                                 <li className="wishlist"><a href="wishlist.html" data-tippy="Add to Wishlist" data-tippy-placement="top" data-tippy-arrow="true" data-tippy-inertia="true"><span className="lnr lnr-heart"></span></a></li> 
                                                <li className="compare"><a href="#" data-tippy="Add to Compare" data-tippy-placement="top" data-tippy-arrow="true" data-tippy-inertia="true"><span className="lnr lnr-sync"></span></a></li>
                                            </ul>
                                        </div>
                                        <div className="price_box"> 
                                            <span className="current_price">$56.00</span>
                                            <span className="old_price">$362.00</span>
                                        </div>
                                    </figcaption>
                                </figure>
                            </article>
                            <article className="single_product">
                                <figure>
                                    <div className="product_thumb">
                                        <a className="primary_img" href="product-details.html"><img src="assets/img/product/product5.jpg" alt=""/></a>
                                        <a className="secondary_img" href="product-details.html"><img src="assets/img/product/product6.jpg" alt=""/></a>
                                    </div>
                                    <figcaption className="product_content">
                                        <h4 className="product_name"><a href="product-details.html">Mauris Vel Tellus</a></h4>
                                        <p><a href="#">Fruits</a></p>
                                        <div className="action_links">
                                            <ul>
                                                <li className="add_to_cart"><a href="cart.html" data-tippy="Add to cart" data-tippy-placement="top" data-tippy-arrow="true" data-tippy-inertia="true"> <span className="lnr lnr-cart"></span></a></li>
                                               <li className="quick_button"><a href="#" data-tippy="quick view" data-tippy-placement="top" data-tippy-arrow="true" data-tippy-inertia="true" data-bs-toggle="modal" data-bs-target="#modal_box" > <span className="lnr lnr-magnifier"></span></a></li>
                                                 <li className="wishlist"><a href="wishlist.html" data-tippy="Add to Wishlist" data-tippy-placement="top" data-tippy-arrow="true" data-tippy-inertia="true"><span className="lnr lnr-heart"></span></a></li> 
                                                <li className="compare"><a href="#" data-tippy="Add to Compare" data-tippy-placement="top" data-tippy-arrow="true" data-tippy-inertia="true"><span className="lnr lnr-sync"></span></a></li>
                                            </ul>
                                        </div>
                                        <div className="price_box"> 
                                            <span className="current_price">$56.00</span>
                                            <span className="old_price">$362.00</span>
                                        </div>
                                    </figcaption>
                                </figure>
                            </article>
                            <article className="single_product">
                                <figure>
                                    <div className="product_thumb">
                                        <a className="primary_img" href="product-details.html"><img src="assets/img/product/product5.jpg" alt=""/></a>
                                        <a className="secondary_img" href="product-details.html"><img src="assets/img/product/product6.jpg" alt=""/></a>
                                    </div>
                                    <figcaption className="product_content">
                                        <h4 className="product_name"><a href="product-details.html">Mauris Vel Tellus</a></h4>
                                        <p><a href="#">Fruits</a></p>
                                        <div className="action_links">
                                            <ul>
                                                <li className="add_to_cart"><a href="cart.html" data-tippy="Add to cart" data-tippy-placement="top" data-tippy-arrow="true" data-tippy-inertia="true"> <span className="lnr lnr-cart"></span></a></li>
                                               <li className="quick_button"><a href="#" data-tippy="quick view" data-tippy-placement="top" data-tippy-arrow="true" data-tippy-inertia="true" data-bs-toggle="modal" data-bs-target="#modal_box" > <span className="lnr lnr-magnifier"></span></a></li>
                                                 <li className="wishlist"><a href="wishlist.html" data-tippy="Add to Wishlist" data-tippy-placement="top" data-tippy-arrow="true" data-tippy-inertia="true"><span className="lnr lnr-heart"></span></a></li> 
                                                <li className="compare"><a href="#" data-tippy="Add to Compare" data-tippy-placement="top" data-tippy-arrow="true" data-tippy-inertia="true"><span className="lnr lnr-sync"></span></a></li>
                                            </ul>
                                        </div>
                                        <div className="price_box"> 
                                            <span className="current_price">$56.00</span>
                                            <span className="old_price">$362.00</span>
                                        </div>
                                    </figcaption>
                                </figure>
                            </article>
                            
                        </div>
                       
                    </div>
                </div>
            </div>
        </div>
    </div>



    </div>
  )
}

export default Home
