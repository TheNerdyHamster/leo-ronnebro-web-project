const SCOPES = 'user-read-email';
const CLIENT_ID = '006dcb0b56cc4924bcfa89beac704a06';
const RESPONSE_TYPE = 'token';
const REDIRECT_URI = 'http://localhost:1234/auth';

class Spotify {
    GenerateURL(): string {
        const url = `https://accounts.spotify.com/authorize?client_id=${CLIENT_ID}&response_type=${RESPONSE_TYPE}&scopes=${SCOPES}&redirect_uri=${REDIRECT_URI}`;

        return url;
    }
}

export const spotify = new Spotify();
