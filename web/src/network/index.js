import ajax from './ajax'

// 0. 定义基础路径
const BASE_URL = '';

// 1. 请求首页的数据
export const getHomeData = () => ajax(BASE_URL + '/home/api/list');
// 2. 用户登录
export const getUserData = (data) => ajax(BASE_URL + '/user/api/login', data, 'POST');
// 3. 修改用户数据
export const editUserData = (data) => ajax(BASE_URL + '/user/api/edit', data, 'POST');
// 4. 修改用户密码
export const editPwdData = (data) => ajax(BASE_URL + '/user/api/reset', data, 'POST');
// 5. 创建用户
export const createNewUser = (data) => ajax(BASE_URL + '/user/api/add', data, 'POST');
