# Home Library Service

## Description

The Home Library Service is a music library management system that allows you to manage your music collection. You can work with artists, albums, tracks, and create your favorites list.

## Prerequisites

- Git - [Download & Install Git](https://git-scm.com/downloads)
- Node.js - [Download & Install Node.js](https://nodejs.org/en/download/) and the npm package manager

## Downloading

```
git clone {repository URL}
```

## Installing NPM modules

```
npm install
```

## Running application

```
npm start
```

After starting the app on port (4000 as default) you can open
in your browser OpenAPI documentation by typing http://localhost:4000/api/
For more information about OpenAPI/Swagger please visit https://swagger.io/

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
