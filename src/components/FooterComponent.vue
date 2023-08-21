<script>
import FooterNetwork from '@/components/FooterNetwork.vue';

import logoLight from '@/assets/images/logo-light.svg?url'
import logoDark from '@/assets/images/logo-dark.svg?url'

export default {
   data() {
      return {

      }
   },
   components: {
      FooterNetwork,
   },
   computed: {
      getData() {
         let bgColor
         let txtColor
         let logoStyle
         if (this.isMainFooter) {
            bgColor = 'bg-neo-black'
            txtColor = 'text-neo-white'
            logoStyle = logoLight
         } else {
            bgColor = 'bg-neo-gold'
            txtColor = 'text-neo-black'
            logoStyle = logoDark
         }
         return { bgColor, txtColor, logoStyle }
      }
   },
   props: {
      isMainFooter: {
         Boolean,
         default: false,
      }
   }
}
</script>
<template>
   <footer
      :class="` flex flex-col TB:flex-row TB:justify-between items-start gap-y-9 w-full max-w-[425px] TB:max-w-[1024px] DT:max-w-[1920px] px-8 TB:px-10 DT:px-[165px] py-12 TB:py-14 DT:py-20 ${getData.bgColor} ${getData.txtColor}`">
      <img class=" h-10 DT:h-[58px] select-none" :src="getData.logoStyle" alt="logoLight" draggable="false">
      <p
         class=" TB:w-[38%] TB:-ml-[10%] DT:-ml-[15%] text-[16px] DT:text-[18px] leading-[26px] DT:leading-[28px] font-outfit font-light">
         The Modern Art Gallery is free to all visitors and open seven days a week
         from 8am to 9pm. Find us at 99 King Street, Newport, USA.
      </p>
      <div class=" flex items-center gap-5">
         <FooterNetwork v-for="item in 3" :is-main="isMainFooter" :data-index="item - 1" />
      </div>
   </footer>
</template>