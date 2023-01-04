<template lang="pug">
#QuestionArea
  .area.area1.from-left
    img.bubble1(src="@/assets/q3.svg")
    img.bubble2(src="@/assets/q5.svg")
    img.bubble3(src="@/assets/q9.svg")
    .bubble4
      img(src="@/assets/q6.svg")
      p {{"羨慕別人的酷酷網頁動畫？"}}
  .area.area2.from-right
    img.bubble1(src="@/assets/q1.svg")
    img.bubble2(src="@/assets/q8.svg")
    .bubble3
      img(src="@/assets/q7.svg")
      p {{"滿足不了同事的許願？"}}
  .area.area3.from-left
    img.bubble1(src="@/assets/q4.svg")
    img.bubble2(src="@/assets/q2.svg")
    .bubble3
      img(src="@/assets/q10.svg")
      p {{"動畫技能樹太雜無從下手？"}}
    img.bubble4(src="@/assets/q11.svg")

</template>

<script>
export default {
  name: 'QuestionArea',
  components: {

  },
  data(){
    return{
      
      
    }
  },
  mounted(){
    this.$gsap.gsap.utils.toArray(".area").forEach(element => {
      this.hide(element);
      this.$gsap.ScrollTrigger.create({
        trigger: element,
        onEnter:() => this.animated(element),
        onEnterBack:()=> this.animated(element),
        onLeave:()=> this.hide(element),
      });
    })
  },
  methods: {
    hide(element) {
      this.$gsap.gsap.set(element, { opacity: 0, visibility: "hidden" });
    },

    animated(element) {
      this.$gsap.gsap.fromTo(
        element,
        { scale: 0, opacity: 0, visibility: "hidden" },
        {
          duration: 1.5,
          scale: 1,
          visibility: "visible",
          opacity: 1,
          ease: "bounce.out",
          yoyo: true,
          overwrite: "auto",
        }
      );
    }
  },
}
</script>

<style lang="scss" scoped>
#QuestionArea {
  position: relative;
  padding-bottom: 200px;
  .area {
    margin-bottom: 150px;
    width: 900px;
    height: 350px;
    margin: auto;
  }
  .area1 {
    position: relative;
    .bubble1 {
      position: absolute;
      top: 0;
      left: 60px;
    }
    .bubble2 {
      position: absolute;
      top: 10px;
      left: 400px;
    }
    .bubble3 {
      position: absolute;
      top: 80px;
      left: 600px;
    }
    .bubble4 {
      position: absolute;
      top: 120px;
      left: 10px;
      p {
        position: absolute;
        top: 15px;
        left: 40px;
        font-weight: 400;
        font-size: 40px;
        transform: rotate(-3deg);
      }
    }
  }
  .area2 {
    position: relative;
    .bubble1 {
      position: absolute;
      top: 150px;
      left: 0px;
    }
    .bubble2 {
      position: absolute;
      top: 100px;
      left: 320px;
    }
    .bubble3 {
      position: absolute;
      top: 0px;
      right: 0px;
      p {
        position: absolute;
        top: 50px;
        left: 60px;
        font-weight: 400;
        font-size: 40px;
        transform: rotate(-15deg);
      }
    }
  }

  .area3 {
    position: relative;
    .bubble1 {
      position: absolute;
      top: 0px;
      left: 300px;
    }
    .bubble2 {
      position: absolute;
      top: 0px;
      right: 90px;
    }
    .bubble3 {
      position: absolute;
      top: 150px;
      left: 100px;
      p {
        position: absolute;
        top: 10px;
        left: 45px;
        font-weight: 400;
        font-size: 40px;
        transform: rotate(-4deg);
      }
    }
    .bubble4 {
      position: absolute;
      top: 150px;
      right: 10px;
    }
  }
 
}
</style>