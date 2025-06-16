# Home Library Service

## Description

The Home Library Service is a music library management system that allows you to manage your music collection. You can work with artists, albums, tracks, and create your favorites list.

## Prerequisites

- Git - [Download & Install Git](https://git-scm.com/downloads)
- Docker - [Download & Install Docker](https://docs.docker.com/get-docker/)

## Environment Variables

Before running the application, create a `.env` file in the root directory with the following variables:

```env
PORT=4000

# Database
POSTGRES_HOST=postgres
POSTGRES_PORT=5432
POSTGRES_USER=admin
POSTGRES_PASSWORD=admin
POSTGRES_DB=home_library

# JWT
JWT_SECRET_KEY=your_access_secret
JWT_SECRET_REFRESH_KEY=your_refresh_secret
TOKEN_EXPIRE_TIME=1h
TOKEN_REFRESH_EXPIRE_TIME=24h

# Logging
LOG_LEVEL=log           # Possible values: error, warn, log, debug, verbose
LOG_FILE_SIZE_KB=10     # Max log file size in kilobytes before rotation
```

**Environment variables description:**

- PORT: The port on which the application will run (default: 4000)
- POSTGRES_HOST: The hostname of the Postgres database (default: postgres)
- POSTGRES_PORT: The port number of the Postgres database (default: 5432)
- POSTGRES_USER: The username for accessing the Postgres database
- POSTGRES_PASSWORD: The password for accessing the Postgres database
- - `JWT_SECRET_KEY`, `JWT_SECRET_REFRESH_KEY`: Secrets for signing JWT tokens
- `TOKEN_EXPIRE_TIME`, `TOKEN_REFRESH_EXPIRE_TIME`: Token expiration times
- `LOG_LEVEL`: Logging level. Use one of: `error`, `warn`, `log`, `debug`, `verbose`.  
  For example, set `LOG_LEVEL=debug` to log all logs with type `error`, `warn`, `log`, `debug`
- `LOG_FILE_SIZE_KB`: Maximum size (in KB) for log files before rotation

## Running the application

To build and start the application locally with Docker, run:

```bash
docker compose up --build
```

This will build the images and start all services.  
The application will be available at <http://localhost:{PORT}>

To stop the application:

```bash
docker compose down
```

## Logging

- All requests and responses are logged to files in the `app/dist/logs` directory.
- Log files are automatically rotated when they reach the size specified in `LOG_FILE_SIZE_KB`.
- Error logs are written to a separate `error.log` file.
- You can control the verbosity of logs using the `LOG_LEVEL` environment variable.

## Testing

After starting the application, you can run the tests:

```bash
npm run test:auth
```

## API Documentation

After starting the app on port (4000 as default) you can open
in your browser OpenAPI documentation by typing <http://localhost:{PORT}/doc/>
For more information about OpenAPI/Swagger please visit <https://swagger.io/>

## Auto-fix and format

```bash
npm run lint
```

```bash
npm run format
```

## Vulnerability Scanning

The project includes npm scripts for vulnerability scanning:

```bash
# Check for vulnerabilities and outdated packages (without fixing)
npm run scan

# Automatically fix vulnerabilities and update packages
npm run scan:fix
```

The `scan` script performs:

- Security audit of dependencies
- Dry run of vulnerability fixes
- Check for outdated packages

The `scan:fix` script performs:

- Automatic fixing of vulnerabilities
- Update of packages to their latest compatible versions

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
