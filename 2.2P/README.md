# Express Calculator

This is a simple web-based calculator built using **Node.js** and **Express.js**. The application serves a static webpage and provides a REST API for performing basic mathematical operations.

## Features
- Serves a simple HTML page from the `public` folder.
- Provides an API endpoint to add two numbers.
- Built with Express.js for easy server-side development.

## Getting Started
### Prerequisites
Make sure you have **Node.js** and **Git** installed on your system:
- [Download Node.js](https://nodejs.org/)
- [Download Git](https://git-scm.com/)

### Installation Steps
1. **Clone the repository**
   ```sh
   git clone YOUR_GITHUB_REPO_URL
   cd express-calculator
   ```

2. **Install dependencies**
   ```sh
   npm install
   ```

3. **Run the server**
   ```sh
   node server.js
   ```

4. **Access the application**
   - Open a web browser and go to: `http://localhost:3000`
   - Test the API by visiting: `http://localhost:3000/add?num1=5&num2=10`

## API Endpoints
| Method | Endpoint         | Description |
|--------|-----------------|-------------|
| GET    | `/add?num1=X&num2=Y` | Returns the sum of `X` and `Y`. |

## Project Structure
```
express-calculator/
│── public/
│   ├── index.html
│── server.js
│── package.json
│── README.md
```

## Deployment
If you wish to deploy this application, you can use services like:
- **Heroku** ([heroku.com](https://www.heroku.com/))
- **Vercel** ([vercel.com](https://vercel.com/))

## Contributing
Feel free to submit pull requests for new features and improvements.

## License
This project is licensed under the **MIT License**.

## Author
- **Your Name**
- GitHub: [Your GitHub Profile](https://github.com/YOUR_GITHUB_USERNAME)

---
### Screenshots
Include screenshots of the running application as proof before submitting.
