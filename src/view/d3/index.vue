<template>
    <div ref="d3div"></div>
</template>
<style lang="scss" scoped>
</style>
<script>
import * as d3 from 'd3'

const dayjs = require('dayjs')
export default {
  data () {
    return {
      tableData: [99, 71, 78, 25, 36, 92]
    }
  },
  methods: {
    init () {
      const svg = d3.select(this.$refs.d3div)
        .append('svg')
        .attr('width', '100%')
        .attr('height', '100%')
        .attr('class', 'neo4jd3-graph')
        .call(d3.zoom().on('zoom', function () {
          var scale = d3.event.transform.k, translate = [d3.event.transform.x, d3.event.transform.y]

          if (svgTranslate) {
            translate[0] += svgTranslate[0]
            translate[1] += svgTranslate[1]
          }

          if (svgScale) {
            scale *= svgScale
          }

          svg.attr('transform', 'translate(' + translate[0] + ', ' + translate[1] + ') scale(' + scale + ')')
        }))
        .on('dblclick.zoom', null)
        .append('g')
        .attr('transform', 'translate(0, 10)')
      const x = d3.scaleLinear().range([0, 830])
      const y = d3.scaleLinear().range([410, 0])
      d3.axisLeft().scale(x)
      d3.axisTop().scale(y)
      x.domain(d3.extent(this.tableData, (d, i) => i))
      y.domain([0, d3.max(this.tableData, d => d)])
      const createPath = d3.line()
        .x((d, i) => x(i))
        .y(d => y(d))
      svg.append('path').attr('d', createPath(this.tableData))
    },
    demo () {
      console.log('tt', this.isVieDate('2044-12-24'))
    },
    isVieDate (date) {
      if (dayjs('2200-01-01').isAfter(dayjs(date)) && dayjs('1900-01-01').isBefore(dayjs(date))) {
        return true
      } else {
        return false
      }
    }
  },
  mounted () {
    this.init()
    this.demo()
  }
}
</script>
