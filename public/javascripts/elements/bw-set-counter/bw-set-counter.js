Polymer('bw-set-counter', {

  publish: {
    idle: {
      value: true,
      reflect: true
    }
  },

  ready: function() {
    this.achieved = this.targets.reps;
  },

  counterTapped: function() {
    if (this.idle) {
      // first tap 'enables' the counter
      this.idle = false;
    } else {
      // last tap 'disables' the counter
      if (this.achieved === 0) {
        this.idle = true;
      }
      // start at target and go down on each tap, and wrap
      // back to target when we reached zero
      this.achieved = ((this.achieved || (this.targets.reps + 1)) - 1);
    }
  }
});