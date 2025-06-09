# Home Library Service

## Description

The Home Library Service is a music library management system that allows you to manage your music collection. You can work with artists, albums, tracks, and create your favorites list.

## Prerequisites

- Git - [Download & Install Git](https://git-scm.com/downloads)
- Node.js - [Download & Install Node.js](https://nodejs.org/en/download/) version 22.x.x
- Docker - [Download & Install Docker](https://docs.docker.com/get-docker/)

## Downloading

```
git clone {repository URL}
```

## Installing NPM modules

```
npm install
```

## Running application

Create a `.env` file in the root directory and add the following environment variables:
```
PORT=4000
POSTGRES_HOST=postgres
POSTGRES_PORT=5432
POSTGRES_USER=postgres
POSTGRES_PASSWORD=postgres
POSTGRES_DB=library
```

### Running application in Docker

1. Build the images:
```bash
docker-compose build
```

2. Scan images for vulnerabilities:
```bash
# Install docker scan if not available
docker scan --version || curl -fsSL https://raw.githubusercontent.com/docker/scan-cli-plugin/main/install.sh | sh

# Scan the images
docker scan your-username/home-library:latest
docker scan postgres:latest
```

3. Push images to Docker Hub:
```bash
# Login to Docker Hub
docker login

# Tag images
docker tag home-library:latest your-username/home-library:latest

# Push images
docker push your-username/home-library:latest
```

4. Run the application:
```bash
docker-compose up
```

The app will be available on http://localhost:4000

### Running application locally

1. Install PostgreSQL locally
2. Create database
3. Update .env file with your local PostgreSQL credentials
4. Run the application:
```bash
npm run start:dev
```

## Testing

After application running open new terminal and enter:

To run all tests:
```
npm run test
```

To run specific test:
```
npm run test -- <path-to-test-file>
```

### Auto-fix and format

```
npm run lint
```

```
npm run format
```

## Usage

The service provides the following functionality:

### Users
- Get all users
- Get single user by id
- Create user
- Update user's password
- Delete user

### Artists
- Get all artists
- Get single artist by id
- Create artist
- Update artist
- Delete artist

### Albums
- Get all albums
- Get single album by id
- Create album
- Update album
- Delete album

### Tracks
- Get all tracks
- Get single track by id
- Create track
- Update track
- Delete track

### Favorites
- Get all favorites
- Add track to favorites
- Delete track from favorites
- Add album to favorites
- Delete album from favorites
- Add artist to favorites
- Delete artist from favorites

## Implementation Details

- The service uses in-memory database for data storage
- All entities have UUID identifiers
- When an artist, album, or track is deleted:
  - Their IDs are removed from favorites (if present)
  - References to them in other entities become null
- Non-existing entities cannot be added to favorites
- All requests and responses use application/json format
- Users' passwords are excluded from responses

## Development

The project is built using:
- Node.js
- NestJS
- TypeScript
- Class-validator for request validation
- Swagger/OpenAPI for API documentation
