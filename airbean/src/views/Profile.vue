<template>
  <div class="profile">
      <Navitem class="nav-item"/>
  </div>
</template>

<script>
import Navitem from '@/components/Navitem'
export default {
    components:{ Navitem}
}
</script>

<style lang="scss" scoped>
.profile{
    background-color: #2F2926;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-image: url(~@/assets/graphics-header.svg);
  background-position: top center;
  background-repeat: no-repeat;
  background-size: 100vw;
}
.nav-item{
    align-self: flex-start;
}
</style>