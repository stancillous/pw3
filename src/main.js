
import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')

import gsap from "gsap";
import MouseFollower from "mouse-follower";
import LocomotiveScroll from 'locomotive-scroll';


//SELECTING THE FORM ELEMENT AND CLEARING INFO AFTER USER SENDS INFO VIA THE FORM
window.onbeforeunload = () => {
    for(const form of document.getElementsByTagName('form')) {
      form.reset();
    }
}


//FUNCTION FOR THE MOUSE FOLLOWER
function cursorAnimation(){
    MouseFollower.registerGSAP(gsap);

    const cursor = new MouseFollower({
        el: null,
        opacity:.4,
        container: document.body,
        className: 'mf-cursor',
        innerClassName: 'mf-cursor-inner',
        textClassName: 'mf-cursor-text',
        mediaClassName: 'mf-cursor-media',
        mediaBoxClassName: 'mf-cursor-media-box',
        iconSvgClassName: 'mf-svgsprite',
        iconSvgNamePrefix: '-',
        iconSvgSrc: '',
        dataAttr: 'cursor',
        hiddenState: '-hidden',
        textState: '-text',
        iconState: '-icon',
        activeState: '-active',
        mediaState: '-media',
        stateDetection: {
            '-pointer': 'a,button',
            '-hidden': 'iframe'
        },
        visible: true,
        visibleOnState: false,
        speed: 0.55,
        ease: 'expo.out',
        overwrite: true,
        skewing: 2,
        skewingText: 2,
        skewingIcon: 2,
        skewingMedia: 2,
        skewingDelta: 0.001,
        skewingDeltaMax: 0.15,
        stickDelta: 0.15,
        showTimeout: 20,
        hideOnLeave: true,
        hideTimeout: 300,
        hideMediaTimeout: 300
    });

    //HIDING THE CURSOR FOLLOWER WHEN ON INPUTS
    const inputAndTextarea = document.querySelectorAll('.sendMessageSectionInputs');

    inputAndTextarea.forEach((item)=>{
        
        item.addEventListener('mouseenter', () => {
            cursor.hide();
        });
        
        item.addEventListener('mouseleave', () => {
            cursor.show();
        });

    })


     //SETTING TEXT TO THE SOCIAL MEDIA ICONS FIXED ON THE PAGE
     document.querySelector('#linkedinSocialLink').addEventListener('mouseenter',()=>{
        cursor.setText('linkedin')
    })
    document.querySelector('#linkedinSocialLink').addEventListener('mouseleave',()=>{
        cursor.removeText('linkedin')
    })

    //SETTING TEXT TO THE SOCIAL MEDIA ICONS FIXED ON THE PAGE
    document.querySelector('#githubSocialLink').addEventListener('mouseenter',()=>{
        cursor.setText('github')
    })
    document.querySelector('#githubSocialLink').addEventListener('mouseleave',()=>{
        cursor.removeText('github')
    })


    //SETTING TEXT TO THE SOCIAL MEDIA ICONS FIXED ON THE PAGE
    document.querySelector('#instagramSocialLink').addEventListener('mouseenter',()=>{
        cursor.setText('instagram')
    })
    document.querySelector('#instagramSocialLink').addEventListener('mouseleave',()=>{
        cursor.removeText('instagram')
    })


    //SETTING TEXT TO THE SOCIAL MEDIA ICONS FIXED ON THE PAGE
    document.querySelector('#telegramSocialLink').addEventListener('mouseenter',()=>{
        cursor.setText('telegram')
    })
    document.querySelector('#telegramSocialLink').addEventListener('mouseleave',()=>{
        cursor.removeText('telegram')
    })





    //SELECTING THE a TAGS IN THE CONTACT SECTION
    const ContactSectionLinkedin  = document.querySelector('#contactSectionLinkedin');
    const ContactSectionInstagram = document.querySelector('#contactSectionInstagram');
    const contactSectionGithub = document.querySelector('#contactSectionGithub');
    const ContactSectionTelegram = document.querySelector('#contactSectionTelegram');

    

    //adding image to the cursor when hovering over the linkedin link
    ContactSectionLinkedin .addEventListener('mouseenter', () => {
        cursor.setImg('./assets/linkedinImage.png')

    });

    ContactSectionLinkedin .addEventListener('mouseleave', () => {
        cursor.removeImg()
    });

    //adding image when hovering over the behance link
    ContactSectionInstagram .addEventListener('mouseenter', () => {
        cursor.setImg('./assets/behanceimage.png')
    });

    ContactSectionInstagram .addEventListener('mouseleave', () => {
        cursor.removeImg()
    });


    //adding image when hovering over the github link
    contactSectionGithub .addEventListener('mouseenter', () => {
        cursor.setImg('./assets/githubimage.png')
    });

    contactSectionGithub .addEventListener('mouseleave', () => {
        cursor.removeImg()
    });


    //adding image when hovering over the telegram link
    ContactSectionTelegram .addEventListener('mouseenter', () => {
        cursor.setImg('./assets/telegramimage.png')
    });

    ContactSectionTelegram .addEventListener('mouseleave', () => {
        cursor.removeImg()
    });

 



}

cursorAnimation()


// INITIALIZING THE LOCOMOTIVE SCROLL
function initLocomotiveScroll(){
    const scroll = new LocomotiveScroll({
        el: document.querySelector('[data-scroll-container]'),
        smooth: true,
        firefoxMultiplier:15,

    });
    scroll.scrollTo();
}

