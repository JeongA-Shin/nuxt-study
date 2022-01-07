<template>
  <div>
<<<<<<< HEAD
    <h1>Events</h1>

    <!--events는 26 번 라인 참고-->
    <!--10번의 :even에서 바인딩되는 "event"는 v-for에서 얻은  각 event들임-->
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
export default {
  head() {
    return {
      title: 'Event Listing'
    }
  },
  // 컴포넌트가 만들어지기 전 미리 api를 통해 필요한 데이터들을 받아옴
  async asyncData({ $axios, error }) {
    try{
      const {data}= await $axios.get('http://localhost:3000/events')
    return {
          events: data //구조분해할당
      // }
    }catch(e){
      error({
        statusCode:503,
        message:'Unable to fectch events at this time, Please try again'
      })
    }
  },
  components: {
    EventCard
  }
}
</script>
=======
    <h1>Events</h1>  <!--제목-->
  </div>
</template>
>>>>>>> fa49388c4848592574f41dac4ced936411bae308
