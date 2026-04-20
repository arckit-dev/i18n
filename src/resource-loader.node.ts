/* v8 ignore file */
import { readFile } from 'node:fs/promises';
import { join } from 'node:path';
import type { InjectionKey } from 'piqure/src/Providing';
import { RESOURCE_LOADER, type ResourceLoader } from './resource-loader';
import type { Namespace } from './types';

type Provide = <T>(key: InjectionKey<T>, value: T) => void;

const loadNamespaceResources: ResourceLoader = async (lng, namespaces) => {
  const entries = await Promise.all(
    namespaces.map(async (ns) => {
      const localePath = join(process.cwd(), 'public', 'locales', lng, `${ns}.json`);
      const content = await readFile(localePath, 'utf-8');
      return [ns, JSON.parse(content) as Record<string, unknown>] as const;
    })
  );
  return Object.fromEntries(entries) as Record<Namespace, Record<string, unknown>>;
};

export const registerNodeResourceLoader = (provide: Provide) => {
  provide(RESOURCE_LOADER, loadNamespaceResources);
};
