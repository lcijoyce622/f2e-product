<template lang="pug">
#JudgeAndPrizeArea
  .title
    span.title-text.title-text1 {{"區區修煉已經無法滿足了嗎？"}}
    span.title-text.title-text2 {{"還有比賽等著你！"}}
  .car-area
    img.flag(src="@/assets/flag.svg")
    img.car(src="@/assets/car.svg")
    img.line(src="@/assets/line.svg")
  .card-area
    .card
      .card1
        img(src="@/assets/judge.svg")
        .card-title {{"評審機制"}}
        .card-content
          .card-sub-title {{"初選："}}
          .card-col {{"將由六角學院前端、UI 評審進行第一波篩選。"}}
          .card-sub-title {{"決選："}}
          span.card-col {{"由六角學院與贊助廠商討論，進行最後篩選，"}}
          span {{"並於 12/30(五) 由評審進行直播公布名單！"}}
    .card
      .card2
        img(src="@/assets/coin.svg")
        .card-title {{"獎金"}}
        .card-content
          .card-col
            span.card-sub-title {{"初選佳作："}}
            span {{"共六十位"}}
            span.green-text {{"數位獎狀"}}
          .gray-text {{"每週主題個人組十位、團體組十組"}}
          .card-col
            span.card-sub-title {{"個人企業獎："}}
            span {{"共六位"}}
            span.green-text {{"NTD 3,000/位"}}
          .gray-text {{"每週主題各兩名，設計一位、前端 一位"}}
          .card-col
            span.card-sub-title {{"團體企業獎："}}
            span {{"共三組"}}
            span.green-text {{"NTD 10,000/組"}}
          .gray-text {{"每週主題各 1 組"}}
          .card-sub-title {{"以上皆提供完賽數位獎狀"}}
    
</template>

<script>

export default {
  name: 'JudgeAndPrizeArea',
  components: {

  },
  data(){
    return{
    }
  },
  mounted(){
    this.$gsap.ScrollTrigger.create({
      trigger: ".car-area",
      start: "top 80%",
      onEnter:() => this.animated(),
      // onLeaveBack:() => this.reset(),
      // onEnterBack:()=> this.animated(),

      onLeave:()=> this.reset(),
    });

   
  },
  methods: {
    animated() {
    //   this.$gsap.gsap.to(".car-area", {
    //   ease: "expo.out",
    //   duration: 10,
    //   repeat: -1,
    // });
    const animation = this.$gsap.gsap.timeline()
    this.$gsap.gsap.set(".car", { x: 760 });
    this.$gsap.gsap.set(".flag", { x: 0 ,y:0, rotate:0});

    animation.fromTo(".title-text1",{  opacity: 0, visibility: "hidden" },{  opacity: 1, visibility: "visible" ,duration: 1, })
      .fromTo(".title-text2",{  opacity: 0, visibility: "hidden" },{  opacity: 1, visibility: "visible" ,duration: 1, })
      .to(".car",{  opacity: 1, visibility: "visible" ,duration: 1, },"<")
      .to(".line",{  opacity: 1, visibility: "visible" ,duration: 1, },"<")
      .to(".car",{opacity: 1, visibility: "visible", x: 50, duration: 2, })
      .to(".flag",{ opacity: 1, visibility: "visible", x: 0, y: -20, rotate: -20, duration: 1, })
    },
    reset(){
      
      // this.$gsap.gsap.set(".title-text", { x: 0 ,opacity: 0, visibility: "hidden"});
      this.$gsap.gsap.set(".car", { opacity: 0, visibility: "hidden"});
      this.$gsap.gsap.set(".line", { opacity: 0, visibility: "hidden"});
      this.$gsap.gsap.set(".flag", { x: 0 ,y:0, rotate:0, opacity: 0, visibility: "hidden"});
    }
  },
}
</script>

<style lang="scss" scoped>
#JudgeAndPrizeArea {
  padding: 80px 0 80px 0;
  background-color: #06102B;
  .title {
    width: 700px;
    position: relative;
    display: flex;
    justify-content: center;
    margin: auto;
    padding-bottom: 80px;
    .title-text {
      text-shadow: 0 0 2px white,0 0 5px white,0 0 1px white;
      color: white;
      font-size: 40px;
      white-space: nowrap;
    }
  }
  .car-area {
    position: relative;
    max-width: 856px;
    height: 78px;
    margin: auto;
    .line {
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translate(-50%);
    }
    .car {
      position: absolute;
      left: 0;
      bottom: 5px;
    }
    .flag {
      position: absolute;
      left: 0;
      bottom: 20px;
      filter: drop-shadow(2px 2px 6px rgba(255, 255, 255, 0.667));
    }
  }
  .card-area {
    padding-top: 60px;
    display: flex;
    gap: 60px;
    justify-content: center;
    .card {
      color: white;
      width: 485px;
      border-radius: 32px;
      height: 100%;
      .card-title {
        font-size: 40px;
        color: #9DA4FF;
        font-weight: 700;
        text-shadow: 0 0 5px #9DA4FF,0 0 1px #9DA4FF,0 0 1px #9DA4FF;
      }
      .card-content {
        text-align: left;
        padding: 40px;
        font-size: 20px;
        .card-col {
          .green-text {
            color: #55FFAD;
            padding-left: 8px;
          }
        }
        .gray-text {
          color: #858993;
          font-size: 16px;
          padding-bottom: 24px;

        }
      }
      &:hover {
        background-image: linear-gradient(
          142.45deg,
          rgba(157, 164, 255, 0.8) 1.69%,
          rgba(85, 255, 173, 0.8) 99.97%
        );
        transform: translateY(-20px);
        transition: all ease .3s;     
      }
    }
    .card1 {
      background-color: #151F3F;
      height: 100%;
      padding-top: 40px;
      border-radius: 32px;
      margin: 2px;
      border: 1px solid #313A65;
      height: 552px;
      .card-sub-title {
        font-size: 24px;
        font-weight: 700;
        padding-bottom: 8px;
      }
      .card-col {
        padding-bottom: 32px;
      }
    }
    .card2 {
      padding-top: 40px;
      height: 100%;
      background-color: #151F3F;
      border-radius: 32px;
      margin: 2px;
      border: 1px solid #313A65;
      height: 552px;
      .card-sub-title {
        font-size: 20px;
        font-weight: 700;
      }
      .card-col {
        padding-bottom: 8px;
      }
    }
  }
}
</style>