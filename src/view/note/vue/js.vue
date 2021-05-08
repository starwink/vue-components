<script>
export default {
    name: 'note',
    props: [
    'text',
    ],
  render(h) {
      return (<Tag color="primary">{this.text}</Tag>)

    //    h('Tag',{
    //       props:{
    //           color:"primary"
    //       }
    //   },this.text);
  }
}
</script>