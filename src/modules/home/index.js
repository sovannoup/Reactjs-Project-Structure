import { call, put, takeLatest } from "redux-saga/effects";
import { error, success } from "redux-saga-requests";
import { axios } from "../app";
import { SITE_DESCRIPTION } from "./reducer";
import { normalizeData } from "../../utils/normalize";

export function* getSiteDescriptionWorker() {
  try {
    console.log("dataGetSiteDescription: ");
    const dataGetSiteDescription = yield call(
      axios.get,
      "/web/site-description"
    );
    console.log("dataGetSiteDescription: ", dataGetSiteDescription);
    yield put({
      type: success(SITE_DESCRIPTION),
      payload: {
        dataGetSiteDescription: normalizeData(dataGetSiteDescription),
      },
    });
  } catch (e) {
    console.log(e);
    yield put({
      type: error(SITE_DESCRIPTION),
      payload: {
        errorGetSiteDescription: e,
      },
    });
  }
}

export function* homeSaga() {
  yield takeLatest(SITE_DESCRIPTION, getSiteDescriptionWorker);
}
