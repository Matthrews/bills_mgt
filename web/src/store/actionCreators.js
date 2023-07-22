import * as constants from "./actionType"; // ES6
import { getBillList, getUserData, createNewUser } from "./../network";

export const getHomeDataAction = () => {
  return (dispatch) => {
    // 请求网络数据
    getBillList()
      .then((res) => {
        if (res.status_code === 200) {
          const data = res.result ?? []
          data.forEach((element) => {
            // 增加业务字段
            element.bussinessType = element.resource_group !== '-' ? element.resource_group: element.instance_tag === '-' ? '请选择业务线': '';
          });
          dispatch({
            type: constants.INIT_HOME_DATA,
            homeData: data
          });
        }
      })
      .catch(() => {
        console.log("request failed.");
      });
  };
};

// 2. 用户登陆
export const getUserDataAction = (data, callback) => {
  return (dispatch) => {
    // 请求网络数据
    getUserData(data)
      .then((res) => {
        if (res.status_code === 200) {
          const userData = res.result;
          dispatch({
            type: constants.INIT_USER_DATA,
            userData,
          });
          // 成功回调
          callback && callback(userData);
        } else {
          alert(res.result);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

// 3. 用户注册
export const createNewUserAction = (data, callback) => {
  return (dispatch) => {
    // 请求网络数据
    createNewUser(data)
      .then((res) => {
        if (res.status_code === 200) {
          const userData = res.result;
          dispatch({
            type: constants.INIT_USER_DATA,
            userData,
          });
          // 成功回调
          callback && callback(userData);
        } else {
          alert(res.result);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
