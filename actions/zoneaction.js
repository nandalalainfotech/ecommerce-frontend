// import Axios from "axios";
// import {
//   ZONE_DETAILS_LIST_FAIL,
//   ZONE_DETAILS_LIST_REQUEST,
//   ZONE_DETAILS_LIST_SUCCESS,
// } from "~/constants/zoneconstants";
// export const ZoneListDetails = () => async (dispatch) => {
//   console.log("dispatch", dispatch);
//   dispatch({
//     type: ZONE_DETAILS_LIST_REQUEST,
//   });
//   try {
//     const { data } = await Axios.get(`/api/zoneDetails/zonelist`);
//     dispatch({ type: ZONE_DETAILS_LIST_SUCCESS, payload: data });
//   } catch (error) {
//     dispatch({ type: ZONE_DETAILS_LIST_FAIL, payload: error.message });
//   }
// };
