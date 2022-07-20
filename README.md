# Esports Netflix Clone (Team Liquid)

Hosted Link: https://aaron-netflix-clone.netlify.app

This website uses the React library to create a website with navigation similar to that of Netflix. The content displayed is of the professional Dota 2 esports team *Team Liquid* https://www.teamliquid.com/. The YouTube API is used to fetch videos for two Dota 2 players from Team Liquid used in the 2nd and 3rd row.

**Layout** <br />
The website is created using Flex. The three Netflix-like rows (carrousels) function the same for all three. As the user hovers over any of the rows, the navigation arrows show up to show that more content can be navigated towards. The 1st row is hard-coded as it has the thumbnail from the original YouTube video downloaded along with a short clip of the beginning of its respective video using OBS (https://obsproject.com/). With the first row being hard-coded, I was able to implement scaling of the video hovered over along with a description below. Each video has its own respective mute button. The videos in the first row can also be expanded to full screen thanks to the screenfull API. (https://github.com/sindresorhus/screenfull). The main video shown in the website has a similar function when the *Play* button is clicked on by the user. The 2nd and 3rd rows content are created using the YouTube API which returns the 10 most recent video by its respective Dota 2 esports player as an iframe. Mobile navigation is not yet fully optimized. Scroll snap is implemented to make an enjoyable swiping experience. The 1st row is bugged as of now on mobile as an onMouseLeave can't be called which would hide the video and return to showing just the thumbnail.

**Navigation** <br />
React Routing has not been implemented at the time of writing so none of the navigation links above are functioning.

![LiquidWebsite1](https://user-images.githubusercontent.com/107777470/179984856-7e540201-1706-43eb-a4bf-351c8601d7fc.png)
![LiquidWebsite2](https://user-images.githubusercontent.com/107777470/179984860-b3da5fc5-5c62-4698-bc94-3d15ef812ce8.png)
