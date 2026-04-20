/* v8 ignore file */
import type { InjectionKey } from 'piqure/src/Providing';
import { RESOURCE_LOADER, type ResourceLoader } from './resource-loader';
import type { Namespace } from './types';

type Provide = <T>(key: InjectionKey<T>, value: T) => void;

const loadNamespaceResources: ResourceLoader = async (lng, namespaces) => {
  const entries = await Promise.all(
    namespaces.map(async (ns) => {
      const response = await fetch(`/locales/${lng}/${ns}.json`);
      const content = (await response.json()) as Record<string, unknown>;
      return [ns, content] as const;
    })
  );
  return Object.fromEntries(entries) as Record<Namespace, Record<string, unknown>>;
};

export const registerFetchResourceLoader = (provide: Provide) => {
  provide(RESOURCE_LOADER, loadNamespaceResources);
};
