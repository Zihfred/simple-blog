// eslint-disable-next-line import/prefer-default-export
export const cutText = (string, length) => (string.length > length ? `${string.slice(0, length)}...` : string);
