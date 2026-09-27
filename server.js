const express = require("express");

const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>DevOps Docker Task</title>
      <style>
        body {
          font-family: Arial, sans-serif;
          text-align: center;
          padding-top: 80px;
          background-color: #f5f5f5;
        }

        .container {
          background: white;
          width: 500px;
          margin: auto;
          padding: 40px;
          border-radius: 15px;
          box-shadow: 0 4px 15px rgba(0,0,0,0.15);
        }

        h1 {
          color: #333;
        }

        p {
          font-size: 18px;
          margin: 15px;
        }
      </style>
    </head>

    <body>
      <div class="container">
        <h1>DevOps Docker Task</h1>

        <p><strong>Student Name:</strong> Azka Tanveer</p>
        <p><strong>Student ID:</strong> juw35509</p>
        <p><strong>Course:</strong> DevOps</p>

        <p>This application is running inside a Docker container.</p>
      </div>
    </body>
    </html>
  `);
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Application running on port ${PORT}`);
});