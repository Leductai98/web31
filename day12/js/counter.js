let counter = {
  value: 0,
  up() {
    this.value++;
    return this;
  },
  down() {
    this.value--;
    return this;
  },
  get() {
    this.value;
    return this;
  },
  reset() {
    this.value = 0;
    return this;
  },
};

console.log(counter.get().down().get().reset());
