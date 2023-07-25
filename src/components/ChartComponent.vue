<template>
    <div class="example">
        <apexcharts width="500" height="350" type="bar" :options="chartOptions" :series="series"></apexcharts>
        <button @click="updateChartValue()">Update chart</button>
    </div>
</template>
  
<script>
import VueApexCharts from 'vue-apexcharts'

export default {
    name: 'ChartComponent',
    components: {
        apexcharts: VueApexCharts,
    },
    data: function () {
        return {
            chartOptions: {
                chart: {
                    id: 'basic-bar'
                },
                xaxis: {
                    categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998]
                }
            },
            series: [{
                name: 'series-1',
                data: [30, 40, 45, 50, 49, 60, 70, 91]
            },
            {
                name: 'series-2',
                data: [20, 45, 35, 45, 23, 44, 90, 70]
            }
                ,
            {
                name: 'series-3',
                data: [40, 30, 55, 35, 59, 30, 65, 91]
            }
            ]
        }
    },
    methods: {
        updateChartValue() {
            const max = 90;
            const min = 20;
            const seriesDataArray = [] ;
            for (let index = 0; index < this.series.length; index++) {
                const newData = this.series[index].data.map(() => {
                    return Math.floor(Math.random() * (max - min + 1)) + min
                })
                const seriesData = {};
                seriesData.data = newData;
                seriesData.name = this.series[index].name;
                seriesDataArray.push(seriesData);
            }
            this.series = seriesDataArray
            // In the same way, update the series option


        }
    },
}
</script>
  