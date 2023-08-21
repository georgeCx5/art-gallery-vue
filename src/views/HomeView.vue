<script>
import RouterBtn from '../components/RouterBtn.vue';
import FooterComponent from '../components/FooterComponent.vue';
import ModernHeading from '../components/ModernHeading.vue';

export default {
   data() {
      return {
         imgData: [
            [
               'bg-[url(@/assets/images/mobile/image-hero@2x.jpg)]',
               'TB:bg-[url(@/assets/images/tablet/image-hero@2x.jpg)]',
               'DT:bg-[url(@/assets/images/desktop/image-hero@2x.jpg)]'
            ],
            [
               'bg-[url(@/assets/images/mobile/image-grid-1@2x.jpg)]',
               'TB:bg-[url(@/assets/images/tablet/image-grid-1@2x.jpg)]',
               'DT:bg-[url(@/assets/images/desktop/image-grid-1@2x.jpg)]'
            ],
            [
               'bg-[url(@/assets/images/mobile/image-grid-2@2x.jpg)]',
               'TB:bg-[url(@/assets/images/tablet/image-grid-2@2x.jpg)]',
               'DT:bg-[url(@/assets/images/desktop/image-grid-2@2x.jpg)]'
            ],
            [
               'bg-[url(@/assets/images/mobile/image-grid-3@2x.jpg)]',
               'TB:bg-[url(@/assets/images/tablet/image-grid-3@2x.jpg)]',
               'DT:bg-[url(@/assets/images/desktop/image-grid-3@2x.jpg)]'
            ]
         ]
      }
   },
   components: {
      RouterBtn,
      ModernHeading,
      FooterComponent,
   },
   methods: {
      setBackground(arr) {
         let newBg = ''
         for (let i = 0; i < arr.length; i++) {
            newBg += `${arr[i]} `
         }
         return newBg
      }
   }
}
</script>
<template>
   <body class=" flex flex-col items-center gap-[120px] DT:gap-[180px] text-neo-black font-shoulders">
      <header
         class=" relative flex flex-col TB:flex-row TB:justify-end TB:items-center gap-8 w-full max-w-[425px] TB:max-w-[1024px] DT:max-w-[1920px] TB:h-[700px] DT:h-[800px]">
         <div class=" DT:absolute left-0 hidden DT:flex items-center w-[31.25%] h-full bg-neo-black overflow-hidden">
            <ModernHeading :is-main-layer="true" />
         </div>
         <ModernHeading :is-main-layer="false" />
         <div
            :class="` TB:absolute TB:left-0 DT:left-[31.25%] TB:top-0 DT:flex items-center w-full TB:w-[57%] DT:w-[540px] h-[240px] TB:h-full ${setBackground(imgData[0])} bg-cover bg-center overflow-hidden`">
         </div>
         <div
            class=" TB:relative flex flex-col DT:flex-row DT:justify-between gap-8 TB:gap-12 TB:w-[55%] DT:w-full DT:h-[296px] DT:-mt-32 px-4 TB:px-10 DT:px-[170px]">
            <div
               class=" DT:text-transparent text-[60px] DT:text-[96px] leading-[55px] DT:leading-[88px] font-black uppercase">
               <h1>Modern</h1>
               <h1>Art Gallery</h1>
            </div>
            <div class=" flex flex-col gap-8 TB:gap-12 DT:gap-16 DT:w-[32%]">
               <p
                  class=" text-neo-gray text-[18px] DT:text-[22px] leading-[28px] DT:leading-[32px] font-outfit font-light">
                  The arts in the collection of the Modern Art Gallery all started
                  from a spark of inspiration. Will these pieces inspire you? Visit
                  us and find out.
               </p>
               <RouterLink to="/location" draggable="false">
                  <RouterBtn router-text="Our location" :is-main="true" />
               </RouterLink>
            </div>
         </div>
      </header>
      <main
         class=" flex flex-col gap-8 w-full max-w-[425px] TB:max-w-[1024px] DT:max-w-[1920px] px-4 TB:px-10 DT:px-[165px]">
         <div class=" flex flex-col TB:flex-row-reverse TB:justify-between gap-6 TB:gap-0">
            <div
               :class="` w-full TB:w-[58%] DT:w-[57%] h-[320px] TB:h-[400px] ${setBackground(imgData[1])} bg-cover bg-center`">
            </div>
            <div class=" flex flex-col gap-5 TB:w-[34%] DT:w-[32%]">
               <div class=" text-[50px] DT:text-[60px] leading-[45px] DT:leading-[60px] font-black uppercase">
                  <h2>Your day</h2>
                  <h2>at the gallery</h2>
               </div>
               <p
                  class=" text-neo-gray text-[18px] DT:text-[22px] leading-[28px] DT:leading-[32px] font-outfit font-light">
                  Wander through our distinct collections and find new insights about
                  our artists. Dive into the details of their creative process.
               </p>
            </div>
         </div>
         <div class=" flex flex-col TB:flex-row gap-4 TB:gap-3 DT:gap-[30px]">
            <div :class="` w-full h-[480px] TB:h-[720px] ${setBackground(imgData[2])} bg-cover bg-center`">
            </div>
            <div class=" flex flex-col items-start gap-4 TB:gap-3 DT:gap-[30px] w-full TB:w-[70%]">
               <div
                  :class="` w-full h-[200px] TB:h-[80%] ${setBackground(imgData[3])} bg-cover bg-bottom TB:bg-right-bottom`">
               </div>
               <div
                  class=" flex flex-col justify-center gap-6 DT:gap-8 h-[293px] TB:h-full px-6 TB:px-[30px] DT:px-12 bg-neo-black text-neo-white">
                  <div class=" text-[50px] DT:text-[60px] leading-[45px] DT:leading-[60px] font-black uppercase">
                     <h2>Come &amp; be</h2>
                     <h2>inspired</h2>
                  </div>
                  <p class=" text-[18px] DT:text-[22px] leading-[28px] DT:leading-[32px] font-outfit font-light">
                     We’re excited to welcome you to our gallery and see how our collections
                     influence you.
                  </p>
               </div>
            </div>
         </div>
      </main>
      <FooterComponent :is-main-footer="true" />
   </body>
</template>