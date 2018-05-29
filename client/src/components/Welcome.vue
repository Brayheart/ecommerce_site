<template>
  <div class="hello">
    <h1>{{ msg }}</h1>

    <p>These are our standard choices for the regular user or your average website</p>
    <div class="servers">
        <div v-for="server in Servers" :key="server.name">{{server}}</div>
    </div>

    <p>We also have dedicated JSON storage</p>
    <div class="data">
      <div v-for="info in Data" :key="info.name">{{info}}</div>
    </div>

    <p>We provide a variety of services based on your sites needs!</p>
    <div class="services">
      <div v-for="option in Services" :key="option.service">{{option}}</div>
    </div>
  </div>
</template>

<script>
import Servers from '../assets/StandardServers.js'
import Data from '../assets/DataStorage.js'
import Services from '../assets/Services.js'

export default {
  name: 'Welcome',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      Servers,
      Data,
      Services
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.servers{
  color: red;
}
.data{
  color: blue;
}
.services{
  color:blueviolet;
}
</style>
