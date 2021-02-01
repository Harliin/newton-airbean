<template>
  <div class="Landing" @click="toMenu">
    <div class="left"></div>
    <div class="middle"></div>
    <div class="right"></div>
  </div>
</template>

<script>

export default {
  methods:{
    toMenu(){
      this.$router.push('/menu')
    }
  }
}
</script>

<style lang="scss" scoped>
.Landing{
  width: 100%;
  height: 100%;
  background-color: #38846D;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-image: url(~@/assets/intro-graphic-left.svg), url(~@/assets/airbean-landing.svg),  url(~@/assets/intro-graphic-right.svg);
  background-position: left center, center center, right center;
  background-repeat: no-repeat, no-repeat, no-repeat;
  background-size: 26vh, auto, 26vh ;
}


</style>
