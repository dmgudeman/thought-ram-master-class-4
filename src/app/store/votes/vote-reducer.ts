import { Action, VoteActions } from './vote-actions';
import { INITIAL_VOTES_STATE } from 'app/store/votes/vote-state';
import { VotesState } from './vote-state';

export function voteReducer(state:VotesState = INITIAL_VOTES_STATE, action:Action) {
  switch (action.type) {
 case VoteActions.VOTES_LOADED : return {...state, counter: action.counter };
 default                       : return state;
  }
}