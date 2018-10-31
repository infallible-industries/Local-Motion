import React, { Component } from 'react'

export default class footer extends Component {

    componentDidMount() {
        var jss = [
            "js/jquery.js",
            "js/popper.min.js",
            "js/bootstrap.min.js",
            "js/geolocation.js",
            "js/jquery-ui.js",
            "js/jquery.themepunch.revolution.min.js",
            "js/jquery.themepunch.tools.min.js",
            "js/extensions/revolution.extension.actions.min.js",
            "js/extensions/revolution.extension.carousel.min.js",
            "js/extensions/revolution.extension.kenburn.min.js",
            "js/extensions/revolution.extension.layeranimation.min.js",
            "js/extensions/revolution.extension.migration.min.js",
            "js/extensions/revolution.extension.navigation.min.js",
            "js/extensions/revolution.extension.parallax.min.js",
            "js/extensions/revolution.extension.slideanims.min.js",
            "js/extensions/revolution.extension.video.min.js",
            "js/jquery.fancybox.js",
            "js/owl.js",
            "js/wow.js",
            "js/isotope.js",
            "js/appear.js",
            "js/script.js",
            "js/knob.js",
            "js/main-slider-script.js",
            "js/map-script.js",
            "js/respond.js",
            "js/sticky.js",
            "js/validate.js",

        ]

        jss.forEach((e) => {

            const script = document.createElement("script");

            script.src = e;
            script.async = false;

            document.body.appendChild(script);
        })
    }
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
