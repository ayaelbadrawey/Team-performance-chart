export default {
    state: () => ({
        chartData: [],
    }),

    actions: {
        getData({ state, commit }) {
            return this.$axios.$get('https://fe-task.getsandbox.com/performance').then((res) => {
                commit('setChartData', res);
            })

        },

    },
    mutations: {
        setChartData(state, data) {
            state.chartData = data;
        }
    }

}