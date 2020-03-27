<template>
  <div class="project-index">
    <heard class="heard1"></heard>
    <div class="heard"></div>
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
      <div class="project-middle">
        <div class="right">
          <img src="@/assets/images/home/project1.png" />
          <p>本案定义为新古典的住宅，一改传统古典风格的繁复印象，而已简化的线条，现代的材质来表现空间的质感。华贵的水晶吊灯，质地柔软的沙发，大气的花卉图案地毯都赋予空间的优雅和华丽的印象。开放式的格局，空间大气之象勾勒而出。</p>
        </div>
        <div class="left">
          <div class="msg-top">
            <p>PROJECTI—2</p>
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
        <div class="left">
          <img src="@/assets/images/home/project1.png" />
          <p>本案定义为新古典的住宅，一改传统古典风格的繁复印象，而已简化的线条，现代的材质来表现空间的质感。华贵的水晶吊灯，质地柔软的沙发，大气的花卉图案地毯都赋予空间的优雅和华丽的印象。开放式的格局，空间大气之象勾勒而出。</p>
        </div>
        <div class="right">
          <div class="msg-top">
            <p>PROJECTI—3</p>
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
#project-index {
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
  .project-middle {
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
  .project-bottom {
    width: 1206px;
    height: 640px;
    background: linear-gradient(270deg, #fff 106px, #f1f1f1 0);
    position: relative;
    margin-bottom: 60px;
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
}
</style>