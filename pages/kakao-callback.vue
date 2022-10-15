<template>
  <div>로그인중....</div>
</template>

<script>
  export default {
    async mounted() {
      try{
        if(!this.$route.query.code){
          return this.$router.push('/')
        }
        // console.log(`code : ${this.$route.query.code}`)
        const body = {
          code: this.$route.query.code,
          domain: window.location.origin
        }
        const response = await this.$axios.$post(
            '/auth/login', body, {}
        )
        if(response){
          const accessToken = response.accessToken;
          console.log(accessToken);
          this.$store.commit('accessToken', accessToken);
          const options = {
            headers: {
              Authorization: `Bearer ${accessToken}`
            },
          };
          //토큰을 가지고 사용자 정보 조회
          const user = await this.$axios.get("/auth/user", options);
          const loginUser = user.data;
          console.log(loginUser);
          this.$store.commit('user', loginUser);
        }
        return this.$router.replace('/')
      }catch(error){
        console.log(error)
      }
    }
  }
</script>
