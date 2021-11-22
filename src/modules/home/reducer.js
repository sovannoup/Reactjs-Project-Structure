import { success, error, abort } from "redux-saga-requests";

export const SITE_DESCRIPTION = "SITE_DESCRIPTION";

export const getSiteDescription = () => ({
  type: SITE_DESCRIPTION,
});

const initialState = {
  loading: false,
  error: false,
};

const homeReducer = (state = initialState, action) => {
  switch (action.type) {
    case SITE_DESCRIPTION:
      return {
        ...state,
        dataGetSiteDescription: false,
        loading: true,
        error: false,
      };
    case success(SITE_DESCRIPTION):
      return {
        ...state,
        ...action.payload,
        loading: false,
      };
    case error(SITE_DESCRIPTION):
      return {
        ...state,
        ...action.payload,
        loading: false,
        error: true,
      };
    case abort(SITE_DESCRIPTION):
      return { ...state, loading: false };
    /**
     * DEFAULT CASE
     */
    default:
      return state;
  }
};

export default homeReducer;
