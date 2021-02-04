<template>
  <div class="cart-item"> 
    <h3 class="cart-title">{{cart.title}}</h3>
    <span class="cart-line"></span>
    <div class="counter-container">
        <span class="arrow-up" @click="changeAmount('add')"></span>
        <h3>{{cart.counter}}</h3>
        <span class="arrow-down" @click="changeAmount('remove')"></span>
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
        changeAmount(choice) {
            let arr = [choice, this.cart.id]
           this.$store.commit("changeAmount", arr)
        }
    }
}
</script>

<style lang="scss" scoped>
@import '@/styles/setup/_normalize';
.cart-item {
    width: 90vw;
    height: 7vh;
    margin-bottom: 5px;
    display: grid;
    grid-template-columns: max-content auto 15%;
    grid-template-rows: 60% 40%;
    padding-left: 10px;
    padding-right: 10px;

    > p{
        font-size: 12px;
        font-weight: 400;
        color: #2F2926;
        line-height: 15.6px;
        justify-self: flex-start;
    }

    .cart-title {
        font-size: 20px;
        color: #2F2926;
        justify-self: flex-start;
        line-height: 24px;
        z-index: 2;
        align-self: flex-end;
        
    }
    .cart-line {
            height: 0px;
            border: 0.5px dashed rgba(0, 0, 0, 0.4);
            margin-bottom: 2px;
            margin-left: 0px;
            margin-right: 0px;
            z-index: 1;
            align-self: flex-end;
            
    }
    .counter-container {
        grid-column: 3/4;
        grid-row: 1/3;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;

        .arrow-up {
            width: 0px;
            height: 0px;
            border-left: 7px solid transparent;
            border-right: 7px solid transparent;
            border-bottom: 7px solid #2F2926;
        }
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

</style>