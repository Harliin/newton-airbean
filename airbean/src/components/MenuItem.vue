<template>
  <div class="item">
      <button class="item-add" v-on:click="buyItem"><img src="~@/assets/add.svg" alt="kunde inte hitta bilden"></button>
      <div class="item-info">
          <h4>{{menu.title}}</h4>
          <p>{{menu.desc}}</p>
      </div>
      <h4 class="item-price">{{menu.price}} kr</h4>
  </div>
</template>

<script>
export default {
    props:{
        menu: Object
    },
    methods: {
        buyItem() {
            this.$store.commit('storeItem', this.menu)
        }
    }

}
</script>

<style lang="scss" scoped>
.item{
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    width: 100%;
    height: 10%;
    margin: 15px 0px 15px 0px;

    .item-add{
        width: 32px;
        height: 32px;
        border-radius: 30px;
        background-color: #2F2926;
        display: flex;
        justify-content: center;
        align-items: center;
        border: none;

        img{
            width: 12px;
            height: 12px;
        }
    }
    .item-info{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        color: #2F2926;
        h4{
            font-size: 23px;
            font-weight: 700;
        }
        p{
            font-size: 12px;
            font-weight: 400;
        }
    }
    .item-price{
        font-size: 23px;
        font-weight: 700;
        color: #2F2926;
    }
}
</style>