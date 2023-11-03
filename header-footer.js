class MyHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = ` 
        
        <header class="header">				
            <div class="container">
                <div class="header_inner d-flex align-items-center justify-content-between">
                    <div class="logo">
                        <a href="index.html" class="light_logo"><img  src="assets/img/android-chrome-512x512.png" alt="logo"></a>
                        
                        <a href="index.html" class="dark_logo"><img 
                            src="assets/img/android-chrome-512x512.png" alt="logo"></a>
                    </div>

                    
                    <div class="mainnav d-none d-lg-block">
                        <ul class="main_menu">

                            <li class="menu-item"><a href="index.html">Home</a></li>
                            <li class="menu-item"><a href="project-1.html">Projects</a></li>
                            <li class="menu-item"><a href="about.html">About Us</a></li>
                            <li class="menu-item"><a href="contact.html">Contacts</a></li>

                        </ul>
                    </div>
                    <div class="header_right_part d-flex align-items-center">
                        <button class="aside_open">
                            <span class="line"></span>
                            <span class="line"></span>
                            <span class="line"></span>
                        </button>
                        

                        <!-- Mobile Responsive Menu Toggle Button -->
                        <button type="button" class="mr_menu_toggle d-lg-none">
                            <i class="bi bi-list"></i>
                        </button>
                    </div>
                </div>
			</div>
		</header>

        <!-- Mobile Responsive Menu -->
		<div class="mr_menu">
			<div class="mr_menu_overlay"></div>
			<button type="button" class="mr_menu_close"><i class="bi bi-x-lg"></i></button>
            <div class="logo"></div> <!-- Keep this div empty. Logo will come here by JavaScript -->
			<div class="mr_navmenu"></div> <!-- Keep this div empty. Menu will come here by JavaScript -->

            <!-- Footer-->
            <footer class="footer p-0">
                <div class="footer_inner pb-0">
                    <div class="footer_elements d-flex align-items-center justify-content-center">
                        <div class="footer_elements_inner">
                            <div class="footer_social">
                                <ul class="social_list justify-content-center">
                                    <li class="facebook"><a href="#"><i class="bi bi-facebook"></i></a></li>
                                    <li class="twitter"><a href="#"><i class="bi bi-twitter"></i></a></li>
                                    <li class="instagram"><a href="#"><i class="bi bi-instagram"></i></a></li>
                                    <li class="youbetube"><a href="#"><i class="bi bi-youtube"></i></a></li>
                                </ul>
                            </div>
                            <div class="terms_condition">
                                <ul>
                                    <li><a href="#">Terms</a></li>
                                    <li><a href="#">Condition</a></li>
                                    <li><a href="#">Policy</a></li>
                                </ul>
                            </div>
                            <div class="copyright">
                                <p>Classic Corporation 2023. All Rights Reserved</p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
		</div>

        <div class="aside_info_wrapper">
			<button class="aside_close"><i class="bi bi-x-lg"></i></button>
            <div class="aside_logo">
            <a href="index.html" class="light_logo"><img  src="assets/img/android-chrome-512x512.png" alt="logo"></a>
                        
            <a href="index.html" class="dark_logo"><img 
                src="assets/img/android-chrome-512x512.png" alt="logo"></a>
            </div>
			<div class="aside_info_inner">
                <p>Classic Corporation is a full-service firm providing for hassle-free and well-managed construction process.</p>
                
                <div class="aside_info_inner_box">
                    <h5>Contact Info</h5>
                    <p>+91 97697 81684</p>
                    <p>akram.jaffri81@gmail.com</p>

                    <h5>Office Address</h5>
                    <p>Flat No 1002, Golden Tower CHS LTD, Vidyanagari, Mani Pada Kalina Santacruz East, Mumbai, Mumbai Suburban, Maharashtra, 400098</p>
                </div>
                <div class="social_sites">
                    <ul class="d-flex align-items-center justify-content-center">
                        <li><a href="#"><i class="bi bi-facebook"></i></a></li>
                        <li><a href="#"><i class="bi bi-twitter"></i></a></li>
                        <li><a href="#"><i class="bi bi-instagram"></i></a></li>
                        <li><a href="#"><i class="bi bi-youtube"></i></a></li>
                    </ul>
                </div>
			</div>
		</div>

        `
    }
}


customElements.define('my-header',MyHeader)

class MyFooter extends HTMLElement{
    connectedCallback(){
        this.innerHTML = `  
        
        <footer class="footer bg-dark-200 box_padding">
            <div class="footer_inner bg-black">
                <div class="container">
                    <div class="row align-items-end">
                        <div class="col-lg-4 col-md-2 col-sm-2">
                            <div class="section-header">
                                <h2>Contact</h2>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-5 col-sm-5">
                            <div class="communication">
                                <div class="info_body">
                                    <h6>Studio Website</h6>
                                    <h5>www.classiccorporation.co.in</h5>
                                </div>
                                <div class="info_body">
                                    <h6>Email Address</h6>
                                    <h5>akram.jaffri81@gmail.com</h5>
                                </div>
                                <div class="info_body">
                                    <h6>Phone No</h6>
                                    <h5>+91 97697 81684</h5>
                                </div>
                                <div class="info_body">
                                    <h6>Office Address</h6>
                                    <h5>Flat No 1002, Golden Tower CHS LTD, Vidyanagari, Mani Pada Kalina Santacruz East, Mumbai, Mumbai Suburban, Maharashtra, 400098</h5>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-5 col-sm-5">
                            <div class="footer_elements d-flex align-items-center justify-content-end">
                                <div class="footer_elements_inner">
                                    <div class="footer_logo">
                                        <a href="index.html" class="light_logo"><img src="assets/img/android-chrome-192x192.png" alt="logo"></a>
                                    </div>
                                    <div class="footer_social">
                                        <ul class="social_list">
                                            <li class="facebook"><a href="#"><i class="bi bi-facebook"></i></a></li>
                                            <li class="twitter"><a href="#"><i class="bi bi-twitter"></i></a></li>
                                            <li class="instagram"><a href="#"><i class="bi bi-instagram"></i></a></li>
                                            <li class="youbetube"><a href="#"><i class="bi bi-youtube"></i></a></li>
                                        </ul>
                                    </div>
                                    <div class="terms_condition">
                                        <ul>
                                            <li><a href="#">Terms</a></li>
                                            <li><a href="#">Condition</a></li>
                                            <li><a href="#">Policy</a></li>
                                        </ul>
                                    </div>
                                    <div class="copyright">
                                        <p>Classic Corporation 2023. All Rights Reserved</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                

                <!-- Section Grid Lines -->
                <ul class="grid_lines d-none d-md-flex justify-content-between">
                    <li class="grid_line"></li>
                    <li class="grid_line"></li>
                    <li class="grid_line"></li>
                    <li class="grid_line"></li>
                    <li class="grid_line"></li>
                    <li class="grid_line"></li>
                    <li class="grid_line"></li>
                </ul>
            </div>
        </footer>

        `
    }
}

customElements.define('my-footer',MyFooter)