import { ipcMain, Menu, Tray } from 'electron'
import path from 'path'

export function buildTray(menubar) {
  const { tray } = menubar

  const icon = path.normalize(path.join(__dirname, 'icon.png'));
  tray.setImage(icon)
  tray.setToolTip('Beedoo Status Checker')

  return tray
}
