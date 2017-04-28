import menubar from 'menubar'
import { normalize, join } from 'path'
import { buildTray } from './tray'

require('electron-debug')({ showDevTools: true });

const mb = menubar({
  index: `file://${normalize(join(__dirname, '../window/index.html'))}`,
  width: 800,
  height: 400,
});

mb.on('ready', () => {
  buildTray(mb)
})
