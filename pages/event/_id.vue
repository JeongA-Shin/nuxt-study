<template>
  <div>
    <h1>{{event.title}}</h1>
  </div>
</template>
<script>
export default {
  head() {
    return {
      title: this.event.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'What you need to know about event #' + this.event.title //event 는 line 24번
        }
      ]
    }
  },
  async asyncData({ $axios, error,params }) {
    try{
      const {data}= await $axios.get('http://localhost:3000/events/'+ params.id)
      return {
        events: data //구조분해할당
        // }
      }}catch(e){
        error({
          statusCode:503,
          message:'Unable to fectch event #'+params.id
        })
      }
    }
}
</script>
