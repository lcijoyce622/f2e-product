<template lang="pug">
#MainArea
  .nav-area
    .nav-logo
      img(src="@/assets/thef2elogo.svg")
    .nav-link-area
      p {{"關卡資訊"}}
      p {{"攻略資源"}}
      p {{"求職專區"}}
      .login-btn {{"登入"}}
  BannerArea
  QuestionArea
  Banner2Area.banner2Area
  CardArea.CardArea
  AboutArea
  JudgeAndPrizeArea
  QAArea
  SponsorsArea
  .copy-right
    .copy-right-text {{"Copyright © 2022 HexSchool.All rights reserved."}}
</template>

<script>
import BannerArea from "@/components/pageComponents/BannerArea"
import QuestionArea from "@/components/pageComponents/QuestionArea"
import Banner2Area from "@/components/pageComponents/Banner2Area"
import CardArea from "@/components/pageComponents/CardArea"
import AboutArea from "@/components/pageComponents/AboutArea"
import JudgeAndPrizeArea from "@/components/pageComponents/JudgeAndPrizeArea"
import QAArea from "@/components/pageComponents/QAArea"
import SponsorsArea from "@/components/pageComponents/SponsorsArea"
export default {
  name: 'MainArea',
  components: {
    BannerArea,
    QuestionArea,
    Banner2Area,
    CardArea,
    AboutArea,
    JudgeAndPrizeArea,
    QAArea,
    SponsorsArea
  },
  data(){
    return{
      
    }
  }
}
</script>

<style lang="scss" scoped>
#MainArea {
  width: 100vw;
  overflow-x: hidden;
  background-color: #06102B;
  .nav-area {
    padding: 0 30px;
    height: 90px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .nav-logo {
      width: 180px;
      margin-left: 2px;
    }
    .nav-link-area {
      display: flex;
      flex-wrap: nowrap;
      flex-direction: row;
      align-items: center;
      gap: 32px;
      color: #858993;
      p {
        position: relative;
        cursor: pointer;
        &:hover {
          color: white;
          text-shadow: 0 0 1px white,0 0 5px white,0 0 1px white;
          &::before{
            content: " ";
            width: 12px;
            height: 5px;
            border-radius: 20px;
            background-color: #55FFAD;
            position: absolute;
            bottom: -10px;
            left: 50%;
            transform: translateX(-50%);
          }
        }
      }
      .login-btn {
        color: white;
        padding: 10px 20px;
        border: 2px solid white;
        border-radius: 40px;
        cursor: pointer;
        &:hover {
          color: #55FFAD;
          background-color: #55ffad57;
          border: 2px solid #55FFAD;
          box-shadow: 0 0 3px #55FFAD,
                  0 0 1px #55FFAD,
                  0 0 3px #55FFAD,
                  0 0 3px #55FFAD,
                  0 0 1px #55FFAD,
                  inset 0 0 0px #55FFAD;
        }
      }
    }
  }
  .banner2Area {
    
    }
  .copy-right {
    background-color: #06102B;
    width: 100%;
    height: 84px;
    .copy-right-text {
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
    }
  }
}

</style>

