export enum ActionTypes {
  Add = '[File] Add new file',
  Remove = '[File] Remove file',
  LoadFiles = '[Files] Load files',
  LoadSuccess = '[Files] Load success',
}
export const NewFile = (payload) => {
  return {
    type: ActionTypes.Add,
    payload,
  };
};
export const GetItems = () => ({
  type: ActionTypes.LoadFiles,
});
export const RemoveFile = (payload) => ({
  type: ActionTypes.Remove,
  payload,
});
export const LoadItems = (payload) => ({
  type: ActionTypes.LoadSuccess,
  payload,
});


