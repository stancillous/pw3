<template>
    <div>

        <section data-scroll-section id="about-section-id" class="about-me-section section">
            <div data-scroll data-scroll-speed="-1" class="about-me-section-header-and-info">
              
                <div class="about-me-header">
                    <h1 class="about-me-title">about me</h1>
                    <div class="about-section-line"></div>
                </div>

                <div class="about-me-flex-container">

                    <div class="about-me-container">
                        <div class="about-me-info">
                            <div class="about-me-info-paragraph">
                                <p class="about-paragraph">Hi, my name is Raymond, a front-end web developer. I enjoy building things for the web.</p>
                                <p class="about-paragraph"> My keen interest in web development started while at university and since then I have been exposed to exciting and sharp new technologies. I strive to develop eye-catching web apps and websites with accessible interfaces and great experiences.</p>
                                <p>Some of the technologies I have been using :</p>
                                
                                <ul>
                                    <li>Javascript</li>
                                    <li>Vue.js</li>
                                    <li>Node.js</li>
                                    <li>REST APIs</li>
                                    <li>Git</li>
                                    <li>SASS</li>
                                </ul>

                                <p id="education" class="about-paragraph">I am currently pursuing a degree in Actuarial Science ( faculty of Mathematics ) at the University of Nairobi.</p>



                                <button id="resumeBtn"><div id="animatingResumeButton"></div><a target="_blank" class="download-resume" href="https://drive.google.com/file/d/1GBhuavIoyVJd5plk5GIbrGnACmL34vle/view?usp=sharing">my resume</a></button>
                                <!-- <a id="downloadResume" class="download-resume" href=""><div id="animatingResumeButton"></div>my résumé</a> -->
                         
                            </div>
    
                        </div>
        
                        <div class="about-me-image">
                            <div class="image-container">
                                
                                <!-- <div class="image"><img id="img" src="" alt="image"></div> -->
                                <div class="image"><!-- PLACE THE IMAGE HERE --></div>
                            </div>
                        </div>
                    </div>
    
                </div>
            </div>


        </section>
    </div>
</template>

<script>
    export default {
        name:'aboutComp'
    }
</script>

<style lang="scss" scoped>

</style>