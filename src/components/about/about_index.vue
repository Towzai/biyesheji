<template>
  <div class="about-index">
    <heard class="heard1"></heard>
    <div class="img">
      <img src="@/assets/images/about/header.png" alt />
      <p>为大众创造更加美好的日常生活</p>
    </div>
    <div class="profile-box animated fadeInUp">
      <div class="top">
        <p>COMPANY PROFILE</p>
        <p>公司简介</p>
      </div>
      <div class="introduce">
        <p>经营理念</p>
        <p>企业愿景和经营理念</p>
        <p>
          为大众创造更加美好的日常生活”，这是宜家的愿景。我们的经营理念是“提供种类繁多、美观实用、老百姓买得起的家居用品”。
          <br />通过优化我们的整个价值链，与供应商建立长期合作关系，投资高度自动化和大规模生产等方式，我们努力为顾客提供物美价优的产品。
          我们的愿景不局限于家居装饰。我们希望通过努力，为大众创造更美好的日常生活。
        </p>
      </div>
      <div class="introduce">
        <p>Business philosophy</p>
        <p>Corporate vision and business philosophy</p>
        <p>
          To create a better everyday life for the public,
          this is the vision of IKEA. Our business philosophy is "to provide a wide variety of beautiful,
          practical and affordable household items."By optimizing our entire value chain,
          building long-term relationships with our suppliers, investing in highly automated and mass production methods,
          we strive to provide our customers with quality products at competitive prices. Our vision is not limited to home décor.
          We hope to create a better life for the public through hard work.
        </p>
      </div>
    </div>
    <div class="path-box animated fadeInUp">
      <div class="path-top">
        <p>DEVELOPMENT PATH</p>
        <p>发展历程</p>
      </div>
      <div class="path">
        <img src="~@/assets/images/about/introduce1.png" alt />
        <div class="years">
          <p>1986</p>
        </div>
        <div class="path-msg">
          <p>1943年，17岁的INGVAR KAMPRAD创立了宜家，出售钢笔、钱包和相框等日用品。</p>
          <p>1943年，17岁的INGVAR KAMPRAD创立了宜家，出售钢笔、钱包和相框等日用品。</p>
          <p>1943年，17岁的INGVAR KAMPRAD创立了宜家，出售钢笔、钱包和相框等日用品。</p>
        </div>
      </div>
      <div class="path">
        <img src="~@/assets/images/about/introduce2.png" alt />
        <div class="years">
          <p>2005</p>
          <p>2006</p>
          <p>2008</p>
        </div>
        <div class="path-msg">
          <p>1943年，17岁的INGVAR KAMPRAD创立了宜家，出售钢笔、钱包和相框等日用品。</p>
          <p>1943年，17岁的INGVAR KAMPRAD创立了宜家，出售钢笔、钱包和相框等日用品。</p>
          <p>1943年，17岁的INGVAR KAMPRAD创立了宜家，出售钢笔、钱包和相框等日用品。</p>
          <p>1943年，17岁的INGVAR KAMPRAD创立了宜家，出售钢笔、钱包和相框等日用品。</p>
        </div>
      </div>
      <div class="path">
        <img src="~@/assets/images/about/introduce3.png" alt />
        <div class="years">
          <p>2015</p>
        </div>
        <div class="path-msg">
          <p>1943年，17岁的INGVAR KAMPRAD创立了宜家，出售钢笔、钱包和相框等日用品。</p>
          <p>1943年，17岁的INGVAR KAMPRAD创立了宜家，出售钢笔、钱包和相框等日用品。</p>
        </div>
      </div>
      <div class="path">
        <img src="~@/assets/images/about/introduce4.png" alt />
        <div class="years">
          <p>2019</p>
        </div>
        <div class="path-msg">
          <p>1943年，17岁的INGVAR KAMPRAD创立了宜家，出售钢笔、钱包和相框等日用品。</p>
          <p>1943年，17岁的INGVAR KAMPRAD创立了宜家，出售钢笔、钱包和相框等日用品。</p>
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
    return {};
  },
  methods: {},
};
</script>
<style lang="scss" scoped>
#about-index {
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
  height: 640px;
  line-height: 640px;
  position: relative;
  > img {
    width: 100%;
    height: 100%;
  }
  > p {
    text-align: center;
    width: 100%;
    font-size: 60px;
    letter-spacing: 10px;
    color: #fff;
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
  }
}

.profile-box {
  width: 1140px;
  margin: 60px auto;
  display: flex;
  flex-wrap: wrap;
  .top {
    width: 100%;
    text-align: center;
    > p {
      &:first-child {
        color: #333333;
        line-height: 35px;
        font-size: 16px;
        font-weight: bold;
      }
      &:last-child {
        font-size: 24px;
        font-weight: bold;
        line-height: 35px;
        color: #666666;
      }
    }
  }
  .introduce {
    width: 45%;
    margin-top: 30px;
    margin-left: 5%;
    &:last-child {
      > p {
        &:last-child {
          font-size: 16px;
          font-weight: bold;
          line-height: 24px;
          color: #999999;
        }
      }
    }
    > p {
      &:first-child {
        font-size: 20px;
        font-weight: bold;
        line-height: 24px;
        color: #666666;
      }
      &:nth-child(2) {
        font-size: 16px;
        font-weight: bold;
        color: #666666;
        margin-bottom: 20px;
      }
      &:last-child {
        font-size: 16px;
        font-weight: bold;
        line-height: 32px;
        color: #999999;
      }
    }
  }
}

.path-box {
  width: 1140px;
  margin: 60px auto;
  .path-top {
    width: 100%;
    text-align: center;
    > p {
      &:first-child {
        font-size: 16px;
        font-weight: bold;
        line-height: 35px;
        color: #333333;
      }
      &:last-child {
        font-size: 24px;
        font-weight: bold;
        line-height: 35px;
        color: #666666;
      }
    }
  }
  .path {
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-top: 50px;
    .years {
      font-size: 16px;
      font-weight: bold;
      line-height: 35px;
      color: #999999;
      > p {
        &:first-child {
          color: #666666;
        }
      }
    }
    .path-msg {
      font-size: 16px;
      font-weight: bold;
      line-height: 35px;
      color: #999999;
      > p {
        &:first-child {
          color: #666666;
        }
      }
    }
  }
}
</style>