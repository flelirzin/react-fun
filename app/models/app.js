import { createAction, NavigationActions, Storage } from "../utils";
import * as authService from "../services/auth";

export default {
  namespace: "app",
  state: {
    login: false,
    loading: true,
    fetching: false,
    location: {
      latitude: 37.78825,
      longitude: -122.4324
    },
    currentLocation: {
      longitude: '-',
      latitude: '-'
    }
  },
  reducers: {
    updateState(state, { payload }) {
      return { ...state, ...payload };
    }
  },
  effects: {
    *loadStorage(action, { call, put }) {
      const login = yield call(Storage.get, "login", false);
      yield put(createAction("updateState")({ login, loading: false }));
    },
    *login({ payload }, { call, put }) {
      yield put(createAction("updateState")({ fetching: true }));
      const login = yield call(authService.login, payload);
      if (login) {
        yield put(
          NavigationActions.reset({
            index: 0,
            actions: [NavigationActions.navigate({ routeName: "Main" })]
          })
        );
      }
      yield put(createAction("updateState")({ login, fetching: false }));
      Storage.set("login", login);
    },
    *logout(action, { call, put }) {
      yield call(Storage.set, "login", false);
      yield put(createAction("updateState")({ login: false }));
    },
    *locationChange({ payload }, { call, put }) {
      // console.log('Location Change - start');
      // console.log(payload);
      // console.log('Location Change - end');
      // console.log('Location Change longitude: '+longitude+', latitude: '+latitude);
      const { longitude, latitude } = payload; 
      yield put(
        createAction("updateState")({
          currentLocation: { longitude, latitude }
        })
      );
    }
  },
  subscriptions: {
    setup({ dispatch }) {
      dispatch({ type: "loadStorage" });
    }
  }
};
