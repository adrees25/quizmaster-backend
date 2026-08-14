import "./App.css";
import { useState, useEffect } from "react";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";

/* =========================
   QUIZ DATA
========================= */

const javascriptQuestions = [
  {
    question: "Which keyword is used to declare a constant in JavaScript?",
    options: ["const", "let", "var", "static"],
    answer: "const",
  },
  {
    question: "Which method converts a JavaScript object into a JSON string?",
    options: [
      "JSON.stringify()",
      "JSON.parse()",
      "JSON.convert()",
      "JSON.toString()",
    ],
    answer: "JSON.stringify()",
  },
  {
    question: "Which operator is used for strict equality in JavaScript?",
    options: ["===", "==", "=", "!=="],
    answer: "===",
  },
  {
    question: "Which method adds an element to the end of an array?",
    options: ["push()", "pop()", "shift()", "unshift()"],
    answer: "push()",
  },
  {
    question: "What type of value does typeof null return in JavaScript?",
    options: ["object", "null", "undefined", "string"],
    answer: "object",
  },
];

const htmlCSSQuestions = [
  {
    question: "What does HTML stand for?",
    options: [
      "HyperText Markup Language",
      "HighText Machine Language",
      "Hyperlink Text Management Language",
      "Home Tool Markup Language",
    ],
    answer: "HyperText Markup Language",
  },
  {
    question: "What is CSS mainly used for?",
    options: [
      "Styling web pages",
      "Creating databases",
      "Running a server",
      "Storing passwords",
    ],
    answer: "Styling web pages",
  },
  {
    question: "Which HTML tag is used to create a hyperlink?",
    options: ["<a>", "<link>", "<href>", "<url>"],
    answer: "<a>",
  },
  {
    question: "Which CSS property is used to change the text color?",
    options: [
      "color",
      "text-color",
      "font-color",
      "background-color",
    ],
    answer: "color",
  },
  {
    question: "Which HTML element is used to create the largest heading?",
    options: ["<h1>", "<h6>", "<heading>", "<head>"],
    answer: "<h1>",
  },
];

const dbmsQuestions = [
  {
    question: "What does DBMS stand for?",
    options: [
      "Database Management System",
      "Data Backup Management System",
      "Database Machine System",
      "Data Management Software",
    ],
    answer: "Database Management System",
  },
  {
    question: "Which language is commonly used to query a relational database?",
    options: ["SQL", "HTML", "CSS", "XML"],
    answer: "SQL",
  },
  {
    question: "Which key uniquely identifies a record in a table?",
    options: [
      "Primary Key",
      "Foreign Key",
      "Candidate Key",
      "Composite Key",
    ],
    answer: "Primary Key",
  },
  {
    question: "What is a foreign key used for?",
    options: [
      "To create a relationship between tables",
      "To delete a database",
      "To store images",
      "To create a password",
    ],
    answer: "To create a relationship between tables",
  },
  {
    question: "Which command is used to retrieve data from a database?",
    options: ["SELECT", "DELETE", "UPDATE", "INSERT"],
    answer: "SELECT",
  },
];

/* =========================
   FISHER-YATES SHUFFLE
========================= */

function shuffleArray(array) {
  const shuffled = [...array];

  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));

    [shuffled[i], shuffled[j]] = [
      shuffled[j],
      shuffled[i],
    ];
  }

  return shuffled;
}

/* =========================
   AUTOMATIC QUIZ STATISTICS
========================= */

const quizData = [
  {
    name: "JavaScript",
    type: "javascript",
    questions: javascriptQuestions,
  },
  {
    name: "HTML & CSS",
    type: "html-css",
    questions: htmlCSSQuestions,
  },
  {
    name: "DBMS",
    type: "dbms",
    questions: dbmsQuestions,
  },
];

const totalQuizzes = quizData.length;

const totalQuestions = quizData.reduce(
  (total, quiz) => total + quiz.questions.length,
  0
);

const totalCategories = quizData.length;

/* =========================
   HOME
========================= */

