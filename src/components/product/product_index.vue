<template>
  <div class="product-index">
      <heard class="heard1"></heard>
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
.heard1{
  position: absolute;
  top: 30px;
  z-index: 1;
}
</style>