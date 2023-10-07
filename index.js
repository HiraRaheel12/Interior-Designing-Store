
/* Preloader */
document.addEventListener('DOMContentLoaded',() =>  {
var preloader = document.getElementById('preloader');

            function loader(){
            preloader.style.display = 'none'
        }

        setTimeout(loader, 1000);
})

 //Reusable Codes

//Navbar

class Navbar extends HTMLElement{
    connectedCallback(){
        this.innerHTML = `
        <header>
            <div class="col">
                <nav class="navbar navbar-expand-lg">
                    <div class="d-flex align-items-center">
                        <img class ="me-auto" src ="assets/logo.png" alt="">
                    </div>
                    <button class="navbar-toggler border-0"  data-bs-toggle="collapse" data-bs-target = "#myNavbar">
                            <span class="material-icons" id="hamburger">menu</span> 
                    </button>
                    <div class="collapse navbar-collapse m-lg-0 m-sm-4 m-4" id="myNavbar">
                        <ul class="navbar-nav ms-auto me-auto">
                            <li class="nav-item"><a href="home.html" class="nav-link">Home</a></li>
                            <li class="nav-item"><a href="about_us.html" class="nav-link" >About Us</a></li>
                            <li class="nav-item"><a href="services.html" class="nav-link">Services</a></li>
                            <li class="nav-item"><a href="#projects" class="nav-link">Projects</a></li>
                            <li class="nav-item"><a href="#blogs" class="nav-link">News</a></li>
                            <li class="nav-item"><a href="contact_us.html" class="nav-link">Contact</a></li>
                        </ul>
                        <ul class="nav navbar-nav navbar-right">			
                            <li>
                                <button class= "btn me-3" data-bs-toggle = "dropdown" id="login">Login</button>
                                <ul class="dropdown-menu form-wrapper">					
                                    <li>
                                        <form action="">
                                            <p>Sign in with your social media account</p>
                                            <div class="form-group social-btn clearfix">
                                                <a href="#" class="btn"><i class="fab fa-facebook-f"></i> Facebook</a>
                                                <a href="#" class="btn"><i class="fab fa-twitter"></i> Twitter</a>
                                            </div>
                                            <div class="or-seperator"><b>or</b></div>
                                            <div class="form-group">
                                                <input type="text" class="form-control" placeholder="Username" required="required">
                                            </div>
                                            <div class="form-group">
                                                <input type="password" class="form-control" placeholder="Password" required="required">
                                            </div>
                                            <input type="submit" class="btn btn-primary btn-block" value="Login">
                                            <div class="form-footer">
                                                <a href="#">Forgot Your password?</a>
                                            </div>
                                        </form>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <button class= "btn" data-bs-toggle = "dropdown" id="sign-up">Sign Up</button> 
                                <ul class="dropdown-menu form-wrapper">					
                                    <li>
                                        <form action="">
                                            <p>Fill in this form to create your account!</p>
                                            <div class="form-group">
                                                <input type="text" class="form-control" placeholder="Username" required="required">
                                            </div>
                                            <div class="form-group">
                                                <input type="password" class="form-control" placeholder="Password" required="required">
                                            </div>
                                            <div class="form-group">
                                                <input type="password" class="form-control" placeholder="Confirm Password" required="required">
                                            </div>
                                            <div class="form-group">
                                                <label class="checkbox-inline"><input type="checkbox" required="required"> I accept the <a href="#">Terms &amp; Conditions</a></label>
                                            </div>
                                            <input type="submit" class="btn btn-primary btn-block" value="Sign up">
                                        </form>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div> 
        </header>
        `
    }
}

//Contact Us

