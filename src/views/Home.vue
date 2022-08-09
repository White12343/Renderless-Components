<template>
  <div>
    <Counter @getTitle="getTitle" />
  </div>
</template>
<script>
import HomeApi from "@/api/modules/HomeApi";
import Counter from "@/components/Counter.vue";
export default {
  name: "Home",
  components: {
    Counter,
  },
  methods: {
    // getDatList(){
    //   HomeApi.getDatList()
    // }
    getTitle(title) {
      console.log(title);
    }
  },
};
</script>
