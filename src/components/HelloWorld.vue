<template lang="pug">
.area
  .section1
    .container1
      .box1.scrub {{1}}
  .section2
  .section3
    .gate.gate-left.gate-left-1.z-20
      i {{1}}
    .gate.gate-right.gate-right-1.z-20
      h2 {{"WEEK 1"}}
    .gate.gate-left.gate-left-2.z-10
      i {{2}}
    .gate.gate-right.gate-right-2.z-10
      h2 {{"WEEK 2"}}
    .gate.gate-left.gate-left-3.z-5
      i {{"3"}}
    .gate.gate-right.gate-right-3.z-5
      h2 {{"WEEK 3"}}
    .gate.gate-left.gate-left-4.z-0
      i {{"4"}}
    .gate.gate-right.gate-right-4.z-0
      h2 {{"WEEK 4"}}
</template>

<script>
// import gsap from 'gsap'

// import { ScrollTrigger, TextPlugin } from 'gsap';

export default {
  name: "HelloWorld",
  mounted() {
    // const timeline = gsap.timeline()
    // timeline.to('.box', {x: 100, duration:1})
    // timeline.to('.box', {y: 100, duration:1}, "<");
    const tl = this.$gsap.gsap.timeline({
      scrollTrigger: {
        trigger: ".box1",
        start: 'top 35%',
        end: 'top 1%',
        scrub: true,
      },
    })
    tl.to('.box1', {
      top: 0,
      left: '50%',
      xPercent: '-50',
      // duration: 10,
      position: 'absolute',
    }).to('.box1', {
      top: '100%',
      yPercent: '-100',
      // duration: 20,
      position: 'absolute',
    }).to('.box1', {
      top: '50%',
      yPercent: '-100',
      // duration: 20,
      position: 'absolute',
    }).to('.box1', {
      top: '100%',
      yPercent: '-100',
      // duration: 20,
      position: 'absolute',
    })
    const srollTL = this.$gsap.gsap.timeline({
      scrollTrigger: {
        trigger: ".section3",
        pin: true,
        scrub: true,
      },
    });

    srollTL.to(".gate-left-1", { xPercent: "-100" });
    srollTL.to(".gate-right-1", { xPercent: "100" }, "<");
    srollTL.to(".gate-left-2", { xPercent: "-100" });
    srollTL.to(".gate-right-2", { xPercent: "100" }, "<");
    srollTL.to(".gate-left-3", { xPercent: "-100" });
    srollTL.to(".gate-right-3", { xPercent: "100" }, "<");
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
// .area {
//   width: 100%;
//   height: 100%;
// }
.section1 {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #fd89b9;
}

.container1 {
  position: relative;
  margin-bottom: -100px;
  width: 50%;
  height: 30%;
  background-color: #fff;
  border: 1px solid #000;
}

.box1 {
  width: 100px;
  height: 100px;
  background-color: #165e83;
}

.section2 {
  display: flex;
  justify-content: center;
  padding: 200px 0;
  background-color: #fd89b9;
  // background-color: #1e2a60;
}
  .section3 {
    position: relative;
    display: flex;
    height: 100vh;
   overflow: hidden;
  }
  i {
    font-size: 10rem;
  }
  .gate {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50%;
    height: 100%;
  }

  .z-0 {
    z-index: 0;
  }
  .z-5 {
    z-index: 5;
  }
  .z-10 {
    z-index: 10;
  }
  .z-20 {
    z-index: 20;
  }
  .gate-left {
    left: 0;
  }
  .gate-right {
    right: 0;
  }

  .gate-right-1 {
    background-color: #ffe7a9;
  }
  .gate-right-1 > i {
    color: #69f0ae;
  }
  .gate-left-1 {
    background-color: #e7ffa9;
  }
  .gate-left-1 > i {
    color: #ffa09d;
  }

  .gate-right-2 {
    background-color: #559496;
  }
  .gate-right-2 > i {
    color: #69f0ae;
  }
  .gate-left-2 {
    background-color: #005f62;
  }
  .gate-left-2 > i {
    color: #ffa09d;
  }

  .gate-right-3 {
    background-color: #69f0ae;
  }
  .gate-right-3 > i {
    color: #69f0ae;
  }
  .gate-left-3 {
    background-color: #ddfbed;
  }
  .gate-left-3 > i {
    color: #ffa09d
  }
  .gate-right-4 {
    background-color: #1d5681;
  }

.section4 {
  min-height: 100vh
}

</style>
