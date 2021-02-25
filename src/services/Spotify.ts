import Utils from '../Utils';

const SCOPES = 'user-read-email';
const CLIENT_ID = '006dcb0b56cc4924bcfa89beac704a06';
const RESPONSE_TYPE = 'token';
const REDIRECT_URI = 'http://localhost:1234/auth';

export type Profile = {
    id: string;
    display_name: string;
    type: string;
    followers: {
        total: number;
    };
    external_urls: {
        spotify: string;
    };
    images: Array<{
        url: string;
    }>;
};

class spotify {
    GenerateURL(): string {
        const url = `https://accounts.spotify.com/authorize?client_id=${CLIENT_ID}&response_type=${RESPONSE_TYPE}&scopes=${SCOPES}&redirect_uri=${REDIRECT_URI}`;

        return url;
    }

    public async fetchProfile(): Promise<Profile> {
        const response = await window.fetch('https://api.spotify.com/v1/me', {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                Authorization: `Bearer ${Utils.getToken()}`,
            },
        });

        if (response.ok) {
            const data: Profile = await response.json();
            return data;
        }

        const error = new Error('Authorization failed');
        return Promise.reject(error);
    }
}

export const Spotify = new spotify();
