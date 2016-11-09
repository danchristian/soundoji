// Set the SoundCloud client ID
SC.initialize({
  client_id: "8c4444dd864738ea8c921daf514c8da9"
});
// Limit size of results
var page_size = 100;
// Pull top tracks that are commentable from choosen genre
SC.get("/tracks", { genres: "hiphop", limit: page_size, commentable: true }).then(function(tracks) {
  tracks.forEach(function(track) {
    trackId = track.id
    trackTitle = track.title
    // Pull the comments from each track
    SC.get("/tracks/" + trackId + "/comments").then(function(comments) {
      comments.forEach(function(comment) {
        // Unicode range for emoji
        var ranges = [
          '\ud83c[\udf00-\udfff]', // U+1F300 to U+1F3FF
          '\ud83d[\udc00-\ude4f]', // U+1F400 to U+1F64F
          '\ud83d[\ude80-\udeff]'  // U+1F680 to U+1F6FF
        ];
        // Retrieve emoji from the comment
        var commentBody = comment.body.match(new RegExp(ranges.join('|'), 'g'), '');
        // Create HTML list item with class names
        var list = document.getElementById('js-comments--1');
        var listItem = document.createElement('li');
        listItem.className = 'emoji';
        // Check if comment is null
        if ( commentBody != null ) {
          // Append comment to list item
          listItem.innerHTML = commentBody.join('');
          // Append list item to list
          list.appendChild(listItem);
        }
      })
    })
  })
});
// Pull top tracks that are commentable from choosen genre
SC.get("/tracks", { genres: "techno", limit: page_size, commentable: true }).then(function(tracks) {
  tracks.forEach(function(track) {
    trackId = track.id
    trackTitle = track.title
    // Pull the comments from each track
    SC.get("/tracks/" + trackId + "/comments").then(function(comments) {
      comments.forEach(function(comment) {
        // Unicode range for emoji
        var ranges = [
          '\ud83c[\udf00-\udfff]', // U+1F300 to U+1F3FF
          '\ud83d[\udc00-\ude4f]', // U+1F400 to U+1F64F
          '\ud83d[\ude80-\udeff]'  // U+1F680 to U+1F6FF
        ];
        // Retrieve emoji from the comment
        var commentBody = comment.body.match(new RegExp(ranges.join('|'), 'g'), '');
        // Create HTML list item with class names
        var list = document.getElementById('js-comments--2');
        var listItem = document.createElement('li');
        listItem.className = 'emoji';
        // Check if comment is null
        if ( commentBody != null ) {
          // Append comment to list item
          listItem.innerHTML = commentBody.join('');
          // Append list item to list
          list.appendChild(listItem);
        }
      })
    })
  })
});
