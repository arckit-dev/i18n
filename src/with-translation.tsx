import { inject } from '@arckit/injection';
import type { ReactNode } from 'react';
import { TRANSLATION } from './translation';
import type { Namespace, TypedTFunction } from './types';

export type TranslationProps = {
  t: TypedTFunction<Namespace[]>;
};

export const withTranslation =
  <P extends object>(Component: (props: P & TranslationProps) => ReactNode) =>
  (props: P): ReactNode => {
    const t = inject(TRANSLATION);
    return <Component {...props} t={t} />;
  };
