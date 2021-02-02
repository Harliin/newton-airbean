<template>
  <div class="signup" v-if="showSignup"> 
    <div class="logo">
      <img src="~@/assets/Vector.svg" alt="hej">
    </div>
      <h3>Välkommen till AirBean-familjen!</h3>
      <p>Genom att skapa ett konto nedan kan du spara och se din orderhistorik</p>

      <form @submit.prevent="doSignup">
        <label for="namn">Namn</label><br>
        <input type="text" v-model="namn" name="namn"><br>
        <label for="epost">Epost</label><br>
        <input type="text" v-model="epost" name="epost"><br>
        <div class="green-circle">
          <p>GDPR Ok!</p>
        </div>
        <br>
        <br>
        <input type="submit" value="Brew me a cup!" class="submit">
      </form> 

  </div>
</template>

<script>
export default {
  props: ['showSignup'],
  data() { return {
          namn: '',
          epost: ''
  }},
  
  computed: {
  },
  methods: {
    doSignup() {
      if (this.namn == null) {
        alert('Måste skriva ett namn')
        return 
      }
      if (this.epost == null) {
        alert('Måste ha en epost')
        return
      }
      localStorage.setItem('namn', this.namn)
      localStorage.setItem('epost', this.epost)
      this.$emit('signupDone')
    }
  }
}
</script>

<style lang="scss" scoped>
img {
  color: black;
}
.signup {
    height: 85%;
    width: 90%;
    background-color: #F3E4E1;
    border-radius: 5px;
    position: relative;
    top: 5rem;
    display: flex;
    flex-direction: column;

    >h3 {
      left: 8.27%;
      right: 9.33%;
      top: 20.84%;
      bottom: 64.62%;

      font-family: PT Serif;
      font-style: normal;
      font-weight: bold;
      font-size: 32px;
      line-height: 120%;

      /* or 38px */
      display: flex;
      align-items: center;
      text-align: center;

      /* Airbean - brown */
      color: #2F2926;
    }
    >p {
      width: 305px;
      height: 56px;
     align-self: center;

      font-family: Work Sans;
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 150%;

      /* Airbean - brown */
      color: #2F2926;
    }
}
.logo {
  margin-top: 2rem;
  align-self: center;
  height: 30px;
  width: 30px;
  display: flex;
  background-color: rgba(0, 0, 0, 0.1);
  overflow: hidden;
  border-radius: 50px;
  justify-content: center;
  img {
    align-self: center;
    justify-self: center;
    width: 20px;
    height: 20px;
  }
}

form {
  margin-top: 20%;
}

label {
  font-size: 10px;
  margin-left: -80%;
}

input {
  background-color:  rgba(0, 0, 0, 0);
  height: 40px;
  width: 90%;
  /* Airbean - brown */
  border: 1px solid #2F2926;
  box-sizing: border-box;
  border-radius: 6px;
  padding: 20px;
}

.green-circle {
  border-radius: 50px;
  height: 10px;
  width: 10px;
  background-color: green;
  border-style: solid;
  border-width: 1px;
  margin-left: 5%;
  margin-top: 5%; 

  >p {
    font-size: 10px;
    margin-left: 15px;
    width: 80px;

    font-family: Work Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 120%;

    /* or 14px */
    display: flex;
    align-items: center;

    /* Airbean - brown */
    color: #2F2926;
  }

}

.submit {
  width: 200px;
  height: 50px;
  border-radius: 30px;
  background-color: #2F2926;
  border: none;
  font-size: 21px;
  font-weight: 700;
  color: white;
  padding-top: 10px;
}
</style>