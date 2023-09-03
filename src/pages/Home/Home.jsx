import profile from "../../assets/img/profile.jpg";
import avatar2 from "../../assets/img/avatar-2.jpg";
import avatar3 from "../../assets/img/avatar-3.jpg";
import avatar4 from "../../assets/img/avatar-4.jpg";
import avatar5 from "../../assets/img/avatar-5.jpg";

import webDesign from "../../assets/icons/icon-design.svg";
import webDev from "../../assets/icons/icon-dev.svg";
import graphic from "../../assets/icons/graphic.svg";
import wordpress from "../../assets/icons/wordpress.svg";

import educationIcon from "../../assets/icons/icon-education.svg";
import experience from "../../assets/icons/icon-experience.svg";
import partnerLogo from "../../assets/img/logo-partner.svg";

const Home = () => {
  return (
    <>
      <div className="preloader">
        <div className="preloader__wrap">
          <svg className="spinner-container" viewBox="0 0 52 52">
            <circle
              className="path"
              cx="26px"
              cy="26px"
              r="20px"
              fill="none"
              strokeWidth="4px"
            />
          </svg>
          <div className="preloader__progress">
            <span></span>
          </div>
        </div>
      </div>

      <main className="main">
        <div className="circle-menu">
          <div className="hamburger">
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
            <div className="hamburger__text">MENU</div>
          </div>
        </div>

        <div className="nav-wrap js-tabs">
          <ul className="nav">
            <li className="nav__item">
              <a className="active" href="#about-tab">
                About
              </a>
            </li>
            <li className="nav__item">
              <a href="#resume-tab">Resume</a>
            </li>
            <li className="nav__item">
              <a href="#portfolio-tab">Portfolio</a>
            </li>
            <li className="nav__item">
              <a href="#blog-tab">Blog</a>
            </li>
            <li className="nav__item">
              <a href="#contact-tab">Contact</a>
            </li>
          </ul>
        </div>

        <div className="wrapper">
          <aside className="sidebar" data-simplebar>
            <div>
              <div className="avatar-wrap">
                <svg className="avatar avatar--180" viewBox="0 0 188 188">
                  <g className="avatar__box">
                    <image xlinkHref={profile} height="100%" width="100%" />
                  </g>
                </svg>
              </div>
              <div className="text-center">
                <h3 className="title sidebar__user-name">
                  <span className="weight--500">Saiful</span> Islam
                </h3>
                <div className="badge badge--gray">MERN Stack Developer</div>

                <div className="social">
                  <a
                    className="social__link"
                    target={"_blank"}
                    rel="noreferrer"
                    href="https://www.facebook.com/wpsaiful">
                    <i className="fa-brands fa-facebook-f"></i>
                  </a>
                  <a
                    className="social__link"
                    target={"_blank"}
                    rel="noreferrer"
                    href="https://twitter.com/MernStackDevs">
                    <i className="fa-brands fa-twitter"></i>
                  </a>
                  <a
                    className="social__link"
                    target={"_blank"}
                    rel="noreferrer"
                    href="https://www.linkedin.com/in/mernstackdev/">
                    <i className="fa-brands fa-linkedin-in"></i>
                  </a>
                </div>
              </div>

              <ul className="contact-block">
                <li
                  className="contact-block__item"
                  data-toggle="tooltip"
                  data-placement="top"
                  title="Birthday">
                  <i className="fa-solid fa-calendar-days"></i>June 28, 1996
                </li>
                <li
                  className="contact-block__item"
                  data-toggle="tooltip"
                  data-placement="top"
                  title="Address">
                  <i className="fa-solid fa-location-dot"></i>Dhaka, Bangladesh
                </li>
                <li
                  className="contact-block__item"
                  data-toggle="tooltip"
                  data-placement="top"
                  title="E-mail">
                  <a href="mailto:itismesaiful@gmail.com">
                    <i className="fa-solid fa-envelope"></i>
                    itismesaiful@gmail.com
                  </a>
                </li>
                <li
                  className="contact-block__item"
                  data-toggle="tooltip"
                  data-placement="top"
                  title="Phone">
                  <i className="fa-solid fa-mobile-screen-button"></i>+880
                  1758-196285
                </li>
                <li
                  className="contact-block__item"
                  data-toggle="tooltip"
                  data-placement="top"
                  title="Skype">
                  <a href="skype:Saiful_Islam_Nill">
                    <i className="fa-brands fa-skype"></i>Saiful_Islam_Nill
                  </a>
                </li>
              </ul>
            </div>
            <a className="btn" href="#">
              <i className="fa-solid fa-download"></i> Download CV
            </a>
          </aside>

          <div className="content" data-simplebar>
            <div id="about-tab" className="tabcontent active">
              <div id="about" className="section mt-0">
                <h1 className="title title--h1 title__separate">About Me</h1>
                <div className="pt-2 pt-sm-3">
                  <p>
                    👋 Hey, This is Saiful Islam, a MERN Stack Developer with a
                    knack for crafting web experiences. React and MongoDB is my
                    playfields, where I merge design finesse with powerful
                    functionality. From sleek interfaces to robust backends, I
                    thrive on turning concepts into reality.
                  </p>
                  <p className="mb-0">
                    🎓 I'm experienced in the art of problem-solving and clean
                    coding. Express.js and Node.js are my dynamic duo for
                    server-side magic. 🔍 I'm all about challenges - dissecting
                    them, conquering them. It's not just about code; it's about
                    understanding the core. 🚀 Up-to-date with tech trends, I
                    ensure my work is at the forefront of innovation. 🤝
                    Collaboration fuels me. Partnering with designers and
                    developers, I'm all in for collective brilliance. ✨ Let's
                    create something remarkable. Connect with me for your MERN
                    journey!
                  </p>
                </div>
              </div>

              <div className="section">
                <h2 className="title title--h2">What I am Doing</h2>
                <div className="row">
                  <div className="col-12 col-lg-6 case-item-wrap">
                    <div className="case-item">
                      <img className="case-item__icon" src={webDesign} alt="" />
                      <h3 className="title title--h3">Web Design</h3>
                      <p className="case-item__caption">
                        The most modern and high-quality design made at a
                        professional level.
                      </p>
                    </div>
                  </div>

                  <div className="col-12 col-lg-6 case-item-wrap">
                    <div className="case-item">
                      <img className="case-item__icon" src={webDev} alt="" />
                      <h3 className="title title--h3">Web Development</h3>
                      <p className="case-item__caption">
                        High-quality development of sites at the professional
                        level.
                      </p>
                    </div>
                  </div>

                  <div className="col-12 col-lg-6 case-item-wrap">
                    <div className="case-item">
                      <img className="case-item__icon" src={wordpress} alt="" />
                      <h3 className="title title--h3">WordPress Development</h3>
                      <p className="case-item__caption">
                        Efficient WordPress and Woocommerce Developer with 7+
                        Years Experience
                      </p>
                    </div>
                  </div>

                  <div className="col-12 col-lg-6 case-item-wrap">
                    <div className="case-item">
                      <img className="case-item__icon" src={graphic} alt="" />
                      <h3 className="title title--h3">Graphic Design</h3>
                      <p className="case-item__caption">
                        I make high-quality Photo editing and photo manipulation
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="section">
                <h2 className="title title--h2">Testimonials</h2>
                <div className="swiper-container js-carousel-review">
                  <div className="swiper-wrapper">
                    <div className="swiper-slide review-item">
                      <svg className="avatar avatar--80" viewBox="0 0 84 84">
                        <g className="avatar__hexagon">
                          <image
                            xlinkHref={avatar2}
                            height="100%"
                            width="100%"
                          />
                        </g>
                      </svg>
                      <h4 className="title title--h3">Daniel Lewis</h4>
                      <p className="review-item__caption">
                        Felicia was hired to create a corporate identity. We
                        were very pleased with the work done. She has a lot of
                        experience and is very concerned about the needs of
                        client.
                      </p>
                    </div>

                    <div className="swiper-slide review-item">
                      <svg className="avatar avatar--80" viewBox="0 0 84 84">
                        <g className="avatar__hexagon">
                          <image
                            xlinkHref={avatar3}
                            height="100%"
                            width="100%"
                          />
                        </g>
                      </svg>
                      <h4 className="title title--h3">Jessica Miller</h4>
                      <p className="review-item__caption">
                        Felicia was hired to create a corporate identity. We
                        were very pleased with the work done. She has a lot of
                        experience and is very concerned about the needs of
                        client.
                      </p>
                    </div>

                    <div className="swiper-slide review-item">
                      <svg className="avatar avatar--80" viewBox="0 0 84 84">
                        <g className="avatar__hexagon">
                          <image
                            xlinkHref={avatar4}
                            height="100%"
                            width="100%"
                          />
                        </g>
                      </svg>
                      <h4 className="title title--h3">Tanya Ruiz</h4>
                      <p className="review-item__caption">
                        Felicia was hired to create a corporate identity. We
                        were very pleased with the work done. She has a lot of
                        experience and is very concerned about the needs of
                        client.
                      </p>
                    </div>

                    <div className="swiper-slide review-item">
                      <svg className="avatar avatar--80" viewBox="0 0 84 84">
                        <g className="avatar__hexagon">
                          <image
                            xlinkHref={avatar5}
                            height="100%"
                            width="100%"
                          />
                        </g>
                      </svg>
                      <h4 className="title title--h3">Thomas Castro</h4>
                      <p className="review-item__caption">
                        Felicia was hired to create a corporate identity. We
                        were very pleased with the work done. She has a lot of
                        experience and is very concerned about the needs of
                        client.
                      </p>
                    </div>
                  </div>

                  <div className="swiper-pagination"></div>
                </div>
              </div>

              <div className="section">
                <h2 className="title title--h2">Clients</h2>
                <div className="swiper-container js-carousel-clients">
                  <div className="swiper-wrapper">
                    <div className="swiper-slide">
                      <a href="#">
                        <img src={partnerLogo} alt="Logo" />
                      </a>
                    </div>

                    <div className="swiper-slide">
                      <a href="#">
                        <img src={partnerLogo} alt="Logo" />
                      </a>
                    </div>

                    <div className="swiper-slide">
                      <a href="#">
                        <img src={partnerLogo} alt="Logo" />
                      </a>
                    </div>

                    <div className="swiper-slide">
                      <a href="#">
                        <img src={partnerLogo} alt="Logo" />
                      </a>
                    </div>
                  </div>

                  <div className="swiper-pagination"></div>
                </div>
              </div>
            </div>

            <div id="resume-tab" className="tabcontent">
              <div className="section mt-0">
                <h1 className="title title--h1 title__separate">Resume</h1>
              </div>

              <div className="section">
                <h2 className="title title--h2">
                  <img className="title-icon" src={educationIcon} alt="" />
                  Education
                </h2>
                <div className="timeline">
                  <article className="timeline__item">
                    <h5 className="title title--h3 timeline__title">
                      National University, Bangladesh
                    </h5>
                    <span className="timeline__period">2013 — 2017</span>
                    <p className="timeline__description">
                      A three-year undergraduate degree is a B.A. in Political
                      Science. The subject includes studying political systems,
                      both national and international. The issue teaches the
                      students about governmental policies and procedures,
                      historical and present political systems, public affairs,
                      and international relations.
                    </p>
                  </article>

                  <article className="timeline__item">
                    <h5 className="title title--h3 timeline__title">
                      WordPress Development
                    </h5>
                    <span className="timeline__period">2016 — 2017</span>
                    <p className="timeline__description">
                      Advanced WordPress development experience with WordPress
                      premium Theme and Plugin development
                    </p>
                  </article>

                  <article className="timeline__item">
                    <h5 className="title title--h3 timeline__title">
                      Internship In Euro Bangla iT
                    </h5>
                    <span className="timeline__period">2018 — 2019</span>
                    <p className="timeline__description"></p>
                  </article>
                </div>
              </div>

              <div className="section">
                <h2 className="title title--h2">
                  <img className="title-icon" src={experience} alt="" />
                  Experience
                </h2>
                <div className="timeline">
                  <article className="timeline__item">
                    <h5 className="title title--h3 timeline__title">
                      Web Developer At WisdomBD
                    </h5>
                    <span className="timeline__period">2020 — Present</span>
                    <p className="timeline__description">
                      Technical support specialist in Wisdom Electronics
                      Bangladesh
                    </p>
                  </article>

                  <article className="timeline__item">
                    <h5 className="title title--h3 timeline__title">
                      MERN Stack Developer
                    </h5>
                    <span className="timeline__period">2021 — Present</span>
                    <p className="timeline__description">
                      a passionate MERN Stack Developer dedicated to creating
                      dynamic and immersive web applications. With expertise in
                      MongoDB, Express.js, React, and Node.js, I'm all about
                      turning ideas into powerful digital experiences.
                    </p>
                  </article>

                  <article className="timeline__item">
                    <h5 className="title title--h3 timeline__title">
                      WordPress Developer
                    </h5>
                    <span className="timeline__period">2017 — Present</span>
                    <p className="timeline__description">
                      a WordPress Developer with a passion for turning ideas
                      into beautiful and functional websites. I specialize in
                      WordPress customization, theme development, and creating
                      seamless online experiences.
                    </p>
                  </article>
                </div>
              </div>

              <div className="section">
                <h2 className="title title--h2">My Skills</h2>
                <div className="box-gray">
                  <div className="progress">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      aria-valuenow="85"
                      aria-valuemin="0"
                      aria-valuemax="100">
                      <div className="progress-text">
                        <span>Web Design</span>
                        <span>85%</span>
                      </div>
                    </div>
                    <div className="progress-text">
                      <span>Web Design</span>
                    </div>
                  </div>

                  <div className="progress">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      aria-valuenow="78"
                      aria-valuemin="0"
                      aria-valuemax="100">
                      <div className="progress-text">
                        <span>WordPress Development</span>
                        <span>78%</span>
                      </div>
                    </div>
                    <div className="progress-text">
                      <span>WordPress Development</span>
                    </div>
                  </div>

                  <div className="progress">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      aria-valuenow="90"
                      aria-valuemin="0"
                      aria-valuemax="100">
                      <div className="progress-text">
                        <span>Javascript</span>
                        <span>90%</span>
                      </div>
                    </div>
                    <div className="progress-text">
                      <span>Javascript</span>
                    </div>
                  </div>

                  <div className="progress">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      aria-valuenow="85"
                      aria-valuemin="0"
                      aria-valuemax="100">
                      <div className="progress-text">
                        <span>PHP</span>
                        <span>85%</span>
                      </div>
                    </div>
                    <div className="progress-text">
                      <span>PHP</span>
                    </div>
                  </div>

                  <div className="progress">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      aria-valuenow="90"
                      aria-valuemin="0"
                      aria-valuemax="100">
                      <div className="progress-text">
                        <span>MERN Stack</span>
                        <span>90%</span>
                      </div>
                    </div>
                    <div className="progress-text">
                      <span>MERN Stack</span>
                    </div>
                  </div>

                  <div className="progress">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      aria-valuenow="95"
                      aria-valuemin="0"
                      aria-valuemax="100">
                      <div className="progress-text">
                        <span>HTML5 & CSS3</span>
                        <span>95%</span>
                      </div>
                    </div>
                    <div className="progress-text">
                      <span>HTML5 & CSS3</span>
                    </div>
                  </div>

                  <div className="progress">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      aria-valuenow="70"
                      aria-valuemin="0"
                      aria-valuemax="100">
                      <div className="progress-text">
                        <span>Photoshop</span>
                        <span>70%</span>
                      </div>
                    </div>
                    <div className="progress-text">
                      <span>Photoshop</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div id="portfolio-tab" className="tabcontent">
              <div className="section mt-0">
                <h1 className="title title--h1 title__separate">Portfolio</h1>
              </div>
              <div className="select section">
                <span className="placeholder">Select category</span>
                <ul className="filter">
                  <li className="filter__item">Category</li>
                  <li className="filter__item active" data-filter="*">
                    <a className="filter__link active" href="#filter">
                      All
                    </a>
                  </li>
                  <li className="filter__item" data-filter=".category-concept">
                    <a className="filter__link" href="#filter">
                      Concept
                    </a>
                  </li>
                  <li className="filter__item" data-filter=".category-design">
                    <a className="filter__link" href="#filter">
                      Design
                    </a>
                  </li>
                  <li className="filter__item" data-filter=".category-life">
                    <a className="filter__link" href="#filter">
                      Life
                    </a>
                  </li>
                </ul>
                <input type="hidden" name="changemetoo" />
              </div>

              <div className="gallery-grid js-grid js-filter-container">
                <div className="gutter-sizer"></div>
                <figure className="gallery-grid__item category-concept">
                  <div className="gallery-grid__image-wrap">
                    <img
                      className="gallery-grid__image cover lazyload"
                      src="assets/img/image_01.jpg"
                      data-zoom
                      alt=""
                    />
                  </div>
                  <figcaption className="gallery-grid__caption">
                    <h4 className="title title--h4 gallery-grid__title">
                      Half Avocado
                    </h4>
                    <span className="gallery-grid__category">Concept</span>
                  </figcaption>
                </figure>

                <figure className="gallery-grid__item category-concept">
                  <div className="gallery-grid__image-wrap">
                    <img
                      className="gallery-grid__image cover lazyload"
                      src="assets/img/image_02.jpg"
                      data-zoom
                      alt=""
                    />
                  </div>
                  <figcaption className="gallery-grid__caption">
                    <h4 className="title title--h4 gallery-grid__title">
                      Pink Flamingo
                    </h4>
                    <span className="gallery-grid__category">Concept</span>
                  </figcaption>
                </figure>

                <figure className="gallery-grid__item category-design">
                  <div className="gallery-grid__image-wrap">
                    <img
                      className="gallery-grid__image cover lazyload"
                      src="assets/img/image_03.jpg"
                      data-zoom
                      alt=""
                    />
                  </div>
                  <figcaption className="gallery-grid__caption">
                    <h4 className="title title--h4 gallery-grid__title">
                      Abstract
                    </h4>
                    <span className="gallery-grid__category">Design</span>
                  </figcaption>
                </figure>

                <figure className="gallery-grid__item category-design">
                  <div className="gallery-grid__image-wrap">
                    <img
                      className="gallery-grid__image cover lazyload"
                      src="assets/img/image_04.jpg"
                      data-zoom
                      alt=""
                    />
                  </div>
                  <figcaption className="gallery-grid__caption">
                    <h4 className="title title--h4 gallery-grid__title">
                      Abstract #2
                    </h4>
                    <span className="gallery-grid__category">Design</span>
                  </figcaption>
                </figure>

                <figure className="gallery-grid__item category-design">
                  <div className="gallery-grid__image-wrap">
                    <img
                      className="gallery-grid__image cover lazyload"
                      src="assets/img/image_05.jpg"
                      data-zoom
                      alt=""
                    />
                  </div>
                  <figcaption className="gallery-grid__caption">
                    <h4 className="title title--h4 gallery-grid__title">
                      Abstract #3
                    </h4>
                    <span className="gallery-grid__category">Design</span>
                  </figcaption>
                </figure>

                <figure className="gallery-grid__item category-life">
                  <div className="gallery-grid__image-wrap">
                    <img
                      className="gallery-grid__image cover lazyload"
                      src="assets/img/image_06.jpg"
                      data-zoom
                      alt=""
                    />
                  </div>
                  <figcaption className="gallery-grid__caption">
                    <h4 className="title title--h4 gallery-grid__title">
                      Golden Gate
                    </h4>
                    <span className="gallery-grid__category">Life</span>
                  </figcaption>
                </figure>

                <figure className="gallery-grid__item category-concept">
                  <div className="gallery-grid__image-wrap">
                    <img
                      className="gallery-grid__image cover lazyload"
                      src="assets/img/image_07.jpg"
                      data-zoom
                      alt=""
                    />
                  </div>
                  <figcaption className="gallery-grid__caption">
                    <h4 className="title title--h4 gallery-grid__title">
                      Peach
                    </h4>
                    <span className="gallery-grid__category">Concept</span>
                  </figcaption>
                </figure>

                <figure className="gallery-grid__item category-design">
                  <div className="gallery-grid__image-wrap">
                    <img
                      className="gallery-grid__image cover lazyload"
                      src="assets/img/image_08.jpg"
                      data-zoom
                      alt=""
                    />
                  </div>
                  <figcaption className="gallery-grid__caption">
                    <h4 className="title title--h4 gallery-grid__title">
                      Abstract #4
                    </h4>
                    <span className="gallery-grid__category">Design</span>
                  </figcaption>
                </figure>

                <figure className="gallery-grid__item category-life">
                  <div className="gallery-grid__image-wrap">
                    <img
                      className="gallery-grid__image cover lazyload"
                      src="assets/img/image_09.jpg"
                      data-zoom
                      alt=""
                    />
                  </div>
                  <figcaption className="gallery-grid__caption">
                    <h4 className="title title--h4 gallery-grid__title">
                      Hedgehog
                    </h4>
                    <span className="gallery-grid__category">Life</span>
                  </figcaption>
                </figure>
              </div>
            </div>

            <div id="blog-tab" className="tabcontent">
              <div className="section mt-0">
                <h1 className="title title--h1 title__separate">Blog</h1>
              </div>
              <h1 className="text-center">Coming Soon...</h1>
              {/* <div className="news-grid section">
                <article className="news-item box">
                  <div className="news-item__image-wrap overlay overlay--45">
                    <div className="news-item__date">
                      16<span>Sep</span>
                    </div>
                    <a className="news-item__link" href="single-post.html"></a>
                    <img
                      className="cover lazyload"
                      src="assets/img/image_02.jpg"
                      alt=""
                    />
                  </div>
                  <div className="news-item__caption">
                    <h3 className="title title--h3">
                      Design Conferences in 2019
                    </h3>
                    <p>
                      veritatis et quasi architecto beatae vitae dicta sunt,
                      explicabo...
                    </p>
                  </div>
                </article>

                <article className="news-item box">
                  <div className="news-item__image-wrap overlay overlay--45">
                    <div className="news-item__date">
                      15<span>Sep</span>
                    </div>
                    <a className="news-item__link" href="single-post.html"></a>
                    <img
                      className="cover lazyload"
                      src="assets/img/image_06.jpg"
                      alt=""
                    />
                  </div>
                  <div className="news-item__caption">
                    <h3 className="title title--h3">
                      Best Fonts Every Designer
                    </h3>
                    <p>
                      Sed perspiciatis nam libero tempore, cum soluta nobis est
                      eligendi...
                    </p>
                  </div>
                </article>

                <article className="news-item box">
                  <div className="news-item__image-wrap overlay overlay--45">
                    <div className="news-item__date">
                      14<span>Sep</span>
                    </div>
                    <a className="news-item__link" href="single-post.html"></a>
                    <img
                      className="cover lazyload"
                      src="assets/img/image_08.jpg"
                      alt=""
                    />
                  </div>
                  <div className="news-item__caption">
                    <h3 className="title title--h3">Design Digest #80</h3>
                    <p>
                      Excepteur sint occaecat cupidatat no proident, quis
                      nostrum ullam...
                    </p>
                  </div>
                </article>

                <article className="news-item box">
                  <div className="news-item__image-wrap overlay overlay--45">
                    <div className="news-item__date">
                      13<span>Sep</span>
                    </div>
                    <a className="news-item__link" href="single-post.html"></a>
                    <img
                      className="cover lazyload"
                      src="assets/img/image_07.jpg"
                      alt=""
                    />
                  </div>
                  <div className="news-item__caption">
                    <h3 className="title title--h3">
                      UI Interactions of the week
                    </h3>
                    <p>
                      enim ad minim veniam, consectetur adipiscing elit, quis
                      nostrud nisi...
                    </p>
                  </div>
                </article>

                <article className="news-item box">
                  <div className="news-item__image-wrap overlay overlay--45">
                    <div className="news-item__date">
                      12<span>Sep</span>
                    </div>
                    <a className="news-item__link" href="single-post.html"></a>
                    <img
                      className="cover lazyload"
                      src="assets/img/image_05.jpg"
                      alt=""
                    />
                  </div>
                  <div className="news-item__caption">
                    <h3 className="title title--h3">
                      The Forgotten Art of Spacing
                    </h3>
                    <p>
                      maxime placeat, sed do eiusmod tempor incididunt ut
                      labore...
                    </p>
                  </div>
                </article>

                <article className="news-item box">
                  <div className="news-item__image-wrap overlay overlay--45">
                    <div className="news-item__date">
                      11<span>Sep</span>
                    </div>
                    <a className="news-item__link" href="single-post.html"></a>
                    <img
                      className="cover lazyload"
                      src="assets/img/image_01.jpg"
                      alt=""
                    />
                  </div>
                  <div className="news-item__caption">
                    <h3 className="title title--h3">Design Digest #79</h3>
                    <p>
                      Sed perspiciatis nam libero tempore, cum soluta nobis est
                      eligendi...
                    </p>
                  </div>
                </article>
              </div> */}
            </div>

            <div id="contact-tab" className="tabcontent">
              <div className="section mt-0">
                <h1 className="title title--h1 title__separate">Contact</h1>
              </div>

              {/* <div className="map section" id="map"></div> */}
              <h2 className="title title--h2">Contact Form</h2>

              <form
                id="contact-form"
                className="contact-form"
                data-toggle="validator">
                <div className="row">
                  <div className="form-group col-12 col-md-6">
                    <i className="fa-solid fa-user-tie"></i>
                    <input
                      type="text"
                      className="input input__icon form-control"
                      id="nameContact"
                      name="nameContact"
                      placeholder="Full name"
                      required="required"
                      //   autocomplete="on"
                      //   oninvalid="setCustomValidity('Fill in the field')"
                      //   onkeyup="setCustomValidity('')"
                    />
                    <div className="help-block with-errors"></div>
                  </div>
                  <div className="form-group col-12 col-md-6">
                    <i className="fa-solid fa-envelope"></i>
                    <input
                      type="email"
                      className="input input__icon form-control"
                      id="emailContact"
                      name="emailContact"
                      placeholder="Email address"
                      required="required"
                      //   autocomplete="on"
                      //   oninvalid="setCustomValidity('Email is incorrect')"
                      //   onkeyup="setCustomValidity('')"
                    />
                    <div className="help-block with-errors"></div>
                  </div>
                  <div className="form-group col-12 col-md-12">
                    <textarea
                      className="textarea form-control"
                      id="messageContact"
                      name="messageContact"
                      placeholder="Your Message"
                      rows="4"
                      required="required"
                      //   oninvalid="setCustomValidity('Fill in the field')"
                      //   onkeyup="setCustomValidity('')"
                    ></textarea>
                    <div className="help-block with-errors"></div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12 col-md-6 order-2 order-md-1 text-center text-md-left">
                    <div id="validator-contact" className="hidden"></div>
                  </div>
                  <div className="col-12 col-md-6 order-1 order-md-2 text-right">
                    <button type="submit" className="btn">
                      <i className="fa-solid fa-location-arrow"></i> Send
                      Message
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>

      <svg className="svg-defs">
        <clipPath id="avatar-box">
          <path d="M1.85379 38.4859C2.9221 18.6653 18.6653 2.92275 38.4858 1.85453 56.0986.905299 77.2792 0 94 0c16.721 0 37.901.905299 55.514 1.85453 19.821 1.06822 35.564 16.81077 36.632 36.63137C187.095 56.0922 188 77.267 188 94c0 16.733-.905 37.908-1.854 55.514-1.068 19.821-16.811 35.563-36.632 36.631C131.901 187.095 110.721 188 94 188c-16.7208 0-37.9014-.905-55.5142-1.855-19.8205-1.068-35.5637-16.81-36.63201-36.631C.904831 131.908 0 110.733 0 94c0-16.733.904831-37.9078 1.85379-55.5141z" />
        </clipPath>
        <clipPath id="avatar-hexagon">
          <path d="M0 27.2891c0-4.6662 2.4889-8.976 6.52491-11.2986L31.308 1.72845c3.98-2.290382 8.8697-2.305446 12.8637-.03963l25.234 14.31558C73.4807 18.3162 76 22.6478 76 27.3426V56.684c0 4.6805-2.5041 9.0013-6.5597 11.3186L44.4317 82.2915c-3.9869 2.278-8.8765 2.278-12.8634 0L6.55974 68.0026C2.50414 65.6853 0 61.3645 0 56.684V27.2891z" />
        </clipPath>
      </svg>

      <div className="btnSlideNav slideOpen"></div>
      <div className="btnSlideNav slideClose"></div>
      <ul className="slideNav">
        <li className="slideNav__item rtl-mode">
          <h4 className="title title--5">More pages</h4>{" "}
          <a href="full-rtl/about.html">RTL</a>
        </li>
        <li className="slideNav__item">
          <a href="one-page.html">1. Single page</a>
        </li>
        <li className="slideNav__item">
          <a href="background-2.html">2. Background 2</a>
        </li>
        <li className="slideNav__item">
          <a href="background-3.html">3. Background 3</a>
        </li>
        <li className="slideNav__item">
          <a href="background-4.html">4. Background 4</a>
        </li>
        <li className="slideNav__item">
          <a href="background-5.html">5. Background 5</a>
        </li>
        <li className="slideNav__item">
          <a href="background-6.html">6. Background 6</a>
        </li>
      </ul>
      <div className="overlay-slideNav"></div>
    </>
  );
};

export default Home;
