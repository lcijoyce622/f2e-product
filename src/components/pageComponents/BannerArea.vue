<template lang="pug">
#BannerArea
  .text-area
    img.codeicon(src="@/assets/codeicon.svg")
    img.dot1(src="@/assets/banner-dot1.svg")
    img.game(src="@/assets/game.svg")
    img.dot2(src="@/assets/banner-dot2.svg")
    .title
      img.f2e-subtitle(src="@/assets/4th.svg")
      img.f2e(src="@/assets/THE F2E.svg")
    p {{"互動式網頁設計"}}
    .btn {{"立即報名"}}
  .loop-area
    .loop(v-for="item in 10")
      img.joinUs(src="@/assets/joinUs.svg")
      img.star(src="@/assets/Star.svg")
</template>

<script>
export default {
  name: 'BannerArea',
  components: {

  },
  data(){
    return{
      
    }
  },
  mounted(){
    this.$gsap.gsap.to(".loop-area", {
      xPercent: "-50", 
      ease: "none",
      duration: 10,
      repeat: -1,
    });
    const bounce = this.$gsap.gsap.timeline()

    bounce.fromTo(".codeicon",{ y: -100, opacity: 0, visibility: "hidden" },{ y: 0, opacity: 1, visibility: "visible" ,duration:2, })
    bounce.fromTo(".game",{ y: 100, opacity: 0, visibility: "hidden" },{ y: 0, opacity: 1, visibility: "visible" ,duration:2, },"<")
    bounce.fromTo(".title",{ y: 100, opacity: 0, visibility: "hidden" },{ y: 0, opacity: 1, visibility: "visible" ,duration:1, },"<")
    bounce.to(".codeicon", {repeat:-1 ,keyframes: [{x:0,y:-30, duration:3,delay : 0}, {x:0,y:0, duration:3 ,delay : 0}]});
    bounce.to(".game", {repeat:-1 ,keyframes: [{x:0,y:30, duration:3,delay : 0}, {x:0,y:0, duration:3 ,delay : 0}]},"<");
    bounce.to(".btn", {keyframes: [ {x:-120,y:0, duration:3 ,delay : 0}]},"<");

  }
}
</script>

<style lang="scss" scoped>
#BannerArea {
  width: 100vw;
  overflow-x: hidden;
  background-color: #06102B;
  margin-top: 90px;
  height: calc(100vh - 90px);
  color: white;
  position: relative;
  pointer-events: none;
  .text-area {
    position: absolute;
    top: 30%;
    transform: translate(0, -50%);
    width: 820px;
    text-align: center;
    margin: auto;
    position: relative;
    .title {
      position: relative;
      z-index: 2;
      padding-top: 40px;
      .f2e-subtitle {
        position: absolute;
        right: 0;
        top: 0;
      }
      .f2e {
      }
    }
    p {
      letter-spacing: 20px;
      font-weight: 700;
      font-size: 28px;
    }
    .game {
      position: absolute;
      top: 150px;
      right: -100px;
    }

    .codeicon {
      position: absolute;
      top: 100px;
      left: -150px;
    }
    .dot1 {
      position: absolute;
      top: 120px;
      left: 40px;
    }
    .dot2 {
      position: absolute;
      top: 20px;
      left: 850px;
    }
  }
  .loop-area {
    position: absolute;
    bottom: 90px;
    display: flex;
    flex-wrap: nowrap;
    flex-direction: row;
    gap: 30px;
    .loop {
      display: inline-flex;
      gap: 30px;
      .star {
        width: 28px;
      }
      .joinUs {
        height: 70px;
      }
    }
  }
}
#BannerArea {
  .btn {
    position: absolute;
    top: 300px;
    left: 50%;
    transform: translate(-30% , 0);
    width: 240px;
    padding: 20px 0;
    border-radius: 40px;
    font-weight: 700;
    font-size: 24px;
    cursor: pointer;
    background-color: #FFE34E;
    color: #06102B;
    &:hover {
      background-color: #FFF385;
    }
  }
}
</style>