<template>
  <Page>
    <FlexboxLayout class="page">
      <StackLayout class="form">
        <Image class="logo" src="~/images/logo.png" />
        <Label class="header" text="APP NAME" />

        <StackLayout class="input-field" marginBottom="25">
          <TextField
            ref="phone"
            class="input"
            hint="Телефон"
            v-model="user.phone"
            returnKeyType="next"
            fontSize="18"
            keyboardType="phone"
          />
          <StackLayout class="hr-light" />
        </StackLayout>

        <StackLayout class="input-field">
          <TextField
            ref="password"
            class="input"
            hint="Пароль"
            secure="true"
            v-model="user.password"
            returnKeyType="done"
            fontSize="18"
          />
          <StackLayout class="hr-light" />
        </StackLayout>

        <Button
          text="Авторизоваться"
          @tap="submit"
          class="btn btn-primary m-t-20"
        />
        <Label
          text="Забыли пароль?"
          class="login-label"
          @tap="forgotPassword"
        />
      </StackLayout>
      <Label class="login-label sign-up-label" @tap="toRegister">
        <FormattedString>
          <Span text="Регистрация" />
        </FormattedString>
      </Label>
    </FlexboxLayout>
  </Page>
</template>

<script>
import axios from "axios";
import Register from "./Register";
import ForgotPassword from "./ForgotPassword";
export default {
  data() {
    return {
      user: {
        password: "",
        phone: "",
      },
    };
  },
  methods: {
    toRegister() {
      this.$navigateTo(Register);
    },

    forgotPassword() {
      this.$navigateTo(ForgotPassword);
    },
   
    async submit() {
      await this.$store.dispatch("settings/auth", this.user);
    },
  },
};
</script>

<style scoped>
.page {
  align-items: center;
  flex-direction: column;
}

.form {
  margin-left: 30;
  margin-right: 30;
  flex-grow: 2;
  vertical-align: middle;
}

.logo {
  margin-bottom: 12;
  height: 90;
  font-weight: bold;
}

.header {
  horizontal-align: center;
  font-size: 25;
  font-weight: 600;
  margin-bottom: 70;
  text-align: center;
  color: #d51a1a;
}

.input-field {
  margin-bottom: 25;
}

.input {
  font-size: 18;
  placeholder-color: #a8a8a8;
}

.input-field .input {
  font-size: 54;
}

.btn-primary {
  height: 50;
  margin: 30 5 15 5;
  background-color: #d51a1a;
  border-radius: 5;
  font-size: 20;
  font-weight: 600;
}

.login-label {
  horizontal-align: center;
  color: #a8a8a8;
  font-size: 16;
}

.sign-up-label {
  margin-bottom: 20;
}

.bold {
  color: #000000;
}
</style>