function Home() {
  return (
    <div className="app">
      <nav className="navbar">
        <div className="logo">📝 QuizMaster</div>

        <div className="nav-links">
          <a href="/">Home</a>
          <a href="/quizzes">Quizzes</a>
          <a href="/leaderboard">Leaderboard</a>
          <a href="/login">Login</a>
        </div>
      </nav>

      <section className="hero">
        <div className="hero-content">
          <p className="welcome">WELCOME TO QUIZMASTER</p>

          <h1>
            Test Your <span>Knowledge</span>
          </h1>

          <p className="description">
            Challenge yourself with interactive quizzes,
            improve your knowledge and track your progress.
          </p>

          <div className="buttons">
            <a href="/quizzes">
              <button className="primary-btn">Start Quiz</button>
            </a>

            <a href="/login">
              <button className="secondary-btn">Login</button>
            </a>
          </div>
        </div>
      </section>

      <section className="stats">
        <div className="stat-card">
          <h2>{totalQuizzes}</h2>
          <p>Quizzes</p>
        </div>

        <div className="stat-card">
          <h2>{totalCategories}</h2>
          <p>Categories</p>
        </div>

        <div className="stat-card">
          <h2>{totalQuestions}</h2>
          <p>Questions</p>
        </div>
      </section>
    </div>
  );
}

/* =========================
   LOGIN
========================= */

function Login() {
  const handleLogin = (e) => {
    e.preventDefault();

    window.location.href = "/dashboard";
  };

  return (
    <div className="login-page">
      <div className="login-card">
        <div className="login-logo">📝</div>

        <h1>Welcome Back!</h1>

        <p className="login-subtitle">
          Login to continue your quiz journey
        </p>

        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label>Email Address</label>

            <input
              type="email"
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="form-group">
            <label>Password</label>

            <input
              type="password"
              placeholder="Enter your password"
              required
            />
          </div>

          <button type="submit" className="login-btn">
            Login
          </button>
        </form>

        <p className="register-text">
          Don't have an account?
          <a href="/register"> Register</a>
        </p>
      </div>
    </div>
  );
}

/* =========================
   REGISTER
========================= */

function Register() {
  const handleRegister = (e) => {
    e.preventDefault();

    window.location.href = "/login";
  };

  return (
    <div className="login-page">
      <div className="login-card">
        <div className="login-logo">📝</div>

        <h1>Create Account</h1>

        <p className="login-subtitle">
          Join QuizMaster and start testing your knowledge
        </p>

        <form onSubmit={handleRegister}>
          <div className="form-group">
            <label>Full Name</label>

            <input
              type="text"
              placeholder="Enter your full name"
              required
            />
          </div>

          <div className="form-group">
            <label>Email Address</label>

            <input
              type="email"
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="form-group">
            <label>Password</label>

            <input
              type="password"
              placeholder="Create a password"
              required
            />
          </div>

          <button type="submit" className="login-btn">
            Create Account
          </button>
        </form>

        <p className="register-text">
          Already have an account?
          <a href="/login"> Login</a>
        </p>
      </div>
    </div>
  );
}

/* =========================
   DASHBOARD
========================= */

