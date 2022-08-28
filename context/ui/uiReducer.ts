import { UiState } from '.';

type Action = | { type: 'toggleSidebar'}

export const uiReducer = (state: UiState, action: Action): UiState => {
  switch (action.type) {
    case 'toggleSidebar': 
      return {
        ...state,
        isSideBarOpen: !state.isSideBarOpen
      };
    default:
      return state;
  }
}