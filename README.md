# power_ratings_email
Google Apps Script and Google Sheets formula that will automatically email the user the latest power ratings for any sport that can be found on Sonny Moore's Power Ratings website at a custom interval. Example script is for the NHL.

To use:

Create a Google Sheet and title your sheet the name of the sport (or whatever you want to use in the script). In the top leftmost cell of the sheet, paste this formula:

=let(Σ,choosecols(importdata("https://sonnymoorepowerratings.com/nhl.htm"),1),Λ,xmatch("<B>",Σ)+1,Δ,chooserows(Σ,sequence(xmatch("</H3>",Σ)-Λ,1,Λ)), index(split(regexreplace(Δ,"\s{2,}|(\d+)(\s)([A-Z])","$1|$3"),"|")))

The only thing that needs to be changed for different sports is the URL. This will populate the sheet with the most recent power ratings for that sport. The script only needs to be modified to change the name of the sheet you are working with. Change the function name, etc. at your discretion. CHange the email to your email, and create a trigger for the script to run daily, weekly, or whatever you want at whatever time you want. 

The reason I pull from a sheet and not directly from Sonny Moore's website is because I have designed the actual spreadsheet I use this with to be able to calculate the estimated win percentages and point spreads for comparing against sportsbook lines.
