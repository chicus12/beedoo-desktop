import * as Types from '../actions/types';

export default function newCategoryReducer(text = '', action = {}) {
  switch (action.type) {
    case Types.ADD_CATEGORY:
      return action.text;
    case Types.REMOVE_CATEGORY:
      return '';
    default:
      return text;
  }
}
