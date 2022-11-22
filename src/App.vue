<script>
import AppHeader from "./components/AppHeader.vue";
import AppMain from "./components/AppMain.vue";
import AppFooter from "./components/AppFooter.vue";
import { store } from "./store";

export default {
  data() {
    return {
      store,
      footerInfo: [
        {
          column: "Explore",
          links: ["Start here", "Success story", "Blog", "Courses", "Contact us"]
        },
        {
          column: "Information",
          links: ["Membership", "Purchase guide", "Privacy Policy", "Terms of Service"]
        },
        {
          column: "Instagram",
          igAccount: "@maxcoach",
          imgs: ["/120084500_197897808368764_8114555493043279565_n.jpg", "/120012142_177596140500760_8623485824101406058_n.jpg", "/120099363_364334431619755_7198812647386067017_n.jpg"],
        }
      ],
      adressInfo: ["382 NE 191st # 873394 Miami, FL 33179-3899", "+1(305)998-9909(9am - 5pm EST, Monday - Friday)", "support@maxcoach.com"]
    }
  },
  components: {
    AppHeader,
    AppMain,
    AppFooter
  },
  created() {
    // Funzioni inmediate
  },
  methods: {
    // Metods
  }
}

</script>


<template>
  <header>
    <AppHeader />
  </header>

  <main>
    <AppMain />
  </main>

  <footer>
    <AppFooter :adress="this.adressInfo" :explore="this.footerInfo[0].links" :information="this.footerInfo[1].links"
      :fotoList="this.footerInfo[2].imgs" />
  </footer>
</template>


<style lang="scss">
@use "./styles/general.scss" as *;
@use "./styles/partials/variables" as *;
</style>