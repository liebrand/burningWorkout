Polymer('bw-exercise', {

  ready: function() {
  },

  exerciseDone: function(event, detail, sender) {
    if (sender.id.indexOf('easy') === -1) {
      console.log('exercise was hard');
    } else {
      console.log('exercise was easy');
    }
    this.fire('exercise-done');
  }

});