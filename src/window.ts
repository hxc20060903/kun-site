/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
export const getLiff = () =>
  typeof window !== 'undefined' ? window.liff : undefined;

/* eslint-enable @typescript-eslint/explicit-module-boundary-types */
