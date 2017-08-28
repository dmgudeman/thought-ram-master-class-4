import { VoterService } from './voter-service';

export interface Action {
  type: any;
  counter ?: number;
  service ?: VoterService;
}

/**
  * VoteAction Constants
  */
  export const VoteActions = {
    VOTES_LOADED: "LOADED"      // Sync action
  };
 
  // *************************************************
  // Implement Synchronous Action Creators
  // *************************************************
 
  export function votesLoadedAction(counter:number):Action {
    return { type : VoteActions.VOTES_LOADED, counter };
  }

  export function voteYesAction(service:VoterService) {
    return (dispatch, getState) => {
      service.addVote().subscribe(counter =>{
        dispatch(votesLoadedAction(counter));
      })
    };
  }

  export function voteNoAction(service:VoterService) {
    return (dispatch, getState) => {
      service.removeVote().subscribe(counter =>{
        dispatch(votesLoadedAction(counter));
      })
    };
  }