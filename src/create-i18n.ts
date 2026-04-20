/* v8 ignore file */
import type { InjectionKey } from 'piqure/src/Providing';
import { createWithTranslation } from './with-translation';

type Inject = <T>(key: InjectionKey<T>) => T;

export type I18nDependencies = {
  inject: Inject;
};

export const createI18n = ({ inject }: I18nDependencies) => ({
  withTranslation: createWithTranslation(inject)
});
