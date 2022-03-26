import React, { Component } from "react";
import { connect } from "react-redux";
// import CryptoJS from "crypto-js";

import {
  getUserDataAction,
  createNewUserAction,
} from "./../../store/actionCreators";

import "./login.css";

const map = {
  login: "登录",
  register: "注册",
};

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      userPwd: "",
      mode: "login",
    };
  }

  handleUserLogin = () => {
    const { mode, userName, userPwd } = this.state;
    if (!userName || !userPwd) {
      alert("用户名和密码不能为空！");
      return;
    }

    // const userPwdEncrypted = CryptoJS.AES.encrypt(userPwd, P_KEY).toString();

    // 构建FormData
    // let params = new URLSearchParams();
    // params.append("user_name", userName);
    // params.append("user_pwd", userPwdEncrypted);

    const params = {
      user_name: userName,
      user_pwd: userPwd,
      // user_pwd: userPwdEncrypted,
    };

    let method = this.props.reqLogin;

    if (mode === "register") {
      method = this.props.reqRegister;
    }

    method(params, (userData) => {
      if (userData.token !== "") {
        window.location.replace("/");
      }
    });
  };

  render() {
    const { mode, userName, userPwd } = this.state;
    return (
      <div className="login-box">
        <form
          className="w-form w-form-horizontal login-content"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="login-header-common">账号{map[mode]}</div>
          <div className="w-row w-form-item">
            <div className="w-form-item-control-wrapper">
              <div className="w-form-item-control ">
                <span className="login-input-common w-input-affix-wrapper w-input-affix-wrapper-light">
                  <span className="w-input-prefix">
                    <img
                      alt=""
                      className="login-input-img"
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAYAAAGzs1ytAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAcZJREFUeNpi+P//P8PMmTO1QTQDiIAKhDOCRaAAIIBgosVgQSBjPkwpE1D2I0wVQADBlHkgGXQK3eQJyApQbUECAAGErGM+XtVM2HSDBWfNmhUOpW+gmIlk9loQ8QxdAiCA0FXdAGI+ND/IYigGGYduElTcCjm8YCAR6DAPLI6fh81rskAcjqwKqJkPI8RAbsPmBCSnNIFogADCCEmgacVASgeIe9LS0q7iigtZZBtAoQIKHaxBB4t7LE7wwBYaBdjTAUMqrtDABj5hU9yIrgoa7vkYHkSKbg+kqA7H5UGUdAFLrbDsBFeMK12gRxjMzVdxeI4BGDEFQLdPwJqYcZgOTtsAAYYzmwFNAwUlyERtIF6FZDuIHwblFwBtfow3m6LZuodQQkQK3T3Y5HApTiXG21D1qdgcga24kMUX6FjAVWwpEJvBO4C4mASDi6F6UADWyIMmYVDEJQEj5xiOyIWpAUUghsEsOFxxDOqKLKgBVkCsBZW7BpVXgqrBajGKi6FJbDcQ1wNdsZKYcICW3KCMawbU8wnDYKACK2hJiaKASMNBBecp5KBDjrwmqARJhkKzJ0hPEtQMjFRxBVdEEWk4SO8VGB8AR8dxEDmhX30AAAAASUVORK5CYII="
                    />
                  </span>
                  <input
                    className="w-input w-input-light"
                    placeholder="请输入账号"
                    type="text"
                    value={userName}
                    onChange={(e) =>
                      this.setState((oldProps) => ({
                        ...oldProps,
                        userName: e.target.value,
                      }))
                    }
                  />
                </span>
              </div>
            </div>
          </div>
          <div className="w-row w-form-item">
            <div className="w-form-item-control-wrapper">
              <div className="w-form-item-control ">
                <span className="login-input-common w-input-affix-wrapper w-input-affix-wrapper-light">
                  <span className="w-input-prefix">
                    <img
                      alt=""
                      className="login-input-img"
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAYAAAGzs1ytAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAZdJREFUeNpi/P//PwMMsICIWbNmrQXRjMgyAAHEAOLMnDnTA0SzAJXsAQp+BOIdYBmobDFAAKHqQQJM2ASBxhTDrGyCmgcDswECCMVcGBtFAEhPANGMIAZQiyySdktkVXDtWF0B0g7yzXYksWKAAILbjuSKCUjstchy6AqL8fFhgvPRbcBiYzHMwVfQgw1fGPMjC6alpfViUwwQQNis80B3Ky4P7sEWKmSFBtYYwQXAqQvo+2dA9nEcakCevwL0dAEDLs+gOWc+TmdgCecrONMyLkC5YiwxyA/LrLOhodGLJzSsQAyAAMOZMaEe5QNS64AYRK+EavQA4sdAnAh0wSe8cYLDUJABTUDNZjgs3AM1/CqpAacNdSW2sPoElfMgysVAl2gjZRlFIH4FxF9x6EWX/4jseljyBNk8D4hXgZMhGQBoBqg8CwPiJKAZO5iQvN2Lz1CQ5VAHMOAIngJoatEmNXFqwzRRPdWTAlhIUPuJnKz3BFT6A8MwHE8YzgZhPHEQDq5BIGYhkhs00YdDcxk5AJy2YbkRALXumfaWCQcmAAAAAElFTkSuQmCC"
                    />
                  </span>
                  <input
                    type="password"
                    id="id_password"
                    className="w-input w-input-light"
                    placeholder="请输入密码"
                    value={userPwd}
                    onChange={(e) =>
                      this.setState((oldProps) => ({
                        ...oldProps,
                        userPwd: e.target.value,
                      }))
                    }
                  />
                  <span className="w-input-suffix">
                    <img
                      alt=""
                      className="login-input-img"
                      style={{ cursor: "pointer" }}
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAYAAAGzs1ytAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAaBJREFUeNpi/P//PwMMMDEgAThn1qxZBgABxIiiDCQC46DIAAQQw8yZMw1AAsgYKOYAMkwByUAHKDMBVTsSAAggrBJM2FSCnJOALADkf2AE2ioAZAcAMcgyh7S0NAVkJzXA2FgtAgggnM7C6gCopQ2EFALVXACbDGQUAPnSQBwKxPZAxz2EKsgCUmlArA8UY0QPxwfojgeyE/B6BBcACCDSPUi0YqToJRQaBiAPHEBPMFgSENjDTMAgcQBFLl4TGRgegNgsUDF+UKCD5ICap0EVyQOpg0C8GoifwtLtAuRwBqVZmBgsjEEpCogDGLAFPsyNsEiCYeSgu4DuXnCapEukAAQYSSYPCoOZpaSkAs6ePbvD2Nh4AjUMBMb7A6B5H2AZEJRSzgOxITAWLpBpIIoZKEEBlKwDUo1AXAiUnECkgaBSoR+I64F6muBhDC3LFgAxyMYAmIuhBd9UIOYCYlAR8gWqhweIQcn8GxBnA9UvQHLxBmhaTMCX4x6gp270Ygc9peNK9SgRAKQaYK7BBqByDVC15Cc3WBVFbOQOvQwCAKAKfXbE5HMxAAAAAElFTkSuQmCC"
                      onClick={() => {
                        const password = document.querySelector("#id_password");
                        const type =
                          password.getAttribute("type") === "password"
                            ? "text"
                            : "password";
                        password.setAttribute("type", type);
                      }}
                    />
                  </span>
                </span>
              </div>
            </div>
          </div>
          <button
            disabled=""
            // title="请先同意用户隐私协议"
            type="submit"
            className="w-btn login-input-button w-btn-primary"
            onClick={(e) => {
              e.preventDefault();
              this.handleUserLogin();
            }}
          >
            <span>{`${map[mode]}${mode === "register" ? "并登录" : ""}`}</span>
          </button>
          <div className="login-tips">
            <p className="login-tips-l">
              {mode === "login" ? (
                <span>
                  还未注册？
                  {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                  <a
                    onClick={(e) => {
                      e.preventDefault();
                      this.setState((oldState) => ({
                        ...oldState,
                        mode: "register",
                      }));
                    }}
                  >
                    立刻注册
                  </a>
                </span>
              ) : (
                // eslint-disable-next-line jsx-a11y/anchor-is-valid
                <a
                  onClick={(e) => {
                    e.preventDefault();
                    this.setState((oldState) => ({
                      ...oldState,
                      mode: "login",
                    }));
                  }}
                >
                  返回登录
                </a>
              )}
            </p>
            <p className="login-tips-r">
              <span>
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <a>忘记密码</a>
              </span>
            </p>
          </div>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    reqLogin(data, callback) {
      const action = getUserDataAction(data, callback);
      dispatch(action);
    },
    reqRegister(data, callback) {
      const action = createNewUserAction(data, callback);
      dispatch(action);
    },
  };
};

export default connect(null, mapDispatchToProps)(Login);
