<template>
  <div class="status">
      <p>Ordernummer</p>
      <img src="~@/assets/drone.svg" alt="kunde ej hitta bilden">
      <div class="info">
        <h3>Din beställning är på väg!</h3>
        <p><b>13</b> minuter</p>
      </div>
     
      <router-link to="/menu" class="button" tag="button">Ok, cool!</router-link>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.status{
    background-color: #E5674E;
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;

    > p{
        color: white;
        font-size: 16px;
    }

    .info{
        color: white;
        margin-top: -30px;
        h3{
            font-size: 36px;
            width: 70vw;
            line-height: 43.2px;
            letter-spacing: 2px;
            font-weight: 700;
        }
        p{
            font-size: 20px;
            font-weight: 400;
        }
    }


    .button{
        width: 200px;
        height: 50px;
        border-radius: 30px;
        background-color: white;
        border: none;
        font-size: 21px;
        font-weight: 700;
        color: #2F2926;
    }
}
</style>