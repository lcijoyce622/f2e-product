<template lang="pug">
#QAArea
  .title
    span.title-text {{"Q & A"}}
  .tab-title-area
    .tab(v-for="title in tabArr" :key="title.id")
      p(@click="SwitchTab(title.id)" :class="{'chose-tab': chooseTab === title.id }") {{title.text}}

  .tab-content
    .question(v-for="(content,index) in answerArr" :key="index")
      .Q-text {{`Q${index+1}`}}
      .q-text {{content.q}}
      .a-text {{content.a}}
  .sign-up-btn {{"立即報名"}}
</template>

<script>

export default {
  name: 'QAArea',
  components: {

  },
  data(){
    return{
      chooseTab: 1,
      tabArr: [
        {
          id:1,
          text: '常見問題'
        },
        {
          id:2,
          text: 'UI 設計師常見問題'
        },
        {
          id:3,
          text: '前端工程師常見問題'
        },
        {
          id:4,
          text: '團體組常見問題'
        }
      ],
      tabAnswers: [
        [
            {
              q:"如果某一週不小心挑戰失敗，是否能再繼續挑戰後面關卡？",
              a:"可以，儘管那週挑戰失敗，之後您仍可以挑選喜歡的關卡進行挑戰，並在該關卡期限內繳交作品。"
            },
            {
              q:"大家都好強，我怕我做的東西沒有達到過關門檻，不敢登錄作業",
              a:"這個活動並非競爭性質，每個參賽者都是你的隊友，最大的敵人是你自己，因為你必須定期練功前端開發，讓自己能夠順利完賽。"
            },
            {
              q:"我不確定自己的版型有沒有符合過關門檻，要寫到什麼程度才有過關門檻？",
              a:"主辦單位其實不會去審核大家的程式碼，只要你認為當週你有針對主題有做到一定程度，就算是半完成品也請大方投稿，不用擔心。"
            },
            {
              q:"我已經寫到一半了，但時間快來不及，可以先投稿嗎？",
              a:"可以，有投稿表示你還會持續努力在這次活動上。"
            }
          ],
        [
            {
              q:"到時候投稿的平台是提供什麼呢？我也不像是工程師可以有Codepen 上傳",
              a:"其中投稿的欄位裡面會有一個「線上標示文件」，像是 Adobe XD 便有提供該服務(範例連結)，屆時提供標示文件後，便可讓其他前端工程師採用你的設計稿來開發。"
            },
            {
              q:"投稿上去的 UI 作品，我知道需要授權讓前端工程師組做成 Web 介面，那授權部分可以設定嗎？",
              a:"會有的，屆時平台投稿流程上，會讓您的作品可以選擇 CC0、CC BY 等授權，以保障您的 UI 作品權益。"
            },
            {
              q:"一定要上傳「線上標示文件」嗎？",
              a:"是的，因為這樣才有辦法讓其他前端工程師，能採用您的設計稿，將您的設計稿實作出網頁格式。如果您是使用 Sketch，也可使用 Sketch Measure 編譯出來後，壓縮 ZIP 到雲端空間 (Dropbox、Google Drive)。"
            },
            {
              q:"不能使用 PS、Illustrator 設計嗎？",
              a:"只要您能找到 PS 或 Illustrator 產出線上標示文件的方式就可以，因為前端工程師大部分皆比較少具有繪圖軟體，所以用線上標示文件將會減少許工程師協作上的溝通時間。"
            },
            {
              q:"當每週一題目出來後，我有一些設計進度也可以先投稿嗎？",
              a:"可以，團隊在協作過程中，一定也會先出些進度提供前端切版，有進度時您也可以先投稿，讓前端工程師可以先接手，之後再透過 FB 社團來溝通進度即可。"
            }
          ],
        [
            {
              q:"我可以不依照設計稿，自己做版面嗎？因為我自己想多練習js / 後端",
              a:"可以，The F2E 活動是希望讓大家人人有功練，所以依照你自己想投入的方向練功即可。CSS 也可以用框架，例如 Bootstrap。"
            },
            {
              q:"前端介面一定要長得一模一樣嗎？",
              a:"不用，依照自己的想法來開發也可以"
            },
            {
              q:"有現成的網頁靜態頁面嗎？我想只練習 JS / 後端就好",
              a:"這段我們不會提供，畢竟每個人習慣的 Coding style 又不一樣，產出的 HTML、CSS 並非是自己習慣的 Layout 反而會更花時間。"
            },
            {
              q:"那我只想要練習 JS，HTML / CSS 我用陽春版，不依照設計稿開發可以嗎？",
              a:"只要您能找到 PS 或 Illustrator 產出線上標示文件的方式就可以，因為前端工程師大部分皆比較少具有繪圖軟體，所以用線上標示文件將會減少許工程師協作上的溝通時間。"
            },
            {
              q:"當每週一題目出來後，我有一些設計進度也可以先投稿嗎？",
              a:"可以，你可以當做我們就是出一個主題，你依照那主題當作參考方向來開發即可。"
            }
          ],
        [
            {
              q:"請問團體組最多幾人？",
              a:"最多 4 人，投稿作品時請派一位組長來投稿即可。"
            },
            {
              q:"我對獎項有興趣，可以只做第三道主題就好嗎？",
              a:"可以，您可以在這場活動中，和組員一起打磨第三道主題，不用三個主題都做。"
            },
            {
              q:"那團體第三道主題最晚投稿期限為？",
              a:"團體組投稿第三週 UI 最晚投稿時間為 11/21(一) 中午 12 點，前端最晚投稿期限為 11/28(一) 中午 12 點。"
            },
            {
              q:"我們團體組比較想做手機 APP ，可以投稿並符合並符合評審門檻嗎？",
              a:"您可以開發手機 APP，若有在期限前投稿也能獲得數位獎狀。但評審門檻僅限 Web 瀏覽器應用開發，Android、iOS APP 則不在評審範圍內，故不符合評審門檻。"
            },
            {
              q:"請問除了前端開發、 UI 設計外，還能做其他加值應用嗎？例如後端動態應用整合？",
              a:"可以的，只要能透過網頁瀏覽器操控您的服務，並有使用到 TDX API 的任何一個 API，您可以依照本次主題「全台公車動態時刻查詢應用服務」做最大的加值整合應用，甚至搭配後端應用，整合多個外部 API 也是可以的。"
            },
            {
              q:"團體組的 UI 設計稿，可以讓『個人組 - 前端工程師』組別採用嗎？",
              a:"不能，預設是不能讓『個人組-前端工程師』採用。"
            }
          ]
      ]
    }
  },
  computed: {
    answerArr(){
      console.log(this.tabAnswers[1]);
      return this.tabAnswers[`${this.chooseTab-1}`]
    }
  },
  mounted(){
   
  },
  methods: {
    SwitchTab(id){
      console.log(id);
      this.chooseTab = id;
    }
    
  },
}
</script>

