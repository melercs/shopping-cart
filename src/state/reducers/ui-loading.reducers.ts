import * as fromUiLoading from '../actions/ui-loading.actions';

export interface UiState {
  isLoading: boolean;
}

const initState: UiState = {
  isLoading: false
};

export function uiLoadingReducer(
  state = initState,
  action: fromUiLoading.actions
): UiState {
  switch (action.type) {
    case fromUiLoading.ACTIVATE_LOADING:
      return {
        isLoading: true
      };
    case fromUiLoading.DEACTIVATE_CHARGING:
      return {
        isLoading: false
      };
    default:
      return state;
  }
}
