import React, {useState}from 'react'

function ProductDetail() {
    const [ detailSection, setDetailSection]=useState('reviews')
  return (
    <div>
          <div className="breadcrumbs_area">
        <div className="container">   
            <div className="row">
                <div className="col-12">
                    <div className="breadcrumb_content">
                        <ul>
                            <li><a href="index.html">home</a></li>
                            <li>product details</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>         
    </div>
    
    <div className="product_details mt-70 mb-70">
        <div className="container">
            <div className="row">
                <div className="col-lg-6 col-md-6">
                    <div className="product-details-tab">
                        <div id="img-1" className="zoomWrapper single-zoom">
                            <a href="#">
                                <img id="zoom1" src="https://cdn.shopify.com/s/files/1/0658/0505/8279/files/Happy_Birthday_cake_Ann_540x.png?v=1661770898" data-zoom-image="assets/img/product/productbig4.jpg" alt="big-1"/>
                            </a>
                        </div>
                        <div className="single-zoom-thumb">
                            <ul className="s-tab-zoom owl-carousel single-product-active" id="gallery_01">
                                <li>
                                    <a href="#" className="elevatezoom-gallery active" data-update="" data-image="assets/img/product/productbig4.jpg" data-zoom-image="assets/img/product/productbig4.jpg">
                                        <img src="assets/img/product/productbig4.jpg" alt="zo-th-1"/>
                                    </a>

                                </li>
                                <li >
                                    <a href="#" className="elevatezoom-gallery active" data-update="" data-image="assets/img/product/productbig1.jpg" data-zoom-image="assets/img/product/productbig1.jpg">
                                        <img src="assets/img/product/productbig1.jpg" alt="zo-th-1"/>
                                    </a>

                                </li>
                                <li >
                                    <a href="#" className="elevatezoom-gallery active" data-update="" data-image="assets/img/product/productbig2.jpg" data-zoom-image="assets/img/product/productbig2.jpg">
                                        <img src="assets/img/product/productbig2.jpg" alt="zo-th-1"/>
                                    </a>

                                </li>
                                <li >
                                    <a href="#" className="elevatezoom-gallery active" data-update="" data-image="assets/img/product/productbig3.jpg" data-zoom-image="assets/img/product/productbig3.jpg">
                                        <img src="assets/img/product/productbig3.jpg" alt="zo-th-1"/>
                                    </a>

                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 col-md-6">
                    <div className="product_d_right">
                       <form action="#">
                           
                            <h1><a href="#">commodo augue nisi</a></h1>
                            <div className="product_nav">
                                <ul>
                                    <li className="prev"><a href="product-details.html"><i className="fa fa-angle-left"></i></a></li>
                                    <li className="next"><a href="variable-product.html"><i className="fa fa-angle-right"></i></a></li>
                                </ul>
                            </div>
                            <div className=" product_ratting">
                                <ul>
                                    <li><a href="#"><i className="icon-star"></i></a></li>
                                   <li><a href="#"><i className="icon-star"></i></a></li>
                                   <li><a href="#"><i className="icon-star"></i></a></li>
                                   <li><a href="#"><i className="icon-star"></i></a></li>
                                   <li><a href="#"><i className="icon-star"></i></a></li>
                                    <li className="review"><a href="#"> (customer review ) </a></li>
                                </ul>
                                
                            </div>
                            <div className="price_box">
                                <span className="current_price">£70.00</span>
                                <span className="old_price">£80.00</span>
                                
                            </div>
                            <div className="product_desc">
                                <p>eget velit. Donec ac tempus ante. Fusce ultricies massa massa. Fusce aliquam, purus eget sagittis vulputate, sapien libero hendrerit est, sed commodo augue nisi non neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor, lorem et placerat vestibulum, metus nisi posuere nisl, in </p>
                            </div>
                            <div className="product_variant color">
                                <h3>Available Options</h3>
                                <label>color</label>
                                <ul>
                                    <li className="color1"><a href="#"></a></li>
                                    <li className="color2"><a href="#"></a></li>
                                    <li className="color3"><a href="#"></a></li>
                                    <li className="color4"><a href="#"></a></li>
                                </ul>
                            </div>
                            <div className="product_variant quantity">
                                <label>quantity</label>
                                <input min="1" max="100" value="1" type="number"/>
                                <button className="button" type="submit">add to cart</button>  
                                
                            </div>
                            <div className=" product_d_action">
                               <ul>
                                   <li><a href="#" title="Add to wishlist">+ Add to Wishlist</a></li>
                                   <li><a href="#" title="Add to wishlist">+ Compare</a></li>
                               </ul>
                            </div>
                            <div className="product_meta">
                                <span>Category: <a href="#">Clothing</a></span>
                            </div>
                            
                        </form>
                        <div className="priduct_social">
                            <ul>
                                <li><a className="facebook" href="#" title="facebook"><i className="fa fa-facebook"></i> Like</a></li>           
                                <li><a className="twitter" href="#" title="twitter"><i className="fa fa-twitter"></i> tweet</a></li>           
                                <li><a className="pinterest" href="#" title="pinterest"><i className="fa fa-pinterest"></i> save</a></li>           
                                <li><a className="google-plus" href="#" title="google +"><i className="fa fa-google-plus"></i> share</a></li>        
                                <li><a className="linkedin" href="#" title="linkedin"><i className="fa fa-linkedin"></i> linked</a></li>        
                            </ul>      
                        </div>

                    </div>
                </div>
            </div>
        </div>    
    </div>
    <div className="product_d_info mb-65">
        <div className="container">   
            <div className="row">
                <div className="col-12">
                    <div className="product_d_inner">   
                        <div className="product_info_button">    
                            <ul className="nav" role="tablist" id="nav-tab">
                                <li>
                                   <a data-toggle="tab" className={`${detailSection==='reviews'?'active':''}`} onClick={()=>setDetailSection('reviews')} href="#reviews" role="tab" aria-controls="reviews" aria-selected="false">Reviews (1)</a>
                                </li>
                                <li >
                                    <a className={`${detailSection==='description'?'active':''}`} onClick={()=>setDetailSection('description')}  data-toggle="tab" href="#info" role="tab" aria-controls="info" aria-selected="false">Description</a>
                                </li>
                                
                                
                            </ul>
                        </div>
                        <div className="tab-content">
                        <div className={` tab-pane fade ${detailSection==='reviews'?'active':''}`} id="reviews" role="tabpanel" >
                                <div className="reviews_wrapper">
                                    <h2>1 review for Donec eu furniture</h2>
                                    <div className="reviews_comment_box">
                                        <div className="comment_thmb">
                                            <img src="assets/img/blog/comment2.jpg" alt=""/>
                                        </div>
                                        <div className="comment_text">
                                            <div className="reviews_meta">
                                                <div className="star_rating">
                                                    <ul>
                                                        <li><a href="#"><i className="icon-star"></i></a></li>
                                                       <li><a href="#"><i className="icon-star"></i></a></li>
                                                       <li><a href="#"><i className="icon-star"></i></a></li>
                                                       <li><a href="#"><i className="icon-star"></i></a></li>
                                                       <li><a href="#"><i className="icon-star"></i></a></li>
                                                    </ul>   
                                                </div>
                                                <p><strong>admin </strong>- September 12, 2018</p>
                                                <span>roadthemes</span>
                                            </div>
                                        </div>
                                        
                                    </div>
                                    <div className="reviews_comment_box">
                                        <div className="comment_thmb">
                                            <img src="assets/img/blog/comment2.jpg" alt=""/>
                                        </div>
                                        <div className="comment_text">
                                            <div className="reviews_meta">
                                                <div className="star_rating">
                                                    <ul>
                                                        <li><a href="#"><i className="icon-star"></i></a></li>
                                                       <li><a href="#"><i className="icon-star"></i></a></li>
                                                       <li><a href="#"><i className="icon-star"></i></a></li>
                                                       <li><a href="#"><i className="icon-star"></i></a></li>
                                                       <li><a href="#"><i className="icon-star"></i></a></li>
                                                    </ul>   
                                                </div>
                                                <p><strong>admin </strong>- September 12, 2018</p>
                                                <span>roadthemes</span>
                                            </div>
                                        </div>
                                        
                                    </div>
                                    <div className="comment_title">
                                        <h2>Add a review </h2>
                                        <p>Your email address will not be published.  Required fields are marked </p>
                                    </div>
                                    <div className="product_ratting mb-10">
                                       <h3>Your rating</h3>
                                        <ul>
                                            <li><a href="#"><i className="icon-star"></i></a></li>
                                               <li><a href="#"><i className="icon-star"></i></a></li>
                                               <li><a href="#"><i className="icon-star"></i></a></li>
                                               <li><a href="#"><i className="icon-star"></i></a></li>
                                               <li><a href="#"><i className="icon-star"></i></a></li>
                                        </ul>
                                    </div>
                                    <div className="product_review_form">
                                        <form action="#">
                                            <div className="row">
                                                <div className="col-12">
                                                    <label for="review_comment">Your review </label>
                                                    <textarea name="comment" id="review_comment" ></textarea>
                                                </div> 
                                                 
                                            </div>
                                            <button type="submit">Submit</button>
                                         </form>   
                                    </div> 
                                </div>     
                            </div>
                            <div className={` tab-pane fade ${detailSection==='description'?'active':''}`}  id="info" role="tabpanel" >
                                <div className="product_info_content">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla augue nec est tristique auctor. Donec non est at libero vulputate rutrum. Morbi ornare lectus quis justo gravida semper. Nulla tellus mi, vulputate adipiscing cursus eu, suscipit id nulla.</p>
                                    <p>Pellentesque aliquet, sem eget laoreet ultrices, ipsum metus feugiat sem, quis fermentum turpis eros eget velit. Donec ac tempus ante. Fusce ultricies massa massa. Fusce aliquam, purus eget sagittis vulputate, sapien libero hendrerit est, sed commodo augue nisi non neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor, lorem et placerat vestibulum, metus nisi posuere nisl, in accumsan elit odio quis mi. Cras neque metus, consequat et blandit et, luctus a nunc. Etiam gravida vehicula tellus, in imperdiet ligula euismod eget.</p>
                                </div>    
                            </div>
                         

                            
                        </div>
                    </div>     
                </div>
            </div>
        </div>    
    </div> 
    </div>
  )
}

export default ProductDetail