class Contact extends HTMLElement{
    connectedCallback(){
        this.innerHTML = `
        <section id="contact-us">
            <h1>Get in Touch</h1>
            <p>Building Relationships, One Conversation at a Time</p>
            <div class="contact-container">
                <div class="contact-content">
                    <h2>Have a project  in mind?</h2>
                    <p>Don't forget to say hello!</p>
                        <a href="contact_us.html">Let's talk<span class="material-icons">north_east</span></a> 
                    </div>
                </div>
            </div>
        </section> 
        `
    }
}


//Footer

 class Footer extends HTMLElement{
    connectedCallback(){
        this.innerHTML = `
        <footer id="footer">
            <div class="footer-container">
                <div class="footer-section-1">
                    <img src="assets/footer-logo.png" alt="" style="height: auto; width: auto;">
                    <p><span style="color: #d2ab74;">Interrio</span> brings 20 years of interior designs experience right to your home or office. Our design professionals are equipped to help you determine the products and design that work best.</p>
                    <div class="footer-social-links">
                        <a href="https://www.facebook.com/" target="_blank"><span class="fab fa-facebook-f" ></span></a>
                        <a href="https://www.instagram.com/" target="_blank"><span class="fab fa-instagram" ></span></a>
                        <a href="https://www.twitter.com/" target="_blank"><span class="fab fa-twitter" ></span></a>
                        <a href="https://www.linkedin.com/in/hira-raheel-a362221b4/" target="_blank"><span class="fa-regular fa-envelope"></span></a>
                    </div>
                </div>
                <div class="footer-section-2">
                    <h1>Discover</h1>
                    <ul>
                        <li><a href="">About Us</a></li>
                        <li><a href="">Services</a></li>
                        <li><a href="">Projects</a></li>
                        <li><a href="">News</a></li>
                        <li><a href="">Contact</a></li>
                    </ul>
                </div>
                <div class="footer-section-3">
                    <h1>Locate Us</h1>
                    <div class="locate-content">
                        <div class="address-item">
                            <span class="material-icons-outlined">location_city</span>
                            <p>256 Interrio the good, New York City</p>
                        </div>
                        <div class="address-item">
                            <span class="material-icons-outlined">call</span>
                            <p>+92-3331905200</p>
                        </div>
                        <div class="address-item">
                            <span class="material-icons-outlined">mail</span>
                            <p>interrio@gmail.com</p>
                        </div>
                        <div class="address-item">
                            <span class="material-icons-outlined">schedule</span>
                            <p>Mon - Sat: 09.00 to 18.00<br>
                            Sun Closed</p>
                        </div>
                    </div>
                </div>
                <div class="footer-section-4">
                    <h1>Newsletter</h1>
                    <p>Subscribe to our newsletter!</p>
                    <div class="newsletter">
                        <form action="">
                            <input type="email" placeholder="Enter Email">
                            <button type="submit"><span class="material-icons">near_me</span></button>
                        </form>
                    </div>
                </div>
            </div>
            <div class="copyright">
                <p>All rights reserved | Copyright © 2023</p>
            </div>
        </footer> 

        `
    }
 }

 //Team Members 

 class Team extends HTMLElement{
    connectedCallback(){
        this.innerHTML = `
            <div class="team-members">
                <div class="team-member-section">
                    <img src="assets/team-1.jpg" alt="">
                    <div class="team-member-content">
                        <h1>Alisson Taylor</h1>
                        <h4>Team Manager</h4>
                        <div class="team-social-links">
                            <a href="https://www.facebook.com/" target="_blank"><span class="fab fa-facebook-f" ></span></a>
                            <a href="https://www.instagram.com/" target="_blank"><span class="fab fa-instagram" ></span></a>
                            <a href="https://www.twitter.com/" target="_blank"><span class="fab fa-twitter" ></span></a>
                            <a href="https://www.linkedin.com/in/hira-raheel-a362221b4/" target="_blank"><span class="fa-regular fa-envelope"></span></a>
                        </div>
                    </div>
                </div>
                <div class="team-member-section">
                    <img src="assets/team-2.jpg" alt="">
                    <div class="team-member-content">
                        <h1>Michael Clark</h1>
                        <h4>CEO</h4>
                        <div class="team-social-links">
                            <a href="https://www.facebook.com/" target="_blank"><span class="fab fa-facebook-f" ></span></a>
                            <a href="https://www.instagram.com/" target="_blank"><span class="fab fa-instagram" ></span></a>
                            <a href="https://www.twitter.com/" target="_blank"><span class="fab fa-twitter" ></span></a>
                            <a href="https://www.linkedin.com/in/hira-raheel-a362221b4/" target="_blank"><span class="fa-regular fa-envelope"></span></a>
                        </div>
                    </div>
                </div>
                <div class="team-member-section">
                    <img src="assets/team-3.jpg" alt="">
                    <div class="team-member-content">
                        <h1>David Smith</h1>
                        <h4>CTO</h4>
                        <div class="team-social-links">
                            <a href="https://www.facebook.com/" target="_blank"><span class="fab fa-facebook-f" ></span></a>
                            <a href="https://www.instagram.com/" target="_blank"><span class="fab fa-instagram" ></span></a>
                            <a href="https://www.twitter.com/" target="_blank"><span class="fab fa-twitter" ></span></a>
                            <a href="https://www.linkedin.com/in/hira-raheel-a362221b4/" target="_blank"><span class="fa-regular fa-envelope"></span></a>
                        </div>
                    </div>
                </div>
            </div>
              `
    }
}

