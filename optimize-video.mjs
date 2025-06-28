import ffmpeg from 'fluent-ffmpeg';
import ffmpegInstaller from '@ffmpeg-installer/ffmpeg';
import ffprobeInstaller from '@ffprobe-installer/ffprobe';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

// Get current directory for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('🔧 Setting up FFmpeg...');

try {
  // Set both ffmpeg and ffprobe paths
  ffmpeg.setFfmpegPath(ffmpegInstaller.path);
  ffmpeg.setFfprobePath(ffprobeInstaller.path);
  console.log(`✅ FFmpeg path set: ${ffmpegInstaller.path}`);
  console.log(`✅ FFprobe path set: ${ffprobeInstaller.path}`);
} catch (error) {
  console.error('❌ Failed to set FFmpeg/FFprobe paths:', error.message);
  process.exit(1);
}

const PROJECT_ROOT = __dirname;
console.log(`📁 Project Root: ${PROJECT_ROOT}`);

const config = {
  inputDir: path.join(PROJECT_ROOT, 'src', 'assets'),
  outputDir: path.join(PROJECT_ROOT, 'public'),
  inputFile: 'video.mp4'
};

// Simple video optimization function
async function optimizeVideo() {
  try {
    console.log('\n🚀 Starting Video Optimization...\n');

    // Check directories
    console.log('📂 Checking directories...');
    console.log(`Input dir: ${config.inputDir}`);
    console.log(`Output dir: ${config.outputDir}`);

    // Create output directory if it doesn't exist
    if (!fs.existsSync(config.outputDir)) {
      fs.mkdirSync(config.outputDir, { recursive: true });
      console.log('✅ Created public directory');
    }

    // Check input file
    const inputPath = path.join(config.inputDir, config.inputFile);
    console.log(`\n🔍 Looking for video file: ${inputPath}`);

    if (!fs.existsSync(inputPath)) {
      console.error('❌ Video file not found!');
      console.log('\n📋 To fix this:');
      console.log(`1. Make sure you have a video file at: ${inputPath}`);
      console.log('2. The file should be named exactly: video.mp4');
      console.log('3. Check the file exists and is not corrupted');
      return;
    }

    const stats = fs.statSync(inputPath);
    const fileSizeInMB = (stats.size / (1024 * 1024)).toFixed(2);
    console.log(`✅ Found video file: ${fileSizeInMB}MB`);

    // Get video info first
    console.log('\n📊 Getting video information...');
    
    const videoInfo = await new Promise((resolve, reject) => {
      ffmpeg.ffprobe(inputPath, (err, metadata) => {
        if (err) {
          console.error('❌ Error reading video:', err.message);
          reject(err);
        } else {
          resolve(metadata);
        }
      });
    });

    const duration = Math.round(videoInfo.format.duration);
    const resolution = `${videoInfo.streams[0].width}x${videoInfo.streams[0].height}`;
    
    console.log(`📹 Video Info:`);
    console.log(`   Duration: ${duration}s`);
    console.log(`   Resolution: ${resolution}`);
    console.log(`   Format: ${videoInfo.format.format_name}`);

    // Optimize video
    const outputPath = path.join(config.outputDir, 'video.mp4');
    console.log(`\n🎬 Optimizing video to: ${outputPath}`);

    await new Promise((resolve, reject) => {
      ffmpeg(inputPath)
        .videoCodec('libx264')
        .audioCodec('aac')
        .addOptions([
          '-crf 23',
          '-preset fast',
          '-movflags +faststart',
          '-pix_fmt yuv420p'
        ])
        .output(outputPath)
        .on('start', (commandLine) => {
          console.log('📝 Started FFmpeg process...');
        })
        .on('progress', (progress) => {
          const percent = Math.round(progress.percent || 0);
          process.stdout.write(`\r⏳ Progress: ${percent}%`);
        })
        .on('end', () => {
          console.log('\n✅ Video optimization completed!');
          
          // Check output file size
          if (fs.existsSync(outputPath)) {
            const outputStats = fs.statSync(outputPath);
            const outputSizeInMB = (outputStats.size / (1024 * 1024)).toFixed(2);
            const compression = ((1 - (outputSizeInMB / fileSizeInMB)) * 100).toFixed(1);
            console.log(`📊 Output: ${outputSizeInMB}MB (${compression}% smaller)`);
          }
          
          resolve();
        })
        .on('error', (err) => {
          console.error('\n❌ FFmpeg error:', err.message);
          reject(err);
        })
        .run();
    });

    console.log('\n🎉 Optimization complete!');
    console.log(`📁 Optimized video saved to: public/video.mp4`);

  } catch (error) {
    console.error('\n❌ Optimization failed:', error.message);
    console.log('\n🔧 Troubleshooting steps:');
    console.log('1. Make sure your video file exists in src/assets/video.mp4');
    console.log('2. Try with a different video file');
    console.log('3. Make sure the video file is not corrupted');
    console.log('4. Check if you have enough disk space');
    process.exit(1);
  }
}

// Run the optimization
optimizeVideo();