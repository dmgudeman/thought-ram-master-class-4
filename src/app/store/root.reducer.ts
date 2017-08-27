
import { voteReducer}  from './votes/vote-reducer'
import { VoteState }        from './votes/vote-state';


export interface ApplicationState {
  votes: VoteState
}

export const ROOT_REDUCER = {
  votes : voteReducer,
}