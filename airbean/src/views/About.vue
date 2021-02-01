<template>
    <div class="about">
      <Navitem class="navitem"/>
      <div class="text">
      <h1>Vårt kaffe</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse repellendus fugiat nisi? Adipisci atque laudantium delectus amet, eius praesentium doloremque totam veniam deleniti rerum laborum aperiam neque temporibus natus possimus!</p>
      </div>
      <div class="eva-cortado">
       <img src="~@/assets/eva-cortado.jpg">
       <h3>Eva Cortado</h3>
       <p>VD & Grundare</p>
      </div>
    </div>
</template>


<script>
import Navitem from '@/components/Navitem'

export default {
  components: {Navitem}
}
</script>

<style lang="scss" scoped>
.about {
  background-color: #F3E4E1;
  width: 100%;
  height: 150%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-image: url(~@/assets/graphics-header.svg), url(~@/assets/graphics-footer.svg);
  background-position: top center, bottom center;
  background-repeat: no-repeat, no-repeat;
  background-size: 100vw, 100vw;
}

.text {
  margin-top: 10rem;
}

.navitem {
  align-self: flex-start;
}

</style>
