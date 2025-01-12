const express = require('express');
const ytdl = require('youtube-dl-exec');
const cors = require('cors');

// Initialize Express app
const app = express();

// Middleware setup
app.use(cors());
app.use(express.json());

// Route to get video information


app.post('/get-video-info', async (req, res) => {
  try {
    const { videoUrl } = req.body;

    if (!videoUrl) {
      return res.status(400).json({ error: 'Invalid YouTube URL' });
    }

    // Use youtube-dl to fetch info
    const videoInfo = await ytdl(videoUrl, {
      dumpSingleJson: true,
      noWarnings: true,
    });

    res.json({
      title: videoInfo.fulltitle,
      thumbnail: videoInfo.thumbnail,
      lengthSeconds: videoInfo.duration,
      formats: videoInfo.formats.map(format => ({
        quality: format.format_note,
        mimeType: format.mime_type,
        url: format.url,
      })),
    });
  } catch (error) {
    console.error('Error fetching video info:', error.message);
    res.status(500).json({ error: 'Failed to fetch video info', message: error.message });
  }
});




// Route to download video
app.get('/download', (req, res) => {
  const videoUrl = req.query.url;

  // Validate the provided video URL
  if (!videoUrl || !ytdl.validateURL(videoUrl)) {
    return res.status(400).json({ error: 'Invalid YouTube URL' });
  }

  res.header('Content-Disposition', 'attachment; filename="video.mp4"');

  // Stream the video in mp4 format
  ytdl(videoUrl, { format: 'mp4' }).pipe(res);
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
