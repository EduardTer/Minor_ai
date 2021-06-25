import { HTTP } from '@/plugins/axios'

const debugLogin = ({ commit }) => {
  localStorage.token = 'token';
  commit('SET_AUTHENTICATED', true);
  commit('SET_USER', {
    first_name: "Eduard",
    last_name: "Terlouw",
    gender: "male",
    age: 21
  });

}

const getClientData = (context) => {
  return HTTP.get(context.rootGetters["api/GET_EXERCISE_URL"]).then((response) => {
    console.log(response) 
    context.commit("SET_USER", response.data); 
  }
  ).catch((error) => {
    console.log(error)
  });
}

const login = (context, payload) => {
  return HTTP.post(context.rootGetters["api/GET_LOGIN_EXTENSION"], payload).then((response) => {
    //TODO: Remove this log in production
    console.log(response);
    localStorage.token = response.data.token;
    localStorage.userId = response.data.userId;

    context.commit('SET_AUTHENTICATED', true);
    HTTP.get(context.rootGetters["api/GET_ROLE_EXTENSION"]).then((res) => {
      console.log(res);
      context.commit('SET_ROLES', res.data.role)
    })
    return true;
  }
  ).catch(() => {
    context.commit('SET_AUTHENTICATED', false);
    throw 400
  })
}

const getUserInfo = (context) => {
  return HTTP.get(context.rootGetters["api/GET_LOGIN_EXTENSION"]).then((response) => {
    context.commit('SET_USER', response.data);
  })
}

const register = (context, payload) => {
  return HTTP.post(context.rootGetters["api/GET_REGISTER_EXTENSION"], payload).then((response) => {
    console.log(response)
    return true;
  }
  ).catch((e) => {
    console.log(e.response)
    throw e.response
  })
}

const signOut = ({ commit }) => {
  if (localStorage.token) {
    localStorage.removeItem('token');
    sessionStorage.clear();
    commit('SET_ROLES', []);
    commit('SET_AUTHENTICATED', false);
  }
}

const checkAuthenticated = ({ commit }) => {
  if (localStorage.token) {
    commit('SET_AUTHENTICATED', true);
  }
}

export default {
  getUserInfo,
  debugLogin,
  login,
  register,
  signOut,
  checkAuthenticated,
  getClientData
}