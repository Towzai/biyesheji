<template>
  <div id="news-index">
    <heard class="heard1"></heard>
    <div class="heard"></div>
    <div class="main">
      <div class="news-box" v-for="(item,index) in newsList" :key="index">
        <div class="news-left">
          <img :src="item.img" alt />
        </div>
        <div class="news-right">
          <p>{{item.title}}</p>
          <p>{{item.msg}}</p>
          <div class="btn">查看详情</div>
        </div>
      </div>
    </div>
    <div class="bottom">
      <div class="bottom-btn">加载更多</div>
    </div>
  </div>
</template>

<script>
import heard from "@/components/public/heard";
export default {
  components: {
    heard
  },
  data() {
    return {
      newsList: [
        {
          img: require("@/assets/images/news/news1.png"),
          title: "地板砖粘贴怎么既美观又结实，地板砖粘贴小技巧（二）",
          msg:
            "地板砖粘贴技巧三：巧用干式铺贴法。一般选择干式铺法用于打砂浆的底部，尽管成本较高，但地板的整体效果是平坦、美观，耐用，砂浆必须干燥并温和。标准是手握成团，落地开花。在铺干砂浆前，比较好的涂刷水灰的比例是0.4-0.5。地板砖粘贴技巧四：完成摊铺后，应立即清理在砖外部灰尘和砂浆，以防止在瓷砖外的砂浆粘接，地砖铺贴进行勾缝处理一般在瓷砖干固以后做比较好，防治瓷砖没有完全干燥操作。"
        },
        {
          img: require("@/assets/images/news/news2.png"),
          title: "地板砖粘贴怎么既美观又结实，地板砖粘贴小技巧（二）",
          msg:
            "地板砖粘贴技巧三：巧用干式铺贴法。一般选择干式铺法用于打砂浆的底部，尽管成本较高，但地板的整体效果是平坦、美观，耐用，砂浆必须干燥并温和。标准是手握成团，落地开花。在铺干砂浆前，比较好的涂刷水灰的比例是0.4-0.5。地板砖粘贴技巧四：完成摊铺后，应立即清理在砖外部灰尘和砂浆，以防止在瓷砖外的砂浆粘接，地砖铺贴进行勾缝处理一般在瓷砖干固以后做比较好，防治瓷砖没有完全干燥操作。"
        },
        {
          img: require("@/assets/images/news/news3.png"),
          title: "地板砖粘贴怎么既美观又结实，地板砖粘贴小技巧（二）",
          msg:
            "地板砖粘贴技巧三：巧用干式铺贴法。一般选择干式铺法用于打砂浆的底部，尽管成本较高，但地板的整体效果是平坦、美观，耐用，砂浆必须干燥并温和。标准是手握成团，落地开花。在铺干砂浆前，比较好的涂刷水灰的比例是0.4-0.5。地板砖粘贴技巧四：完成摊铺后，应立即清理在砖外部灰尘和砂浆，以防止在瓷砖外的砂浆粘接，地砖铺贴进行勾缝处理一般在瓷砖干固以后做比较好，防治瓷砖没有完全干燥操作。"
        },
        {
          img: require("@/assets/images/news/news4.png"),
          title: "地板砖粘贴怎么既美观又结实，地板砖粘贴小技巧（二）",
          msg:
            "地板砖粘贴技巧三：巧用干式铺贴法。一般选择干式铺法用于打砂浆的底部，尽管成本较高，但地板的整体效果是平坦、美观，耐用，砂浆必须干燥并温和。标准是手握成团，落地开花。在铺干砂浆前，比较好的涂刷水灰的比例是0.4-0.5。地板砖粘贴技巧四：完成摊铺后，应立即清理在砖外部灰尘和砂浆，以防止在瓷砖外的砂浆粘接，地砖铺贴进行勾缝处理一般在瓷砖干固以后做比较好，防治瓷砖没有完全干燥操作。"
        },
        {
          img: require("@/assets/images/news/news5.png"),
          title: "地板砖粘贴怎么既美观又结实，地板砖粘贴小技巧（二）",
          msg:
            "地板砖粘贴技巧三：巧用干式铺贴法。一般选择干式铺法用于打砂浆的底部，尽管成本较高，但地板的整体效果是平坦、美观，耐用，砂浆必须干燥并温和。标准是手握成团，落地开花。在铺干砂浆前，比较好的涂刷水灰的比例是0.4-0.5。地板砖粘贴技巧四：完成摊铺后，应立即清理在砖外部灰尘和砂浆，以防止在瓷砖外的砂浆粘接，地砖铺贴进行勾缝处理一般在瓷砖干固以后做比较好，防治瓷砖没有完全干燥操作。"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
#news-index {
  width: 100%;
}
.heard1 {
    position: absolute;
    top: 30px;
  }
.heard {
  width: 100%;
  height: 200px;
  background: skyblue;
  margin-bottom: 100px;
  
}
.main {
  width: 100%;
  .news-box {
    width: 1200px;
    height: 300px;
    display: flex;
    justify-content: space-between;
    margin: 0 auto 48px auto;
    .news-left {
      width: 450px;
      height: 300px;
    }
    .news-right {
      width: 718px;
      height: 234px;
      > p {
        &:first-child {
          font-size: 24px;
          font-weight: bold;
          color: #666;
          margin-bottom: 30px;
          padding-top: 23px;
        }
        &:nth-child(2) {
          font-size: 16px;
          letter-spacing: 1px;
          color: #999;
          margin-bottom: 24px;
          line-height: 24px;
        }
      }
      .btn {
        width: 160px;
        height: 48px;
        background: #f1c92f;
        text-align: center;
        line-height: 48px;
        color: #fff;
        letter-spacing: 2px;
        cursor: pointer;
      }
    }
  }
}
.bottom {
  width: 100%;
  height: 48px;
  margin-bottom: 55px;
  position: relative;
  .bottom-btn {
    width: 160px;
    height: 48px;
    background: skyblue;
    color: #fff;
    text-align: center;
    line-height: 49px;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    cursor: pointer;
  }
}
</style>

