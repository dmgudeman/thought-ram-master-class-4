export const VoteActions = {
    NO: "NO",
    YES: "YES"
  };

export interface Action {
  type: any;
}


export function VoteYesAction() {
  return { type: VoteActions.YES
}
}
export function VoteNoAction() {
  return { type: VoteActions.NO
}
}