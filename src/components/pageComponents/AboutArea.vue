<template lang="pug">
#AboutArea
  .title
    .title-text {{"活動說明"}}
  .card-area
    .card.card1
      img.pencil(src="@/assets/pencil.svg")
      .description-area
        .description-title {{"開放報名"}}
        .text
          span.green-text {{"10/13"}}
          span {{"(四) 早上 11:00 "}}
        .line {{"|"}}
        .text
          span.green-text {{"10/13"}}
          span {{"(四) 早上 11:00 "}}
        p {{"截止前可修改報名組別"}}
    img.purpleplay.purpleplay1(src="@/assets/purpleplay.svg")
    .card.card2
      .description-area
        .description-title {{"各組別開賽"}}
        .text
          span.green-text {{"10/31"}}
          span {{"UI組、團體組開賽"}}
        .text
          span.green-text {{"11/07"}}
          span {{"前端組開賽"}}
        p {{"前端工程師可採用"}}
        p {{"UI 設計師的設計稿產出完整作品"}}
      img.clock(src="@/assets/clock.svg")
    .block1
    .block
    .purpleplay-down
      img.purpleplay.purpleplay2(src="@/assets/purpleplay.svg")
    .card.card3
      .description-area
        .description-title {{"線上直播"}}
        .text
          span.green-text {{"11/03 - 11/24"}}
          span {{"每週四"}}
      img.play(src="@/assets/play.svg")
    img.purpleplay.purpleplay-left.purpleplay3(src="@/assets/purpleplay.svg")
    .card.card4
      img.folder(src="@/assets/folder.svg")
      .description-area
        .description-title {{"登錄作品"}}
        .text
          span.green-text {{"10/31"}}
          span {{"(一) 中午 12:00 "}}
        .line {{"|"}}
        .text
          span.green-text {{"11/28"}}
          span {{"(一) 中午 12:00 "}}
        p {{"依賽程登錄作品"}}
</template>

<script>

export default {
  name: 'AboutArea',
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
#AboutArea {
  padding: 80px 0 80px 0;
  background-color: #0E1835;
  .title {
    width: 700px;
    position: relative;
    margin: auto;
    padding-bottom: 80px;
    &:before {
      content: url("@/assets/about-title-dot1.svg");
      position: absolute;
      transform: translate(-230px, 5px);
    }
    &:after {
      content: url("@/assets/about-title-dot2.svg");
      position: absolute;
      transform: translate(120px, -50px);
    }
    .title-text {
      text-shadow: 0 0 2px white,0 0 5px white,0 0 1px white;
      color: white;
      font-size: 48px;
    }
  }
  .card-area {
    display: grid;
    justify-content: center;
    align-items: center;
    text-align: center;
    grid-template-columns: auto 100px auto;
    gap: 10px;
    .card {
      border: 3px solid white;
      border-radius: 32px;
      width: 450px;
      height: 200px;
      padding: 50px;
      align-items: center;
      display: grid;
      grid-template-areas: "col1 col2";
      gap: 50px;
      justify-content: space-evenly;
      &:hover {
        border: 3px solid #9DA4FF;
        background-color:  rgba(110, 119, 233, 0.1);;
        box-shadow: 0 0 3px #9DA4FF,
                  0 0 8px #9DA4FF,
                  0 0 1px #9DA4FF,
                  0 0 1px #9DA4FF,
                  0 0 1px #9DA4FF,
                  inset 0 0 5px #9DA4FF;
        .description-title {
          color: #9DA4FF;
          text-shadow: 0 0 3px #9DA4FF,0 0 100px #9DA4FF,0 0 2px #9DA4FF;
        }
        transform: translateY(-5px);
        transition: all .3s ease-in-out;
        
      }
      .description-area {
        text-align: left;
        color: white;
        p {margin: 0;}
        .description-title {
          font-weight: 700;
          font-size: 32px;
          padding-bottom: 16px;
        }
        .line {
          padding: 2px 0 2px 100px;
        }
        .green-text {
          color: #55FFAD;
          padding-right: 8px;
        }
        .text {
          padding: 8px 0;
        }
      }
      .pencil, .folder {
        grid-area: col1;
      }
      .clock, .play {
        grid-area: col2;
      }
    }

    .purpleplay {
      width: 80px;
      height: 80px;
    }
    .purpleplay-down {
      transform: rotate(90deg);
    }
    .purpleplay-left {
      transform: rotate(180deg);
    }
  }
  
}
</style>