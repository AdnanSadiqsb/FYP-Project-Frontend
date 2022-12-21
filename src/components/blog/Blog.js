import React from 'react'

function Blog() {
  return (
    <div>
       <section className="blog_section">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="section_title">
                       <p>Our recent articles about Organic</p>
                       <h2>Our Blog Posts</h2>
                    </div>
                </div>
            </div>
          
              <div className="product-container-trending">
              <div className="col-lg-3 blog-article">
                        <article className="single_blog " >
                            <figure>
                                <div className="blog_thumb">
                                    <a href="blog-details.html"><img src="assets/img/blog/blog1.jpg" alt=""/></a>
                                </div>
                                <figcaption className="blog_content">
                                   <div className="articles_date">
                                         <p>23/06/2021 | <a href="#">eCommerce</a> </p>
                                    </div>
                                    <h4 className="post_title"><a href="blog-details.html">Lorem ipsum dolor sit amet,  elit. Impedit, aliquam animi, saepe ex.</a></h4>
                                    <footer className="blog_footer">
                                        <a href="blog-details.html">Show more</a>
                                    </footer>
                                </figcaption>
                            </figure>
                        </article>
                    </div>
                    <div className="col-lg-3 blog-article">
                        <article className="single_blog">
                            <figure>
                                <div className="blog_thumb">
                                    <a href="blog-details.html"><img src="assets/img/blog/blog2.jpg" alt=""/></a>
                                </div>
                                <figcaption className="blog_content">
                                   <div className="articles_date">
                                         <p>23/06/2021 | <a href="#">eCommerce</a> </p>
                                    </div>
                                    <h4 className="post_title"><a href="blog-details.html"> dolor sit amet, elit. Illo iste sed animi quaerat  nobis odit  nulla.</a></h4>
                                    <footer className="blog_footer">
                                        <a href="blog-details.html">Show more</a>
                                    </footer>
                                </figcaption>
                            </figure>
                        </article>
                    </div>
                    <div className="col-lg-3 blog-article">
                        <article className="single_blog">
                            <figure>
                                <div className="blog_thumb">
                                    <a href="blog-details.html"><img src="assets/img/blog/blog3.jpg" alt=""/></a>
                                </div>
                                <figcaption className="blog_content">
                                   <div className="articles_date">
                                         <p>23/06/2021 | <a href="#">eCommerce</a> </p>
                                    </div>
                                    <h4 className="post_title"><a href="blog-details.html">maxime laborum voluptas minus, est, unde eaque esse tenetur.</a></h4>
                                    <footer className="blog_footer">
                                        <a href="blog-details.html">Show more</a>
                                    </footer>
                                </figcaption>
                            </figure>
                        </article>
                    </div>
                    <div className="col-lg-3 blog-article">
                        <article className="single_blog">
                            <figure>
                                <div className="blog_thumb">
                                    <a href="blog-details.html"><img src="assets/img/blog/blog2.jpg" alt=""/></a>
                                </div>
                                <figcaption className="blog_content">
                                   <div className="articles_date">
                                         <p>23/06/2021 | <a href="#">eCommerce</a> </p>
                                    </div>
                                    <h4 className="post_title"><a href="blog-details.html">Lorem ipsum dolor sit amet, elit. Impedit, aliquam animi, saepe ex.</a></h4>
                                    <footer className="blog_footer">
                                        <a href="blog-details.html">Show more</a>
                                    </footer>
                                </figcaption>
                            </figure>
                        </article>
                    </div>     
              </div>
            
        </div>
    </section>
    </div>
  )
}

export default Blog
