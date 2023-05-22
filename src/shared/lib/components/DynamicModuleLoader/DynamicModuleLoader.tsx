import { Reducer } from '@reduxjs/toolkit';
import { ReactElement, ReactNode, useEffect } from 'react';
import { useDispatch, useStore } from 'react-redux';
import { ReduxStoreWithManager } from '@/app/providers/StoreProvider';
import { StateSchema, StateSchemaKeys } from '@/app/providers/StoreProvider/config/stateSchema';

export type ReducersList = {
  [name in StateSchemaKeys]?: Reducer<NonNullable<StateSchema[name]>>;
}

interface IDynamicModuleLoaderProps {
  reducers: ReducersList;
  removeReducerAfterUnmount?: boolean;
  children: ReactNode;
}

export const DynamicModuleLoader = (props: IDynamicModuleLoaderProps) => {
  const {
    children,
    reducers,
    removeReducerAfterUnmount = true,
  } = props;
  const dispatch = useDispatch();
  const store = useStore() as ReduxStoreWithManager;

  useEffect(() => {
    const mountedReducers = store.reducerManager.getReducerMap();

    Object.entries(reducers).forEach(([name, reducer]) => {
      const mounted = mountedReducers[name as StateSchemaKeys];

      // Add reducer if it is not mounted
      if (!mounted) {
        store.reducerManager.add(name as StateSchemaKeys, reducer);
        dispatch({ type: `@ADD ${name} reducer` });
      }
    });

    return () => {
      if (removeReducerAfterUnmount) {
        Object.entries(reducers).forEach(([name, reducer]) => {
          store.reducerManager.remove(name as StateSchemaKeys);
          dispatch({ type: `@REMOVE ${name} reducer` });
        });
      }
    };
  }, []);

  return children as ReactElement;
};
