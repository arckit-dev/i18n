/* v8 ignore file */
import { keyFor } from 'piqure';
import type { Namespace, TypedTFunction } from './types';

export type Translation = TypedTFunction<Namespace[]>;

export const TRANSLATION = keyFor<Translation>('i18n.translation');
