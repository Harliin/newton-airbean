<template>
   <div class="loader">
        <img src="~@/assets/loader.png" alt="kunde inte hitta">
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.loader{
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    
    img{
        width: 100px;
        height: 100px;
        filter: invert(14%) sepia(5%) saturate(4519%) hue-rotate(334deg)
                brightness(173%) contrast(0%)
        
    }

}
</style>