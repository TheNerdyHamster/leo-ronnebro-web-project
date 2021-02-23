console.log(location.hash.split('&').forEach((value) => {
        console.log(value.slice(value.indexOf('=') + 1, value.length));
    }),
);

const Auth = {
    render: async (): Promise<string> => {
        const view = `
            <selection class="section">
                <h1> Auth </h1>
            </selection>
        `;

        return view;
    },
    post_render: async () => {},
};

export default Auth;
