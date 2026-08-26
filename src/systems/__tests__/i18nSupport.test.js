import { describe, expect, it } from 'vitest';
import { SUPPORTED_LANGS } from '../../i18n/languageBridge.js';
import zhCN from '../../i18n/locales/zh-CN.json';

describe('zh-CN localization support', () => {
  it('registers the locale in the supported language list', () => {
    expect(SUPPORTED_LANGS).toContain('zh-CN');
  });

  it('loads the Chinese locale file with the expected structure', () => {
    expect(zhCN).toBeTruthy();
    expect(zhCN.languages).toBeTruthy();
    expect(zhCN.languages['zh-CN']).toBe('简体中文');
    expect(typeof zhCN.common.selectLanguage).toBe('string');
  });
});
