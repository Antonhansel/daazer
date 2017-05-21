import { FLUSH_STATE } from './constants';

export function flushState() {
  return {
    type: FLUSH_STATE,
  };
}
