export const emptyString = (value) => {
  const _value = value.trim();
  return _value === '' || _value === null || _value === undefined
}