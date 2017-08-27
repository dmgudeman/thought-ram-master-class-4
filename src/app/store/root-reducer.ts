
import { voteReducer}  from './vote-reducer'
import { VoteState }        from './vote-state';


export interface ApplicationState {
  votes: VoteState
}

export const ROOT_REDUCER = {
  votes : voteReducer,
}