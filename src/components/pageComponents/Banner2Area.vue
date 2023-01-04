<template lang="pug">
#Banner2Area
  .ribbon.ribbon1
    .ribbon-rolling
      .ribbon-text(v-for="item in 10")
        img(src="@/assets/interactive web.svg")
        img(src="@/assets/dot.svg")
  .center-area
    .boom-area
      img.boom(src="@/assets/banner2-text.svg")
      .cross-text
        span {{"前端工程師"}}
        span {{"x"}}
        span {{"UI設計師"}}
    img.hand-right(src="@/assets/hand-right.svg")
    img.hand-left(src="@/assets/hand-left.svg")
    img.small-ball(src="@/assets/frontend ball.svg")
    img.big-ball(src="@/assets/ux design.svg")

  .ribbon.ribbon2
    .ribbon-rolling
      .ribbon-text(v-for="item in 10")
        img(src="@/assets/interactive web.svg")
        img(src="@/assets/dot.svg")

</template>

<script>
export default {
  name: 'Banner2Area',
  components: {

  },
  data(){
    return{
      
      
    }
  },
  mounted(){
   this.$gsap.gsap.to(".ribbon", {
      xPercent: "-50", 
      ease: "none",
      duration: 50,
      repeat: -1,
    });
    const tl = this.$gsap.gsap.timeline({
      scrollTrigger: {
        trigger: ".ribbon1",
        start: 'top 100%',
        end: 'top 1%',
        scrub: true,
      },
    })
    // const t2 = this.$gsap.gsap.timeline({
    //   scrollTrigger: {
    //     trigger: ".boom-area",
    //     markers: true,
    //     start: 'top 100%',
    //     end: 'top 1%',
    //     repeat: -1
    //   },
    // })
    tl.fromTo(
      ".small-ball",
      {
        rotate: 180,
        yPercent: -150,
        transformOrigin: "50% 50%",
      },
      {
        rotate: 0,
        yPercent: 0,
        transformOrigin: "50% 50%",
      },
      "<"
    ).to('.boom', {
      visibility: "hidden",
      scale: 0,
      opacity: 0,
    }).to('.hand-right', {
      visibility: "hidden",
      left: '40%',
      top: '50%',
      scale: 0,
      opacity: 0,
      rotate: -120
      // duration: 10,
    },"<")
    .to('.hand-left', {
      visibility: "hidden",
      left: '70%',
      top: '50%',
      scale: 0,
      opacity: 0,
      rotate: 120
      // duration: 10,
    },"<").to('.boom', {
      visibility: "visible",
      opacity: 1,
      scale: 1
      // duration: 10,
    }).to('.hand-right', {
      visibility: "visible",
      left: '50%',
      xPercent: 50,
      opacity: 1,
      scale: 1,
      rotate: 0
      // duration: 10,
    },"<").to('.hand-left', {
      visibility: "visible",
      left: '50%',
      xPercent: -50,
      opacity: 1,
      scale: 1,
      rotate: 0
      // duration: 10,
    },"<")


    // t2.to('.small-ball', {
    //   scale: 0,
    //   opacity: 0,
    //   duration: 1.5,
    //   rotate: -360
    // }).to('.small-ball', {
    //   visibility: "visible",
    //   opacity: 1,
    //   scale: 1,
    //   rotate:0
    //   // duration: 10,
    // },"<")

    // this.$gsap.gsap.fromTo(
    //     '.hand-right',
    //     { scale: 0, opacity: 0, visibility: "hidden" },
    //     {
    //       duration: 1.5,
    //       scale: 1,
    //       visibility: "visible",
    //       opacity: 1,
    //       ease: "bounce.out",
    //       yoyo: true,
    //       overwrite: "auto",
    //     }
    //   );
  },
  methods: {
  
  },
}
</script>

<style lang="scss" scoped>
#Banner2Area {
  position: relative;
  height: 100vh;
  background-color: #ffffff;
  opacity: 1;
  background-image:  linear-gradient(rgba(236,237,255,1) 1px, transparent 1px), linear-gradient(to right, rgba(236,237,255,1) 1px, #ffffff 1px);
  background-size: 50px 50px;
  margin-bottom: 100px;
  .ribbon2 {
    bottom: 0;
  }
  .ribbon1 {
    top: 0;
  }
  .ribbon {
    background: linear-gradient(90deg, #9DA4FF 0%, #55FFAD 100%);
    position: absolute;
    left: 0;
    z-index: 2;
    .ribbon-rolling {
      height: 67px;
      display: flex;
      justify-content: center;
      align-items: center;
      .ribbon-text {
        margin-right: 40px;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 40px;
      }
    }
  }
  .center-area {
    position: relative;
    height: 100%;
    .boom-area {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      .cross-text {
        padding-top: 36px;
        font-weight: 700;
        font-size: 24px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: nowrap;
        flex-direction: row;
        gap: 50px;
      }
      .boom {
        width: 700px;
      }
    }
    .hand-left {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-500px, -50%);
    }
    .hand-right {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(200px, -50%);
    }
    .small-ball {
      position: absolute;
      top: 0;
      right: 100px;
    }
    .big-ball {
      position: absolute;
      bottom: -50px;
      left: 0;
    }
  }
}
</style>