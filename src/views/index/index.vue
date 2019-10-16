<<template>
<el-button type="primary" style="width:100%;" @click="handleLogin" :loading="logining">登录</el-button>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    handleLogin() {
      this.$router.push({ path: "/login" });
    }
  }
};
</script>
<style lang="sass" scoped>

</style>

