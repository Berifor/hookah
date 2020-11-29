<template>
  <Page>
    
  </Page>
</template>


<script>

import Home from "./Home";
import Auth from "./Auth";
const appSettings = require("tns-core-modules/application-settings");
export default {
  async created() {
    const token = appSettings.getString("token")
    if (!token) {
      setTimeout(() => {
        this.$navigateTo(Auth)
      }, 1000);
    } else {
      setTimeout(() => {
        this.$navigateTo(Home)
      }, 1000);
    }
  },
};
</script>