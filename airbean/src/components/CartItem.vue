<template>
  <div class="cart-item">
      <div>
          <h3>{{cart.title}}</h3>
          <span></span>
          <div>
              <span class="arrow-up" @click="changeAmount('add')"></span>
              <h3>{{cart.counter}}</h3>
              <span class="arrow-down" @click="changeAmount('remove')"></span>
          </div>
      </div>
      <p>{{cart.price}} kr</p>
  </div>
</template>

<script>
export default {
    props: {
        cart: Object
    },
    methods: {
        changeAmount(state) {
           this.$store.commit("change")
        }
    }
}
</script>

<style lang="scss" scoped>
.cart-item {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    margin-bottom: 10px;

    > p{
        margin-top: -8px;
        font-size: 12px;
        font-weight: 400;
        color: #2F2926;
    }

    > div{
        display: flex;
        flex-direction: row;  
        justify-content: space-evenly;
        align-items: center;
        width: 20rem;

        > h3 {
            font-size: 20px;
            color: #2F2926
        }
        > span{
                width: 166px;
                height: 0px;
                border: 0.5px dashed rgba(0, 0, 0, 0.4);
                margin: 17px 5px 0px 5px;
            }
        > div {
            display: flex;
            flex-direction: column;
            justify-content: space-evenly;
            align-items: center;
            justify-self: flex-end;

            .arrow-up {
               width: 0px;
                height: 0px;
                border-left: 7px solid transparent;
                border-right: 7px solid transparent;
                border-bottom: 7px solid #2F2926;
        } 
        .arrow-down {
                width: 0px;
                height: 0px;
                border-left: 7px solid transparent;
                border-right: 7px solid transparent;
                border-top: 7px solid #2F2926;
        }
            > h3 {
                color: #2F2926;
                font-size: 14px;
                font-weight: 600;
            }
        }
    }
}
</style>