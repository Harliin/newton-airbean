<template>
  <div class="Menu">
      <Navitem class="navitem"/>
  </div>
</template>

<script>
import Navitem from '@/components/Navitem'
export default {
  components:{ Navitem }
}
</script>

<style lang="scss" scoped>
.Menu{
    background-color: #F3E4E1;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    background-image: url(~@/assets/graphics-header.svg), url(~@/assets/graphics-footer.svg);
    background-position: top center, bottom center;
    background-repeat: no-repeat, no-repeat;
    background-size: 100vw, 100vw;
}
.navitem{
  align-self: flex-start;
}
</style>