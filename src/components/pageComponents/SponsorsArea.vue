<template lang="pug">
#SponsorsArea
  .title
    .title-text {{"SPONSORS"}}
    .title-text2 {{"鑽石級贊助商"}}
  .sponsors-area
    .sponsors
      img(src="@/assets/block_logo.svg")
    .sponsors
      img(src="@/assets/kdan_logo.svg")
    .sponsors
      img(src="@/assets/titan_logo.svg")
</template>

<script>

export default {
  name: 'SponsorsArea',
  components: {

  },
  data(){
    return{
    }
  },
  mounted(){
   
  },
  methods: {
  },
}
</script>

<style lang="scss" scoped>
#SponsorsArea {
  padding: 80px 0 80px 0;
  background-color: #151F3F;
  .title {
    position: relative;
    margin: auto;
    padding-bottom: 60px;
    &:before {
      content: url("@/assets/sponsor-star2.svg");
      position: absolute;
      top: -10px;
      right: 50%;
      transform: translateX(220px);
    }
    &:after {
      content: url("@/assets/sponsor-star.svg");
      position: absolute;
      bottom: 120px;
      left: 50%;
      transform: translateX(-240px);
    }
    .title-text {
      color: white;
      font-size: 48px;
      font-weight: 700;
      white-space: nowrap;
      font-family: Monument Extended;
    }
    .title-text2 {
      padding: 16px;
      color: white;
      font-size: 32px;
      font-weight: 700;
      white-space: nowrap;
      font-family: Monument Extended;
    }
  }
  .sponsors-area {
    justify-content: center;
    display: flex;
    flex-wrap: nowrap;
    gap: 60px;
    height: 250px;
    .sponsors {
      background-color:white;
      border-radius: 32px;
      width: 140px;
      height: 140px;
      display: flex;
      justify-content: center;
      align-content: center;
      padding: 8px;
      &:hover {
        width: 150px;
        height: 150px;
        background-image: linear-gradient(
          142.45deg,
          rgba(157, 164, 255, 0.8) 1.69%,
          rgba(85, 255, 173, 0.8) 99.97%
        );
        transform: translateY(-5px);    
        transition: all ease-in .2s;
      }
    }
  }
  
}
</style>