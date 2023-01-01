<template>
    
    <main data-scroll-container class="main">
      <header data-scroll-section class="page-header">
                  <div class="page-header-container" data-cursor="-hidden">
                      <nav class="nav-bar">
                          <div class="logo">
                              <div class="logo-image-container">
                                <a href="https://stanceray.com/" class="top-page-logo lg">raymond</a>
                              </div>
                          </div>
                          <div class="page-header-links">
                              <ul>
                                  <li class="menu-links-items"><a  data-scroll-to class="menu-links-items-a" href="#about-section-id">about</a></li>
                                  <li class="menu-links-items"><a data-scroll-to  class="menu-links-items-a" href="#projects-section-id">projects</a></li>
                                  <li class="menu-links-items"><a  data-scroll-to class="menu-links-items-a" href="#contact-section-id">contact</a></li>
                                  <li class="menu-links-items"><a target="_blank" href="https://stanceray.com/stancillous.pdf" id="page-header-resume">resume</a></li>
                                  <div class="nav-mail-div">
                                        <p>Get in touch</p>
                                        <a id="nav-mail" href="mailto:stancillousray@gmail.com">stancillousray@gmail.com</a>
                                   </div>
                                    <div class="social-links-container">
                                        <div class="social-links-a-div">
                                            <a target="_blank" href="https://github.com/stancillous">github</a>
                                            <a target="_blank" href="https://www.linkedin.com/in/stancillous/">linkedin</a>
                                            <a target="_blank" href="https://t.me/Stancillous">telegram</a>
                                            <a target="_blank" href="https://www.instagram.com/stancillous/">instagram</a>
                                        </div>
                                    </div>
                                </ul>
                          </div>
                      </nav>
                  </div>
                

                  <div class="box">
                    <div class="btn not-active">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
      </header>
      <div class="social-links">
          <div class="social-links-container">
              <a id="linkedinSocialLink" class="social-links-icons" target="_blank" href="https://www.linkedin.com/in/stancillous/">
                <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-linkedin"><title>LinkedIn</title><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
            <a id="githubSocialLink" class="social-links-icons" target="_blank" href="https://github.com/stancillous">
                  <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-github"><title>GitHub</title><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                  </svg>      
              </a>
              <a id="instagramSocialLink" class="social-links-icons" target="_blank" href="https://www.instagram.com/stancillous/">
                <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-instagram"><title>Instagram</title><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a id="telegramSocialLink" class="social-links-icons" target="_blank" href="https://t.me/Stancillous">
                <img src="./assets/tg.svg" alt="">
              </a>
              <div class="line"></div>
          </div>
      </div>
      <div class="navigate-div">
        <div class="navigate-buttons">
            <div class="nav-buttons-div "><a data-scroll-to class="a" href="#top-page-section-id"></a></div>
            <div class="nav-buttons-div"><a data-scroll-to class="a" href="#about-section-id"></a></div>
            <div class="nav-buttons-div"><a data-scroll-to class="a" href="#projects-section-id"></a></div>
            <div class="nav-buttons-div"><a data-scroll-to class="a" href="#send-message-section-id"></a></div>
            <div class="nav-buttons-div"><a data-scroll-to class="a" href="#contact-section-id"></a></div>
            <div class="right-line"></div>
        </div>
      </div>
      <topSectionComp/>
      <aboutComp/>
      <projectsComp/>
      <contactComp/>
      <bottomSectionComp/>
    </main>
</template>
    
    <script>
      import topSectionComp from './components/topsection.vue'
      import aboutComp from './components/about.vue'
      import projectsComp from './components/projects.vue'
      import bottomSectionComp from './components/bottomsection.vue'
      import contactComp from './components/contact.vue'
    
    export default {
      name: 'App',
      components: {
        topSectionComp,
        aboutComp,
        projectsComp,
        contactComp,
        bottomSectionComp,
    
      }
    }
    </script>
    
    <style lang="scss">
    
    
    @import url('../cursor/utils.css');
    @import url('../cursor/cursor.css');
    
    
    
    
    $web-color:#000000;
    $web-color2:#00ff998f;
    $about-and-contact-color:#2007c2;
    $body-color:rgb(202, 216, 248);
    
    $web-font1:"Satoshi", sans-serif;
    $web-font2:"General Sans", sans-serif;
    $web-font3:'Alpino', sans-serif;
    
    // font weights
    
    $light:300;
    $regular:400;
    $medium:500;
    $bold:700;
    $black:900;
    
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    
    html{
        font-size: 10px;
        scroll-behavior: smooth;
        
    }
    
    body{
        font-family: $web-font1,$web-font2,$web-font3;
        font-family:$web-font2,$web-font3;
        // font-family: $web-font2;
        background-color: $body-color;
        overflow-x: hidden;
        min-height: 100vh;
    }
    
 
    .box {
  position: absolute;
  z-index: 4343;
    right: 5%;
    top: 4.8rem;
    right: 5%;
    display: none;
  transform: translate(-50%, -50%);
}

    .btn {
        cursor: pointer;
    }

