# AI SUMMARIZER

## Overview

The AI Summarizer is a tool that utilizes the Article Extractor and Summarizer API provided by RapidAPI to automatically extract and summarize text from articles or web pages. This README file provides instructions on how to set up and configure the AI Summarizer project.

## Getting Started

Follow these steps to get started with the AI Summarizer:

### Prerequisites

- Node.js installed on your machine (https://nodejs.org/)
- A RapidAPI account and API key. You can obtain an API key by signing up at [RapidAPI](https://rapidapi.com/restyler/api/article-extractor-and-summarizer).

### Installation

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/your-username/ai-summarizer.git
   ```

2. Navigate to the project directory:

   ```bash
   cd ai-summarizer
   ```

3. Create a `.env` file in the root folder of the project.

4. Inside the `.env` file, add your RapidAPI API key as follows:

   ```env
   VITE_RAPID_API_ARTICLE_KEY=YOUR_RAPIDAPI_API_KEY
   ```

   Replace `YOUR_RAPIDAPI_API_KEY` with your actual API key obtained from RapidAPI.

5. Install the project dependencies using npm:

   ```bash
   npm install
   ```

### Usage

To use the AI Summarizer, you can run the application using the following command:

```bash
npm run dev
```

This will start the development server, and you can access the AI Summarizer through your web browser at `http://localhost:3000`.

## API Documentation

For more details on how to use the Article Extractor and Summarizer API, refer to the official API documentation on [RapidAPI](https://rapidapi.com/restyler/api/article-extractor-and-summarizer).

---

Happy summarizing! 📚🤖
