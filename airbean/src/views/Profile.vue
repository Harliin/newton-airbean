<template>
  <div class="profile">
      <Navitem class="nav-item"/>
      <Signup :showSignup="showSignup" v-on:signupDone="signupDone()" />
      <div class="profile-page" v-if="!showSignup">
        <div class="logo">
          <div class="head"></div>
          <div class="body"></div>
        </div>

        <h3>{{namn}}</h3>
        <p class="epost">{{epost}}</p>

        <div class="order-list">
          <h3>Orderhistorik</h3>
          <section class="orders">
            <div v-bind:key="order.orderNr" v-for="order in doneOrders">
              <div class="bar">
                <div class="first">
                  <p>{{order.orderNr}}<p>
                  <p>{{order.date}}</p>
                </div>
                <div class="second">
                  <p>Total ordersumma</p>
                  <p>{{order.totalPrice}} kr</p>
                </div>
              </div>
              <hr class="line">
            </div>
           </section>
          <hr>
          <div class="last-part">
            <p>Totalt spenderat</p> <p>{{totalSpent}} kr</p>
          </div>
        </div>
      </div>

  </div>
</template>

<script>
import Navitem from '@/components/Navitem'
import Signup from '@/components/Signup'

export default {
    components:{ Navitem, Signup },
    computed: {
      namn() {
        return localStorage.getItem('namn')
      },
      epost() {
        return localStorage.getItem('epost')
      },
      doneOrders(){
        let temp = localStorage.getItem('doneOrders')
        if (temp == undefined) return
        if (temp == '') return
        return JSON.parse(temp)
      },
      totalSpent(){
        let totalprice = 0
        let orders = this.doneOrders
        orders.forEach(element => {
          totalprice += element.totalPrice
        });
        return totalprice
      }
    },
    created: function () {
      this.getSignupStatus()
    },
    updated: function () {
      this.getSignupStatus()
    },
    data(){ return {
      showSignup: true,
        profileData: [
          {
          orderNr: '#ANP4342342F',
          date: '20/03/03',
          totalPrice: 323
          },
          {
          orderNr: '#FKN343225F',
          date: '20/03/03',
          totalPrice: 533
          },
          {
          orderNr: '#EF4324234G',
          date: '20/03/04',
          totalPrice: 234
          }
        ]
    }},
    methods: {
      signupDone() {
        this.showSignup = false
        location.reload()
      },
      getSignupStatus() {
        if (localStorage.getItem('namn') == '') {
        this.showSignup = true
        return
      }
      if (localStorage.getItem('epost') == '') {
        this.showSignup = true
        return
      }
      if (localStorage.getItem('namn') == undefined){
        this.showSignup = true
        return
      }
      if (localStorage.getItem('epost') == undefined) {
        this.showSignup = true
        return
      }
      this.showSignup = false
      }
    }
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
.logo {
  background-color: #F3E4E1;
  border-radius: 50px;
  height: 100px;
  width: 100px;
  margin-top: 8rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  margin-inline: auto;
  .head {
    margin-top: 10px;
    background-color: #E5674E;
    height: 120px;
    width: 50px;
    border-radius: 50px;

  }
  .body {
    background-color: #E5674E;
    height: 100px;
    width: 80px;
    border-radius: 50px;
  }
}

.epost {
  color: rgba(255, 255, 255, 0.7);
}

.profile-page {
    color: #FFFFFF;
    width: 90%;
  } 
.order-list {
  display: flex;
  flex-direction: column;
  color: white;
  width: 100%;
  >h3 {
    justify-self: flex-start;
    align-self: flex-start;
    margin-top: 2rem;
    margin-bottom: 1rem;
    margin-left: 0rem;
  }
 > hr {
   border: 0.1px solid rgba(255, 255, 255, 0.6);
   height: 0px;
 }
}
.orders{
  height: 15rem;
  overflow: scroll;
}
.line {
  margin-top: 10px;
  border: 1px solid rgba(255, 255, 255, 0.08);
}

h3 {
    color: white;
}
p {
  color: white;
}
.bar {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  margin-top: 15px;

  
  > p {
    justify-self: flex-start;
    align-self: flex-start;
    text-align: left;

    
  }
  > .first {
    display: flex;
    justify-content: space-between;
    text-align: left;
    
    font-family: Work Sans;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 120%;

    /* or 17px */
    > p {
      font-family: Work Sans;
      color: rgba(255, 255, 255, 0.7);
    }
    
  }
  > .second {
    display: flex;
    text-align: right;
    justify-content: space-between;

    font-family: Work Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 120%;

    /* or 14px */
    > p {
      font-family: Work Sans;
      color: rgba(255, 255, 255, 0.5);
    }
  }
}

.last-part {
  margin-top: 10px;
  display: flex;
  justify-content: space-between;

  > p {
      font-family: Work Sans;
      color: rgba(255, 255, 255, 0.7);
    }
}
</style>