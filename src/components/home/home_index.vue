<template>
  <div id="home-index">
    <heard class="heard1"></heard>
    <div class="img">
      <div class="text">
        <p>舒适干净</p>
        <br />
        <p>简单现代</p>
      </div>
      <img src="../../assets/images/home/header.png" alt />
    </div>
    <div class="project-box">
      <div class="project-top">
        <div class="left">
          <img src="@/assets/images/home/project1.png" />
          <p>本案定义为新古典的住宅，一改传统古典风格的繁复印象，而已简化的线条，现代的材质来表现空间的质感。华贵的水晶吊灯，质地柔软的沙发，大气的花卉图案地毯都赋予空间的优雅和华丽的印象。开放式的格局，空间大气之象勾勒而出。</p>
        </div>
        <div class="right">
          <div class="msg-top">
            <p>PROJECTI—1</p>
            <p>远洋天著博洛尼别墅</p>
          </div>
          <div class="msg-bottom">
            <p>项目风格——欧式古典</p>
            <p>案例面积——466㎡</p>
            <p>设计师——徐朗</p>
            <p>户型——两层</p>
            <button>查看详情</button>
          </div>
        </div>
      </div>
      <div class="project-bottom">
        <div class="right">
          <img src="@/assets/images/home/project1.png" />
          <p>本案定义为新古典的住宅，一改传统古典风格的繁复印象，而已简化的线条，现代的材质来表现空间的质感。华贵的水晶吊灯，质地柔软的沙发，大气的花卉图案地毯都赋予空间的优雅和华丽的印象。开放式的格局，空间大气之象勾勒而出。</p>
        </div>
        <div class="left">
          <div class="msg-top">
            <p>PROJECTI—1</p>
            <p>远洋天著博洛尼别墅</p>
          </div>
          <div class="msg-bottom">
            <p>项目风格——欧式古典</p>
            <p>案例面积——466㎡</p>
            <p>设计师——徐朗</p>
            <p>户型——两层</p>
            <button>查看详情</button>
          </div>
        </div>
      </div>
    </div>
    <div class="show-box">
      <div class="show-button">
        <button @click="right">&gt;</button>
        <button @click="left">&lt;</button>
      </div>
      <div class="show-main">
        <div class="show" v-for="(item) in list" :key="item.id">
          <img :src="item.img" alt />
          <p>{{item.title1}}</p>
          <p v-html="item.msg"></p>
        </div>
      </div>
    </div>
    <div class="about-box">
      <div class="about-top">
        <div class="about-top-msg">
          <p>经营理念</p>
          <p>采用不同方式</p>
          <p>我们会不断地自问：是否还有更好的方式？这就是宜家家居用品保持独特魅力的缘由所在，也是我们尝试为大众打造更美好日常生活的初衷所在。</p>
        </div>
      </div>
      <img src="@/assets/images/home/about1.png" alt />
      <img src="@/assets/images/home/about2.png" alt />
      <img src="@/assets/images/home/about3.png" alt />
      <img src="@/assets/images/home/about4.png" alt />
      <div class="about-bottom">
        <div class="about-bottom-msg">
          <p>企业愿景</p>
          <p>关于我们</p>
          <p>为大众创造更加美好的日常生活，这是我们的愿景，经营理念是“提供种类繁多、美观实用、老百姓买得起的家具用品”。</p>
        </div>
      </div>
    </div>
    <foot></foot>
  </div>
</template>

<script>
import heard from "@/components/public/heard";
import foot from "@/components/public/footer";
export default {
  components: {
    heard,
    foot
  },
  data() {
    return {
      list: [
        {
          id: 1,
          img: require("@/assets/images/home/introduce1.png"),
          title1: "环境照明",
          msg: "家中照明不仅方便实用<br />还会影响到心情。"
        },
        {
          id: 2,
          img: require("@/assets/images/home/introduce2.png"),
          title1: "家居装饰",
          msg: "在每一面墙上<br />挂上你最珍视的回忆。"
        },
        {
          id: 3,
          img: require("@/assets/images/home/introduce3.png"),
          title1: "储物空间",
          msg: "既时尚又实用的小储物件可轻松与您<br />最爱的物品共享搁架空间。"
        },
        {
          id: 4,
          img: require("@/assets/images/home/introduce4.png"),
          title1: "美食厨房",
          msg: "为你提供全套厨房产品<br />和厨房设计灵感。"
        }
      ]
    };
  },
  methods: {
    right() {
      var star = this.list.pop();
      this.list.unshift(star);
    },
    left() {
      var star = this.list.shift();
      this.list.push(star);
    }
  }
};
</script>
<style lang="scss" scoped>
#home-index {
  width: 100%;
  position: relative;
}
.heard1 {
  position: absolute;
  top: 80px;
  z-index: 1;
}
.img {
  width: 100%;
  position: relative;
  .text {
    position: absolute;
    top: 30%;
    left: 60%;
    border-left: 7px solid #f1c92f;
    padding-left: 30px;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    > p {
      color: #fff;
      font-size: 60px;
      line-height: 60px;
      &:first-child {
        font-size: 30px;
        line-height: 30px;
      }
    }
  }
  > img {
    width: 100%;
    height: 100%;
  }
}

