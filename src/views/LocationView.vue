<script>
import RouterBtn from '../components/RouterBtn.vue';
import FooterComponent from '../components/FooterComponent.vue';
export default {
   data() {
      return {
         imgMapMB: "bg-[url(@/assets/images/mobile/image-map@2x.png)]",
         imgMapTB: "TB:bg-[url(@/assets/images/tablet/image-map@2x.png)]",
         imgMapDT: "DT:bg-[url(@/assets/images/desktop/image-map@2x.png)]",
      };
   },
   components: {
      RouterBtn,
      FooterComponent,
   }
}
</script>
<template>
   <body class=" flex flex-col items-center text-neo-white font-shoulders">
      <header
         :class="` flex justify-start items-start w-full max-w-[425px] TB:max-w-[1024px] DT:max-w-[1920px] h-[550px] TB:h-[600px] ${imgMapMB} ${imgMapTB} ${imgMapDT} bg-cover bg-center`">
         <RouterLink to="/" draggable="false">
            <RouterBtn class=" TB:pl-10 DT:pl-[156px]" router-text="Back to Home" />
         </RouterLink>
      </header>
      <main
         class=" flex flex-col TB:flex-row items-start gap-12 TB:gap-[14%] DT:gap-[29%] max-w-[425px] TB:max-w-[1024px] DT:max-w-[1920px] px-4 TB:px-10 DT:px-[165px] py-12 TB:py-[88px] bg-neo-black font-black">
         <h1
            class=" text-[50px] TB:text-[55px] DT:text-[70px] leading-[45px] TB:leading-[50px] DT:leading-[70px] uppercase">
            Our location</h1>
         <div class=" flex flex-col gap-5 DT:gap-6">
            <h3 class=" text-neo-gold text-[32px] DT:text-[36px] leading-[32px] DT:leading-[36px] uppercase">
               99 King Street</h3>
            <div
               class=" flex flex-col gap-5 DT:gap-8 text-[18px] DT:text-[22px] leading-[28px] DT:leading-[32px] font-light font-outfit">
               <div class=" flex flex-col">
                  <h5>Newport</h5>
                  <h5>RI 02840</h5>
                  <h5>United States of America</h5>
               </div>
               <p>
                  Our newly opened gallery is located near the Edward King House on 99 King
                  Street, the Modern Art Gallery is free to all visitors and open seven days
                  a week from 8am to 9pm.
               </p>
            </div>
         </div>
      </main>
      <FooterComponent :is-main-footer="false" />
   </body>
</template>