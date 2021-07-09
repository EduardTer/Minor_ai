const GET_API_URL = () => {
        return 'https://fysio.azurewebsites.net'
}

const GET_LOGIN_ENDPOINT = (state, getters, rootState, rootGetters) => {
        return {
                url: GET_API_URL(state, getters, rootState, rootGetters) + "/" + state.endpoints.auth.login.extension, 
                method: state.endpoints.auth.login.method,
                headers: {
                        'Content-Type': 'application/json',
                        'accept': '*/*'
                }
        }
}


const GET_ROLE_ENDPOINT = (state, getters, rootState, rootGetters) => {
        return {
                url: GET_API_URL(state, getters, rootState, rootGetters) + "/" + state.endpoints.auth.role.extension, 
                method: state.endpoints.auth.role.method,
                headers: {
                        'accept': '*/*'
                }
        }
}

const GET_POSE_NAMES_EXTENSION = (state) => state.endpoints.exercise.pose_names.extension
const GET_MODEL_URL = (state, getters, rootState, rootGetters) => GET_API_URL(state, getters, rootState, rootGetters) + "/" + state.endpoints.file.model.extension
const GET_EXERCISE_URL = (state) => {
        return state.endpoints.statistics.exercise.extension
}
const GET_CLIENT_URL = (state, getters, rootState, rootGetters) => GET_API_URL(state, getters, rootState, rootGetters) + "/" + state.endpoints.client.extension
const GET_REGISTER_EXTENSION = (state) => {
        return state.endpoints.auth.register.extension
}
const GET_LOGIN_EXTENSION = (state) => {
        return state.endpoints.auth.login.extension
}

const GET_PAST_WEEK_EXTENSION = (state) => {
        return state.endpoints.client.pastweek.extension
}

const GET_ROLE_EXTENSION = (state) => {
        return state.endpoints.auth.role.extension
}
const GET_FILE_UPLOAD_EXTENSION = (state) => {
        return state.endpoints.therapist.upload_file.extension
}
const GET_EXERCISE_ADD_EXTENSION = (state) => {
        return state.endpoints.exercise.add.extension
}
const GET_THERAPIST_EXTENSION = (state) => {
        return state.endpoints.therapist.extension
}
const GET_ASSIGN_EXERCISE_EXTENSION = (state) => {
        return state.endpoints.therapist.assign_exercise.extension
}
const GET_LAST_WEEK_RESULT_FOR_CLIENT_EXTENSION = state => {
        return state.endpoints.therapist.pastweek_from_client.extension
}
const GET_ALL_EXERCISES_EXTENSION = state => {
        return state.endpoints.exercise.get_all.extension
}
const GET_REMOVE_CLIENT_EXERCISE_EXTENSION = state => {
        return state.endpoints.therapist.remove_client_exercise.extension
}
const GET_FINISH_REP_EXTENSION = state => {
        return state.endpoints.client.finish_rep.extension
}
export default {
    GET_API_URL, 
    GET_LOGIN_ENDPOINT, 
    GET_REGISTER_EXTENSION, 
    GET_LOGIN_EXTENSION, 
    GET_MODEL_URL, 
    GET_CLIENT_URL, 
    GET_POSE_NAMES_EXTENSION, 
    GET_ROLE_EXTENSION, 
    GET_ROLE_ENDPOINT, 
    GET_EXERCISE_URL,
    GET_FILE_UPLOAD_EXTENSION,
    GET_EXERCISE_ADD_EXTENSION,
    GET_PAST_WEEK_EXTENSION,
    GET_THERAPIST_EXTENSION,
    GET_ASSIGN_EXERCISE_EXTENSION,
    GET_LAST_WEEK_RESULT_FOR_CLIENT_EXTENSION,
    GET_ALL_EXERCISES_EXTENSION,
    GET_REMOVE_CLIENT_EXERCISE_EXTENSION,
    GET_FINISH_REP_EXTENSION
}