.project-box {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  .project-top {
    width: 1206px;
    height: 640px;
    background: linear-gradient(270deg, #fff 106px, #f1f1f1 0);
    margin-top: 80px;
    position: relative;
    .left {
      width: 820px;
      position: absolute;
      top: -40px;
      left: 40px;
      > p {
        font-size: 16px;
        line-height: 24px;
        color: #999999;
      }
    }
    .right {
      position: absolute;
      left: 900px;
      top: 56px;
      .msg-top {
        width: 350px;
        > p {
          &:first-child {
            color: #333333;
            font-size: 48px;
            font-weight: bold;
          }
          &:last-child {
            color: #666666;
            font-size: 24px;
            font-weight: bold;
          }
        }
      }
      .msg-bottom {
        margin-top: 100px;
        > p {
          color: #999999;
          font-size: 16px;
          line-height: 30px;
          font-weight: bold;
        }
        > button {
          width: 160px;
          height: 50px;
          color: #fff;
          text-align: center;
          line-height: 50px;
          border: none;
          background-color: #f1c92f;
          font-size: 16px;
          font-weight: bold;
          margin-top: 40px;
          cursor: pointer;
        }
      }
    }
  }
  .project-bottom {
    width: 1206px;
    height: 640px;
    background: linear-gradient(90deg, #fff 106px, #f1f1f1 0);
    margin: 80px 0;
    position: relative;
    .right {
      width: 820px;
      position: absolute;
      top: -40px;
      right: 40px;
      > p {
        font-size: 16px;
        line-height: 24px;
        color: #999999;
      }
    }
    .left {
      position: absolute;
      right: 900px;
      top: 56px;
      .msg-top {
        width: 350px;
        > p {
          text-align: right;
          &:first-child {
            color: #333333;
            font-size: 48px;
            font-weight: bold;
          }
          &:last-child {
            color: #666666;
            font-size: 24px;
            font-weight: bold;
          }
        }
      }
      .msg-bottom {
        margin-top: 100px;
        > p {
          text-align: right;
          color: #999999;
          font-size: 16px;
          line-height: 30px;
          font-weight: bold;
        }
        > button {
          width: 160px;
          height: 50px;
          color: #fff;
          text-align: center;
          line-height: 50px;
          border: none;
          background-color: #f1c92f;
          font-size: 16px;
          font-weight: bold;
          margin-top: 40px;
          cursor: pointer;
          float: right;
        }
      }
    }
  }
}

.show-box {
  width: 1206px;
  display: flex;
  margin: 0 auto;
  margin-bottom: 80px;
  .show-button {
    width: 186px;
    display: flex;
    flex-direction: column;
    padding-top: 60px;
    > button {
      width: 100px;
      height: 70px;
      background-color: #f1f1f1;
      line-height: 70px;
      text-align: center;
      font-size: 48px;
      font-weight: bold;
      border: none;
      color: #666666;
      outline: none;
      cursor: pointer;
      &:hover {
        background-color: #f1c92f;
        color: #ffffff;
        transition: all 0.4s;
      }
    }
  }
  .show-main {
    width: 1020px;
    display: flex;
    .show {
      width: 240px;
      margin-left: 20px;
      &:first-child {
        margin-left: 0;
      }
      > img {
        box-shadow: rgba(0, 0, 0, 0.4) 3px 3px 10px;
        margin-bottom: 20px;
      }
      > p {
        &:nth-child(2) {
          color: #666666;
          font-size: 24px;
          font-weight: bold;
          margin-bottom: 15px;
        }
        &:nth-child(3) {
          color: #999999;
          font-size: 14px;
          font-weight: bold;
          line-height: 24px;
        }
      }
    }
  }
}

.about-box {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  .about-top {
    width: 33.3%;
    height: 480px;
    background-color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    .about-top-msg {
      width: 420px;
      height: 210px;
      display: flex;
      flex-direction: column;
      > p {
        &:first-child {
          font-size: 24px;
          color: #666666;
          font-weight: bold;
          margin-bottom: 20px;
        }
        &:nth-child(2) {
          font-size: 36px;
          color: #f1c92f;
          font-weight: bold;
          margin-bottom: 55px;
        }
        &:nth-child(3) {
          font-size: 16px;
          color: #999999;
          font-weight: bold;
          line-height: 24px;
        }
      }
    }
  }
  > img {
    width: 33.3%;
    height: 480px;
  }
  .about-bottom {
    width: 33.3%;
    height: 480px;
    background-color: #f1c92f;
    display: flex;
    align-items: center;
    justify-content: center;
    .about-bottom-msg {
      width: 420px;
      height: 210px;
      display: flex;
      flex-direction: column;
      > p {
        color: #fff;
        &:first-child {
          font-size: 24px;
          font-weight: bold;
          margin-bottom: 20px;
        }
        &:nth-child(2) {
          font-size: 36px;
          font-weight: bold;
          margin-bottom: 55px;
        }
        &:nth-child(3) {
          font-size: 16px;
          font-weight: bold;
          line-height: 24px;
        }
      }
    }
  }
  > img {
    width: 33.3%;
    height: 480px;
  }
}
</style>