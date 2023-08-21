<script>
import arrowLeft from '@/assets/images/icon-arrow-left.svg?url'
import arrowRight from '@/assets/images/icon-arrow-right.svg?url'

export default {
   data() {
      return {
         isBtnHovered: false,
         arrowLeft,
         arrowRight,
      }
   },
   computed: {
      getButtonState() {
         let bgText
         let bgIcon
         if (this.isBtnHovered) {
            bgText = 'bg-neo-gold'
            bgIcon = 'bg-neo-black'
         } else {
            bgText = 'bg-neo-black'
            bgIcon = 'bg-neo-gold'
         }
         return { bgText, bgIcon }
      },
      getFlexOrder() {
         return this.isMain ? 'order-first' : 'order-last'
      }
   },
   props: {
      isMain: {
         Boolean,
         default: false,
      },
      routerText: {
         String,
         default: 'Empty',
      }
   }
}
</script>
<template>
   <div @mouseenter="isBtnHovered = true" @mouseleave="isBtnHovered = false" class=" flex h-[72px] select-none">
      <div :class="` flex justify-center items-center ${getFlexOrder} w-[204px] h-full ${getButtonState.bgText}`">
         <h4 class=" text-neo-white text-[20px] leading-[24px] tracking-[3.64px] font-extrabold uppercase">
            {{ routerText }}</h4>
      </div>
      <div :class="` flex justify-center items-center w-14 h-full ${getButtonState.bgIcon}`">
         <img v-show="isMain" :src="arrowRight" alt="arrowRight">
         <img v-show="!isMain" :src="arrowLeft" alt="arrowLeft">
      </div>
   </div>
</template>