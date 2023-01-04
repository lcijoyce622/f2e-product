<template lang="pug">
#CardArea
  .title
    .title-text {{"年度最強合作 三大主題來襲"}}
    img.thunder1(src="@/assets/thunder1.svg")
    img.thunder2(src="@/assets/thunder2.svg")
    .sub-title-area
      .sub-title {{"各路廠商強強聯手"}}
      .sub-title {{"共同設計出接地氣的網頁互動挑戰關卡"}}
  .about-card-area
    .card(v-for="(item,index) in cards" :key="index" :class="`aboutcard${index+1}`")
      .card-front
        .week {{item.week}}
        img(src="@/assets/lock.svg")

      .card-back
        p.company {{`# ${item.company}`}}
        p.card-back-title {{item.title}}
        p.card-back-subtitle {{item.subtitle}}
        img.card-icon(:src="item.url")
        .bottom-text
          .week {{item.week}}
          .detail
            p {{"查看關卡細節"}}
            img.thunder1(src="@/assets/arrow.svg")
</template>

<script>
import game from "@/assets/game.svg";
import card2 from "@/assets/card2.svg";
import card3 from "@/assets/card3.svg";
export default {
  name: 'CardArea',
  components: {

  },
  data(){
    return{
      cards:[
        {
          company : "板塊設計",
          title: "The F2E 活動網站設計",
          subtitle: "視覺滾動",
          url: game,
          week: "WEEK 1"
        },
        {
          company : "凱鈿行動科技",
          title: "今晚，我想來點點簽",
          subtitle: "CANVAS",
          url: card2,
          week: "WEEK 2"
        },
        {
          company : "鈦坦科技",
          title: "Scrum 新手村",
          subtitle: "JS Draggable",
          url: card3,
          week: "WEEK 3"
        }
      ]
      
    }
  },
  mounted(){
    this.$gsap.ScrollTrigger.create({
      trigger: ".about-card-area",
      marker: true,
      onEnter:() => this.animated(),
      onEnterBack:()=> this.animated(),
      onLeave:()=> this.hide()
    });
  },
  methods: {
    hide() {
      console.log("leave");
      this.$gsap.gsap.set('.aboutcard1', { y:100, opacity: 0, visibility: "hidden" });
      this.$gsap.gsap.set('.aboutcard2', { y:100, opacity: 0, visibility: "hidden" });
      this.$gsap.gsap.set('.aboutcard3', { y:100, opacity: 0, visibility: "hidden" });
      this.$gsap.gsap.set('.aboutcard1 .card-back', {  rotateY: 180});
      this.$gsap.gsap.set('.aboutcard1 .card-front', { rotateY: 0});
      this.$gsap.gsap.set('.aboutcard2 .card-back', { rotateY: 180});
      this.$gsap.gsap.set('.aboutcard2 .card-front', { rotateY: 0});
      this.$gsap.gsap.set('.aboutcard3 .card-back', { rotateY: 180});
      this.$gsap.gsap.set('.aboutcard3 .card-front', { rotateY: 0});

    },
     animated() {
      console.log("enter");
      const animation = this.$gsap.gsap.timeline()
      animation.fromTo('.aboutcard3',{ y:100, opacity: 0, visibility: "hidden" },{  y:0, opacity: 1, visibility: "visible" ,duration: 1, })
      .fromTo('.aboutcard2',{ y:100, opacity: 0, visibility: "hidden" },{  y:0, opacity: 1, visibility: "visible" ,duration: 1,delay: 0.4, },"<")
      .fromTo('.aboutcard1',{ y:100, opacity: 0, visibility: "hidden" },{  y:0, opacity: 1, visibility: "visible" ,duration: 1, delay: 0.4,},"<")
      .fromTo('.aboutcard1 .card-back',{  rotateY: 180}, {  rotateY: 0 ,duration: 1, })
      .fromTo('.aboutcard1 .card-front', { rotateY: 0},{  rotateY: 180 ,duration: 1, },"<")
      .fromTo('.aboutcard2 .card-back',{  rotateY: 180}, {  rotateY: 0 ,duration: 1 })
      .fromTo('.aboutcard2 .card-front', { rotateY: 0},{  rotateY: 180 ,duration: 1, },"<")
      .fromTo('.aboutcard3 .card-back',{  rotateY: 180}, {  rotateY: 0 ,duration: 1})
      .fromTo('.aboutcard3 .card-front', { rotateY: 0},{  rotateY: 180 ,duration: 1, },"<")

      // //設定元素初始值
      // element.style.transform = `translate(0px, ${y}px)`;
      // this.$gsap.gsap.fromTo(
      //   element,
      //   { y: y, opacity: 0, visibility: "hidden" },
      //   {
      //     duration: 1,
      //     delay: 0.2,
      //     x: 0,
      //     y: 0,
      //     visibility: "visible",
      //     opacity: "1",
      //     ease: "expo",
      //     overwrite: "auto",
      //   }
      // );
    }
  },
}
</script>

