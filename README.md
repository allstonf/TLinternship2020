# Misinformation Tracker

___Sub-Problem___

I created a web app for users to report misinformation to TrustLab that is added to Firebase and can later be added to the data store.

___Solution Approach___

I used HTML, CSS, and JavaScript to create the front-end web app where users can enter their own misinformation. I used Firebase to store the misinformation and timestamp; Firebase allows for easy scaling and access of the database. I used Python and Jupyter notebooks to pull the data from Firebase and perform some analysis, such as TF-IDF. This data analysis can then help inform primarily text-focused social media platforms, such as Twitter, when and how frequently misinformation is being spread by utilizing the count of certain misinformation and the analysis of timestamps.

___Dependencies___

I am using JQuery and Bootstrap on the front-end and the Python Firebase package for data analysis.

___How to run my code___

Go to https://allstonf.github.io/TLinternship2020/ to access the web app. Then, download and run the notebook to perform data analysis. If needed, run the first cell in the notebook to install the Python Firebase package.
