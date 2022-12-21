import React from 'react'

function Product() {
  return (
    <div>
       <div className="breadcrumbs_area">
        <div className="container">   
            <div className="row">
                <div className="col-12">
                    <div className="breadcrumb_content">
                        <h3>Shop</h3>
                        <ul>
                            <li><a href="index.html">home</a></li>
                            <li>shop</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>         
    </div>
   
    <div className="shop_area shop_reverse mt-70 mb-70">
        <div className="container">
            <div className="row">
                <div className="col-lg-3 col-md-12">
                    <aside className="sidebar_widget">
                        <div className="widget_inner">
                            <div className="widget_list widget_categories">
                                <h3>Women</h3>
                                <ul>
                                    <li className="widget_sub_categories sub_categories1"><a href="javascript:void(0)">Shoes</a>
                                        <ul className="widget_dropdown_categories dropdown_categories1">
                                            <li><a href="#">Document</a></li>
                                            <li><a href="#">Dropcap</a></li>
                                            <li><a href="#">Dummy Image</a></li>
                                            <li><a href="#">Dummy Text</a></li>
                                            <li><a href="#">Fancy Text</a></li>
                                        </ul>
                                    </li>
                                    <li className="widget_sub_categories sub_categories2"><a href="javascript:void(0)">Bags</a>
                                        <ul className="widget_dropdown_categories dropdown_categories2">
                                            <li><a href="#">Flickr</a></li>
                                            <li><a href="#">Flip Box</a></li>
                                            <li><a href="#">Cocktail</a></li>
                                            <li><a href="#">Frame</a></li>
                                            <li><a href="#">Flickrq</a></li>
                                        </ul>
                                    </li>
                                    <li className="widget_sub_categories sub_categories3"><a href="javascript:void(0)">Clothing</a>
                                        <ul className="widget_dropdown_categories dropdown_categories3">
                                            <li><a href="#">Platform Beds</a></li>
                                            <li><a href="#">Storage Beds</a></li>
                                            <li><a href="#">Regular Beds</a></li>
                                            <li><a href="#">Sleigh Beds</a></li>
                                            <li><a href="#">Laundry</a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                            <div className="widget_list widget_filter">
                                <h3>Filter by price</h3>
                                <form action="#"> 
                                    <div id="slider-range"></div>   
                                    <button type="submit">Filter</button>
                                    <input type="text" name="text" id="amount" />   

                                </form> 
                            </div>
                            <div className="widget_list widget_color">
                                <h3>Select By Color</h3>
                                <ul>
                                    <li>
                                        <a href="#">Black  <span>(6)</span></a> 
                                    </li>
                                    <li>
                                        <a href="#"> Blue <span>(8)</span></a> 
                                    </li>
                                    <li>
                                        <a href="#">Brown <span>(10)</span></a> 
                                    </li>
                                    <li>
                                        <a href="#"> Green <span>(6)</span></a> 
                                    </li>
                                    <li>
                                        <a href="#">Pink <span>(4)</span></a> 
                                    </li>
                                  
                                </ul>
                            </div>
                            <div className="widget_list widget_color">
                                <h3>Select By SIze</h3>
                                <ul>
                                    <li>
                                        <a href="#">S  <span>(6)</span></a> 
                                    </li>
                                    <li>
                                        <a href="#"> M <span>(8)</span></a> 
                                    </li>
                                    <li>
                                        <a href="#">L <span>(10)</span></a> 
                                    </li>
                                    <li>
                                        <a href="#"> XL <span>(6)</span></a> 
                                    </li>
                                    <li>
                                        <a href="#">XLL <span>(4)</span></a> 
                                    </li>
                                  
                                </ul>
                            </div>
                            <div className="widget_list widget_manu">
                                <h3>Manufacturer</h3>
                                <ul>
                                    <li>
                                        <a href="#">Brake Parts <span>(6)</span></a> 
                                    </li>
                                    <li>
                                        <a href="#">Accessories <span>(10)</span></a> 
                                    </li>
                                    <li>
                                        <a href="#">Engine Parts <span>(4)</span></a> 
                                    </li>
                                    <li>
                                        <a href="#">hermes <span>(10)</span></a> 
                                    </li>
                                    <li>
                                        <a href="#">louis vuitton <span>(8)</span></a> 
                                    </li>
                                
                                </ul>
                            </div>
                            <div className="widget_list tags_widget">
                                <h3>Product tags</h3>
                                <div className="tag_cloud">
                                    <a href="#">Men</a>
                                    <a href="#">Women</a>
                                    <a href="#">Watches</a>
                                    <a href="#">Bags</a>
                                    <a href="#">Dress</a>
                                    <a href="#">Belt</a>
                                    <a href="#">Accessories</a>
                                    <a href="#">Shoes</a>
                                </div>
                            </div>
                            <div className="widget_list banner_widget">
                                <div className="banner_thumb">
                                    <a href="#"><img src="assets/img/bg/banner17.jpg" alt=""/></a>
                                </div>
                            </div>
                        </div>
                    </aside>
                </div>
                <div className="col-lg-9 col-md-12">
                
                    <div className="shop_toolbar_wrapper">
                        <div className="shop_toolbar_btn">

                            <button data-role="grid_3" type="button" className="active btn-grid-3" data-toggle="tooltip" title="3"></button>

                            <button data-role="grid_4" type="button"  className=" btn-grid-4" data-toggle="tooltip" title="4"></button>

                            <button data-role="grid_list" type="button"  className="btn-list" data-toggle="tooltip" title="List"></button>
                        </div>
                        <div className=" niceselect_option">
                            <form className="select_option" action="#">
                                <select name="orderby" id="short">

                                    <option selected value="1">Sort by average rating</option>
                                    <option  value="2">Sort by popularity</option>
                                    <option value="3">Sort by newness</option>
                                    <option value="4">Sort by price: low to high</option>
                                    <option value="5">Sort by price: high to low</option>
                                    <option value="6">Product Name: Z</option>
                                </select>
                            </form>
                        </div>
                        <div className="page_amount">
                            <p>Showing 1–9 of 21 results</p>
                        </div>
                    </div>
                     <div className="row shop_wrapper">
                        <div className="col-lg-4 col-md-4 col-sm-6 col-12 ">
                            <div className="single_product">
                                <div className="product_thumb">
                                        <a className="primary_img" href="product-details.html"><img src="assets/img/product/productbig1.jpg" alt=""/></a>
                                        <a className="secondary_img" href="product-details.html"><img src="assets/img/product/productbig2.jpg" alt=""/></a>
                                        <div className="label_product">
                                            <span className="label_sale">Sale</span>
                                            <span className="label_new">New</span>
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
                                <div className="product_content grid_content">
                                        <h4 className="product_name"><a href="product-details.html">Aliquam Consequat</a></h4>
                                        <p><a href="#">Fruits</a></p>
                                        <div className="price_box"> 
                                            <span className="current_price">$26.00</span>
                                            <span className="old_price">$362.00</span>
                                        </div>
                                    </div>
                                <div className="product_content list_content">
                                    <h4 className="product_name"><a href="product-details.html">Aliquam Consequat</a></h4>
                                    <p><a href="#">Fruits</a></p>
                                    <div className="price_box"> 
                                        <span className="current_price">$26.00</span>
                                        <span className="old_price">$362.00</span>
                                    </div>
                                    <div className="product_desc">
                                        <p>Nunc facilisis sagittis ullamcorper. Proin lectus ipsum, gravida et mattis vulputate, tristique ut lectus. Sed et lorem nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aenean eleifend laoreet congue. Viva..</p>
                                    </div>
                                    <div className="action_links list_action_right">
                                        <ul>
                                            <li className="add_to_cart"><a href="cart.html" title="Add to cart">Add to Cart</a></li>
                                           <li className="quick_button"><a href="#" data-tippy="quick view" data-tippy-placement="top" data-tippy-arrow="true" data-tippy-inertia="true" data-bs-toggle="modal" data-bs-target="#modal_box" > <span className="lnr lnr-magnifier"></span></a></li>
                                             <li className="wishlist"><a href="wishlist.html" data-tippy="Add to Wishlist" data-tippy-placement="top" data-tippy-arrow="true" data-tippy-inertia="true"><span className="lnr lnr-heart"></span></a></li> 
                                            <li className="compare"><a href="#" data-tippy="Add to Compare" data-tippy-placement="top" data-tippy-arrow="true" data-tippy-inertia="true"><span className="lnr lnr-sync"></span></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-6 col-12 ">
                            <div className="single_product">
                                <div className="product_thumb">
                                        <a className="primary_img" href="product-details.html"><img src="assets/img/product/productbig3.jpg" alt=""/></a>
                                        <a className="secondary_img" href="product-details.html"><img src="assets/img/product/productbig4.jpg" alt=""/></a>
                                        <div className="label_product">
                                            <span className="label_sale">Sale</span>
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
                                <div className="product_content grid_content">
                                        <h4 className="product_name"><a href="product-details.html">Cas Meque Metus</a></h4>
                                        <p><a href="#">Fruits</a></p>
                                        <div className="price_box"> 
                                            <span className="current_price">$32.00</span>
                                            <span className="old_price">$342.00</span>
                                        </div>
                                    </div>
                                <div className="product_content list_content">
                                       <h4 className="product_name"><a href="product-details.html">Cas Meque Metus</a></h4>
                                        <p><a href="#">Fruits</a></p>
                                        <div className="price_box"> 
                                            <span className="current_price">$32.00</span>
                                            <span className="old_price">$342.00</span>
                                        </div>
                                        <div className="product_desc">
                                            <p>Nunc facilisis sagittis ullamcorper. Proin lectus ipsum, gravida et mattis vulputate, tristique ut lectus. Sed et lorem nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aenean eleifend laoreet congue. Viva..</p>
                                        </div>
                                        <div className="action_links list_action_right">
                                            <ul>
                                                <li className="add_to_cart"><a href="cart.html" title="Add to cart">Add to Cart</a></li>
                                               <li className="quick_button"><a href="#" data-tippy="quick view" data-tippy-placement="top" data-tippy-arrow="true" data-tippy-inertia="true" data-bs-toggle="modal" data-bs-target="#modal_box" > <span className="lnr lnr-magnifier"></span></a></li>
                                                 <li className="wishlist"><a href="wishlist.html" data-tippy="Add to Wishlist" data-tippy-placement="top" data-tippy-arrow="true" data-tippy-inertia="true"><span className="lnr lnr-heart"></span></a></li> 
                                                <li className="compare"><a href="#" data-tippy="Add to Compare" data-tippy-placement="top" data-tippy-arrow="true" data-tippy-inertia="true"><span className="lnr lnr-sync"></span></a></li>
                                            </ul>
                                        </div>
                                    </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-6 col-12 ">
                            <div className="single_product">
                                <div className="product_thumb">
                                        <a className="primary_img" href="product-details.html"><img src="assets/img/product/productbig5.jpg" alt=""/></a>
                                        <a className="secondary_img" href="product-details.html"><img src="assets/img/product/productbig6.jpg" alt=""/></a>
                                        <div className="label_product">
                                            <span className="label_sale">Sale</span>
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
                                <div className="product_content grid_content">
                                        <h4 className="product_name"><a href="product-details.html">Donec Ac Tempus</a></h4>
                                        <p><a href="#">Fruits</a></p>
                                        <div className="price_box"> 
                                            <span className="current_price">$46.00</span>
                                            <span className="old_price">$322.00</span>
                                        </div>
                                    </div>
                                <div className="product_content list_content">
                                       <h4 className="product_name"><a href="product-details.html">Donec Ac Tempus</a></h4>
                                        <p><a href="#">Fruits</a></p>
                                        <div className="price_box"> 
                                            <span className="current_price">$26.00</span>
                                            <span className="old_price">$362.00</span>
                                        </div>
                                        <div className="product_desc">
                                            <p>Nunc facilisis sagittis ullamcorper. Proin lectus ipsum, gravida et mattis vulputate, tristique ut lectus. Sed et lorem nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aenean eleifend laoreet congue. Viva..</p>
                                        </div>
                                        <div className="action_links list_action_right">
                                            <ul>
                                                <li className="add_to_cart"><a href="cart.html" title="Add to cart">Add to Cart</a></li>
                                               <li className="quick_button"><a href="#" data-tippy="quick view" data-tippy-placement="top" data-tippy-arrow="true" data-tippy-inertia="true" data-bs-toggle="modal" data-bs-target="#modal_box" > <span className="lnr lnr-magnifier"></span></a></li>
                                                 <li className="wishlist"><a href="wishlist.html" data-tippy="Add to Wishlist" data-tippy-placement="top" data-tippy-arrow="true" data-tippy-inertia="true"><span className="lnr lnr-heart"></span></a></li> 
                                                <li className="compare"><a href="#" data-tippy="Add to Compare" data-tippy-placement="top" data-tippy-arrow="true" data-tippy-inertia="true"><span className="lnr lnr-sync"></span></a></li>
                                            </ul>
                                        </div>
                                    </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-6 col-12 ">
                            <div className="single_product">
                                <div className="product_thumb">
                                        <a className="primary_img" href="product-details.html"><img src="assets/img/product/productbig7.jpg" alt=""/></a>
                                        <a className="secondary_img" href="product-details.html"><img src="assets/img/product/productbig8.jpg" alt=""/></a>
                                        <div className="label_product">
                                            <span className="label_sale">Sale</span>
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
                                <div className="product_content grid_content">
                                        <h4 className="product_name"><a href="product-details.html">Donec Non Est</a></h4>
                                        <p><a href="#">Fruits</a></p>
                                        <div className="price_box"> 
                                            <span className="current_price">$28.00</span>
                                            <span className="old_price">$382.00</span>
                                        </div>
                                    </div>
                                <div className="product_content list_content">
                                       <h4 className="product_name"><a href="product-details.html">Donec Non Est</a></h4>
                                        <p><a href="#">Fruits</a></p>
                                        <div className="price_box"> 
                                            <span className="current_price">$26.00</span>
                                            <span className="old_price">$362.00</span>
                                        </div>
                                        <div className="product_desc">
                                            <p>Nunc facilisis sagittis ullamcorper. Proin lectus ipsum, gravida et mattis vulputate, tristique ut lectus. Sed et lorem nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aenean eleifend laoreet congue. Viva..</p>
                                        </div>
                                        <div className="action_links list_action_right">
                                            <ul>
                                                <li className="add_to_cart"><a href="cart.html" title="Add to cart">Add to Cart</a></li>
                                               <li className="quick_button"><a href="#" data-tippy="quick view" data-tippy-placement="top" data-tippy-arrow="true" data-tippy-inertia="true" data-bs-toggle="modal" data-bs-target="#modal_box" > <span className="lnr lnr-magnifier"></span></a></li>
                                                 <li className="wishlist"><a href="wishlist.html" data-tippy="Add to Wishlist" data-tippy-placement="top" data-tippy-arrow="true" data-tippy-inertia="true"><span className="lnr lnr-heart"></span></a></li> 
                                                <li className="compare"><a href="#" data-tippy="Add to Compare" data-tippy-placement="top" data-tippy-arrow="true" data-tippy-inertia="true"><span className="lnr lnr-sync"></span></a></li>
                                            </ul>
                                        </div>
                                    </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-6 col-12 ">
                            <div className="single_product">
                                <div className="product_thumb">
                                        <a className="primary_img" href="product-details.html"><img src="assets/img/product/productbig9.jpg" alt=""/></a>
                                        <a className="secondary_img" href="product-details.html"><img src="assets/img/product/productbig10.jpg" alt=""/></a>
                                        <div className="label_product">
                                            <span className="label_sale">Sale</span>
                                            <span className="label_new">New</span>
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
                                <div className="product_content grid_content">
                                        <h4 className="product_name"><a href="product-details.html">Etiam Gravida</a></h4>
                                        <p><a href="#">Fruits</a></p>
                                        <div className="price_box"> 
                                            <span className="current_price">$26.00</span>
                                            <span className="old_price">$362.00</span>
                                        </div>
                                    </div>
                                <div className="product_content list_content">
                                       <h4 className="product_name"><a href="product-details.html">Etiam Gravida</a></h4>
                                        <p><a href="#">Fruits</a></p>
                                        <div className="price_box"> 
                                            <span className="current_price">$26.00</span>
                                            <span className="old_price">$362.00</span>
                                        </div>
                                        <div className="product_desc">
                                            <p>Nunc facilisis sagittis ullamcorper. Proin lectus ipsum, gravida et mattis vulputate, tristique ut lectus. Sed et lorem nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aenean eleifend laoreet congue. Viva..</p>
                                        </div>
                                        <div className="action_links list_action_right">
                                            <ul>
                                                <li className="add_to_cart"><a href="cart.html" title="Add to cart">Add to Cart</a></li>
                                               <li className="quick_button"><a href="#" data-tippy="quick view" data-tippy-placement="top" data-tippy-arrow="true" data-tippy-inertia="true" data-bs-toggle="modal" data-bs-target="#modal_box" > <span className="lnr lnr-magnifier"></span></a></li>
                                                 <li className="wishlist"><a href="wishlist.html" data-tippy="Add to Wishlist" data-tippy-placement="top" data-tippy-arrow="true" data-tippy-inertia="true"><span className="lnr lnr-heart"></span></a></li> 
                                                <li className="compare"><a href="#" data-tippy="Add to Compare" data-tippy-placement="top" data-tippy-arrow="true" data-tippy-inertia="true"><span className="lnr lnr-sync"></span></a></li>
                                            </ul>
                                        </div>
                                    </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-6 col-12 ">
                            <div className="single_product">
                                <div className="product_thumb">
                                        <a className="primary_img" href="product-details.html"><img src="assets/img/product/productbig11.jpg" alt=""/></a>
                                        <a className="secondary_img" href="product-details.html"><img src="assets/img/product/productbig12.jpg" alt=""/></a>
                                        <div className="label_product">
                                            <span className="label_sale">Sale</span>
                                            <span className="label_new">New</span>
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
                                <div className="product_content grid_content">
                                        <h4 className="product_name"><a href="product-details.html">Fusce Aliquam</a></h4>
                                        <p><a href="#">Fruits</a></p>
                                        <div className="price_box"> 
                                            <span className="current_price">$36.00</span>
                                            <span className="old_price">$332.00</span>
                                        </div>
                                    </div>
                                <div className="product_content list_content">
                                       <h4 className="product_name"><a href="product-details.html">Fusce Aliquam</a></h4>
                                        <p><a href="#">Fruits</a></p>
                                        <div className="price_box"> 
                                            <span className="current_price">$26.00</span>
                                            <span className="old_price">$362.00</span>
                                        </div>
                                        <div className="product_desc">
                                            <p>Nunc facilisis sagittis ullamcorper. Proin lectus ipsum, gravida et mattis vulputate, tristique ut lectus. Sed et lorem nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aenean eleifend laoreet congue. Viva..</p>
                                        </div>
                                        <div className="action_links list_action_right">
                                            <ul>
                                                <li className="add_to_cart"><a href="cart.html" title="Add to cart">Add to Cart</a></li>
                                               <li className="quick_button"><a href="#" data-tippy="quick view" data-tippy-placement="top" data-tippy-arrow="true" data-tippy-inertia="true" data-bs-toggle="modal" data-bs-target="#modal_box" > <span className="lnr lnr-magnifier"></span></a></li>
                                                 <li className="wishlist"><a href="wishlist.html" data-tippy="Add to Wishlist" data-tippy-placement="top" data-tippy-arrow="true" data-tippy-inertia="true"><span className="lnr lnr-heart"></span></a></li> 
                                                <li className="compare"><a href="#" data-tippy="Add to Compare" data-tippy-placement="top" data-tippy-arrow="true" data-tippy-inertia="true"><span className="lnr lnr-sync"></span></a></li>
                                            </ul>
                                        </div>
                                    </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-6 col-12 ">
                            <div className="single_product">
                                <div className="product_thumb">
                                        <a className="primary_img" href="product-details.html"><img src="assets/img/product/productbig13.jpg" alt=""/></a>
                                        <a className="secondary_img" href="product-details.html"><img src="assets/img/product/productbig14.jpg" alt=""/></a>
                                        <div className="label_product">
                                            <span className="label_sale">Sale</span>
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
                                <div className="product_content grid_content">
                                        <h4 className="product_name"><a href="product-details.html">Letraset Sheets</a></h4>
                                        <p><a href="#">Fruits</a></p>
                                        <div className="price_box"> 
                                            <span className="current_price">$56.00</span>
                                            <span className="old_price">$286.00</span>
                                        </div>
                                    </div>
                                <div className="product_content list_content">
                                       <h4 className="product_name"><a href="product-details.html">Letraset Sheets</a></h4>
                                        <p><a href="#">Fruits</a></p>
                                        <div className="price_box"> 
                                            <span className="current_price">$56.00</span>
                                            <span className="old_price">$286.00</span>
                                        </div>
                                        <div className="product_desc">
                                            <p>Nunc facilisis sagittis ullamcorper. Proin lectus ipsum, gravida et mattis vulputate, tristique ut lectus. Sed et lorem nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aenean eleifend laoreet congue. Viva..</p>
                                        </div>
                                        <div className="action_links list_action_right">
                                            <ul>
                                                <li className="add_to_cart"><a href="cart.html" title="Add to cart">Add to Cart</a></li>
                                               <li className="quick_button"><a href="#" data-tippy="quick view" data-tippy-placement="top" data-tippy-arrow="true" data-tippy-inertia="true" data-bs-toggle="modal" data-bs-target="#modal_box" > <span className="lnr lnr-magnifier"></span></a></li>
                                                 <li className="wishlist"><a href="wishlist.html" data-tippy="Add to Wishlist" data-tippy-placement="top" data-tippy-arrow="true" data-tippy-inertia="true"><span className="lnr lnr-heart"></span></a></li> 
                                                <li className="compare"><a href="#" data-tippy="Add to Compare" data-tippy-placement="top" data-tippy-arrow="true" data-tippy-inertia="true"><span className="lnr lnr-sync"></span></a></li>
                                            </ul>
                                        </div>
                                    </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-6 col-12 ">
                            <div className="single_product">
                                <div className="product_thumb">
                                        <a className="primary_img" href="product-details.html"><img src="assets/img/product/productbig2.jpg" alt=""/></a>
                                        <a className="secondary_img" href="product-details.html"><img src="assets/img/product/productbig1.jpg" alt=""/></a>
                                        <div className="label_product">
                                            <span className="label_sale">Sale</span>
                                            <span className="label_new">New</span>
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
                                <div className="product_content grid_content">
                                        <h4 className="product_name"><a href="product-details.html">Lorem Ipsum Lec</a></h4>
                                        <p><a href="#">Fruits</a></p>
                                        <div className="price_box"> 
                                            <span className="current_price">$26.00</span>
                                            <span className="old_price">$362.00</span>
                                        </div>
                                    </div>
                                <div className="product_content list_content">
                                       <h4 className="product_name"><a href="product-details.html">Lorem Ipsum Lec</a></h4>
                                        <p><a href="#">Fruits</a></p>
                                        <div className="price_box"> 
                                            <span className="current_price">$26.00</span>
                                            <span className="old_price">$362.00</span>
                                        </div>
                                        <div className="product_desc">
                                            <p>Nunc facilisis sagittis ullamcorper. Proin lectus ipsum, gravida et mattis vulputate, tristique ut lectus. Sed et lorem nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aenean eleifend laoreet congue. Viva..</p>
                                        </div>
                                        <div className="action_links list_action_right">
                                            <ul>
                                                <li className="add_to_cart"><a href="cart.html" title="Add to cart">Add to Cart</a></li>
                                               <li className="quick_button"><a href="#" data-tippy="quick view" data-tippy-placement="top" data-tippy-arrow="true" data-tippy-inertia="true" data-bs-toggle="modal" data-bs-target="#modal_box" > <span className="lnr lnr-magnifier"></span></a></li>
                                                 <li className="wishlist"><a href="wishlist.html" data-tippy="Add to Wishlist" data-tippy-placement="top" data-tippy-arrow="true" data-tippy-inertia="true"><span className="lnr lnr-heart"></span></a></li> 
                                                <li className="compare"><a href="#" data-tippy="Add to Compare" data-tippy-placement="top" data-tippy-arrow="true" data-tippy-inertia="true"><span className="lnr lnr-sync"></span></a></li>
                                            </ul>
                                        </div>
                                    </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-6 col-12 ">
                            <div className="single_product">
                                <div className="product_thumb">
                                        <a className="primary_img" href="product-details.html"><img src="assets/img/product/productbig4.jpg" alt=""/></a>
                                        <a className="secondary_img" href="product-details.html"><img src="assets/img/product/productbig3.jpg" alt=""/></a>
                                        <div className="label_product">
                                            <span className="label_sale">Sale</span>
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
                                <div className="product_content grid_content">
                                        <h4 className="product_name"><a href="product-details.html">Mauris Vel Tellus</a></h4>
                                        <p><a href="#">Fruits</a></p>
                                        <div className="price_box"> 
                                            <span className="current_price">$65.00</span>
                                            <span className="old_price">$292.00</span>
                                        </div>
                                    </div>
                                <div className="product_content list_content">
                                       <h4 className="product_name"><a href="product-details.html">Mauris Vel Tellus</a></h4>
                                        <p><a href="#">Fruits</a></p>
                                        <div className="price_box"> 
                                            <span className="current_price">$65.00</span>
                                            <span className="old_price">$292.00</span>
                                        </div>
                                        <div className="product_desc">
                                            <p>Nunc facilisis sagittis ullamcorper. Proin lectus ipsum, gravida et mattis vulputate, tristique ut lectus. Sed et lorem nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aenean eleifend laoreet congue. Viva..</p>
                                        </div>
                                        <div className="action_links list_action_right">
                                            <ul>
                                                <li className="add_to_cart"><a href="cart.html" title="Add to cart">Add to Cart</a></li>
                                               <li className="quick_button"><a href="#" data-tippy="quick view" data-tippy-placement="top" data-tippy-arrow="true" data-tippy-inertia="true" data-bs-toggle="modal" data-bs-target="#modal_box" > <span className="lnr lnr-magnifier"></span></a></li>
                                                 <li className="wishlist"><a href="wishlist.html" data-tippy="Add to Wishlist" data-tippy-placement="top" data-tippy-arrow="true" data-tippy-inertia="true"><span className="lnr lnr-heart"></span></a></li> 
                                                <li className="compare"><a href="#" data-tippy="Add to Compare" data-tippy-placement="top" data-tippy-arrow="true" data-tippy-inertia="true"><span className="lnr lnr-sync"></span></a></li>
                                            </ul>
                                        </div>
                                    </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-6 col-12 ">
                            <div className="single_product">
                                <div className="product_thumb">
                                        <a className="primary_img" href="product-details.html"><img src="assets/img/product/productbig6.jpg" alt=""/></a>
                                        <a className="secondary_img" href="product-details.html"><img src="assets/img/product/productbig5.jpg" alt=""/></a>
                                        <div className="label_product">
                                            <span className="label_sale">Sale</span>
                                            <span className="label_new">New</span>
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
                                <div className="product_content grid_content">
                                        <h4 className="product_name"><a href="product-details.html">Nunc Neque Eros</a></h4>
                                        <p><a href="#">Fruits</a></p>
                                        <div className="price_box"> 
                                            <span className="current_price">$26.00</span>
                                            <span className="old_price">$362.00</span>
                                        </div>
                                    </div>
                                <div className="product_content list_content">
                                       <h4 className="product_name"><a href="product-details.html">Nunc Neque Eros</a></h4>
                                        <p><a href="#">Fruits</a></p>
                                        <div className="price_box"> 
                                            <span className="current_price">$26.00</span>
                                            <span className="old_price">$362.00</span>
                                        </div>
                                        <div className="product_desc">
                                            <p>Nunc facilisis sagittis ullamcorper. Proin lectus ipsum, gravida et mattis vulputate, tristique ut lectus. Sed et lorem nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aenean eleifend laoreet congue. Viva..</p>
                                        </div>
                                        <div className="action_links list_action_right">
                                            <ul>
                                                <li className="add_to_cart"><a href="cart.html" title="Add to cart">Add to Cart</a></li>
                                               <li className="quick_button"><a href="#" data-tippy="quick view" data-tippy-placement="top" data-tippy-arrow="true" data-tippy-inertia="true" data-bs-toggle="modal" data-bs-target="#modal_box" > <span className="lnr lnr-magnifier"></span></a></li>
                                                 <li className="wishlist"><a href="wishlist.html" data-tippy="Add to Wishlist" data-tippy-placement="top" data-tippy-arrow="true" data-tippy-inertia="true"><span className="lnr lnr-heart"></span></a></li> 
                                                <li className="compare"><a href="#" data-tippy="Add to Compare" data-tippy-placement="top" data-tippy-arrow="true" data-tippy-inertia="true"><span className="lnr lnr-sync"></span></a></li>
                                            </ul>
                                        </div>
                                    </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-6 col-12 ">
                            <div className="single_product">
                                <div className="product_thumb">
                                        <a className="primary_img" href="product-details.html"><img src="assets/img/product/productbig8.jpg" alt=""/></a>
                                        <a className="secondary_img" href="product-details.html"><img src="assets/img/product/productbig7.jpg" alt=""/></a>
                                        <div className="label_product">
                                            <span className="label_sale">Sale</span>
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
                                <div className="product_content grid_content">
                                        <h4 className="product_name"><a href="product-details.html">Proin Lectus Ipsum</a></h4>
                                        <p><a href="#">Fruits</a></p>
                                        <div className="price_box"> 
                                            <span className="current_price">$44.00</span>
                                            <span className="old_price">$332.00</span>
                                        </div>
                                    </div>
                                <div className="product_content list_content">
                                       <h4 className="product_name"><a href="product-details.html">Proin Lectus Ipsum</a></h4>
                                        <p><a href="#">Fruits</a></p>
                                        <div className="price_box"> 
                                            <span className="current_price">$44.00</span>
                                            <span className="old_price">$332.00</span>
                                        </div>
                                        <div className="product_desc">
                                            <p>Nunc facilisis sagittis ullamcorper. Proin lectus ipsum, gravida et mattis vulputate, tristique ut lectus. Sed et lorem nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aenean eleifend laoreet congue. Viva..</p>
                                        </div>
                                        <div className="action_links list_action_right">
                                            <ul>
                                                <li className="add_to_cart"><a href="cart.html" title="Add to cart">Add to Cart</a></li>
                                               <li className="quick_button"><a href="#" data-tippy="quick view" data-tippy-placement="top" data-tippy-arrow="true" data-tippy-inertia="true" data-bs-toggle="modal" data-bs-target="#modal_box" > <span className="lnr lnr-magnifier"></span></a></li>
                                                 <li className="wishlist"><a href="wishlist.html" data-tippy="Add to Wishlist" data-tippy-placement="top" data-tippy-arrow="true" data-tippy-inertia="true"><span className="lnr lnr-heart"></span></a></li> 
                                                <li className="compare"><a href="#" data-tippy="Add to Compare" data-tippy-placement="top" data-tippy-arrow="true" data-tippy-inertia="true"><span className="lnr lnr-sync"></span></a></li>
                                            </ul>
                                        </div>
                                    </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-6 col-12 ">
                            <div className="single_product">
                                <div className="product_thumb">
                                        <a className="primary_img" href="product-details.html"><img src="assets/img/product/productbig10.jpg" alt=""/></a>
                                        <a className="secondary_img" href="product-details.html"><img src="assets/img/product/productbig9.jpg" alt=""/></a>
                                        <div className="label_product">
                                            <span className="label_sale">Sale</span>
                                            <span className="label_new">New</span>
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
                                <div className="product_content grid_content">
                                        <h4 className="product_name"><a href="product-details.html">Quisque In Arcu</a></h4>
                                        <p><a href="#">Fruits</a></p>
                                        <div className="price_box"> 
                                            <span className="current_price">$26.00</span>
                                            <span className="old_price">$362.00</span>
                                        </div>
                                    </div>
                                <div className="product_content list_content">
                                       <h4 className="product_name"><a href="product-details.html">Quisque In Arcu</a></h4>
                                        <p><a href="#">Fruits</a></p>
                                        <div className="price_box"> 
                                            <span className="current_price">$26.00</span>
                                            <span className="old_price">$362.00</span>
                                        </div>
                                        <div className="product_desc">
                                            <p>Nunc facilisis sagittis ullamcorper. Proin lectus ipsum, gravida et mattis vulputate, tristique ut lectus. Sed et lorem nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aenean eleifend laoreet congue. Viva..</p>
                                        </div>
                                        <div className="action_links list_action_right">
                                            <ul>
                                                <li className="add_to_cart"><a href="cart.html" title="Add to cart">Add to Cart</a></li>
                                               <li className="quick_button"><a href="#" data-tippy="quick view" data-tippy-placement="top" data-tippy-arrow="true" data-tippy-inertia="true" data-bs-toggle="modal" data-bs-target="#modal_box" > <span className="lnr lnr-magnifier"></span></a></li>
                                                 <li className="wishlist"><a href="wishlist.html" data-tippy="Add to Wishlist" data-tippy-placement="top" data-tippy-arrow="true" data-tippy-inertia="true"><span className="lnr lnr-heart"></span></a></li> 
                                                <li className="compare"><a href="#" data-tippy="Add to Compare" data-tippy-placement="top" data-tippy-arrow="true" data-tippy-inertia="true"><span className="lnr lnr-sync"></span></a></li>
                                            </ul>
                                        </div>
                                    </div>
                            </div>
                        </div>
                    </div>

                    <div className="shop_toolbar t_bottom">
                        <div className="pagination">
                            <ul>
                                <li className="current">1</li>
                                <li><a href="#">2</a></li>
                                <li><a href="#">3</a></li>
                                <li className="next"><a href="#">next</a></li>
                                <li><a href="#"></a></li>
                            </ul>
                        </div>
                    </div>
                   
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Product
