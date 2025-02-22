# DevHack_athon 2025
### Cybersecurity engagement question API
This project is a express API server that we have deployed on Vercel. Our API allows users to request evaluations and get advice on suspicious communications they recieve. In addition, it is an endpoint for our engagement and awareness training for scam prevention to request quiz-like questions based on request parameters.

Our API leverages custom prompting using Google Gemini to analyze user submitted suspicious communications, and advise them on next steps to take to protect themselves and their assets.

Our games endpoint feeds our engagment frontend component by using customized prompts with Google Gemini to create multiple choice questions based around the request query parameters sent to our API.

## Requirements:
<pre>dependencies:
    -@google/generative-ai
    -@types/express
    -@types/node
    -dotenv
    -express
    -nodemon
    -pre-commit
    -rimraf
    -ts-node
    -typescript
</pre>

## Install
Once you have copied the package.json just:<pre>npm install</pre>

## Configuration:
Make sure you create your .env file in your project root with the appropriatley named API key for Gemini.

## Run local
To start the server locally, use:<pre>npm start</pre>

## To deploy on vercel
You will need a Vercel account. You can read through the basics of starting express with Vercel here: https://vercel.com/guides/using-express-with-vercel