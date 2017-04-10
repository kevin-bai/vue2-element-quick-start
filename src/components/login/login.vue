<template>
  <div class="login-wrapper">
    <el-row type="flex" justify="center">
      <el-col :xs="16" :sm="12" :md="8" :lg="6">
        <div class="login-title">用户登录</div>
        <div class="login-body">
          <el-form  label-width="70px" :model="ruleForm" :rules="rules" ref="loginForm">
            <el-form-item label="登录名" prop="name">
              <el-input placeholder="username" v-model="ruleForm.name"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="password">
              <el-input placeholder="password" v-model="ruleForm.password" type="password"></el-input>
            </el-form-item>
          </el-form>
          <div class="login-btn">
            <el-button type="primary" @click="onLoginSubmit('loginForm')">登录</el-button>
          </div>
          <p style="font-size:12px;line-height:30px;color:#999;">Tips : 用户名和密码随便填。</p>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data() {
      let checkName = (rule,value,cb)=>{
        let isEN = /^\w+$/;
        if(!value){
          return cb(new Error('请输入姓名'));
        }
        setTimeout(()=>{
          if (!isEN.test(value)){
            return cb(new  Error('请输入英文或者数字'));
          }else {
            return cb();
          }
        },500)
      };
      var validatePass = (rule,value,cb)=>{
        if(!value){
          return cb(new Error('请输入密码'));
        }else {
          return cb();
        }
      };
      return {
        ruleForm: {
          name: '',
          password: ''
        },
        rules: {
          name: [
//            { required: true, message: '请输入用户名', trigger: 'blur' }
            {validator:checkName,trigger:'blur'}
          ],
          password: [
//            { required: true, message: '请输入密码', trigger: 'blur' }
            {validator:validatePass,trigger:'blur'}
          ]
        }
      };
    },
    methods: {
      onLoginSubmit(fromName) {
        let self = this;
        self.$refs[fromName].validate((valid) =>{
          if (valid){
            console.log('valid');
            self.$router.push('/home');
          }else {
            console.log('error')
          }
        })
      }
    }
  };
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
  .login-wrapper {
    position: absolute;
    top: 30%;
    width: 100%;
    .login-title {
      padding: 10px;
      color: #ffffff;
      border-bottom: none;
      border-radius: 5px 5px 0 0;
      background: #20a0ff;
      text-align: center;
    }
    .login-body {
      padding: 20px;
      background: #f9f9f9;
    }
    .login-btn button {
      text-align: center;
      width: 100%;
    }
  }
</style>
