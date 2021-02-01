<template>
    <div class="navitem">
        <button class="button"><img src="~@/assets/navicon.svg" alt="hitta ej"></button>
        <div class="menu"></div>
    </div>
</template>

<script>
export default {

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
}
.navitem {
    position: absolute;
    margin: 20px 0px 0px 15px;
}
</style>