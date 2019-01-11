import request from '@/utils/request'
export function queryStuLiByName (param) {
    return request({
      url : '/stu/queryStuLiByName',
      methord : 'get',
      params : param
    })
}
