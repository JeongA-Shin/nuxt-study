import EventService from "../services/EventService";
export const state=()=>({
  events:[],
  event:{}
})

//action 을 통해 얻어온 데이터로 기존의  state등을 업데이트
export const mutations={
  SET_EVENTS(state,events){
    state.events=events
  },
  SET_EVENT(state,event){
    state.event=event
  }
}

//어떤 함수 등을 통해 데이터를 얻어옴
export const actions={
  fetchEvents({commit}){
    return EventService.getEvents().then(response=>{
      commit('SET_EVENTS',response.data)
    })
  },
  fetchEvent({commit},id){
    return EventService.getEvent(id).then(response=>{
      commit('SET_EVENT',response.data)
    })
  }
}
