# Soundoji

https://danchristian.github.io/soundoji

Playing around with the SoundCloud API, I was curious to see if I could strip the emojis from track comments and compare genres against genres. Would there be a bias to the type of emoji used in Hip Hop compared to Techno?

## First Attempt

The first attempt was really just to see if this was possible:

- Pull the top tracks from a given genre and filter out the tracks that aren’t commentable
- For each track pull the comments, filter out comments that don’t contain emoji
- For each comment that contains emoji, remove non-emoji characters 
- Spit out emoji into a big list

## Future Improvements 

- Clean up forEach loops to reduce HTTP requests
- Find a more robust way to check for emoji characters - look into using a library (https://github.com/essdot/spliddit)
- Add DOM elements outside of the loop to reduce repaint. Look into using DocumentFragment
- Make better use of functions to clean up repeated, non DRY requests
- Split emoji down into individual arrays from comment, rather than groups
- Find a better way to display the emoji to see if there are clearer patterns
- Making the emoji clickable and link back to the track
- Make the genres selectable by the user with a select menu

## Notes
- Do not start side projects that involve Unicode characters
- I am not actually sure how people are leaving emoji comments. iOS and Android apps don’t have comment functionality. Neither does their Website on mobile. Is the average user savvy enough to input Emoji on desktop computers? 
- Will my data increase with the release of the new Apple Touch Bar?
