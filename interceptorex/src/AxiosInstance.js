
import axios from 'axios'

    const instance=axios.create({
        baseURL:"https://jsonplaceholder.typicode.com/todos/1"
    })
instance.defaults.headers.common["Authorization"]="auth from instance"
 


export default instance


