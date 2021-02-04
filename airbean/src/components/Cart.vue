<template>
  <div class="cart">
      
    <button class="cart-button" @click="cartOpen = !cartOpen">
        <img src="~@/assets/bag.svg" alt="No pic">
        <span class="cart-count">{{cartCount}}</span>
    </button>
    <section v-if="cartOpen" class="cart-container">
        <span class="arrow"></span>
        <div v-if="!loading" class="order-container">
            <h2>Din beställning</h2>
            <div class="cart-items"><CartItem v-for="item in cart" :key="item.id" :cart="item"/></div>
            <div class="total-container">
                <div class="total">
                    <h3>Total</h3>
                    <span></span>
                    <h3>{{Total}} kr</h3>
                </div>
                <p>inkl moms + drönarleverans</p>
            </div>
            <button @click="sendOrder">Take my money!</button>
        </div>
        <div class="loader" v-if="loading">
            <img src="~@/assets/loader.png" alt="kunde inte hitta">
        </div>
        
    </section>
  </div>
</template>

<script>
import CartItem from '@/components/CartItem'
export default {
    components: {CartItem},
    data(){return{
        cartOpen: false,
        loading: false
    }},
    computed: {
        cart() {
            return this.$store.state.cartList
        },
        Total(){
            return this.$store.state.totalPrice
        },
        cartCount(){
            let counter = 0
            let temp = this.$store.state.cartList
            temp.forEach(element => {
                counter += element.counter
            });
            return counter
        }
    },
    methods:{
        async sendOrder(){
            this.loader = true
            await this.$store.dispatch('order')
            this.loader = false
            this.$router.push('/status')
        }
    }

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
        

        .order-container{
            height: 80vh;
            width: 90vw;
            background-color: #FFFFFF;
            display: grid;
            align-items: center;
            place-items: center;
            grid-template-rows: 15% 55% 10% 20%;

        
            .cart-items{
                place-self: flex-start;
            }

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
            .total-container{
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: flex-start;
                    align-self: flex-end;
            
                color: #2F2926;
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
                        margin: 0px 2px 4px 2px
                    }
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

        .loader{
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            


            

            img{
                width: 100px;
                height: 100px;
                filter: invert(14%) sepia(1%) saturate(4489%) hue-rotate(334deg) brightness(96%) contrast(2%);
                
            }

        }
        

    }

}
</style>