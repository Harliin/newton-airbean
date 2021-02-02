<template>
    <div class="about">
      <Navitem class="navitem"/>
      <div class="text">
        <h1>Vårt kaffe</h1>
        <p><b>Pumpkin spice mug, barista cup, sit macchiato, kopi-luwak, doppio, grounds dripper, crema, strong whipped, variety extra iced id lungo half and half mazagran. Pumpkin spice.</b></p>
        <p>Que dark fair trade, spoon decaffeinated, barista wings whipped, as rich aftertaste, con panna milk black, arabica white rich beans single shot extra affogato. So affogato macchiato sit extraction instant grinder seasonal organic, turkish single shot, single origin, and robusta strong to go so dripper. Viennese froth, grounds caramelization skinny aromatic cup kopi-luwak, fair trade flavour, frappuccino medium, café au lait flavour cultivar ut bar instant kopi-luwak.</p>
        <p>Roast id macchiato, single shot siphon mazagran milk fair trade est aroma a half and half and, so, galão iced to go, whipped as cream cup pumpkin spice iced. At extra, rich grinder, brewed to go, steamed half and half at, that, percolator macchiato trifecta and body as arabica dripper. In galão black java milk sit trifecta, robusta, acerbic café au lait instant shop latte. Seasonal bar shop filter aroma id, crema, affogato viennese cultivar aftertaste, seasonal, percolator cream black, galão flavour, milk aromatic turkish skinny crema.</p>
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
  height: 130%;
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
  margin-top: 30%;
  font-size: 14px;
  width: 80%;
  text-align: left;
  color: #2F2926;

  h1{
    text-align: center;
  }
  p{
    margin: 15px 0px 15px 0px;
    font-size: 12px;
    font-weight: 400;
    line-height: 19,2px;
  }
  b{
    font-size: 14px;
    font-weight: 600;
    line-height: 22,4px;
  }
}
.eva-cortado{
  margin-top: 30px;
  color: #2F2926;
  img{
    width: 74px;
    height: 74px;
    left: 151px;
    top: 815px; 
    border-radius: 50px;
  }
  h3{
    font-size: 22px;
    font-weight: 700;
  }
  p{
    font-size: 12px;
    font-weight: 400;
  }
}

.navitem {
  align-self: flex-start;
}

</style>
