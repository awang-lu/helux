import configure from './configure';
import ccContext from '../cc-context';
import { clone } from '../support/util';
import * as checker from '../core/checker';

/**
 * @param {string} newModule
 * @param {string} existingModule
 */
export default (newModule, existingModule, { state, reducer, computed, watch, init } = {}) => {
  if (!ccContext.isCcAlreadyStartup) {
    throw new Error('cc is not startup yet');
  }
  checker.checkModuleNameBasically(newModule);
  checker.checkModuleName(existingModule, false);

  const mState = ccContext.store.getState(existingModule);
  let stateCopy = clone(mState);
  if (state) stateCopy = Object.assign(stateCopy, state);

  let reducerEx = ccContext.reducer._reducer[existingModule] || {};
  if (reducer) reducerEx = Object.assign(reducerEx, reducer);

  let computedEx = ccContext.computed._computedFn[existingModule] || {};
  if (computed) computedEx = Object.assign(computedEx, computed);

  let watchEx = ccContext.watch._watch[existingModule] || {};
  if (watch) watchEx = Object.assign(watchEx, watch);

  let initEx = ccContext.init._init[existingModule];
  if (init) initEx = init;

  const confObj = {
    state: stateCopy,
    reducer: reducerEx,
    computed: computedEx,
    watch: watchEx,
  };
  if (initEx) confObj.init = initEx;

  configure(newModule, confObj);
}