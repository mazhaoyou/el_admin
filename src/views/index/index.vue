<<template>
<div >
<div>
<!-- <el-button type="primary" style="width:100%;" @click="handleLogin" :loading="logining">登录</el-button>
 --><el-row class="tac">
  <el-col :span="12">
    <!-- <h5>默认颜色</h5> -->
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose">
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>导航一</span>
        </template>
        <el-menu-item-group>
          <template slot="title">分组一</template>
          <el-menu-item index="1-1">选项1</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="分组2">
          <el-menu-item index="1-3">选项3</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="1-4">
          <template slot="title">选项4</template>
          <el-menu-item index="1-4-1">选项1</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="2">
        <i class="el-icon-menu"></i>
        <span slot="title">导航二</span>
      </el-menu-item>
      <el-menu-item index="3">
        <i class="el-icon-setting"></i>
        <span slot="title">导航三</span>
      </el-menu-item>
    </el-menu>
  </el-col>
</el-row>
</div>
<!-- <div class="url-sty">
  <p>{{url}}</p>
</div> -->
</div>
</template>
<script>
export default {
  data() {
    return {
      url: process.env.VUE_APP_URL
    };
  },
  methods: {
    handleLogin() {
      this.$router.push({ path: "/login" });
    },
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>

<style lang="scss" scoped>
.url-sty{
  width: 500px;
  height: 200px;
  background: red;
}
.tac{
  width:20%;
}
</style>

