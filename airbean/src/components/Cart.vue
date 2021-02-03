<template>
  <div class="cart">
      
    <button class="cart-button" @click="cartOpen = !cartOpen">
        <img src="~@/assets/bag.svg" alt="No pic">
        <span class="cart-count">7</span>
    </button>
    <section v-if="cartOpen" class="cart-container">
        <span class="arrow"></span>
        <h2>Din beställning</h2>
        <div>nadn</div>
        <div class="total-container">
            <div class="total">
                <h3>Total</h3>
                <span></span>
                <h3>343 kr</h3>
            </div>
            <p>inkl moms + drönarleverans</p>
        </div>
        <button>Take my money!</button>
    </section>
  </div>
</template>

<script>
export default {
    data(){return{
        cartOpen: false
    }}

}
</script>

<style lang="scss" scoped>
.cart{
    position: absolute;
    margin: 20px 15px 0px 0px;

    .cart-button{
        width: 45px;
        height: 45px;
        border-radius: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
        border: none;
        position: absolute;
        right: 4px;
        background-color: #2F2926;
        box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.12);
        

        img{
            position: absolute;
            width: 20px;
            height: 20px;
        }
        span{
            background-color: #E5674E;
            width: 20px;
            height: 20px;
            border-radius: 50px;
            display: flex;
            justify-content: center;
            align-items: center;
            align-self: flex-start;
            margin: -4px 0px 0px 30px;
            position: absolute;
            font-size: 12px;
            font-weight: 700;
            color: white;
            
        }
    }
    .cart-container{
        height: 80vh;
        width: 90vw;
        background-color: #FFFFFF;
        position: relative;
        left: -0.47%;
        box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.25);
        border-radius: 3px;
        margin-top: 17%;
        display: flex;
        justify-content: space-around;
        flex-direction: column;
        align-items: center;

        .arrow{
            width: 0;
            height: 0;
            border-left: 14px solid transparent;
            border-right: 14px solid transparent;
            border-bottom: 20px solid white;
            position: absolute;
            right: 3%;
            top: -2%;
        }

        h2{
            font-size: 32px;
            font-weight: bold;
            color: #2F2926;
            line-height: 120%;
        }
        .total{
            display: flex;
            flex-direction: row;
            justify-content: space-around;
            align-items: center;

            h3{
                font-size: 23px;
                line-height: 120%;
                font-weight: bold;
            }
            span{
                width: 166px;
                height: 0px;
                border: 1px dashed rgba(0, 0, 0, 0.4);
                align-self: flex-end;
            }
        }
        > button{
            width: 248px;
            height: 55px;
            background: #2F2926;
            border-radius: 50px;
            font-size: 24px;
            font-weight: bold;
            line-height: 120%;
            color: white;
            border: none;
        }

    }

}
</style>