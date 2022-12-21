import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import { ClickAwayListener } from '@mui/base';

function Header() {
    const [sideBarDispalay, setsideBarDisplay]=useState(false);
    const [categoryDispaly, setCategoryDispaly]=useState(false);
    const [sideCartDisplay, setSideCartDispaly]=useState(false);
  
  return (
    <div>
           <div className={`off_canvars_overlay  ${sideBarDispalay? 'active':''} ${sideCartDisplay? 'active':''}`}  >
                
                </div>
                <div className="offcanvas_menu" >
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="canvas_open" onClick={()=>setsideBarDisplay(true)}>
                                    <a href="#"><i className="icon-menu"></i></a>
                                </div>
                                <div className={` offcanvas_menu_wrapper ${sideBarDispalay?'active':''}`} >
                                    <div className="canvas_close" onClick={()=>setsideBarDisplay(false)}>
                                        <a  href="#"><i style={{'lineHeight':'1.6'}} className="icon-x"></i></a>  
                                    </div>
                              
                                    <div className="header_social text-right">
                                        <ul>
                                            <li><a href="#"><i className="ion-social-twitter"></i></a></li>
                                            <li><a href="#"><i className="ion-social-googleplus-outline"></i></a></li>
                                            <li><a href="#"><i className="ion-social-youtube-outline"></i></a></li>
                                            <li><a href="#"><i className="ion-social-facebook"></i></a></li>
                                            <li><a href="#"><i className="ion-social-instagram-outline"></i></a></li>
                                        </ul>
                                    </div>
                                    
                                    <div className="call-support">
                                        <p><a href="tel:(08)23456789">(+92) 00 00 000</a> Customer Support</p>
                                    </div>
                                    <div id="menu" className="text-left ">
                                        <ul className="offcanvas_main_menu">
                                            <li className="menu-item-has-children active">
                                                <a href="#">Home</a>
                                               
                                            </li>
                                            <li className="menu-item-has-children">
                                                <a href="#">Shop</a>
                                                
                                            </li>
                                            <li className="menu-item-has-children">
                                                <a href="#">blog</a>
                                               
            
                                            </li>
                                            <li className="menu-item-has-children">
                                                <a href="#">pages </a>
                                              
                                            </li>
                                            <li className="menu-item-has-children">
                                                <a href="my-account.html">my account</a>
                                            </li>
                                            <li className="menu-item-has-children">
                                                <a href="about.html">about Us</a>
                                            </li>
                                            <li className="menu-item-has-children">
                                                <a href="contact.html"> Contact Us</a> 
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="offcanvas_footer">
                                        <span><a href="#"><i className="fa fa-envelope-o"></i> info@yourdomain.com</a></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <header>
                    <div className="main_header">
                        <div className="header_top">
                            <div className="container">
                                <div className="row align-items-center">
                                    <div className="col-lg-6 col-md-6">
                                        <div className="language_currency">
                                            <ul>
                                                <li className="language"><a href="#"> Language <i className="icon-right ion-ios-arrow-down"></i></a>
                                                    <ul className="dropdown_language">
                                                        <li><a href="#">French</a></li>
                                                        <li><a href="#">Spanish</a></li>
                                                        <li><a href="#">Russian</a></li>
                                                    </ul>
                                                </li>
                                              
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="header_social text-right">
                                            <ul>
                                                <li><a href="#"><i className="ion-social-twitter"></i></a></li>
                                                <li><a href="#"><i className="ion-social-googleplus-outline"></i></a></li>
                                                <li><a href="#"><i className="ion-social-youtube-outline"></i></a></li>
                                                <li><a href="#"><i className="ion-social-facebook"></i></a></li>
                                                <li><a href="#"><i className="ion-social-instagram-outline"></i></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="header_middle">
                            <div className="container">
                                <div className="row align-items-center">
                                    <div className="col-lg-2 col-md-3 col-sm-3 col-3">
                                        <div className="logo">
                                            <Link to="/"><img src="assets/logo.png" alt=""/></Link>
                                        </div>
                                    </div>
                                    <div className="col-lg-10 col-md-6 col-sm-7 col-8">
                                        <div className="header_right_info">
                                            <div className="search_container mobail_s_none">
                                               <form action="#">
                                                
                                                    <div className="search_box">
                                                        <input placeholder="Search product..." type="text"/>
                                                         <button type="submit"><span className="lnr lnr-magnifier"></span></button>
                                                    </div>
                                                </form>
                                            </div>
                                            <div className="header_account_area">
                                                <div className="header_account_list register">
                                                    <ul>
                                                        <li><Link to="/login">Register</Link></li>
                                                        <li><span>/</span></li>
                                                        <li><Link to="/login">Login</Link></li>
                                                    </ul>
                                                </div>
                                                <div className="header_account_list header_wishlist">
                                                    <Link to="/whishlist"><span className="lnr lnr-heart"></span> <span className="item_count">3</span> </Link>
                                                </div>
                                                   <ClickAwayListener  onClickAway={()=>setSideCartDispaly(false)}>
                                                <div className="header_account_list  mini_cart_wrapper">
                                                   <a  onClick={()=>setSideCartDispaly(true)}><span className="lnr lnr-cart"></span><span className="item_count">2</span></a>

                                                   
                                                    <div className={`mini_cart ${sideCartDisplay? 'active':''}`}>
                                                        <div className="cart_gallery">
                                                            <div className="cart_close">
                                                                <div className="cart_text">
                                                                    <h3>cart</h3>
                                                                </div>
                                                                <div className="mini_cart_close">
                                                                    <a onClick={()=>setSideCartDispaly(false)}><i className="icon-x"></i></a>
                                                                </div>
                                                            </div>
                                                            <div className="cart_item">
                                                               <div className="cart_img">
                                                                   <a href="#"><img src="assets\img\customImages\product1.jpg" alt=""/></a>
                                                               </div>
                                                                <div className="cart_info">
                                                                    <a href="#">Primis In Faucibus</a>
                                                                    <p>1 x <span> $65.00 </span></p>    
                                                                </div>
                                                                <div className="cart_remove">
                                                                    <a href="#"><i className="icon-x"></i></a>
                                                                </div>
                                                            </div>
                                                            <div className="cart_item">
                                                               <div className="cart_img">
                                                                   <a href="#"><img src="assets\img\customImages\product1.jpg" alt=""/></a>
                                                               </div>
                                                                <div className="cart_info">
                                                                    <a href="#">Letraset Sheets</a>
                                                                    <p>1 x <span> $60.00 </span></p>    
                                                                </div>
                                                                <div className="cart_remove">
                                                                    <a href="#"><i className="icon-x"></i></a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="mini_cart_table">
                                                            <div className="cart_table_border">
                                                                <div className="cart_total">
                                                                    <span>Sub total:</span>
                                                                    <span className="price">$125.00</span>
                                                                </div>
                                                                <div className="cart_total mt-10">
                                                                    <span>total:</span>
                                                                    <span className="price">$125.00</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="mini_cart_footer">
                                                           <div className="cart_button">
                                                                <Link to="/cart" onClick={()=>setSideCartDispaly(false)}><i className="fa fa-shopping-cart"></i> View cart</Link>
                                                            </div>
                                                            <div className="cart_button">
                                                                <a href="checkout.html"><i className="fa fa-sign-in"></i> Checkout</a>
                                                            </div>
            
                                                        </div>
                                                    </div>
                                                    
                                               </div>
                                               </ClickAwayListener>
                                            </div>
                                        </div>
                                    </div>
                                   
                                </div>
                            </div>
                        </div>
                        <div className="header_bottom sticky-header">
                            <div className="container">  
                                <div className="row align-items-center">
                                    <div className="col-12 col-md-6 mobail_s_block">
                                        <div className="search_container">
                                           <form action="#">
                                               
                                                <div className="search_box">
                                                    <input placeholder="Search product..." type="text"/>
                                                     <button type="submit"><span className="lnr lnr-magnifier"></span></button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                    <ClickAwayListener onClickAway={()=>setCategoryDispaly(false)}>
                                    <div className="col-lg-3 col-md-6">
                                        <div className="categories_menu " onClick={()=>setCategoryDispaly(categoryDispaly?false:true)}>
                                            <div className={`categories_title ${categoryDispaly?'active':''}`}>
                                                <h2 className="categori_toggle">All Cattegories</h2>
                                            </div>
                                            <div className="categories_menu_toggle" style={{'display':`${categoryDispaly?'block':'none'}`}}>
                                                <ul>
                                                    <li className="menu_item_children"><a href="#">Cackes<i className="fa fa-angle-right"></i></a>
                                                        <ul className="categories_mega_menu" >
                                                            <li className="menu_item_children"><a href="#">Cheese</a>
                                                                <ul className="categorie_sub_menu">
                                                                    <li><a href="#">Sweater</a></li>
                                                                    <li><a href="#">Evening</a></li>
                                                                    <li><a href="#">Day</a></li>
                                                                    <li><a href="#">Sports</a></li>
                                                                </ul>
                                                            </li>
                                                            <li className="menu_item_children"><a href="#">premimu</a>
                                                                <ul className="categorie_sub_menu">
                                                                    <li><a href="#">Shoulder</a></li>
                                                                    <li><a href="#">Satchels</a></li>
                                                                    <li><a href="#">kids</a></li>
                                                                    <li><a href="#">coats</a></li>
                                                                </ul>
                                                            </li>
                                                            <li className="menu_item_children"><a href="#">Cup cakae</a>
                                                                <ul className="categorie_sub_menu">
                                                                    <li><a href="#">Ankle Boots</a></li>
                                                                    <li><a href="#">Clog sandals </a></li>
                                                                    <li><a href="#">run</a></li>
                                                                    <li><a href="#">Books</a></li>
                                                                </ul>
                                                            </li>
                                                            <li className="menu_item_children"><a href="#">Milk cacke</a>
                                                                <ul className="categorie_sub_menu">
                                                                    <li><a href="#">Coats  Jackets </a></li>
                                                                    <li><a href="#">Raincoats</a></li>
                                                                    <li><a href="#">Jackets</a></li>
                                                                    <li><a href="#">T-shirts</a></li>
                                                                </ul>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li className="menu_item_children"><a href="#">occasions  <i className="fa fa-angle-right"></i></a>
                                                        <ul className="categories_mega_menu column_3">
                                                            <li className="menu_item_children"><a href="#">Birth day cacke</a>
                                                                <ul className="categorie_sub_menu">
                                                                    <li><a href="#">Dining room</a></li>
                                                                    <li><a href="#">bedroom</a></li>
                                                                    <li><a href="#"> Home & Office</a></li>
                                                                    <li><a href="#">living room</a></li>
                                                                </ul>
                                                            </li>
                                                            <li className="menu_item_children"><a href="#">Happy new year cacke</a>
                                                                <ul className="categorie_sub_menu">
                                                                    <li><a href="#">Ceiling Lighting</a></li>
                                                                    <li><a href="#">Wall Lighting</a></li>
                                                                    <li><a href="#">Outdoor Lighting</a></li>
                                                                    <li><a href="#">Smart Lighting</a></li>
                                                                </ul>
                                                            </li>
                                                            <li className="menu_item_children"><a href="#">Weeding cacke</a>
                                                                <ul className="categorie_sub_menu">
                                                                    <li><a href="#">Fabric Sofas</a></li>
                                                                    <li><a href="#">Leather Sofas</a></li>
                                                                    <li><a href="#">Corner Sofas</a></li>
                                                                    <li><a href="#">Sofa Beds</a></li>
                                                                </ul>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li className="menu_item_children"><a href="#"> Bakery<i className="fa fa-angle-right"></i></a>
                                                        <ul className="categories_mega_menu column_2">
                                                            <li className="menu_item_children"><a href="#">Desserts</a>
                                                                <ul className="categorie_sub_menu">
                                                                    <li><a href="#">Driveshafts</a></li>
                                                                    <li><a href="#">Spools</a></li>
                                                                    <li><a href="#">Diesel </a></li>
                                                                    <li><a href="#">Gasoline</a></li>
                                                                </ul>
                                                            </li>
                                                            <li className="menu_item_children"><a href="#">Biscuts</a>
                                                                <ul className="categorie_sub_menu">
                                                                    <li><a href="#">Dolls for Girls</a></li>
                                                                    <li><a href="#">Girls' Learning Toys</a></li>
                                                                    <li><a href="#">Arts and Crafts for Girls</a></li>
                                                                    <li><a href="#">Video Games for Girls</a></li>
                                                                </ul>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li className="menu_item_children"><a href="#"> Savouries<i className="fa fa-angle-right"></i></a>
                                                        <ul className="categories_mega_menu column_2">
                                                            <li className="menu_item_children"><a href="#">Check Trousers</a>
                                                                <ul className="categorie_sub_menu">
                                                                    <li><a href="#">Building</a></li>
                                                                    <li><a href="#">Electronics</a></li>
                                                                    <li><a href="#">action figures </a></li>
                                                                    <li><a href="#">specialty & boutique toy</a></li>
                                                                </ul>
                                                            </li>
                                                            <li className="menu_item_children"><a href="#">Calculators</a>
                                                                <ul className="categorie_sub_menu">
                                                                    <li><a href="#">Dolls for Girls</a></li>
                                                                    <li><a href="#">Girls' Learning Toys</a></li>
                                                                    <li><a href="#">Arts and Crafts for Girls</a></li>
                                                                    <li><a href="#">Video Games for Girls</a></li>
                                                                </ul>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li><a href="#"> Fresh Meat</a></li>
                                                    <li><a href="#"> Butter & Eggs</a></li>
                                                    <li><a href="#"> Soft drinks</a></li>
                                                    <li><a href="#"> Breads</a></li>
                                                    <li><a href="#"> Fast food</a></li>



                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    </ClickAwayListener>
                                    
                                    <div className="col-lg-6">
                                        <div className="main_menu menu_position"> 
                                            <nav>  
                                                <ul>
                                                    <li><Link className="active"  to="/">home</Link>
                                                        
                                                    </li>
                                                    <li className="mega_items"><Link to="/product">products<i className="fa fa-angle-down"></i></Link> 
                                                        <div className="mega_menu">
                                                            <ul className="mega_menu_inner">
                                                                <li><a href="#">Cackes</a>
                                                                    <ul>
                                                                        <li><a href="shop-fullwidth.html">cheese cacke</a></li>
                                                                        <li><a href="shop-fullwidth-list.html">premium cacke</a></li>
                                                                        <li><a href="shop-right-sidebar.html">cup cacke</a></li>
                                                                        <li><a href="shop-right-sidebar-list.html"> milk cacke</a></li>
                                                                        <li><a href="shop-list.html">List View</a></li>
                                                                    </ul>
                                                                </li>
                                                                <li><a href="#">ossacians</a>
                                                                    <ul>
                                                                        <li><a href="cart.html">happy new year</a></li>
                                                                        <li><a href="wishlist.html">birthday cacke</a></li>
                                                                        <li><a href="checkout.html">weeding cacke</a></li>
                                                                        <li><a href="my-account.html">eid cacke</a></li>
                                                                        <li><a href="404.html">father cacke</a></li>
                                                                    </ul>
                                                                </li>
                                                                <li><a href="#">bakery</a>
                                                                    <ul>
                                                                        <li><a href="product-details.html">dessert</a></li>
                                                                        <li><a href="product-sidebar.html">biscuits</a></li>
                                                                        <li><a href="product-grouped.html">tarts</a></li>
                                                                        <li><a href="variable-product.html">savouries</a></li>
            
                                                                    </ul>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </li>
                                                    <li><a href="blog.html">blog<i className="fa fa-angle-down"></i></a>
                                                        <ul className="sub_menu pages">
                                                            <li><a href="blog-details.html">blog details about product</a></li>
                                                            <li><a href="blog-fullwidth.html">blog of recipe</a></li>
                                                        </ul>
                                                    </li>
                                                    <li><a href="#">pages <i className="fa fa-angle-down"></i></a>
                                                        <ul className="sub_menu pages">
                                                            <li><a href="about.html">About Us</a></li>
                                                            <li><a href="services.html">services</a></li>
                                                            <li><a href="faq.html">Frequently Questions</a></li>
                                                            <li><a href="contact.html">contact</a></li>
                                                            <li><a href="login.html">login</a></li>
                                                            <li><a href="404.html">Error 404</a></li>
                                                        </ul>
                                                    </li> 
                                                    <li><Link to="/contact"> Contact Us</Link></li>
                                                </ul>  
                                            </nav> 
                                        </div>
                                    </div>
                                    <div className="col-lg-3">
                                        <div className="call-support">
                                            <p><a href="tel:(08)23456789">(+92) 00 00 000</a> Customer Support</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> 
                </header>
      
    </div>
  )
}

export default Header

