<template>
  <CountRenderless
    v-slot="{ count, title, double, increment, setTitle }"
    :num="1000"
    @getTitle="getTitle"
  >
    <div class="wrap">
      <div class="counter">
        <div>Count is: {{ count }}</div> 
        <div>Double is: {{ double }}</div>
        <button @click="increment">Increment</button>
      </div>
      <div class="title">
        <input type="text" v-model="myTitle" placeholder="輸入要更換的標題">
        <button @click="setTitle(myTitle)">setTitle</button>
        <div>title: {{ title }}</div>
      </div>
    </div>
  </CountRenderless>
</template>
<script>
import CountRenderless from "./CountRenderless";
export default {
  components: {
    CountRenderless
  },
  data() {
    return {
      myTitle: '',
    };
  },
  methods: {
    getTitle(title) {
      this.$emit('getTitle', title);
    }
  },
}
</script>

<style scoped>
.wrap {
  display: flex;
}
.counter {
  padding: 1rem;
  border: 1px solid #333;
}
.title {
  padding: 1rem;
  margin-left: 1rem;
  border: 1px solid #333;
}
</style>
