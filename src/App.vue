<template>
  <div id="app">
    <header>
      <img src="./assets/logo-baidu.png" alt >
      <ul>
        <li><a href="###">分类</a></li>
        <li><a href="###">歌手</a></li>
        <li><router-link to="/top">榜单</router-link></li>
        <li><a href="###">我的</a></li>
        <li><a href="###"><i class="iconfont icon-sousuo">&nbsp;</i></a></li>
      </ul>
    </header>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>
