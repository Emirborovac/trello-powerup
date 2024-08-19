// Initialize the Trello Power-Up
window.TrelloPowerUp.initialize({
  'card-buttons': function(t, options) {
      return [{
          icon: 'https://cdn-icons-png.flaticon.com/512/25/25231.png', // Use an appropriate icon
          text: 'Say Hello',
          callback: function(t) {
              return t.card('all')
                  .then(function(card) {
                      // Send a POST request to your Python server
                      return fetch('http://34.69.230.42:8080/trello-webhook', {
                          method: 'POST',
                          headers: {
                              'Content-Type': 'application/json'
                          },
                          body: JSON.stringify({
                              card: {
                                  id: card.id,
                                  name: card.name
                              }
                          })
                      })
                      .then(function(response) {
                          if (response.ok) {
                              return t.closePopup(); // Close the Power-Up popup after the function is triggered
                          } else {
                              return t.alert('Error triggering function');
                          }
                      });
                  });
          }
      }];
  }
});
