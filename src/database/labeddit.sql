-- Active: 1689014688791@@127.0.0.1@3306

CREATE TABLE
    users(
        id TEXT PRIMARY KEY NOT NULL UNIQUE,
        nickname TEXT NOT NULL,
        email TEXT UNIQUE NOT NULL,
        password TEXT NOT NULL
    );

CREATE TABLE
    posts(
        id TEXT PRIMARY KEY NOT NULL UNIQUE,
        creator_id TEXT NOT NULL,
        content TEXT NOT NULL,
        votes_count INTEGER NOT NULL,
        comments_count INTEGER NOT NULL,
        created_at TEXT NOT NULL,
        FOREIGN KEY (creator_id) REFERENCES users(id) ON UPDATE CASCADE ON DELETE CASCADE
    );

CREATE TABLE
    comments(
        id TEXT PRIMARY KEY NOT NULL UNIQUE,
        post_id TEXT NOT NULL,
        creator_id TEXT NOT NULL,
        content TEXT NOT NULL,
        votes_count INTEGER NOT NULL,
        created_at TEXT NOT NULL,
        FOREIGN KEY (post_id) REFERENCES posts(id) ON UPDATE CASCADE ON DELETE CASCADE,
        FOREIGN KEY (creator_id) REFERENCES users(id) ON UPDATE CASCADE ON DELETE CASCADE
    );

CREATE TABLE
    posts_votes(
        post_id TEXT NOT NULL,
        user_id TEXT NOT NULL,
        vote INTEGER NOT NULL,
        FOREIGN KEY (user_id) REFERENCES users(id) ON UPDATE CASCADE ON DELETE CASCADE,
        FOREIGN KEY (post_id) REFERENCES posts(id) ON UPDATE CASCADE ON DELETE CASCADE
    );

CREATE TABLE
    comments_votes(
        comment_id TEXT NOT NULL,
        user_id TEXT NOT NULL,
        vote INTEGER NOT NULL,
        FOREIGN KEY (comment_id) REFERENCES comments (id) ON UPDATE CASCADE ON DELETE CASCADE,
        FOREIGN KEY (user_id) REFERENCES users (id) ON UPDATE CASCADE ON DELETE CASCADE
    );

DROP TABLE users;

DROP TABLE posts;

DROP TABLE comments;

DROP TABLE posts_votes;

DROP TABLE comments_votes;