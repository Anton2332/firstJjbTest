import * as loginUserActions from "./reducers/loginUser/loginUserActions";
import * as nameActions from "./reducers/name/nameActions";
import * as rankActions from "./reducers/rank/rankActions"

export const rootActions = {
    ...loginUserActions,
    ...nameActions,
    ...rankActions,
}
