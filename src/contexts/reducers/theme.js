import { GetStorage, SetStorage, Storage } from '../store'

export const themeState = Storage('theme', { mode: 'dark' })

export const themeReducer = (state, action) => {
    switch (action.type) {
        case 'DARK':
            SetStorage('theme', { mode: 'dark' })
            return JSON.parse(GetStorage('theme'))
        case 'LIGHT':
            SetStorage('theme', { mode: 'light' })
            return JSON.parse(GetStorage('theme'))
        default:
            return state
    }
}
