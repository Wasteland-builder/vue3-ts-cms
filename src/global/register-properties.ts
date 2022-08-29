import { App } from 'vue'

import { formatUtcString } from '@/utils/data-fromat'

export default function registerProperties(app: App) {
  app.config.globalProperties.$filters = {
    foo() {
      console.log('foo')
    },
    formatTime(value: string) {
      return formatUtcString(value)
    }
  }
}
