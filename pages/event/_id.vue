<template>
  <div>
    <h1>Event #{{ id }}</h1>
  </div>
</template>
<script>
//import EventService from '@/services/EventService.js'
import {mapState} from 'vuex'

export default {
  head() {
    return {
      title: 'Event #' + this.id,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'What you need to know about event #' + this.id
        }
      ]
    }
  },
  async fetch({ store, error,params }) {
    try{
      await store.dispatch('events/fetchEvent',params.id) //dispatch할 액션명, 파라미터
      }catch(e){
      error({
        statusCode:503,
        message:'Unable to fetch event #'+params.id
      })
    }
  },
  computed: {
    //store에 있는 state와 같도록
    event:state=> state.events.event
  }
}
</script>
