Polymer('bw-workout', {


  ready: function() {
    this.exerciseData = [{
      type: 'superset',
      exercises: [{
        name: 'Barbell Bent Over Row',
        img: '../images/Barbell-Row-Bent-Over-Wide-Grip.gif',
        type: 'weight',
        startingWeight: '80',
        sets: [{
          reps: 8
        }, {
          reps: 8
        }, {
          reps: 8
        }]
      }, {
        name: 'Dumbbell Bench Press',
        img: '../images/Dumbbell-bench-press.gif',
        type: 'weight',
        startingWeight: '120',
        sets: [{
          reps: 5
        }, {
          reps: 5
        }, {
          reps: 5
        }]
      }]
    }, {
      type: 'singleset',
      exercises: [{
        name: 'Barbell Squat',
        img: '../images/Barbell-Squat.gif',
        type: 'weight',
        sets: [{
          reps: 8
        }, {
          reps: 8
        }, {
          reps: 8
        }]
      }]
    }, {
      type: 'superset',
      exercises: [{
        name: 'Plank',
        img: '../images/plank.jpg',
        type: 'duration',
        sets: [{
          time: 60
        }, {
          time: 60
        }, {
          time: 60
        }]
      }, {
        name: 'Pull Ups',
        img: '../images/chin-up-supination.gif',
        type: 'weight',
        sets: [{
          reps: 8
        }, {
          reps: 8
        }, {
          reps: 8
        }]
      }]
    }];

  },

  onExerciseDone: function(event, detail, sender) {
    var sections = this.$.exercises.querySelectorAll('section');
    this.$.exercises.selected = (this.$.exercises.selected + 1) % sections.length;
  }
});