export default {
  props: {
    num: {
      type: Number,
      default: 0,
    },
  },
  data: () => ({
    count: 0,
    title: '標題',
  }),
  methods: {
    increment() {
      this.count++;
    },
    setTitle(title) {
      if (!title) return;
      this.title = title;
      this.$emit('getTitle', this.title);
    },
  },
  computed: {
    double () {
      return this.count * 2 + this.num;
    }
  },
  render() {
    return this.$scopedSlots.default({
      count: this.count,
      title: this.title,
      double: this.double,
      increment: () => {this.increment()},
      setTitle: (str) => {this.setTitle(str)},
    })
  }
}
