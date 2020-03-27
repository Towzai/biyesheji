<template>
  <div id="footer-box">
    <div class="box">
      <div class="left-box">
        <div class="left-contact">
          <p>请与我们联系</p>
          <a>联系我们</a>
          <p>您也可以关注我们:</p>
          <img src="../../assets/images/home/qr code.png" alt />
        </div>
        <div class="right-contact">
          <div class="number">
            <p>长沙总部</p>
            <p>电话：00000-1212121</p>
            <p>邮箱：00000-1212121@163.com</p>
            <p>地址：湖南省长沙市雨花区万家丽中路</p>
          </div>
          <div class="number">
            <p>长沙总部</p>
            <p>电话：00000-1212121</p>
            <p>邮箱：00000-1212121@163.com</p>
            <p>地址：湖南省长沙市雨花区万家丽中路</p>
          </div>
        </div>
      </div>
      <div class="right-box">
        <div class="info">
          <input type="text" placeholder="姓名" />
          <input type="text" placeholder="电话" />
          <input type="text" placeholder="邮箱" />
        </div>
        <div class="content">
          <textarea cols="112" rows="8" placeholder="内容"></textarea>
        </div>
        <div class="btn">
          <button>提交</button>
          <button>重置</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
#footer-box {
  width: 100%;
  height: 640px;
  background: url("../../assets/images/home/footer.png");
  position: relative;
  .box {
    width: 86%;
    height: 50%;
    position: absolute;
    top: 25%;
    left: 7%;

    display: flex;
    justify-content: space-between;
    .left-box {
      width: 40%;
      height: 100%;
      display: flex;
      position: relative;
      justify-content: space-around;
      .left-contact {
        display: flex;
        flex-direction: column;
        margin-right: 30px;
        > p {
          &:first-child {
            font-family: 思源雅黑;
            font-size: 18px;
            line-height: 35px;
            font-weight: bold;
            color: #fff;
          }
          &:nth-child(3) {
            font-family: 思源雅黑;
            font-size: 18px;
            line-height: 35px;
            font-weight: bold;
            color: #fff;
            position: relative;
            top: 20px;
          }
        }
        > a {
          font-family: 思源雅黑;
          font-size: 48px;
          font-weight: bold;
          color: #fff;
          cursor: pointer;
          &:hover {
            color: #bbb;
          }
        }
        > img {
          position: absolute;
          bottom: 0px;
        }
      }
      .right-contact {
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        .number {
          > p {
            &:first-child {
              font-size: 24px;
            }
            font-family: 思源雅黑;
            font-size: 16px;
            line-height: 35px;
            font-weight: bold;
            color: #fff;
          }
        }
      }
    }
    .right-box{
      width: 50%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      .info {
        display: flex;
        justify-content: space-between;
        margin-bottom: 48px;
        > input {
          width: 30%;
          height: 50px;
          border: none;
          background: none;
          border-bottom: 1px solid #fff;
          color: #fff;
          &::placeholder{
            color: #fff;
          }
        }
      }
      .content {
        margin-bottom: 36px;
        > textarea {
          width: 100%;
          height: 100px;
          border: none;
          background: none;
          border-bottom: 1px solid #fff;
          color: #fff;
          resize: none;
          &::placeholder{
            color: #fff;
          }
        }
      }
      .btn {
        display: flex;
        justify-content: space-between;
        > button {
          width: 50%;
          height: 50px;
          background-color: #383838;
          border: none;
          color: #fff;
          transition: background 0.3s;
          &:first-child {
            margin-right: 16px;
          }
          &:hover {
            background-color: #2f97cd;
            color: #ffffff;
          }
        }
      }

    }
  }
}
</style>