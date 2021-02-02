<template>
    <div class="navitem">
        <button v-if="!navOpen" class="button" @click="navOpen = true"><img src="~@/assets/navicon.svg" alt="hitta ej"></button>
        <button v-if="navOpen" class="button close" @click="navOpen = false"><img src="~@/assets/close.svg" alt="close"></button>
        <div v-if="navOpen" class="navMenu">
            
            <router-link class="link" to="/menu">Menu</router-link>
            <hr/>
            <router-link class="link" to="/about">Vårt kaffe</router-link>
            <hr/>
            <router-link class="link" to="/profile">Min Profil</router-link>
            <hr/>
            <router-link class="link" to="/status">Orderstatus</router-link>
        </div>
        
    </div>
</template>

<script>
export default {
    data(){return{
        navOpen: false
    }}
}
</script>

<style lang="scss" scoped>
.button {
    width: 45px;
    height: 45px;
    border-radius: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
}
.navitem {
    position: absolute;
    margin: 20px 0px 0px 15px;
}
.navMenu{
    height: 100vh;
    width: 100vw;
    margin: -20px 0px 0px -15px;
    background-color: #2F2926;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    z-index: 1;

    hr{
        width: 15%;
    }

    .link{
        text-decoration: none;
        font-size: 35px;
        color: white;
        margin: 15px;
    }

}
.close{
        position: absolute;
        margin: 5px 0px 0px 5px;
        z-index: 2;
        

        img{
            width: 30px;
            height: 30px;
        }
    }
</style>