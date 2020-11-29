import { NativeScriptConfig } from '@nativescript/core'

export default {
  id: 'hookah.in.ua',
  appPath: 'src',
  appResourcesPath: 'App_Resources',
  android: {
    v8Flags: '--expose_gc',
    markingMode: 'none'
  }
} as NativeScriptConfig
