<template>
  <div class="product-index">
    <heard class="heard1"></heard>
    <div class="heard"></div>
    <div class="icon-main animated fadeInUp">
      <div class="icon-box">
        <div class="icon">
          <img src="~@/assets/images/product/deng.png" alt />
        </div>
        <p>环境照明</p>
        <p>家中照明不仅方便实用还会影响到心情。</p>
      </div>
      <div class="icon-box">
        <div class="icon">
          <img src="~@/assets/images/product/jiaju.png" alt />
        </div>
        <p>家居家具</p>
        <p>家中照明不仅方便实用还会影响到心情。</p>
      </div>
      <div class="icon-box">
        <div class="icon">
          <img src="~@/assets/images/product/yizi.png" alt />
        </div>
        <p>椅子书桌</p>
        <p>家中照明不仅方便实用还会影响到心情。</p>
      </div>
      <div class="icon-box">
        <div class="icon">
          <img src="~@/assets/images/product/chuwugui.png" alt />
        </div>
        <p>收纳储物</p>
        <p>家中照明不仅方便实用还会影响到心情。</p>
      </div>
      <div class="icon-box">
        <div class="icon">
          <img src="~@/assets/images/product/deng.png" alt />
        </div>
        <p>环境照明</p>
        <p>家中照明不仅方便实用还会影响到心情。</p>
      </div>
      <div class="icon-box">
        <div class="icon">
          <img src="~@/assets/images/product/jiaju.png" alt />
        </div>
        <p>家居家具</p>
        <p>家中照明不仅方便实用还会影响到心情。</p>
      </div>
      <div class="icon-box">
        <div class="icon">
          <img src="~@/assets/images/product/yizi.png" alt />
        </div>
        <p>椅子书桌</p>
        <p>家中照明不仅方便实用还会影响到心情。</p>
      </div>
      <div class="icon-box">
        <div class="icon">
          <img src="~@/assets/images/product/chuwugui.png" alt />
        </div>
        <p>收纳储物</p>
        <p>家中照明不仅方便实用还会影响到心情。</p>
      </div>
    </div>
    <div class="photo-box animated fadeInUp">
      <div class="photo">
        <img src="~@/assets/images/product/woshi.png" alt />
        <p>卧室专区</p>
      </div>
      <div class="photo">
        <img src="~@/assets/images/product/keting.png" alt />
        <p>客厅专区</p>
      </div>
      <div class="photo">
        <img src="~@/assets/images/product/shufang.png" alt />
        <p>书房专区</p>
      </div>
      <div class="photo">
        <img src="~@/assets/images/product/chufang.png" alt />
        <p>厨房专区</p>
      </div>
      <div class="photo">
        <img src="~@/assets/images/product/woshi.png" alt />
        <p>卧室专区</p>
      </div>
      <div class="photo">
        <img src="~@/assets/images/product/keting.png" alt />
        <p>客厅专区</p>
      </div>
      <div class="photo">
        <img src="~@/assets/images/product/shufang.png" alt />
        <p>书房专区</p>
      </div>
      <div class="photo">
        <img src="~@/assets/images/product/chufang.png" alt />
        <p>厨房专区</p>
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
  }
};
</script>
<style lang="scss" scoped>
#product-index {
  width: 100%;
  position: relative;
}
.heard1 {
  position: absolute;
  top: 80px;
  z-index: 1;
}
.heard {
  width: 100%;
  height: 200px;
  background: #000000;
  margin-bottom: 80px;
}

.icon-main {
  width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  .icon-box {
    width: 277px;
    height: 252px;
    margin-bottom: 20px;
    .icon {
      width: 276px;
      height: 180px;
      background-color: #ececec;
      position: relative;
      > img {
        position: absolute;
        top: 58px;
        left: 111px;
      }
    }
    > p {
      font-size: 24px;
      font-weight: bold;
      color: #666666;
      &:nth-child(2) {
        margin: 15px 0 10px 0;
      }
      &:last-child {
        font-size: 14px;
        font-weight: bold;
        color: #999999;
      }
    }
  }
}

.photo-box {
  width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  
  .photo {
    width: 278px;
    height: 395px;
    cursor: pointer;
    > p {
      font-size: 24px;
      font-weight: bold;
      color: #666666;
      margin: 15px 0;
      cursor: pointer;
    }
  }
}
</style>