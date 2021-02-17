const Error404 = {
    render: async (): Promise<string> => {
        const view = `
            <selection class="section">
                <h1> 404 Error </h1>
            </selection>
        `;

        return view;
    },
    post_render: async () => {},
};

export default Error404;