span {
  display: block;
  width: 3rem;
  box-shadow: 0 2px 10px 0 rgba(0,0,0,0.3);
  border-radius: 3px;
  height: .3rem;
  margin: .2rem 0;
  background: rgba(0, 0, 0, 0.693);
  transition: all .3s;
  position: relative;
}

.active span:nth-child(1) {
  animation: ease .7s top forwards;
}

.not-active span:nth-child(1) {
  animation: ease .7s top-2 forwards;
}

.active span:nth-child(2) {
  animation: ease .7s scaled forwards;
}

.not-active span:nth-child(2) {
  animation: ease .7s scaled-2 forwards;
}

.active span:nth-child(3) {
  animation: ease .7s bottom forwards;
}

.not-active span:nth-child(3) {
  animation: ease .7s bottom-2 forwards;
}

@keyframes top {
  0% {
    top: 0;
    transform:rotate(0);
}
50% {
    top: 22px;
    transform: rotate(0);
}
100% {
    top: 22px;
    transform: translateY(-1.2rem) rotate(45deg);
  }
}

@keyframes top-2 {
  0% {
    // top: 22px;
    top: 12px;
    transform: rotate(4deg);
  }
  50% {
    top: 12px;
    transform: rotate(0deg);
  }
  100% {
    top: 0;
    transform: rotate(0deg);
  }
}

@keyframes bottom {
  0% {
    bottom: 0;
    // transform: rotate(0);
    transform: translateY(2.2rem) rotate(0);

  }
  50% {
    bottom: 12px;
    transform: rotate(0);
  }
  100% {
    bottom: 22px;
    transform: translateY(2.2rem) rotate(135deg);
  }
}

@keyframes bottom-2 {
  0% {
    bottom: 22px;
    transform: rotate(135deg);
    transform: translateY(2.2rem) rotate(0);

  }
  50% {
    bottom: 22px;
    transform: rotate(0);
  }
  100% {
    bottom: 0;
    transform: rotate(0);
  }
}

@keyframes scaled {
  50% {
    transform: scale(0);
  }
  100% {
    transform: scale(0);
  }
}