initLocomotiveScroll()

const hamburgerButton = document.querySelector('.hamburger-button') //button
const navlinks  = document.querySelector('.page-header-links') //the links container
const aLinks = document.querySelectorAll('.menu-links-items-a')  //the a tags in the header section

const projectsInfoDiv = document.querySelectorAll('.project-info') //all the divs showing the info about my projects

const submitBtn = document.querySelector('#submitButton') //the button on the send meessage section
const resumeBtn = document.querySelector('#resumeBtn') //the a tag to download my resume

//HIDING THE LINKS WHEN USER CLICKS OUTSIDE THE LINKS DIV
// window.addEventListener('mouseup',function(event){
//     let linksDiv = document.querySelector('.page-header-links');
//     if(event.target != linksDiv && event.target.parentNode != linksDiv){
 

//         linksDiv.classList.remove('show-links')
//         hamburgerButton.classList.remove('hamburgerClicked')
//     }
// }); 

//FUNCTION TO HIDE THE MENU LINKS WHEN A LINK IS CLICKED
function linksClicked(){

    aLinks.forEach((item)=>{
        //HIDING THE MENU LINKS CONTAINER WHEN A LINK IS CLICKED

        item.addEventListener('click',()=>{
            navlinks.classList.remove('show-links')  //HIDE THE LINKS CONTAINER
            hamburgerButton.classList.remove('hamburgerclicked') //REMOVE THE ANIMATION ON THE HAMBURGER BUTTON
        })
    })
}

linksClicked()

//FUNCTION TO SHOW THE MENU LINKS WHEN H.BUTTON IS CLICKED
function showLInks(){

    //TIMLINE TO ANIMATE THE HEADER LINKS WHEN THE BUTTON IS CLICKED
    let aTagsTl =  gsap.timeline({paused:true})
    aTagsTl.from('.menu-links-items',{x:-18,stagger:.1,ease:'power0.easeNone'})
   

    hamburgerButton.addEventListener('click',()=>{

        hamburgerButton.classList.toggle('hamburgerclicked')
      
        navlinks.classList.toggle('show-links')
        
        
        //animating the links only if the nav menu is showing
        if(navlinks.classList.contains('show-links')){
            aTagsTl.play()
//             document.body.classList.add('hideOverflow')
        }

        else{
            aTagsTl.reverse()
//             document.body.classList.remove('hideOverflow')

        }

    })
}
showLInks()

//TIMELINES FOR THE PAGE
function pageTimelines(){
    //TIMLEINE FOR ANIMATING THE TOP SECTION WHEN PAGE LOADS
    let topPageSectionTl = gsap.timeline({defaults:{
        duration:.4,
        ease:'Back.easeOut'
    }})

    topPageSectionTl.to('.main',{opacity:1,ease:'none'})
            .from('.menu-links-items',{y:-33,opacity:0,stagger:.05,duration:.6}) //the menu links
            .from('#logo-image',{opacity:0},'<') //the logoimage
            .from('.hamburger-button',{opacity:0},'<') //the hamburger button
            .from('.fade-in-title',{opacity:0,y:33,stagger:.1,duration:.6}) //animating the names on the top page section
            .fromTo('.social-links',{opacity:0},{opacity:1})  // the div on the left side with the social media icons
            .fromTo('.navigate-div',{opacity:0},{opacity:1},'<') //the line on the right side of the page


    

    //TIMELINE TO ANIMATE THE 'MY RESUME' BUTTON WHEN HOVERED ON
    let resumeBtnTl = gsap.timeline({paused:true})
    resumeBtnTl.to('#animatingResumeButton',{ease:'Power0.easeNone',duration:.2,clipPath:'inset(0 1% 0 0)'})

    resumeBtn.addEventListener('mouseenter',()=>{

        resumeBtnTl.play()
        document.querySelector('.download-resume').style.fontWeight = 'bold'
        document.querySelector('.download-resume').style.color = 'blue'
    })

    resumeBtn.addEventListener('mouseleave',()=>{
        resumeBtnTl.reverse()
        document.querySelector('.download-resume').style.color = 'white'
        document.querySelector('.download-resume').style.fontWeight = '500'


    })
    


    //TIMELINE TO ANIMATE THE SUBMIT BUTTON WHEN HOVERED ON
    let submitBtnTl = gsap.timeline({paused:true})
    submitBtnTl.to('#animatingSubmitButton',{ease:'Power0.easeNone',duration:.2,clipPath:'inset(0 1% 0 0)'})

    submitBtn.addEventListener('mouseenter',()=>{

        submitBtnTl.play()
        submitBtn.style.color = 'white'
    })
    submitBtn.addEventListener('mouseleave',()=>{
        submitBtnTl.reverse()
        submitBtn.style.color = 'black'


    })
                
}

pageTimelines()

//ANIMATING THE DIVS WITH THE PROJECT INFO WHEN HOVERED ON
projectsInfoDiv.forEach((item)=>{
    let projectsInfoDivTl = gsap.timeline({paused:true})

    projectsInfoDivTl.to(item,{y:-8})
    
    item.addEventListener('mouseenter',()=>{
        projectsInfoDivTl.play()
    })

    item.addEventListener('mouseleave',()=>{
    projectsInfoDivTl.reverse()  
    })
})
