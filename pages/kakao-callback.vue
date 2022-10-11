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
          console.log(response.accessToken);
          this.$store.commit('accessToken', response.accessToken);
        }
        return this.$router.replace('/')
        // console.log(response)
      }catch(error){
        console.log(error)
      }
    }
  }
</script>
