import { request } from './require';
export function gethomeMutidata() {
    return request({
        url: '/home/multidata'
    })
}
// 流行页url：http://123.207.32.32:8000/home/data?type=pop&page=1
export function getHomeGoods(type, page) {
    return request({
        url: '/home/data',
        params: { //在/home/data后面拼接上type和page
            type,
            page
        }
    })
}