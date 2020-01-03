export const cutText = (string, length) => (string.length > length ? `${string.slice(0, length)}...` : string);
