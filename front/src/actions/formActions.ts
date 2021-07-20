interface IHandleFormChange {
  type: string;
  field: string;
  payload: any;
}

export function handleFormChange(
  field: string,
  payload: any,
): IHandleFormChange {
  return {
    type: 'HANDLE_FORM_CHANGE',
    field,
    payload,
  };
}
