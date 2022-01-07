<template>
  <div>
    <!--Mustache 태그는 해당 데이터 객체의 msg 속성 값으로 대체됨-->
    <h1> Event # {{ id }} </h1> <!--//id는 computd의 속성-->
  </div>
</template>
<script>
export default {
  // SEO를 위한 것
  head() {
    return {
      title: 'Event #' + this.id,
      meta: [
        // html에서 메타 태그로 들어가게 됨
        {
          hid: 'description',
          name: 'description',
          content: 'What you need to know about event # ' + this.id
        }
      ]
    }
  },
  computed: {
    id() {
      return this.$route.params.id
    }
  }
}
</script>
