# Posts API

A simple Node.js/Express API for managing posts, with file-based JSON storage.

## Features

- **Create a post** with content, author, and tags
- **Get all posts**
- **Validates**:
  - `content` and `author` are required
  - `content` must be 1–280 characters
  - `tags` must be an array with at most 5 items

## Endpoints

### `GET /`

Returns all posts.

**Response:**
```json
[
  {
    "postsID": "1694956800000",
    "content": "Hello world!",
    "author": "Alice",
    "tags": ["greeting"],
    "createdAt": "2025-09-17T12:00:00.000Z",
    "likes": 0,
    "status": "published"
  }
]
```

---

### `POST /`

Create a new post.

**Request Body:**
```json
{
  "content": "Your post content",
  "author": "Author name",
  "tags": ["tag1", "tag2"]
}
```

**Validation:**
- `content` and `author` are required
- `content` must be 1–280 characters
- `tags` must be an array with at most 5 items

**Success Response:**
```json
{
  "Success": "Posts added!",
  "postsID": "1694956800000",
  "content": "Your post content",
  "author": "Author name",
  "tags": ["tag1", "tag2"],
  "createdAt": "2025-09-17T12:00:00.000Z",
  "likes": 0,
  "status": "published"
}
```

**Error Response Example:**
```json
{
  "error": "Content length should be less than 280 characters."
}
```

---

## Setup

1. **Install dependencies:**
   ```bash
   npm install express cors
   ```

2. **Directory structure:**
   ```
   posts-api/
   ├── routes/
   │   └── postsRoutes.js
   └── data/
       └── posts.json
   ```

3. **Run the server:**
   ```bash
   node server.js
   ```

## Notes

- Posts are stored in `data/posts.json`.
- Make sure `data/posts.json` exists and is writable.

---
