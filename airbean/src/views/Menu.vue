<template>
  <div class="Menu">
      <Navitem class="navitem"/>
      <Cart class="shopping-cart"/>
      <!-- <MenuItem class="menu-item" v-for="item in Menu" :key="item.id" :menu="item"/> -->
      <section class="menu-item">
        <h2>Meny</h2>
        <MenuItem v-for="item in Menu" :key="item.id" :menu="item"/>
      </section>
  </div>
</template>

<script>
import Navitem from '@/components/Navitem'
import MenuItem from '@/components/MenuItem'
import Cart from '@/components/Cart'
export default {
  components:
  {
     Navitem,
     MenuItem,
     Cart
  },
  data(){return{
  }},
  computed:{
    Menu(){
      return this.$store.state.menu
    }
  },
  async beforeMount(){
    await this.$store.dispatch('getBeans')
  }
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

    .menu-item{
      width: 90%;
      height: 80%;
      margin-top: 25%;

      > h2{
        font-size: 42px;
        font-weight: 700;
        color: #2F2926;
      }
    }

}
.navitem{
  align-self: flex-start;
}
.shopping-cart{
  align-self: flex-end;
}
</style>