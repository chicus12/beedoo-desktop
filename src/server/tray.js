import { ipcMain, Menu, Tray } from 'electron'
import path from 'path'
import request from 'request-promise'

import * as ActionsTypes from '../window/actions/types'
import { addUser } from './api/companies'

export default function buildTray(menubar) {
  const { tray } = menubar

  const icon = path.normalize(path.join(__dirname, 'icon.png'))
  tray.setImage(icon)
  tray.setToolTip('Beedoo Status Checker')

  ipcMain.on('renderer-action', (event, action) => {
    switch (action.type) {
      case ActionsTypes.SIGN_UP: {
        addUser(action).then(user => {
          console.log('user', user)
        })
        break
      }
      case ActionsTypes.ADD_COMPANY: {
        console.log('llego aqui', action)

        break
      }

      case ActionsTypes.GET_COMPANIES: {
        break
      }

      default:
        break
    }
  })

  return tray
}