function Dashboard() {
  const quizResults = JSON.parse(
    localStorage.getItem("quizResults") || "[]"
  );

  const completedQuizzes = quizResults.length;

  const averageScore =
    completedQuizzes > 0
      ? Math.round(
          quizResults.reduce(
            (sum, result) => sum + result.percentage,
            0
          ) / completedQuizzes
        )
      : 0;

  return (
    <div className="dashboard">
      <nav className="navbar">
        <div className="logo">📝 QuizMaster</div>

        <div className="nav-links">
          <a href="/dashboard">Dashboard</a>
          <a href="/quizzes">Quizzes</a>
          <a href="/leaderboard">Leaderboard</a>
          <a href="/">Logout</a>
        </div>
      </nav>

      <div className="dashboard-content">
        <h1>Welcome back, Student! 👋</h1>

        <p className="dashboard-subtitle">
          Test your knowledge and improve your skills.
        </p>

        <div className="dashboard-stats">
          <div className="dashboard-card">
            <h2>{totalQuizzes}</h2>
            <p>Total Quizzes</p>
          </div>

          <div className="dashboard-card">
            <h2>{completedQuizzes}</h2>
            <p>Completed</p>
          </div>

          <div className="dashboard-card">
            <h2>{averageScore}%</h2>
            <p>Average Score</p>
          </div>
        </div>

        <h2 className="section-title">
          Available Quizzes
        </h2>

        <div className="quiz-cards">
          {quizData.map((quiz) => (
            <div
              className="quiz-card"
              key={quiz.type}
            >
              <h3>{quiz.name} Quiz</h3>

              <p>
                {quiz.questions.length} questions available.
              </p>

              <a href={`/quiz?type=${quiz.type}`}>
                <button>Start Quiz</button>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* =========================
   QUIZ
========================= */

function Quiz() {
  const params = new URLSearchParams(
    window.location.search
  );

  const quizType =
    params.get("type") || "javascript";

  const selectedQuiz =
    quizData.find(
      (quiz) => quiz.type === quizType
    ) || quizData[0];

  /* =========================
     SHUFFLE QUESTIONS + OPTIONS
  ========================= */

  const [questions] = useState(() =>
    shuffleArray(selectedQuiz.questions).map((q) => ({
      ...q,
      options: shuffleArray(q.options),
    }))
  );

  const [currentQuestion, setCurrentQuestion] =
    useState(0);

  const [timeLeft, setTimeLeft] =
    useState(600);

  const [selectedAnswers, setSelectedAnswers] =
    useState({});

  const question =
    questions[currentQuestion];

  /* =========================
     TIMER
  ========================= */

  useEffect(() => {
    if (timeLeft <= 0) {
      finishQuiz();
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  /* =========================
     FINISH QUIZ
  ========================= */

  const finishQuiz = () => {
    let finalScore = 0;

    questions.forEach((q, index) => {
      if (
        selectedAnswers[index] ===
        q.answer
      ) {
        finalScore++;
      }
    });

    const total = questions.length;

    const percentage =
      Math.round(
        (finalScore / total) * 100
      );

    const oldResults =
      JSON.parse(
        localStorage.getItem("quizResults") || "[]"
      );

    oldResults.push({
      quizType,
      score: finalScore,
      total,
      percentage,
    });

    localStorage.setItem(
      "quizResults",
      JSON.stringify(oldResults)
    );

    window.location.href =
      `/result?score=${finalScore}&total=${total}`;
  };

  /* =========================
     NEXT QUESTION
  ========================= */

  const nextQuestion = () => {
    if (
      !selectedAnswers[currentQuestion]
    ) {
      alert(
        "Please select an answer first!"
      );

      return;
    }

    if (
      currentQuestion <
      questions.length - 1
    ) {
      setCurrentQuestion(
        currentQuestion + 1
      );
    } else {
      finishQuiz();
    }
  };

  /* =========================
     PREVIOUS QUESTION
  ========================= */

  const previousQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(
        currentQuestion - 1
      );
    }
  };

  return (
    <div className="quiz-page">
      <div className="quiz-header">
        <h2>
          📝 {selectedQuiz.name} Quiz
        </h2>

        <div className="timer">
          ⏱{" "}
          {Math.floor(
            timeLeft / 60
          )}
          :
          {String(
            timeLeft % 60
          ).padStart(2, "0")}
        </div>
      </div>

      <div className="quiz-container">
        <p className="question-number">
          Question{" "}
          {currentQuestion + 1}{" "}
          of {questions.length}
        </p>

        <h1 className="question">
          {question.question}
        </h1>

        <div className="options">
          {question.options.map(
            (option, index) => (
              <label
                className="option"
                key={index}
              >
                <input
                  type="radio"
                  name="answer"
                  value={option}
                  checked={
                    selectedAnswers[
                      currentQuestion
                    ] === option
                  }
                  onChange={(e) => {
                    setSelectedAnswers({
                      ...selectedAnswers,
                      [currentQuestion]:
                        e.target.value,
                    });
                  }}
                />

                <span>{option}</span>
              </label>
            )
          )}
        </div>

        <div className="quiz-buttons">
          <button
            className="previous-btn"
            onClick={
              previousQuestion
            }
            disabled={
              currentQuestion === 0
            }
          >
            Previous
          </button>

          <button
            className="next-btn"
            onClick={
              nextQuestion
            }
          >
            {currentQuestion ===
            questions.length - 1
              ? "Submit Quiz"
              : "Next"}
          </button>
        </div>
      </div>
    </div>
  );
}

/* =========================
   RESULT
========================= */

function Result() {
  const navigate = useNavigate();

  const location = useLocation();

  const params =
    new URLSearchParams(
      window.location.search
    );

  const scoreFromUrl =
    Number(params.get("score"));

  const totalFromUrl =
    Number(params.get("total"));

  const score =
    Number.isNaN(scoreFromUrl)
      ? location.state?.score ?? 0
      : scoreFromUrl;

  const total =
    Number.isNaN(totalFromUrl)
      ? location.state?.total ?? 0
      : totalFromUrl;

  const wrong =
    total - score;

  const percentage =
    total > 0
      ? Math.round(
          (score / total) * 100
        )
      : 0;

  return (
    <div className="result-page">
      <div className="result-card">
        <div className="result-icon">
          🏆
        </div>

        <h1>
          Quiz Completed!
        </h1>

        <p className="result-message">
          Great job! Here is your result.
        </p>

        <div className="score-box">
          <h2>
            {score} / {total}
          </h2>

          <p>Your Score</p>
        </div>

        <div className="result-details">
          <div>
            <strong>
              {score}
            </strong>

            <span>
              Correct
            </span>
          </div>

          <div>
            <strong>
              {wrong}
            </strong>

            <span>
              Wrong
            </span>
          </div>

          <div>
            <strong>
              {percentage}%
            </strong>

            <span>
              Percentage
            </span>
          </div>
        </div>

        <button
          className="next-btn"
          onClick={() =>
            navigate("/quizzes")
          }
        >
          Try Again
        </button>

        <button
          className="previous-btn"
          onClick={() =>
            navigate("/dashboard")
          }
        >
          Dashboard
        </button>
      </div>
    </div>
  );
}

/* =========================
   QUIZZES PAGE
========================= */

function Quizzes() {
  return (
    <div className="dashboard">
      <nav className="navbar">
        <div className="logo">
          📝 QuizMaster
        </div>

        <div className="nav-links">
          <a href="/">Home</a>

          <a href="/quizzes">
            Quizzes
          </a>

          <a href="/leaderboard">
            Leaderboard
          </a>

          <a href="/login">
            Login
          </a>
        </div>
      </nav>

      <div className="dashboard-content">
        <h1>
          Available Quizzes
        </h1>

        <div className="quiz-cards">
          {quizData.map(
            (quiz) => (
              <div
                className="quiz-card"
                key={quiz.type}
              >
                <h3>
                  {quiz.name} Quiz
                </h3>

                <p>
                  {quiz.questions.length}{" "}
                  questions
                </p>

                <a
                  href={`/quiz?type=${quiz.type}`}
                >
                  <button>
                    Start Quiz
                  </button>
                </a>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
}

/* =========================
   LEADERBOARD
========================= */

function Leaderboard() {
  const quizResults =
    JSON.parse(
      localStorage.getItem(
        "quizResults"
      ) || "[]"
    );

  return (
    <div className="dashboard">
      <nav className="navbar">
        <div className="logo">
          📝 QuizMaster
        </div>

        <div className="nav-links">
          <a href="/">
            Home
          </a>

          <a href="/quizzes">
            Quizzes
          </a>

          <a href="/leaderboard">
            Leaderboard
          </a>

          <a href="/login">
            Login
          </a>
        </div>
      </nav>

      <div className="dashboard-content">
        <h1>
          🏆 Leaderboard
        </h1>

        {quizResults.length === 0 ? (
          <div className="quiz-card">
            <h3>
              No results yet
            </h3>

            <p>
              Complete a quiz to see
              your score here.
            </p>
          </div>
        ) : (
          <div className="quiz-cards">
            {quizResults.map(
              (result, index) => (
                <div
                  className="quiz-card"
                  key={index}
                >
                  <h3>
                    #{index + 1}{" "}
                    {result.quizType}
                  </h3>

                  <p>
                    Score:{" "}
                    {result.score}/
                    {result.total}
                  </p>

                  <p>
                    Percentage:{" "}
                    {result.percentage}%
                  </p>
                </div>
              )
            )}
          </div>
        )}
      </div>
    </div>
  );
}

/* =========================
   APP ROUTES
========================= */

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={<Home />}
      />

      <Route
        path="/login"
        element={<Login />}
      />

      <Route
        path="/register"
        element={<Register />}
      />

      <Route
        path="/dashboard"
        element={<Dashboard />}
      />

      <Route
        path="/quiz"
        element={<Quiz />}
      />

      <Route
        path="/result"
        element={<Result />}
      />

      <Route
        path="/quizzes"
        element={<Quizzes />}
      />

      <Route
        path="/leaderboard"
        element={<Leaderboard />}
      />
    </Routes>
  );
}

export default App;