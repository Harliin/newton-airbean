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
        <p>{{epost}}</p>

        <div class="order-list">
          <h3>Orderhistorik</h3>
          
          <div v-bind:key="profile.orderNo" v-for="profile in profileData">
            <div class="bar">
              <p>{{profile.orderNo}}<br>Total ordersumma</p><br>
              <p>{{profile.orderDate}}<br>{{profile.orderSum}} kr</p>
            </div>
            <hr>
          </div>
          <hr>
          <p>Totalt spenderat {{totalSpent}} kr</p>
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
      totalSpent() {
        let total = 0
        for (let i = 0; i < this.profileData.length; i++) {
          total += this.profileData[i].orderSum
        }
        return total
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
          orderNo: '#ANP4342342F',
          orderDate: '20/03/03',
          orderSum: 323
          },
          {
          orderNo: '#FKN343225F',
          orderDate: '20/03/03',
          orderSum: 533
          },
          {
          orderNo: '#EF4324234G',
          orderDate: '20/03/04',
          orderSum: 234
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
  .profile-page {
    color: #FFFFFF;
  } 
}

.order-list {
  display: flex;
  flex-direction: column;
  color: white;
  >h3 {
    justify-self: flex-start;
    margin-top: 5rem;
  }
}

h3 {
    color: white;
}
p {
  color: white;
}
.bar {
  display: flex;
  justify-content: space-between;
  width: 100%;
}
</style>