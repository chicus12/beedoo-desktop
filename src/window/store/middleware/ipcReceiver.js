import { ipcRenderer } from 'electron'

const middleware = (store) => {
  // main process actions
  ipcRenderer.on('main-actions', (event, mainAction) => store.dispatch(mainAction));

  return next => action => next(action)
}

export default middleware
