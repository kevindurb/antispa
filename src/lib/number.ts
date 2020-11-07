export const toInt = (value?: string | null, fallback = 0) => {
  if (!value) {
    return fallback;
  }

  const result = parseInt(value);

  if (isNaN(result)) {
    return fallback;
  }
  return result;
};
