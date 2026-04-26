export const formatMonth = (month: number) => {
  return month < 12
    ? `${month}\u00a0мес`
    : month === 12
      ? '1\u00a0год'
      : month === 15
        ? '15\u00a0мес'
        : month === 18
          ? '1.5\u00a0года'
          : month === 24
            ? '2\u00a0года'
            : month === 36
              ? '3\u00a0года'
              : `${month}\u00a0мес`
}
