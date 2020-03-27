<template>
  <div id="header-box">
    <div class="box">
      <img src="../../assets/images/home/logo.png" alt />
      <div class="nav">
        <ul>
          <li
            v-for="(item,index) in list"
            :key="index"
            @click.stop="onClickJump(item.url)"
          >{{item.name}}</li>
        </ul>
      </div>
      <a href>
        <i class="iconfont">&#xe76b;</i>
      </a>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      list: [
        {
          id: 1,
          name: "首页",
          url: "/"
        },
        {
          id: 2,
          name: "关于",
          url: "/about"
        },
        {
          id: 3,
          name: "项目",
          url: "/project"
        },
        {
          id: 4,
          name: "产品",
          url: "/product"
        },
        {
          id: 5,
          name: "团队",
          url: "/team"
        },
        {
          id: 6,
          name: "新闻",
          url: "/news"
        },
        {
          id: 7,
          name: "联系",
          url: "/contact"
        }
      ]
    };
  },
  methods: {
    onClickJump(url) {
      this.$router.push({
        path: url
      });
    }
  }
};
</script>
<style lang="scss" scoped>
#header-box {
  width: 100%;
  height: 33px;
  margin: 0 auto;
  .box {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-around;
    .nav {
      width: 460px;
      height: 33px;
      position: relative;
      > ul {
        display: flex;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        > li {
          list-style: none;
          color: #fafafa;
          line-height: 33px;
          font-size: 20px;
          text-align: center;
          margin: 0 10px;
          font-family: 思源黑体;
          font-weight: 600;
          text-shadow: rgba(0,0,0,.5) 1px 1px 15px;
          cursor: pointer;
          &:hover {
            color: #f1c92f;
          }
        }
      }
    }
    > a {
      line-height: 33px;
      >i{
        color: #fafafa;
        text-shadow: black 1px 1px 10px;
      }
    }
  }
}
</style>   
