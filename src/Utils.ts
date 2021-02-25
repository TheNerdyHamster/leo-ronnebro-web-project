const Utils = {
    sleep: (ms: number): Promise<NodeJS.Timeout> => {
        return new Promise((resolve) => setTimeout(resolve, ms));
    },

    generateCookie: (token: string, length: number): void => {
        document.cookie = `token=${token};max-age=${Number(length)};path=/;samesite=strict`;
    },

    getToken: (): string => {
        if (document.cookie.length == 0) {
            return '';
        }

        const token = document.cookie
            .split(';')
            .find((row) => row.startsWith('token='))
            .split('=');

        return token[1];
    },

    validateCookie: function (): boolean {
        return this.getToken() != '';
    },
};

export default Utils;
