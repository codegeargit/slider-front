<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-navbar-brand href="#">Slider</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto" v-if="!accessToken">
          <b-nav-item href="/login" right>로그인</b-nav-item>
        </b-navbar-nav>
        <b-navbar-nav class="ml-auto" v-if="accessToken && accessToken!==''">
          <b-nav-item @click="admin" right v-if="user.isAdmin">관리자</b-nav-item>
          <b-nav-item @click="logout" right>로그아웃</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <nuxt/>
  </div>
</template>
<script>
export default {
  name: 'Layout',
  methods: {
    async logout() {
      await this.$store.commit('accessToken', '');
      await this.$router.push('/');
    },
    async admin() {
      alert('관리자 메뉴!!!')
    }
  },
  computed: {
    accessToken() {
      return this.$store.state.accessToken;
    },
    user() {
      return this.$store.state.user;
    }
  }
}
</script>
