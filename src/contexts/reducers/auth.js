import { GetStorage, SetStorage, Storage } from '../store'

export const authState = Storage('auth', { status: false })

export const authReducer = (state, action) => {
    switch (action.type) {
        case 'LOGIN':
            SetStorage('auth', { status: true })
            return JSON.parse(GetStorage('auth'))
        case 'LOGOUT':
            SetStorage('auth', { status: false })
            return JSON.parse(GetStorage('auth'))
        default:
            return state
    }
}