<style lang="scss" scoped>
#CardArea {
  padding-top: 80px;
  .title {
    width: 700px;
    position: relative;
    margin: auto;
    .title-text {
      text-shadow: 0 0 4px #55FFAD,0 0 100px #55FFAD,0 0 1px #55FFAD;
      box-shadow: 0 0 3px #fff,
                  0 0 1px #fff,
                  0 0 1px #55FFAD,
                  0 0 1px #55FFAD,
                  0 0 1px #55FFAD,
                  inset 0 0 5px #55FFAD;
      color: #55FFAD;
      font-size: 48px;
      border: 5px solid #55FFAD;
      border-radius: 100px;
      padding: 10px 20px;
    }
    .thunder1 {
      position: absolute;
      top: -80px;
      right: -60px;
    }
    .thunder2 {
      position: absolute;
      top: -20px;
      right: -70px;
    }
    .sub-title-area {
      padding-top: 50px;
      padding-bottom: 60px;
      display: flex;
      flex-direction: column;
      gap: 5px;
      justify-content: center;
      .sub-title {
        color: white;
      }
    }
  }
  .about-card-area {
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    gap: 40px;
    justify-content: center;
    align-items: center;
    padding-bottom: 100px;
    .card {
      width: 300px;
      height: 360px;
      position: relative;
      // &:hover {
      //   .card-back {
      //     transform: rotateY(0deg);
      //   }
      //   .card-front {
      //     transform: rotateY(180deg);
      //   }
      // }
    }
    .card-front {
      width: 300px;
      height: 360px;
      position: absolute;
      top: 0;
      left: 0;
      border-radius: 32px;
      background: linear-gradient(180deg, #9DA4FF 0%, #6E77E9 100%);
      backface-visibility: hidden;
      transition: 0.6s;
      transform-style: preserve-3d;
      .week {
        font-weight: 900;
        font-size: 32px;
        color: white;
        padding: 50px 0 16px 0;

      }

    }

    .card-back {
      position: absolute;
      top: 0;
      left: 0;
      width: 300px;
      height: 360px;
      border-radius: 32px;
      background-color: white;
      color: #6E77E9;

      transform: rotateY(-180deg);
      backface-visibility: hidden;
      transition: 0.6s;
      transform-style: preserve-3d;
      .card-icon {
        width: 126px;
        margin: 22px 0 34px 0;
      }
      .company {
        margin: 16px 0;
        display: inline-block;
        background-color: #83FAC1;
        border-radius: 8px;
        font-weight: 700;
        font-size: 16px;
        color: black;
        padding: 4px 8px;
      }
      .card-back-title {
        margin:0;
        font-weight: 700;
        font-size: 24px;
      }
      .card-back-subtitle {
        margin: 8px 0 0;
        font-size: 20px;
        font-weight: 500;
        font-family: 'Montserrat', sans-serif;

      }
      .bottom-text {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
        .week {
          margin: 0;
          color: #C4C8FF;
        }
        .detail {
          font-weight: 700;
          display: flex;
          flex-direction: row;
          justify-content: space-around;
          align-items: center;
          p {
            margin: 0;
          }
        }
      }
    }
    .week {
      font-weight: 700;
      font-family: Monument Extended;
    }

  }
}
</style>