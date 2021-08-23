<template>
  <header id="header">
    <p>前端动画库</p>
  </header>
  <div>
    <div class="nav">
      <div v-for="(item, index) in list" :key="index">
        {{ item }}
      </div>
    </div>
    <router-view />
  </div>
</template>
<script>
import { defineComponent, toRefs, toRef, ref } from "vue";
import { linearGradient } from "./canvas_util";
export default defineComponent({
  data() {
    return {
      list: ["基础"],
    };
  },
  setup(props, context) {},
  mounted() {
    //  let list = toRefs(this.list);
    //  let list =
    //   this.list.push({
    //     name:12
    //   })
    //  console.log(list)
  },
});
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
#header {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding: 0 70px;
  font-size: 32px;
}
#header p {
  background-image: -webkit-linear-gradient(
    bottom right,
    rgb(255, 230, 0),
    #fd8403,
    red
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-top: 5px;
}
#header canvas {
  width: 100px;
  height: 40px;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
