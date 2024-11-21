<script setup lang="ts"></script>

<template>
  <header class="header">
    <div class="header_logo">App News</div>
    <div class="header_auth">
      <button class="auth_signin">Авторизация</button>
      <button class="auth_signup">Регистрация</button>
    </div>
  </header>
</template>

<style lang="css">
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid blueviolet;
  background-color: blueviolet;
  color: white;
  width: 100%;
  height: 60px;
}
.header_auth {
  display: flex;
  justify-content: space-between;
  padding: 10px;
  gap: 15px;
}
.header_logo {
  padding-left: 10px;
}
.auth_signin {
  border: none;
  cursor: pointer;
  background-color: transparent;
  color: white;
}
.auth_signup {
  border: none;
  cursor: pointer;
  background-color: transparent;
  color: white;
}
</style>
