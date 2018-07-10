
import { api } from '../Api/init'



class ApiMethods {
    constructor(endpoint) {
        this.endpoint = endpoint
    }

    create = (obj, func) => {
        func = func || null

        return api.post(
            this.endpoint, obj
        )
    }

    all = () => {
        return api.get(this.endpoint)
    }

    find = (id) => {
        return api.get(this.endpoint + id)
    }

    edit = (id, obj, func) => {
        func = func || null
        console.log(this.endpoint + id, obj)
        api.put(
            this.endpoint + id, obj
        ).then(func)
    }

    destroy = (id, obj, func) => {
        func = func || null

        api.delete(
            this.endpoint + id, {
                data: { id: obj.userId }
            }
        ).then(func)       

    }
}


const topicsApi = new ApiMethods('http://localhost:3000/topics')
const postsApi = new ApiMethods('http://localhost:3000/posts')


export { postsApi, topicsApi }
