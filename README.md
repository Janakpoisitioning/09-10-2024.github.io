<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Video Page</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 20px;
            background-color: #f4f4f4;
        }
        h1, h2 {
            color: #333;
        }
        .video-container {
            margin-bottom: 20px;
        }
    </style>
</head>
<body>
    <h1>Welcome to the Video Page</h1>
    
    <!-- Local video file -->
    <div class="video-container">
        <h2>Local Video</h2>
        <video width="600" controls>
            <source src="video.mp4" type="video/mp4">
            Your browser does not support the video tag.
        </video>
    </div>

    <!-- YouTube video -->
    <div class="video-container">
        <h2>YouTube Video</h2>
        <iframe width="600" height="400" src="https://www.youtube.com/embed/dQw4w9WgXcQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
</body>
</html>
