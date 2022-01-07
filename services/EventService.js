import axios from 'axios'

const apiClient=axios.create({
  //.create() 메서드를 사용해 사용자 정의 구성을 사용하는 axios 인스턴스를 생성할 수 있습니다.
  baseURL:`https://my-json-server.typicode.com/Code-Pop/real-world-nuxt`,
  withCredentials:false,
  headers:{
    Accept:'application/json',
    'Content-Type':'application/json'
  }
})

export default{
  getEvents(){
    return apiClient.get('/events')
  },
  getEvent(id){
    return apiClient.get('/events/'+id)
  }
}

