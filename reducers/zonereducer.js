// import {
//   ZONE_DETAILS_LIST_FAIL,
//   ZONE_DETAILS_LIST_REQUEST,
//   ZONE_DETAILS_LIST_SUCCESS,
// } from "~/constants/zoneconstants";

// export const ZoneListReducer = (
//   state = { loading: true, zonedatum: [] },
//   action
// ) => {
//   switch (action.type) {
//     case ZONE_DETAILS_LIST_REQUEST:
//       return { loading: true };
//     case ZONE_DETAILS_LIST_SUCCESS:
//       return {
//         loading: false,
//         zonedatum: action.payload,
//       };

//     case ZONE_DETAILS_LIST_FAIL:
//       return { loading: false, error: action.payload };
//     default:
//       return state;
//   }
// };