@keyframes scaled-2 {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
}


    
    
    .main{
        margin: 0 auto;
        opacity: 0;
        // THE DIV WITH THE ICONS ON THE LEFT SIDE OF THE PAGE 
        .social-links{
            position: fixed;
            height: 100%;
            bottom: 2%;
            left: 2%;
            bottom: 0;
            z-index: 23;
            .social-links-container{
                // z-index: 4444;
                height: 100%;
                display: flex;
                // border: 2px solid red;
                flex-direction: column;
                justify-content: flex-end;
                align-items: flex-end;
                align-items: center;
                a{
                    color: black;
                    svg,img{
                        width: 2rem;
                        margin: 1rem 0;
                        filter: drop-shadow(1px 1px 0px rgb(202, 216, 248));
                        opacity: .7;
                    }
                }
                //THE LINE ON THE LEFT SIDE OF THE PAGE
                .line{
                    height: 11rem;
                    width: .1rem;
                    background-color: lightgrey;
                    background-color: #44544d;
                }
            }
        }
        // THE DIV ON THE RIGHT PAGE USED FOR NAVIGATING TO DIFF SECTIONS
        .navigate-div{
            position: fixed;
            right: 3%;
            bottom: 0;
            height: 100vh;
            z-index: 43;
            .navigate-buttons{
                height: 100%;
                display: flex;
                flex-direction: column;
                justify-content: flex-end;
                align-items: flex-end;
                align-items: center;
                .nav-buttons-div{
                    height: .9rem;
                    width: .9rem;
                    background-color: rgb(0, 0, 0);
                    transform: rotate(45deg);
                    border: 1px solid black;
                    background-color: $body-color;
                    margin: 1rem 0;
                    opacity: .6;
                    padding: .1rem;
                    a{
                        padding: 0 2rem;
                        margin-left: -2rem;
                    }
                }
                //THE LINE ON THE LEFT SIDE OF THE PAGE
                .right-line{
                    height: 11rem;
                    width: .1rem;
                    background-color: lightgrey;
                    background-color: #44544d;
                }
            }
        }
    }
    
    //HEADER
    .page-header{
        position: absolute;
        width: 100%;
        height: 15vh;
        z-index: 323;
        top: 0;
        left: 0;
        transition: all .5s ease-in-out;
        .page-header-container{
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            position: relative;
            .nav-bar{
                width: 93%;
                height: 100%;
                display: flex;
                align-items: center;
                justify-content: flex-end;
                //LOGO
                .logo{
                    position: absolute;
                    left: 2%;
                    top: 30%;
                    .logo-image-container{
                        .top-page-logo{
                            text-decoration: none;
                            color: black;
                            opacity: .6;
                            font-weight: $black;
                            font-family: $web-font2,$web-font1,$web-font3;
                            font-size: 2.4rem;
                        }
  
                    }
                }
                //MENU LINKS
                .page-header-links{
                    display: flex;
                    align-items: center;
                    ul li{
                        list-style: none;
                        display: inline-block;
                        // list-style: lower-roman;
                        // color: rgb(255, 255, 255);
                        .menu-links-items-a{
                            font-size: 1.4rem;
                            color: black;
                            opacity: .7;
                            font-weight: $bold;
                            text-decoration: none;
                            padding: 0 1rem;
                            text-transform: lowercase;
                            position: relative;
                            &:hover::after{
                                content: "";
                                width: 40%;
                                min-width: .85rem;
                                height: 100%;
                                top: 0;
                                left: 2%;
                                position: absolute;
                                pointer-events: none;
                                background-color: rgba(0, 0, 255,.3);
                            }
                    
                        }
                        #page-header-resume{
                            text-transform: uppercase;
                            font-weight: $bold;
                            text-transform: lowercase;
                            font-size: 1.4rem;
                            color: black;
                            border: 1px solid black;
                            padding: .8rem 1.3rem;
                            text-decoration: none;
                        }
                    }
                    //DIV TO BE SHOWN ON SMALL SCREENS WITH THE GET IN TOUCH MESSAGE AND EMAIL
                    .nav-mail-div{
                        margin-top: 2rem;
                        display:none;
                        p{
                            font-size: 1.4rem;
                            color: rgb(0, 0, 0);
                            color: rgb(0, 0, 255);
                            opacity: .8;
                            font-weight: $medium;
                            font-weight: 500;
                            padding-bottom: .8rem;
                        }
                        a{
                            color: rgb(0, 0, 0);
                            // opacity: .9;
                            font-size: 1.3rem;

                            font-weight:600;
                            text-decoration: none;
                            position: relative;
                            &::after{
                                content: '';
                                display: block;
                                height: .1rem;
                                position: absolute;
                                left: 0;
                                background-color: rgba(0, 0, 255, 0.334);
                                bottom: -5%;
                                right: 0;
                            }
                        }
                    }
                    //DIV WITH THE SOCIAL LINKS
                    .social-links-container{
                        // border: 1px solid red;
                        width: 60vw;
                        display: none;
                        .social-links-a-div{
                            display: grid;
                            grid-template-columns: 1fr 1fr;
                            grid-gap:1rem;
                            grid-row-gap: 3rem;
                            a{
                                color: rgb(0, 0, 0);
                                font-size: 1.2rem;
                                color: rgba(0, 0, 255, 0.657);
                                font-weight: $bold;
                                // font-weight: $medium;
                                text-transform: uppercase;
                                position: relative;
                            }
                        }
                    }
                }
            }
        }
    }

    .top-page-section{
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    //DIV WITH THE TOP SECTION CONTENT
    .top-page-content{
         height: 100%;
        width: 90%;
        display: flex;
        align-items: center;
        justify-content: center;
        // border: 1px solid red;
        .top-page-content-container{
            padding: .5rem;
            padding: 1rem 2rem;
            .greeting{
                // border: 1px solid black;
                h1{
                    font-size: 1.4rem;
                    // opacity: .5;
                    font-weight: $black;
                    letter-spacing: .1rem;
                    color: black;
                    opacity: .7;
                    // border: 1px solid;
                    padding: 0 0 0 .8rem;
                }
            }
            //NAME
            .name{
                // border: 1px solid black;
                margin-top: .2rem;
                h1{
                    // white-space: nowrap;
                    font-weight: $black;
                    font-size: 6.7rem;
                    text-transform: capitalize;
                    color: black;
                    opacity: .8;
                }
            }
            //PROFESSTION
            .profession{
                // border: 1px solid black;
                margin-top: .2rem;
                h1{
                    font-size: 5.3rem;
                    opacity: .6;
                    font-weight: $bold;
                    font-weight: $black;
                    color: black;
                    // font-weight: $medium;
                }
            }
            //INFO
            .info{
                // border: 1px solid black;
                margin-top: .2rem;
                p{
                    font-size: 1.6rem;
                    font-weight: $bold;
                    padding: 1rem 0;
                    opacity: .7;
                    color: black;
                }
            }
        }
    }
    }

    // ABOUT ME SECTION
    .about-me-section{
        background-color: $about-and-contact-color;
        padding: 10rem 0;
        // background-color: $body-color;
        .about-me-section-header-and-info{
            max-width: 1000px;
            padding: 2rem 6rem;
            margin: 0 auto;
            //THE TITLE
            .about-me-header{
                // border: 1px solid white;
                display: flex;
                align-items: center;
                padding:0 1rem;
                justify-content: center;
                justify-content: flex-start;
                .about-me-title{
                    font-size: 1.8rem;
                    font-weight:600;
                    color: white;
                    opacity: .8;
                    text-transform: capitalize;
                }
                //THE LINES BEFORE AND AFTER THE ABOUT HEADER
                .about-section-line{
                    height: .1rem;
                    width: 30%;
                    background-color: rgb(15, 15, 221);
                    background-color: rgba(185, 185, 201,.3);
                    // background-color: #AADCEC;
                    margin: 0 1.2rem;
                }
            }
            //THE DIV WITH ABOUT ME TEXT AND IMAGE
            .about-me-flex-container{
                // border: 2px solid green;
                display: flex;
                // height: 100%;
                width: 100%;
                align-items: center;
                justify-content: center;
                .about-me-container{
                    // border: 1px solid lightblue;
                    // padding: 2rem 0;
                    width: 100%;
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    .about-me-info{
                        // border: 2px solid white;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        .about-me-info-paragraph{
                            padding: 1rem;
                            p{
                                // letter-spacing: .1rem;
                                padding: 1rem 0;
                                color: white;
                                font-size: 1.5rem;
                                opacity: .9;
                                font-weight: $regular;
                                line-height: 152%;
                            }
                            #education{
                                margin-bottom: 3rem;
                                margin-top: 2rem;
                            }
                            ul{
                                // border: 2px solid;
                                // margin-bottom: 3rem;
                                display: grid;
                                grid-template-columns: 1fr 1fr 1fr;
                                li{
                                    list-style-type: none;
                                    font-size: 1.4rem;
                                    font-weight: $regular;
                                    color: white;
                                    padding: .4rem ;
                                    opacity: .7;
                                    &::before{
                                        content: "\2023";  /* Add content: \2022 is the CSS Code/unicode for a bullet */
                                        color: rgb(185, 172, 172); /* Change the color */
                                        font-weight: lighter; /* If you want it to be bold */
                                        display: inline-block; /* Needed to add space between the bullet and the text */
                                        width: .7rem; /* Also needed for space (tweak if needed) */
                                        margin-left: -1em; /* Also needed for space (tweak if needed) */
                                    }
                                }
                            }
                            //THE BUTTON TO DOWNLOAD MY RESUME
                            .resume-button-container{
                              margin-top:2rem;
                               button{
                                text-align: center;
                                color: rgba(255, 255, 255, 0.881);
                                font-weight: $medium;
                                font-size: 1.2rem;
                                padding: 1rem 2rem;
                                width: 19rem;
                                background-color: transparent;
                                border: 1px solid rgba(255, 255, 255, 0.581);
                                text-transform: uppercase;
                                cursor: pointer;
                                position: relative;
                                a{
                                    text-decoration: none;
                                    color: white;
                                    font-weight: $medium;
                                    &:active{
                                      color:white;
                                    }
                                    &:visited{
                                      color:white;
                                    }
                                }
                                #animatingResumeButton{
                                    position: absolute;
                                    top: 0;
                                    left: 0;
                                    height: 100%;
                                    width: 100%;
                                    background-color: rgb(255, 255, 255);
                                    z-index: -1;
                                    clip-path: inset(0 100% 0 0);
                                }
                            }
                            }
                        }
                    }
                    .about-me-image{
                        // border: 2px solid blue;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        .image-container{
                            height: 27rem;
                            width:27rem;
                            // border: 1px solid rgb(196, 190, 190);
                            // background-color: red;
                            .image{
                                height: 30rem;
                                width:30rem;
                                position:relative;
                                //the line behind the image
                                .img-b-line{
                                    height: 100%;
                                    width: 100%;
                                    border:.2rem dotted rgb(174, 164, 164);
                                }
                                #amimg{
                                    object-fit: cover;
                                    height: 100%;
                                    width: 100%;
                                    position: absolute;
                                    bottom: 1.5rem;
                                    right: 1.5rem;
                                }

                            }
                        }
                    }
                }
            }
        }
    }
    //PROJECTS SECTION
    .projects-section{
        height: 100vh,auto;
        background-color: rgb(7, 6, 65);
        // background-color: blue
        color: white;
        padding: 8rem 0;
        .projects-section-container{
            height: 100%;
            // width: 80%;
            max-width: 1200px;
            padding: 0 2rem;
            margin: 0 auto;
            //DIV WITH THE TITLE
            .projects-section-header{
                display: flex;
                align-items: center;
                justify-content: flex-start;
                padding: 2rem;
                //PROJECTS TITLE
                .projects-title{
                    font-weight: 600;
                    opacity: .9;
                    font-size: 1.8rem;
                    text-transform: capitalize;
                }
                //THE LINE NEXT TO THER PROJECTS TITLE
                .projects-section-line{
                    height: .004rem;
                    width: 30%;
                    background-color:  rgba(6, 11, 132, 0.5);
                    // background-color: #AADCEC;
                    margin: 0 1.2rem;
                }
            }
            .projects-section-details{
                display: grid;
                // grid-template-columns: 1fr 1fr 1fr;
                grid-template-columns: repeat(auto-fill, minmax(30rem, 1fr));
                margin: 0 2rem;
                .project-info{
                    margin: 1rem;
                    border-radius: .2rem;
                    padding:  6.5rem 2rem;
                    padding-top: 1rem;
                    position: relative;
                    background-color: transparent;
                    background-color: rgb(5, 5, 75);
                    // border: .03rem solid rgb(3, 27, 106);
                    //THE DIV WITH THE ICONS    
                    .project-section-icons-container{
                        // border: 1px solid;
                        padding: 1rem .5rem;
                        display: flex;
                        align-items: center;
                        justify-content: space-between;
                        margin-bottom: 2rem;
                        color: white;
                        a{
                            color: white;
                            svg{
                                width: 2rem;
                            }
                        }
                        //GIVING PADDING RIGHT TO THE COODE ICON
                        .code{
                            padding-right: 1.8rem;
                        }
                    }
                    h1{
                        font-size: 1.5rem;
                        opacity: .6;
                        padding-bottom: 1rem;
                        text-transform: capitalize;
                        font-weight: 600;
                    }
                    p{
                        font-weight: $regular;
                        font-size: 1.5rem;
                        padding: 1rem 0;
                        padding-bottom: 2rem;
                        opacity: .7;
                        letter-spacing: .02rem;
                        padding-bottom: 2rem;
                    }
                    //the div with the tech used 
                    .tech-used-container{
                        width: 100%;
                        // height: 2rem;
                        margin-top: 2rem;
                        position: absolute;
                        bottom: 0;
                        display: flex;
                        margin-bottom: .5rem;
                        .tech-used{
                            padding-right:.8rem;
                            font-size: 1.1rem;
                            opacity: .6;
                            font-weight: $light;
                        }
                    }
                }
            }
        }
    }

    //SEND ME A MESSAGE SECTION
    .send-message-section{
        background-color:$body-color;
        padding: 20rem 0;
        .send-message-container{
            max-width: 680px;
            // border: 2px solid ;
            padding: 2rem 8rem;
            margin: 0 auto;
            h1{
                font-size: 2.2rem;
                padding: 1rem 0;
                text-align: center;
                color: black;
                opacity: .8;
            }
            p{
                font-weight: $medium;
                font-size: 1.5rem;
                text-align: center;
                padding-bottom: 1rem;
                color: black;
            }
            .send-message-container-details{
                #form{
                    .name-email-container{
                        display: flex;
                        // border: 2px solid;
                        margin-top: 3rem; 
                        justify-content: space-between;
                    }
                    //STYLING THE INPUT AND TEXTAREA
                    textarea,input{
                        border: none;
                        background-color: transparent;
                        font-weight: $bold;
                        font-size: 1.3rem;
                        color: black;
                        font-family: $web-font1,$web-font2;
                        padding: .8rem ;
                        border-bottom: 1px solid #000;
                        text-transform: none;
                        //STYLING THE PLACEHOLDER
                        &::placeholder{
                            color: black;
                            opacity: .8;
                            font-size: 1.2rem;
                            font-weight: $regular;
                            text-transform: uppercase;
                        }
                        &:focus{
                            outline: none;
                            transform: translateY(-.5rem);
                            border-bottom: 2px solid $body-color;
                        }
                    }
                    input{
                        width:45%;
                    }
                    textarea{
                        width: 100%;
                        padding: .2rem;
                    }
                    .button-container{
                        // border: 2px solid red;
                        margin-top: 2rem;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                    }
                    button{
                        // margin-top: 3rem;
                        text-align: center;
                        color: black;
                        font-weight: $medium;
                        font-size: 1.4rem;
                        padding: .8rem 2rem;
                        width: 19rem;
                        background-color: transparent;
                        border: 1px solid black;
                        text-transform: uppercase;
                        cursor: pointer;
                        position: relative;
                        z-index: 22;
                        // color: white;
                        #animatingSubmitButton{
                            position: absolute;
                            top: 0;
                            left: 0;
                            height: 100%;
                            width: 100%;
                            // z-index: 21;
                            background-color: black;
                            z-index: -1;
                            clip-path: inset(0 100% 0 0);
                            // transition: all .1s ease-in-out;
                        }
                    }
                }
            }
        }
    }

    //CONTACT SECTION
    .contact-section{
        background-color: $about-and-contact-color;
        padding: 20rem 0;
        color: white;
        position: relative;
        .contact-section-container{
            max-width: 800px;
            margin: 0 auto;
            display: grid;
            grid-template-columns: 1fr;
            .contact-me{
                padding: 5rem;
                padding-bottom: 10rem;
                h1{
                    font-weight: $regular;
                    font-weight: $medium;
                    font-size: 4.4rem;
                    opacity: .9;
                }
                a{
                    font-size: 3.4rem;
                    font-weight: $regular;
                    font-weight: $medium;
                    text-decoration: none;
                    position: relative;
                    color:white;
                    &::after{
                        content: '';
                        display: block;
                        height: .1rem;
                        position: absolute;
                        left: 0;
                        background-color: lightgrey;
                        bottom: -5%;
                        right: 0;
                    }
                }
            }
            .contact-section-email-and-links{
                // border: 2px solid rgb(255, 255, 255);
                padding: 5rem;
                display: grid;
                grid-template-columns: 1fr 1fr;
                .contact-section-email{
                    // border: 1px solid green;
                    //THE EMAIL ADDRESS
                    a{
                        font-size: 1.7rem;
                        font-weight: $medium;
                        text-decoration: none;
                        position: relative;
                        opacity: .9;
                        color:white;
                        &::after{
                            content: '';
                            display: block;
                            height: .1rem;
                            position: absolute;
                            background-color: rgba(211, 211, 211, 0.481);
                            left: 0;
                            bottom: -2%;
                            right: 0;
                        }
                    }
                }
                .contact-section-links{
                    height: 50%;
                    text-align: center;
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    // border: 2px solid red;
                    row-gap: 3rem;
                    a{
                        font-weight: $regular;
                        font-size: 1.8rem;
                        text-decoration: none;
                        color:white;
                    }
                }
            }
        }
    }
    
    // CLASSES TO BE TOGGLED ARE HERE
    
  
    
    //CLASS TO BE TOGGLED TO THE ACTIVE SECTION NAV
    .main .navigate-div .navigate-buttons .nav-buttons-div.active-div {
        background-color: $body-color;
        transform: rotate(-180deg) scale(2);
        border-radius: unset;
    
    }
    
    body.hideOverflow{  //disabling scrolling when the h. button is clicked
        overflow: hidden;
        height: 100vh;
    
    }
    
    //TOGGLE THIS CLASS TO SHOW THE MENU LINKS
    .page-header .page-header-container .nav-bar .page-header-links.show-links{
        // clip-path: inset(0 0 0 0);
        visibility: visible;
         opacity: 1;
    
    }
    
    
    //THE IMAGE IN ABOUT SECTION REDUCED AT 922PX, 550PX AND 400PX MEDIA QUERIES
    @media screen  and (max-width:2400px){
        .send-message-section{
            height: 100vh;
            padding: unset;
            display: grid;
            place-items: center;
        }
    
        .contact-section{
            padding: unset;
            height: 100vh;
            display: grid;
            place-items: center;
        }   
    }
    
    @media screen and (max-width:922px) {
        .top-page-section .top-page-content .top-page-content-container{
            .name h1{
                font-size: 5.8rem;
            }
            .profession h1{
                font-size: 4.4rem;
            }
        }
    
        //REDUCING SIZE OF IMAGE IN ABOUT SECTION
        .about-me-section .about-me-section-header-and-info .about-me-flex-container .about-me-container .about-me-image .image-container{
            height: 25rem;
            width: 25rem;
            .image{
                height: 25rem;
                max-width: 25rem;
            }
       
        }
    }
    
    
    @media screen and (max-width:840px) {
        .top-page-section .top-page-content .top-page-content-container{
            .name h1{
                font-size: 5.4rem;
            }
            .profession h1{
                font-size: 4rem;
            }
            .info p{
                font-size: 1.5rem;
                br{content:' ';}
                br:after{content:' ';}
            }
        }
    
    
        .about-me-section .about-me-section-header-and-info .about-me-flex-container .about-me-container{
            grid-template-columns: 1fr;
            
            .about-me-info {
                padding-bottom: 10rem;
            }
        }
    }
    
    //SHOWING THE HAMBURGER BUTTON
    @media screen and (max-width:690px) {
        .main{
            .social-links, .navigate-div{  //HIDE THE SOCIAL LINKS
                display: none;
            }
        }
    
        //showing the button
        .box{
            display: block;
        }
    
        //PAGE HEADER
        .page-header{
            .page-header-container{
    
                .nav-bar{
    
                    .logo{
                        left: 5%;
                        // background-color: red;
                    }
    
                    .page-header-links{
                        position: fixed;
                        top: 0;
                        left: 0;
                        bottom: 0;
                        // right: -100vw;
                        height: 100vh;
                        width: 100vw;
                        opacity: 0;
                        visibility: hidden;
                    
                        background-color:white;
                
                        // transition: all .3s cubic-bezier(0,-0.02, 0.18, 0.65);
                        transition: all .4s cubic-bezier(0.33, 1, 0.68, 1);
                    
                        ul{
                            width: 50%;
                            width: 80%;
                            // border: 2px solid rgb(0, 0, 0);
                            height: 80%;
                            margin-left: 5rem;
                            display: flex;
                            // align-items: center;
                            flex-direction: column;
                            justify-content: space-evenly;
    
                            li {
                                .menu-links-items-a{
                                    
                                    font-size: 1.4rem;
                                    font-weight: $bold;
                                    font-size: 1.5rem;
                                    color: rgb(0, 0, 0);
    
                                    &::after{
                                        content: "";
                                        width: 20%;
                                        min-width: .85rem;
                                        height: 100%;
                                        top: 0;
                                        left: 2%;
                                        position: absolute;
                                        pointer-events: none;
                                        background-color: rgba(0, 0, 255, 0.374);
                                        
                                    }
    
                                }
         
                                #page-header-resume{
                                    font-size: 1.4rem;
                                    font-weight: $bold;
                                    opacity: .7;
                                    border: none;
                                    text-transform: lowercase;
                                    color: rgb(0, 0, 0);

                                    &::after{
                                        content: "";
                                        width: 1.5rem;
                                        min-width: .85rem;
                                        height: 100%;
                                        top: 0;
                                        left: 1%;
                                        position: absolute;
                                        pointer-events: none;
                                        background-color: rgba(0, 0, 255, 0.374);
                                        
                                    }
                                }
                            } 
                        }
    
                        //HIDING THE LINE ON THE RIGHT SIDE OF THE LINKS
                        #line{
                            display: none;
                        }
                        .nav-mail-div{
                            display: block;
                        }
    
                        .social-links-container{
                            display: block;
                        }
                    }
    
                }
            }
        }
    
        .top-page-section .top-page-content{
            width: 98%;
    
            .top-page-content-container{
                .name h1{
                    font-size: 4.8rem;
                }
                .profession h1{
                    font-size: 3.8rem;
                }
                
            }
        }
    
        .send-message-section .send-message-container{
            padding: 4rem;
        }
    
        .about-me-section{
            z-index: 99999;
    
            .about-me-section-header-and-info{
            padding: unset;
            padding: 2rem;
    
            }
            
        } 
    
        .contact-section .contact-section-container {
            .contact-me{
                padding: 3rem;
                h1{
                    font-size: 3.3rem;
                }
                a{
                    font-size: 2.6rem;
                }
            }
    
            .contact-section-email-and-links{
                padding: 3rem;
            }
    
        }
    
    }
    
    @media screen and (max-width:550px) {
        
        .top-page-section .top-page-content{
            width: 100%;
    
            .top-page-content-container{
                .greeting h1{
                    margin-left: -.5rem;
                    font-size: 1.3rem;
                }
                .name h1{
                    font-size: 4rem;
                }
                .profession h1{
                    font-size: 3rem;
                }
      
                
            }
        }
        //REDUCING SIZE OF IMAGE IN ABOUT SECTION
        .about-me-section .about-me-section-header-and-info .about-me-flex-container .about-me-container{

        .about-me-info{
            .about-me-info-paragraph{
                p{
                    font-size: 1.4rem;
                    font-weight:$medium;
                }

                ul li{
                    font-size: 1.3rem;

                }
            }
        }
        .about-me-image .image-container{
            height: 24rem;
            width: 24rem;
    
        .image{
            height: 24rem;
            max-width: 24rem;
        }
        }
    
        }

        .projects-section .projects-section-container{
            .projects-section-header{
                .projects-title{
                    font-size: 1.9rem;
    
                }
    
    
            }
            .projects-section-details{
                .project-info{
                    padding: 4rem 2rem;
                    p{
                        font-size: 1.4rem;
                        font-weight:$medium;

                    }
                }
            }
        }
    
        .send-message-section .send-message-container{
            h1{
                font-size: 1.8rem;
            }
            p{
                font-size: 1.3rem;
            }
            .send-message-container-details #form .name-email-container{
            flex-direction: column;
    
            input{
                width: 100%;
            }
        }

        } 
    
        .contact-section .contact-section-container .contact-section-email-and-links{
            grid-template-columns: 1fr;
            text-align: left;
    
            .contact-section-email{
                padding-bottom: 5rem;
            }
            .contact-section-links{
                text-align: left;
    
            }
        }
    
    
    }
    
    @media screen and (max-width:480px) {
        .top-page-section .top-page-content .top-page-content-container{
            .greeting h1{
                font-size: 1.3rem;
            }
            .name h1{
                font-size: 3rem;
            }
            .profession h1{
                font-size: 2.7rem;
            }
            .info p{
                font-size: 1.4rem;
            }
        }
    
        .about-me-section .about-me-section-header-and-info{
            
            .about-me-header .about-me-title{
                font-size: 1.9rem;
            }
  
    
        } 
    

    
        .send-message-section .send-message-container {

            p{
                br{content:' ';}
                br:after{content:' ';}
            }
        }
    
        .contact-section .contact-section-container{
            .contact-me{
                h1{
                    font-size: 2.5rem;
                    padding-bottom: 1rem;
                }
                a{
                    font-size: 2.2rem;
                }
            }
    
            .contact-section-email-and-links{
                .contact-section-email{
                    a{
                        font-size: 1.5rem;
                    }
                }
                .contact-section-links{
                    a{
                        font-size: 1.4rem;
                        font-weight: $regular;
                    }
                }
            }
        }
    }
    
    @media screen and (max-width:400px){
        //REDUCING SIZE OF IMAGE IN ABOUT SECTION
        .about-me-section .about-me-section-header-and-info .about-me-flex-container .about-me-container .about-me-image .image-container{
            height: 22rem;
            width: 22rem;
    
            .image{
                height: 22rem;
                max-width: 22rem;
            }
    
        }
    }
    
    
    
    
    </style>
    
    
