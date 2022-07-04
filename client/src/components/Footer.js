import React from 'react'
import '../scss/Footer.scss'
import { MdFacebook } from 'react-icons/md';
import { AiFillInstagram, AiFillTwitterCircle } from "react-icons/ai";
import { SiZalo } from "react-icons/si";
// import { Link } from 'react-router-dom';

export default function Footer() {

    return (
        <footer class="site-footer">
            <div class="container">
                <div class="row">
                    <div class="col-sm-12 col-md-6">
                        <h6>About</h6>
                        <p class="text-justify">Scanfcode.com
                            <i>CODE WANTS TO BE SIMPLE
                            </i> is an initiative  to help the upcoming programmers
                            with the code. Scanfcode focuses on providing the most
                            efficient code or snippets as the code wants to be simple.
                            We will help programmers build up concepts in different
                            programming languages that include C, C++, Java, HTML,
                            CSS, Bootstrap, JavaScript, PHP, Android, SQL and
                            Algorithm.</p>
                    </div>

                    <div class="col-xs-6 col-md-3">
                        <h6>Categories</h6>
                        <ul class="footer-links">
                            <li>C</li>
                            <li>UI Design</li>
                            <li>PHP</li>
                            <li>Java</li>
                            <li>Android</li>
                            <li>Templates</li>
                        </ul>
                    </div>

                    <div class="col-xs-6 col-md-3">
                        <h6>Quick Links</h6>
                        <ul class="footer-links">
                            <li>About Us</li>
                            <li>Contact Us</li>
                            <li>Contribute</li>
                            <li>Privacy Policy</li>
                            <li>Sitemap</li>
                        </ul>
                    </div>
                </div>
                <hr />
            </div>
            <div class="container">
                <div class="rows">
                    <div class="col-md-8 col-sm-6 col-xs-12">
                        <p class="copyright-text">Copyright &copy; 2017 All Rights Reserved by
                            Scanfcode.
                        </p>
                    </div>

                    <div class="col-md-4 col-sm-6 col-xs-12">
                        <ul class="social-icons">
                            <li><MdFacebook /></li>
                            <li><AiFillInstagram /></li>
                            <li><AiFillTwitterCircle /></li>
                            <li><SiZalo /></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}