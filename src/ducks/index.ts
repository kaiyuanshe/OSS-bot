/**
 *  Huan(202003): Redux with Ducks
 *
 *  Scaling your Redux App with ducks:
 *    https://www.freecodecamp.org/news/scaling-your-redux-app-with-ducks-6115955638be/
 *
 *  Redux Toolkit - Usage With TypeScript:
 *    https://redux-toolkit.js.org/usage/usage-with-typescript
 *
 */
import { combineReducers }  from 'redux'
import { configureStore }   from '@reduxjs/toolkit'

import logonoff, {
  logonoffActions,
  logonoffSelectors,
}                     from './logonoff'
import counter, {
  counterActions,
}                     from './counter'

export {
  logonoffActions,
  logonoffSelectors,
  counterActions,
}

const reducer = combineReducers({
  counter,
  logonoff,
})

export const store = configureStore({
  reducer,
})

export type RootState = ReturnType<typeof reducer>
export type AppDispatch = typeof store.dispatch
