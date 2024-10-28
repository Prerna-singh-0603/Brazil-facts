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
        <div class="icon">🇧🇷</div>
        <div class="greeting">${greeting}!  Greetings from Brazil!</div>
        <div class="content">
          <p>Brazil is among the largest coffee-producing countries in the world. Coffee is an integral part of the lives of these people. There are some places where people never reject coffee when served. That is why it is considered impolite to say no to coffee when you are offered this drink at someone’s house in Brazil.☕ </p>
        </div>
        <div class="footer">Everyone should try brazil coffee once in their life!</div>
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
