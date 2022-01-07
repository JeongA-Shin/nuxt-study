<template>
  <div>
    <h1>Create an Event</h1>
  </div>
</template>
<script>
export default {
  // SEO를 위한 것
  head() {
    return {
      title: 'Create an Event',
      meta: [
        // html에서 메타 태그로 들어가게 됨
        {
          hid: 'description',
          name: 'description',
          content: 'You can create a new event in your neighborhood'
        }
      ]
    }
  }
}
</script>
