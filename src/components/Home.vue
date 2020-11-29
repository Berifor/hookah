<template>
  <Page>
    <ActionBar title="Home" />
    <ScrollView>
      <StackLayout class="home-panel">
        <!--Add your page content here-->
        <Label
          v-if="user"
          textWrap="true"
          :text="user.name"
          class="h2 description-label"
        />
        <Label
          v-if="user"
          textWrap="true"
          :text="user.phone"
          class="h2 description-label"
        />

         <Label
            textWrap="true"
            :text="user && !user.phone_verified_at?'Вам нужно подвердить ваш аккаунт':'Ваш аккаунт подтвержден'"
            class="h2 description-label"
          />

        <StackLayout v-if="user && !user.phone_verified_at" class="input-field" marginBottom="25">
         
          <TextField
            ref="phone"
            class="input"
            hint="Код"
            returnKeyType="next"
            v-model="code"
            fontSize="18"
            keyboardType="phone"
            v-show="isSendCode"
          />
          <StackLayout class="hr-light" />
          <Button
          :text="!isSendCode?'Получить код':'Отправить код'"
          @tap="codeInit"
          class="btn btn-primary m-t-20"
        />
        </StackLayout>

        
      </StackLayout>
    </ScrollView>
  </Page>
</template>
<script>
import Auth from "./Auth";
export default {
  data() {
    return {
      code:'',
      isSendCode:false
    };
  },
  methods: {
    toAuth() {
      this.$navigateTo(Auth);
    },
    async codeInit(){
      if(!this.isSendCode){
        await this.$store.dispatch("settings/getConfirm");
        this.isSendCode = !this.isSendCode
      }else{
        await this.$store.dispatch("settings/register",this.code);
        console.log('this.statusSendCode',this.statusSendCode)
        if(this.statusSendCode.success){
          await this.$store.dispatch("settings/getUserInfo");
        }
      }
      
    }
  },
  async created() {
    await this.$store.dispatch("settings/getUserInfo");
  },
  computed: {
    user() {
      return this.$store.state.settings.user;
    },
    statusSendCode() {
      return this.$store.state.settings.statusSendCode;
    },
  },
};
</script>