<style lang="scss" scoped>
#QAArea {
  padding: 80px 0 80px 0;
  background-color: #06102B;
  .title {
    position: relative;
    margin: auto;
    padding-bottom: 60px;
    .title-text {
      text-shadow: 0 0 2px white,0 0 5px white,0 0 1px white;
      color: white;
      font-size: 48px;
      white-space: nowrap;
      font-family: Monument Extended;
    }
  }
  .tab-title-area {
    justify-content: center;
    display: flex;
    flex-wrap: nowrap;
    gap: 32px;
    color: white;
    cursor: pointer;
    .tab {
      position: relative;
      color: #858993;
    }
  }
  .chose-tab {
    color: white;
    &::before{
      content: " ";
      width: 12px;
      height: 5px;
      border-radius: 20px;
      background-color: #55FFAD;
      position: absolute;
      bottom: 5px;
      left: 50%;
      transform: translateX(-50%);
    }
  }
  .tab-content {
    background-color: white;
    border-radius: 32px;
    padding: 80px;
    width: 721px;
    margin: auto;
    margin-bottom: 60px;
    .question {
      display: grid;
      grid-template-columns: 60px 1fr;
      column-gap: 24px;
      row-gap: 8px;
      text-align: left;
      padding-bottom: 60px;
      .Q-text {
        font-family: Monument Extended !important;
        font-size: 32px;
        font-weight: 400;
        color: #6E77E9;
      }
      .q-text {
        font-size: 24px;
        font-weight: 700;
        color: #06102B;
      }
      .a-text {
        grid-row-start: 2;
        grid-row-end: 2;
        grid-column-start: 2;
        grid-column-end: 3;
      }
    }
  }
  .sign-up-btn {
    margin: auto;
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