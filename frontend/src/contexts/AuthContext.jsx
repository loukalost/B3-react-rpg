import { createContext, useContext, useEffect, useReducer } from 'react'
import { strapiLoginLocal, strapiRegisterLocal } from '../api/strapi'
import { toast } from 'react-toastify'

const AuthContext = createContext()

const initialState = {
  user: null,
  jwt: null,
  isLoggedIn: false,
  loading: false,
  error: null
}

const actionTypes = {
  LOGIN_SUCCESS: 'LOGIN_SUCCESS',
  REGISTER_SUCCESS: 'REGISTER_SUCCESS',
  ERROR: 'ERROR',
  LOADING: 'LOADING',
  LOGOUT: 'LOGOUT'
}

// previousState = état précédent
const authReducer = (previousState, action) => {
  switch (action.type) {
    case actionTypes.LOGIN_SUCCESS:
    case actionTypes.REGISTER_SUCCESS:
      return {
        user: action.data.user,
        jwt: action.data.jwt,
        isLoggedIn: true,
        loading: false,
        error: null
      }
    case actionTypes.ERROR:
      return {
        user: null,
        jwt: null,
        error: action.error,
        loading: false
      }
    case actionTypes.LOADING:
      return {
        ...initialState,
        loading: true
      }
    case actionTypes.LOGOUT:
      return initialState
    default:
      throw new Error(`Unhandled action type : ${action.type}`)
  }
}

const authFactory = (previousState, dispatch) => ({
  login: async (credentials) => {
    dispatch({
      type: actionTypes.LOADING
    })
    try {
      const loginData = await strapiLoginLocal(credentials)
      if (loginData.user && loginData.jwt) {
        dispatch({
          type: actionTypes.LOGIN_SUCCESS,
          data: loginData
        })
      }
    } catch (error) {
      handleError(dispatch, error)
    }
  },
  logout: async () => {
    dispatch({
      type: actionTypes.LOGOUT
    })
  },
  register: async (credentials) => {
    dispatch({
      type: actionTypes.LOADING
    })
    try {
      const registerData = await strapiRegisterLocal(credentials)
      if (registerData?.user && registerData?.jwt) {
        dispatch({
          type: actionTypes.REGISTER_SUCCESS,
          data: registerData
        })
      }
    } catch (error) {
      handleError(dispatch, error)
    }
  }
})

const handleError = (dispatch, error) => {
  console.error(error)
  toast.error(error?.response?.data?.error?.message)
  dispatch({
    type: actionTypes.ERROR,
    error: error?.response?.data?.error?.message
  })
}

const AuthProvider = ({ children }) => {
  // Récupération de l'état sauvegardé
  const savedState = JSON.parse(window.localStorage.getItem('@AUTH'))
  const [state, dispatch] = useReducer(authReducer, savedState || initialState)

  useEffect(() => {
    // Sauvegarde de l'état à chaque changement via la liste de dépendances de useEffect()
    window.localStorage.setItem('@AUTH', JSON.stringify(state))
  }, [state])

  return (
    <AuthContext.Provider value={{ state, ...authFactory(state, dispatch) }}>
      {children}
    </AuthContext.Provider>
  )
}

const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) throw new Error('useAuth must be used inside a AuthProvider')
  return context
}

export {
  AuthProvider,
  useAuth
}
