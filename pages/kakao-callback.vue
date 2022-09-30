<template>
  <div>로그인중....</div>
</template>

<script>
  export default {
    async mounted() {
      try{
        if(!this.$route.query.code){
          return this.$route.push('/')
        }
        console.log(`code : ${this.$route.query.code}`)
        const body = {
          code: this.$route.query.code,
          domain: window.location.origin
        }
        const response = await this.$axios.$post(
            '/auth/login', body, {}
        )
        console.log(response)
      }catch(error){
        console.log(error)
      }
    }
  }
</script>
