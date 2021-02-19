import { StateType } from 'typesafe-actions';

export type Store = StateType<ReturnType<typeof import('../store/modules/rootReducer').default>>;
