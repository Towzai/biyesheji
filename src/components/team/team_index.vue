<template>
  <div id="team_index">
    <div class="img">
      <img src="@/assets/images/contact/header.png" alt>
      <p>一对一设计师专属服务</p>
    </div>
    <div class="main">
      <div class="team-box">
        <div class="team" v-for="(item,index) in teamList" :key="index">
          <div class="team-left">
            <img :src="item.img1" alt>
            <p>{{item.msg1}}</p>
            <p>{{item.msg2}}</p>
          </div>
          <div class="team-right">
            <img :src="item.img2" alt>
            <p>{{item.name}}</p>
            <p>{{item.msg3}}</p>
            <p>{{item.msg4}}</p>
            <p>{{item.msg5}}</p>
            <p>{{item.msg6}}</p>
            <div class="btn">立即咨询</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      teamList: [
        {
          img1: require("@/assets/images/team/team1.png"),
          msg1: "最新案例：贾家花园 安圣苑",
          msg2: "肖家湖北大教工楼",
          img2: require("@/assets/images/team/shejishi.png"),
          name: "谢娜娜",
          msg3: "级别：主任设计师",
          msg4: "从业经验：12年",
          msg5: "擅长风格：欧式古典奢华",
          msg6: "欧式简约"
        },
        {
          img1: require("@/assets/images/team/team2.png"),
          msg1: "最新案例：贾家花园 安圣苑",
          msg2: "肖家湖北大教工楼",
          img2: require("@/assets/images/team/shejishi.png"),
          name: "谢娜娜",
          msg3: "级别：主任设计师",
          msg4: "从业经验：12年",
          msg5: "擅长风格：欧式古典奢华",
          msg6: "欧式简约"
        },
        {
          img1: require("@/assets/images/team/team2.png"),
          msg1: "最新案例：贾家花园 安圣苑",
          msg2: "肖家湖北大教工楼",
          img2: require("@/assets/images/team/shejishi.png"),
          name: "谢娜娜",
          msg3: "级别：主任设计师",
          msg4: "从业经验：12年",
          msg5: "擅长风格：欧式古典奢华",
          msg6: "欧式简约"
        },
        {
          img1: require("@/assets/images/team/team1.png"),
          msg1: "最新案例：贾家花园 安圣苑",
          msg2: "肖家湖北大教工楼",
          img2: require("@/assets/images/team/shejishi.png"),
          name: "谢娜娜",
          msg3: "级别：主任设计师",
          msg4: "从业经验：12年",
          msg5: "擅长风格：欧式古典奢华",
          msg6: "欧式简约"
        },
        {
          img1: require("@/assets/images/team/team1.png"),
          msg1: "最新案例：贾家花园 安圣苑",
          msg2: "肖家湖北大教工楼",
          img2: require("@/assets/images/team/shejishi.png"),
          name: "谢娜娜",
          msg3: "级别：主任设计师",
          msg4: "从业经验：12年",
          msg5: "擅长风格：欧式古典奢华",
          msg6: "欧式简约"
        },
        {
          img1: require("@/assets/images/team/team2.png"),
          msg1: "最新案例：贾家花园 安圣苑",
          msg2: "肖家湖北大教工楼",
          img2: require("@/assets/images/team/shejishi.png"),
          name: "谢娜娜",
          msg3: "级别：主任设计师",
          msg4: "从业经验：12年",
          msg5: "擅长风格：欧式古典奢华",
          msg6: "欧式简约"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
#team_index {
  width: 100%;
}
.img {
  width: 100%;
  height: 640px;
  line-height: 640px;
  position: relative;
  > img {
    width: 100%;
  }
  > p {
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
  .team-box {
    width: 1086px;
    padding-top: 95px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    .team {
      width: 500px;
      height: 520px;
      background: #f5f4f4;
      position: relative;
      margin-bottom: 95px;
      .team-left {
        width: 250px;
        position: absolute;
        left: 41px;
        top: -44px;
        > img {
          width: 250px;
          height: 450px;
        }
        > p {
          font-size: 16px;
          color: #666;
          line-height: 24px;
          letter-spacing: 1px;
          text-align: center;
          &:last-child {
            text-indent: 95px;
          }
        }
      }
      .team-right {
        position: absolute;
        right: -21px;
        top: 50px;
        > img {
          margin-bottom: 10px;
        }
        > p {
          font-size: 16px;
          font-weight: bold;
          line-height: 30px;
          color: #999;
          &:nth-child(2) {
            font-size: 24px;
            font-weight: bold;
            color: #666;
            margin-bottom: 38px;
          }
          &:nth-child(6) {
            text-indent: 83px;
          }
        }
        .btn {
          width: 160px;
          height: 48px;
          background: #f1c92f;
          text-align: center;
          line-height: 48px;
          color: #fff;
          margin-top: 40px;
        }
      }
    }
  }
}
</style>
