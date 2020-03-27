<template>
  <div id="contact-index">
    <heard class="heard1"></heard>
    <div class="img">
      <img src="@/assets/images/contact/header.png" alt="">
      <p>包图家居全球门店请联系我们</p>
    </div>
    <div class="main">
      <div class="contact-box">
        <div class="contact" v-for="(item,index) in contactList" :key="index">
          <div class="contact-top">
            <p>{{item.msg1}}</p>
            <p>{{item.address}}</p>
            <p>{{item.address2}}</p>
            <p>{{item.address3}}</p>
            <p>{{item.msg2}}</p>
            <p>{{item.telephone}}</p>
          </div>
          <div class="btn">查看详情</div>
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
  components:{
    heard,
    foot
  },
  data() {
    return {
      contactList: [
        {
          msg1: "北京门店",
          address: "北京市丰台区新村街道",
          address2: "189号新时代购物广场",
          address3: "五层1-1206",
          msg2: "包图家居",
          telephone: "0000-8888888"
        },
        {
          msg1: "北京拍摄基地",
          address: "北京市丰台区长安街区",
          address2: "万达广场一楼",
          address3: "五层1-1206",
          msg2: "包图家居",
          telephone: "0000-8888888"
        },
        {
          msg1: "三亚门店",
          address: "三亚滨海区",
          address2: "189号新时代购物广场",
          address3: "五层1-1206",
          msg2: "包图家居",
          telephone: "0000-8888888"
        },
        {
          msg1: "厦门门店",
          address: "北京市丰台区新村街道",
          address2: "189号新时代购物广场",
          address3: "五层1-1206",
          msg2: "包图家居",
          telephone: "0000-8888888"
        },
        {
          msg1: "上海门店",
          address: "北京市丰台区新村街道",
          address2: "189号新时代购物广场",
          address3: "五层1-1206",
          msg2: "包图家居",
          telephone: "0000-8888888"
        },
        {
          msg1: "深圳门店",
          address: "北京市丰台区新村街道",
          address2: "189号新时代购物广场",
          address3: "五层1-1206",
          msg2: "包图家居",
          telephone: "0000-8888888"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
#contact-index {
  width: 100%;
  position: relative;
}

.heard1 {
    position: absolute;
    top: 30px;
    z-index: 1;
  }
.img {
  width: 100%;
  height: 640px;
  line-height: 640px;
  position: relative;
  > img{
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
.main {
  width: 100%;
  .contact-box {
    width: 1200px;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    margin-top: 56px;
    .contact {
      width: 320px;
      height: 450px;
      border: 1px solid #f1c92f;
      margin-bottom: 64px;
      margin-right: 90px;
      &:nth-child(3){
          margin-right: 0;
      }&:nth-child(6){
          margin-right: 0;
      }
      .contact-top {
        width: 220px;
        height: 256px;
        padding: 57px 50px 57px 50px;
        > p {
          font-size: 16px;
          color: #6666;
          line-height: 24px;
          &:first-child {
            font-size: 24px;
            font-weight: bold;
            color: #333;
            margin-bottom: 38px;
          }
          &:last-child {
            font-size: 24px;
            color: #666;
            font-weight: bold;
            margin-top: 39px;
          }
        }
      }
      .btn {
        width: 100%;
        height: 80px;
        background: #f1c92f;
        text-align: center;
        line-height: 80px;
        color: #fff;
        font-size: 24px;
        letter-spacing: 2px;
        cursor: pointer;
      }
    }
  }
}
</style>
