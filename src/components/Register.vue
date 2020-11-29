<template>
  <Page>
    <FlexboxLayout class="page">
      <StackLayout class="form">
        <Image class="logo" src="~/images/logo.png" />
        <Label class="header" text="APP NAME" />

        <StackLayout class="input-field" marginBottom="25">
          <TextField
            class="input"
            hint="Name"
            keyboardType="name"
            autocorrect="false"
            autocapitalizationType="none"
            v-model="user.name"
            returnKeyType="next"
            @returnPress="focusPhone"
            fontSize="18"
          />
          <StackLayout class="hr-light" />
        </StackLayout>

        <StackLayout class="input-field" marginBottom="25">
          <TextField
            ref="phone"
            class="input"
            hint="Phone"
            v-model="user.phone"
            returnKeyType="next"
            @returnPress="focusPassword"
            fontSize="18"
            keyboardType="phone"
          />
          <StackLayout class="hr-light" />
        </StackLayout>

        <StackLayout class="input-field">
          <TextField
            ref="password"
            class="input"
            hint="Password"
            secure="true"
            v-model="user.password"
            returnKeyType="next"
            @returnPress="focusRePassword"
            fontSize="18"
          />
          <StackLayout class="hr-light" />
        </StackLayout>

        <StackLayout class="input-field">
          <TextField
            ref="re_password"
            class="input"
            hint="RePassword"
            secure="true"
            v-model="user.re_password"
            returnKeyType="next"
            fontSize="18"
            @returnPress="focusCountry"
          />
          <StackLayout class="hr-light" />
        </StackLayout>

        <StackLayout class="input-field">
          <TextField
            ref="country"
            class="input"
            hint="Country"
            v-model="user.country"
            returnKeyType="next"
            fontSize="18"
            @returnPress="focusCity"
          />
          <StackLayout class="hr-light" />
        </StackLayout>

        <StackLayout class="input-field">
          <TextField
            ref="city"
            class="input"
            hint="City"
            v-model="user.city"
            returnKeyType="done"
            fontSize="18"
          />
          <StackLayout class="hr-light" />
        </StackLayout>

        <Button
          text="Зарегистрироваться"
          @tap="submit"
          class="btn btn-primary m-t-20"
        />
      </StackLayout>
      <Label class="login-label sign-up-label" @tap="toAuth">
        <FormattedString>
          <Span text="У вас уже есть аккаунт?" />
        </FormattedString>
      </Label>
    </FlexboxLayout>
  </Page>
</template>

<script>
import axios from "axios";
import Auth from "./Auth";
import Home from "./Home";
export default {
  data() {
    return {
      code: "",
      user: {
        name: "zfged1995",
        phone: "+380936204278",
        password: "12345",
        re_password: "12345",
        country: "Ukraine",
        city: "Kiev",
      },
    };
  },
  methods: {
    toAuth() {
      this.$navigateTo(Auth);
    },
    async submit() {
      await this.$store.dispatch("settings/startRegister", this.user);
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
