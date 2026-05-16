# Autocorrect API (FastAPI + Word Frequency)

A simple autocorrect system built with FastAPI using word frequency data, Jaccard similarity, and Levenshtein distance.

---

## Motivation

The goal of this project is to build a simple but effective autocorrect system that helps users (especially English beginners) correct spelling mistakes in real time.

Instead of using complex machine learning models, this project focuses on:

* Understanding how autocorrect systems work internally
* Using lightweight and explainable NLP techniques
* Building a full end-to-end system (dictionary → API → frontend-ready integration)

This makes it a strong learning project for backend development, NLP basics, and system design fundamentals.

---

## Features

* Top 20K English words from `wordfreq`
* Jaccard similarity for fast candidate filtering
* Levenshtein distance for accurate ranking
* REST API using FastAPI
* Ready for React frontend integration

---

## Tech Stack

* FastAPI
* wordfreq
* python-Levenshtein
* Python 3.10+

---

## Project Structure

```
backend/
│── main.py          # FastAPI server
│── core.py          # Dictionary builder
│── engine.py        # Autocorrect logic
│── requirements.txt
```

---

## Installation

```bash
pip install -r requirements.txt
```

Or manually:

```bash
pip install fastapi uvicorn wordfreq python-Levenshtein
```

---

## Run the Server

```bash
uvicorn main:app --reload
```

Server runs at:

```
http://127.0.0.1:8000
```

---

## API Endpoints

### Health Check

**GET /**

Response:

```json
{
  "message": "Autocorrect API running"
}
```

---

### Autocorrect

**POST /correct**

Request:

```json
{
  "word": "speling"
}
```

Response:

```json
{
  "input": "speling",
  "correction": "spelling"
}
```

---

## How It Works

1. Load top 20K English words from `wordfreq`
2. Convert words into character shingles
3. Filter candidates using Jaccard similarity
4. Rank results using Levenshtein distance
5. Return best match

---

## Algorithms Used

* **Jaccard Similarity** → candidate filtering
* **Levenshtein Distance** → final ranking

---

## Limitations

This is an MVP (Minimum Viable Product), so it has limitations:

* No context awareness (e.g., *their vs there*)
* Only single-word correction
* No sentence-level correction
* Performance depends on dictionary size
* No grammar or language model understanding

---

## Future Improvements

### Better Suggestions

* Return top 3–5 suggestions
* Add confidence scoring

### Performance Optimization

* Use Trie or BK-tree for faster lookup
* Add caching for frequent words

### Smarter Ranking

* Combine frequency + distance scoring
* Improve ranking model

### Context Awareness

* Sentence-level correction
* NLP-based disambiguation

### Frontend Integration

* React real-time typing correction
* Google Docs-style suggestions

### Production Deployment

* Docker support
* Cloud deployment (Render / Railway / AWS)
* Redis caching layer

---

## AI Assistance & Inspiration

This project was developed with the assistance of AI tools (including ChatGPT) to accelerate development, improve code structure, and refine documentation. AI was used as a learning and productivity aid, not as a replacement for understanding the core concepts.

The design and implementation were also inspired by educational content and technical videos related to autocorrect systems, NLP techniques, and backend engineering patterns.

### Inspiration Sources

* Link 1: (add your video/article link here)
* Link 2: (add your video/article link here)

---

## Author

Built as a learning project for NLP, backend systems, and full-stack development.
