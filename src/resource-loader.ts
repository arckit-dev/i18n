/* v8 ignore file */
import { keyFor } from 'piqure';
import type { Namespace } from './types';

export type ResourceLoader = (lng: string, namespaces: Namespace[]) => Promise<Record<Namespace, Record<string, unknown>>>;

export const RESOURCE_LOADER = keyFor<ResourceLoader>('i18n.resourceLoader');
