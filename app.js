// In your Winwheel setup:
const wheel = new Winwheel({
  canvasId: 'canvas',
  numSegments: 7,
  segments: [
    { fillStyle: '#e74c3c', text: '300 points',    weight: 70   },  // ~45% chance
    { fillStyle: '#3498db', text: '500 points',    weight: 50   },  // ~32%
    { fillStyle: '#9b59b6', text: '1000 points',   weight: 20   },  // ~13%
    { fillStyle: '#f1c40f', text: 'Mystery box ❓', weight: 0.5  },  // ~0.3%
    { fillStyle: '#f39c12', text: 'Golden 🎫',      weight: 0.1  },  // ~0.06%
    { fillStyle: '#2ecc71', text: '$100 in SOL',   weight: 0    },  //  0% ever
    { fillStyle: '#95a5a6', text: 'Try again!',    weight: 15   }   // ~9%
  ],
  animation: {
    type: 'spinToStop',
    duration: 5,
    spins: 8,
    callbackFinished: notifyResult
  }
});
