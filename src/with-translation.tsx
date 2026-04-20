import type { InjectionKey } from 'piqure/src/Providing';
import type { ReactNode } from 'react';
import { TRANSLATION } from './translation';
import type { Namespace, TypedTFunction } from './types';

export type TranslationProps = {
  t: TypedTFunction<Namespace[]>;
};

type Inject = <T>(key: InjectionKey<T>) => T;

export const createWithTranslation =
  (inject: Inject) =>
  <P extends object>(Component: (props: P & TranslationProps) => ReactNode) =>
  (props: P): ReactNode => <Component {...props} t={inject(TRANSLATION)} />;
