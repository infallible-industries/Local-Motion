import React, { Component } from 'react'

export default class footer extends Component {

    
    render() {
        return (
            <div>
                <footer class="main-footer">
                    <div class="auto-container">
                        <div class="widgets-section">
                            <div class="row clearfix">
                                <div class="footer-column col-lg-12 col-md-12 col-sm-12">
                                    <div class="footer-widget about-widget">
                                        <div class="footer-logo"><a href="index.html"><img src="images/logo.png" alt="" /></a></div>
                                        <div class="widget-content">
                                            <div class="text">Don't miss out on your opportunity to be able to make some money with your spare time!</div>
                                            <ul class="social-icon-two">
                                                <li><a href="https://www.facebook.com"><i class="fab fa-facebook-f"></i></a></li>
                                                <li><a href="https://www.twitter.com"><i class="fab fa-twitter"></i></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            {/* <!--Footer Bottom--> */}
                            <div class="footer-bottom">
                                <div class="auto-container">
                                    <div class="inner-container clearfix">
                                        <ul class="bottom-links">
                                            <li><a href="about.html">About us</a></li>
                                            <li><a href="portfolio-grid.html">Portfolio</a></li>
                                            <li><a href="mailto:infallibleindustries@gmail.com">Contact us</a></li>

                                        </ul>
                                        <div class="copyright-text">&copy; 2018. All rights reserved.</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>




        )
    }
}
