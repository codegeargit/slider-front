<template>
  <a @click="loginWithKakao">
    <img src="/kakao_login.png"/>
  </a>
</template>

<script>
export default {
  name: 'IndexPage',
  methods: {
    kakaoInit() {
      Kakao.init('497bcfa986482f48ba2ee19b185ca2b0')
      Kakao.isInitialized()
    },
    async loginWithKakao() {
      await Kakao.Auth.authorize({
        redirectUri: `${window.location.origin}/kakao-callback`
      })
    }
  },
  mounted(){
    this.kakaoInit()
  }
}
</script>
