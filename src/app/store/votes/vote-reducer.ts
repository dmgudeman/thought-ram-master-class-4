
import { VoteActions } from './vote-actions'



let vote: VoteActions = new VoteActions();
/**
   * Use the custom actions to update the counter state!
   */
export function voteReducer(state, action) {
  switch (action.type) {
    case vote.VoteActions.NO  :  return {...state, counter: state.counter - 1};
    case vote.VoteActions.YES :  return {...state, counter: state.counter + 1};
    default              :  return state;
  }
}