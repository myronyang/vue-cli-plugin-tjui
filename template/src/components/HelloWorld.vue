<template>
   <div class="hello">
    <h1>Welcome to Your Vue.js App</h1>
    {{#tjui}}
    <tj-button plain round>Tjui docs</tj-button>
    {{/tjui}}

    <h2>Ecosystem</h2>
    <ul>
      <li>
        <a href="http://router.vuejs.org/" target="_blank">vue-router</a>
      </li>
      <li>
        <a href="http://vuex.vuejs.org/" target="_blank">vuex</a>
      </li>
      <li>
        <a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a>
      </li>
      <li>
        <a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello {
  text-align: center;
  padding-top: 10%;
}
h1 {
  font-weight: normal;
  font-size: 2rem;
  margin-bottom: 15px;
}
h2 {
  font-weight: normal;
  font-size: 1.2rem;
  margin: 20px 0 10px;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #9c27b0;
  font-size: 1.2rem;
}
</style>