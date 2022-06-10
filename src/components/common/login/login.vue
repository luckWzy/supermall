<!--  -->
<template>
 <div class="login-container">
    <el-form
      :model="form"
      status-icon
      :rules="rules"
      ref="form"
      label-width="100px"
      class="login-form"
    >
      <h1 class="title-zc">登录页</h1>
      <el-form-item label="账号" prop="username">
        <el-input v-model.number="form.username" value="admin" name="username"></el-input>
      </el-form-item>
 
      <el-form-item label="密码" prop="password" >
        <el-input
          type="password"
          v-model="form.password"
          autocomplete="off" value="12345" name="passward"
        ></el-input>
      </el-form-item>
 
      <el-form-item>
        <el-button type="primary" @click="submitForm">登录</el-button>
        <el-button type="primary" >注册</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        username: "",
        password: "",
      },
      rules: {
        username: [{ required: true, message: "请输入账号", trigger: "blur" }],
        password: [{ required: true, message: "请输入昵称", trigger: "blur" }],
      },
    };
  },
  methods: {
    submitForm() {
      this.$refs.form.validate(valid=>{
        if(!valid) return ;
        const result = this.$http.post('login',{
  "account": "309324904@qq.com",
  "password": "123456"
});//发网络请求
        console.log(result);
      //  else if(this.form.username=="admin"&&this.form.password == "12345"){
      //    this.$message.success("登陆成功")
      //  }else{
      //    this.$message.error("登陆失败")
      //  }
      })
    }
  },
};
</script>
<style scoped>
.login-container {
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-size: 100% 100%;
  background-repeat: no-repeat;
}
.login-form {
  width: 350px;
  margin: 150px auto;
  background-color: rgba(90, 187, 211, 0.7);
  padding: 30px;
  border-radius: 20px;
}
.title-zc {
  text-align: center;
}
</style>
