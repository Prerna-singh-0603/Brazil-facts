/**
 * Handle Request
 * This is the input function where you can perform your implementation.
 * @param {Request} request https://developer.mozilla.org/en-US/docs/Web/API/Request
 * @param {*} args function args e.g args.my_secret
 * @returns {Response} https://developer.mozilla.org/en-US/docs/Web/API/Response
 */
async function handleRequest(request, args) {
 
  // Determine the current hour to set a personalized greeting
  const currentHour = new Date().getHours();
  const greeting = currentHour < 12 ? "Good Morning" : currentHour < 18 ? "Good Afternoon" : "Good Evening";

  // HTML message with CSS styling
  const message = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Greetings from Brazil</title>
      <style>
        body {
          font-family: Arial, sans-serif;
          background-color: #f5f5f5;
          display: flex;
          align-items: center;
          justify-content: center;
          height: 100vh;
          margin: 0;
          color: #333;
        }
        .container {
          background-color: #ffffff;
          padding: 20px;
          border-radius: 10px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          text-align: center;
          max-width: 500px;
          width: 100%;
        }
        .greeting {
          font-size: 24px;
          font-weight: bold;
          color: #2e8b57;
        }
        .content {
          font-size: 18px;
          line-height: 1.5;
        }
        .icon {
          font-size: 30px;
          margin-bottom: 10px;
        }
        .footer {
          margin-top: 15px;
          font-size: 16px;
          color: #888;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="icon">🌎🇧🇷</div>
        <div class="greeting">${greeting}! Warm Greetings from Brazil!</div>
        <div class="content">
          <p>Did you know? Brazil is known for its stunning natural beauty and rich cultural heritage.</p>
          <p>From the vast Amazon Rainforest to the iconic Christ the Redeemer statue, Brazil is full of wonders!</p>
          <p>Enjoy vibrant festivals like Carnival, white sandy beaches, and the joyful rhythms of samba. 🎶💃</p>
        </div>
        <div class="footer">We hope you get to experience the magic of Brazil one day!</div>
      </div>
    </body>
    </html>
  `;

  // Respond with HTML content
  return new Response(message, {
    headers: {
      "content-type": "text/html;charset=UTF-8",
    },
    status: 200,
  });
}
 
 
