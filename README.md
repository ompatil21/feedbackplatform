# 🧠 Feedback Platform for SMEs

A full-stack, mobile-first sentiment analysis platform designed to help small and medium-sized businesses collect, analyze, and understand customer feedback at scale.

Built with **React Native** for a seamless mobile UI and powered by a hybrid **NLP engine** combining **RoBERTa** and **VADER** models, 
the app provides real-time sentiment insights. Machine learning is deployed through **AWS SageMaker**, making the solution both robust and production-ready.

---

## 🚀 Features

- **📱 Feedback Collection**
  - Clean, mobile-native interface built with React Native
  - Easy-to-use form for collecting open-ended user feedback

- **🧠 Sentiment Analysis Engine**
  - **RoBERTa**: Contextual transformer-based model for accurate sentiment classification
  - **VADER**: Lexicon-based sentiment analyzer for fast real-time scoring
  - Hybrid use improves both **speed** and **accuracy** in production

- **☁️ ML Deployment**
  - Scalable backend with model inference on **AWS SageMaker**
  - Python-based Flask API to interact with sentiment models

- **📊 Visual Insights**
  - Dashboard with visualizations: pie charts, confidence scores, and feedback stats
  - Designed to quickly identify trends, satisfaction levels, and concerns

---

## 🛠 Tech Stack

| Layer         | Tech                              |
|---------------|------------------------------------|
| Frontend      | React Native, Expo                 |
| Backend       | Python, Flask                      |
| NLP Models    | RoBERTa (transformers), VADER      |
| ML Deployment | AWS SageMaker                      |
| Charts & UI   | React Native Paper, Victory Native |

---



## 📦 Getting Started

### 🔧 Prerequisites
- Node.js, npm
- Python 3.x
- AWS account with SageMaker access
- Expo Go app (for mobile testing)

### 💻 Setup (Frontend)

```bash
git clone https://github.com/ompatil21/feedbackplatform.git
cd feedbackplatform/frontend
npm install
npm start
