<template>
    <div>
        <section data-scroll-section id="send-message-section-id" class="send-message-section section">
            <div data-scroll data-scroll-speed="1"  class="send-message-container">

                <h1 id="sendMessageHeader">Get in touch!</h1>
               <p id="sendMessageText"> Got a question or proposal, or just <br> want to say hello? Go ahead.</p>


                <div class="send-message-container-details">
                    <form action="" id="form">

                        <div class="name-email-container">
                            <!-- <label for="name" >Your name</label>  -->

                            <input required autocomplete="off" class="sendMessageSectionInputs" placeholder="your name" type="text" id="name"> <br>
        
                            <!-- <label for="email">Your email address</label> <br> -->
                            <input required autocomplete="off" class="sendMessageSectionInputs" placeholder="your email address" type="email" id="email"> <br>
                   
                        </div>

                        <label for="message"></label><br>
                        <textarea required class="sendMessageSectionInputs" placeholder="message" name="" id="message" cols="40" rows="2"></textarea> <br>
                        
                        <div class="button-container">
                            
                            <button data-scroll data-scroll-speed="1.2" id="submitButton"><div id="animatingSubmitButton"></div>launch</button>

                        </div>



                    </form>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
    export default {
        name:'contactComp'
        
    }
</script>

<style lang="scss" scoped>

</style>