<template>
  <div>
    <h1>Events</h1>

    <EventCard
      v-for="(event, index) in events"
      :key="index"
      :event="event"
      :data-index="index"
    />
  </div>
</template>
<script>
import EventCard from '@/components/EventCard.vue'
import {mapState} from 'vuex'
export default {
  head() {
    return {
      title: 'Event Listing'
    }
  },
  async fetch({store,error }) {
    try{
      await store.dispatch('events/fetchEvents')// store에 등록된 액션을 fetch함
      }catch(e){
        error({
          statusCode:503,
          message:'Unable to fetch event #'+params.id
        })
      }
    },
  components: {
    EventCard
  },
  computed:mapState({
    //해당 컴포넌트의 event의 sate는 store의 events의 events를 가져오는 것임
    events:state=>state.events.events
  })
}
</script>
