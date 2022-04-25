import { mount } from '@vue/test-utils'
import performanceChart from '@/components/performance-chart.vue'

describe('performanceChart', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(performanceChart)
    expect(wrapper.vm).toBeTruthy()
  })
})
