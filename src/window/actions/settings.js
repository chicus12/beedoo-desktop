import * as Types from './types'

export default function setTickerWidth(width) {
  return {
    type: Types.TICKER_WIDTH,
    width: parseInt(width, 10),
  };
}
