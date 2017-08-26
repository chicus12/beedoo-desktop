import { ipcMain, Menu, Tray } from 'electron'
import path from 'path'
import request from 'request-promise'

import * as ActionsTypes from '../window/actions/types'

export default function buildTray(menubar) {
  const { tray } = menubar

  const icon = path.normalize(path.join(__dirname, 'icon.png'))
  tray.setImage(icon)
  tray.setToolTip('Beedoo Status Checker')

  ipcMain.on('renderer-action', (event, action) => {
    switch (action.type) {
      case ActionsTypes.ADD_COMPANY: {
        break
      }

      default:
        break
    }
  })

  return tray
}
