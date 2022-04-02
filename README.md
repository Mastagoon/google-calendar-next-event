# Google Calendar Next Event Notifier

<strong>A simple script that tells you of the next event on your google calendar</strong>


# Pre-requisites
- Install [Node.js](https://nodejs.org/en/) version 16.11.0+

# Getting started
- Clone the repository
```
git clone https://github.com/mastagoon/google-calendar-next-event
```
- Install dependencies
```
cd google-calendar-next-event
npm install
```
- Or using yarn
```
cd google-calendar-next-event
yarn
```
- Copy and rpelace the environment variables
```
cp .example.env .env
```
- Provide the required environemnt variables

| Name                          | Description                         |
| ----------------------------- | ------------------------------------|
|GOOGLE_CLIENT_ID           | Client ID for google calendar API       |
|GOOGLE_CLIENT_SECRET       | Client Secret from google calendar API  |
|ACCOUNT_REFRESH_TOKEN      | A refresh token for your google account for Oauth2 authentication |

- Transpile typescript and run the project
```
tsc
yarn dev
```
- Using ts-node
```
ts-node src/main.js
```
