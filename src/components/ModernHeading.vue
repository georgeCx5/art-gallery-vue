<script>
export default {
   data() {
      return {

      }
   },
   computed: {
      getLayer() {
         return this.isMainLayer ? 'text-neo-white z-40' : 'text-neo-black z-30'
      }
   },
   props: {
      isMainLayer: {
         String,
         required: true,
      }
   }
}
</script>
<template>
   <div
      :class="` absolute left-[165px] hidden DT:block w-[514px] -mt-[248px] ${getLayer} text-[60px] DT:text-[96px] leading-[55px] DT:leading-[88px] font-black uppercase`">
      <h1>Modern</h1>
      <h1>Art Gallery</h1>
   </div>
</template>