customElements.define('app-navbar', Navbar)
customElements.define('app-contact', Contact)
customElements.define('app-footer', Footer)
customElements.define('team-members', Team)



/*About Counter Section */

 document.addEventListener('DOMContentLoaded',() =>  {
     function counter(id, start, end, duration){
         let obj = document.getElementById(id),
         current = start,
         range = end - start,
         increment = end > start ? 1 : -1,
         step =  Math.abs(Math.floor(duration / range)),
         timer  =  setInterval(() => {
            current += increment;
            obj.textContent = current;
            if(current == end){
             clearInterval(timer);
            }
         }, step);
     }

     counter("count1", 0, 20, 2000);
     counter("count2", 0, 250, 2000);
     counter("count3", 0, 500, 2000);
 })

 /*Scroll Reveal */


document.addEventListener('DOMContentLoaded',() =>  {

ScrollReveal({
    reset: true,
    distance : '20px',
    duration: 2000,
});

    ScrollReveal().reveal('.main-content h1, .services-header-content h1, .projects-header-content h1, .blogs-header-content h1, .team-header-content h1, #contact-us h1, #company-overview h1, #about-company h1, #showcase h1, .contact-header-content, #services-header-content h1, #more-services h1', 
    {delay: '200', origin: 'left'})
    ScrollReveal().reveal('#aboutUs .img img, .services-header-content a, .about-company-content-1 p, .about-company-content-2 img', 
    {delay: '300', origin: 'right'})
    ScrollReveal().reveal('.main-content p, #counter, .main-content a, .services-header-content p, .projects-header-content p, .blogs-header-content p, .team-header-content p, #contact-us p, #company-overview p, .overview-content, #showcase p,  #services-header-content p, #more-services p',
    {delay: '350', origin: 'bottom'})
    ScrollReveal().reveal('.about-company-content-1 img, .about-company-content-2 p' , 
    {delay: '400', origin: 'left'})
    ScrollReveal().reveal('.services-container, #project-1, #project-2, .contact-container .contact-content, .about-gallery .gallery, .more-services-container', 
    {delay: '600', origin: 'bottom'})
    ScrollReveal().reveal('#project-3, #project-4, .carousel, .team-members', 
    {delay: '700', origin: 'bottom'})
    ScrollReveal().reveal('#contact .contact-header-content', 
    {delay: '1500', origin: 'left'})
    ScrollReveal().reveal('#contact .contact-form-section', 
    {delay: '1500', origin: 'right'})

})

 

