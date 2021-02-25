const Error404 = {
    render: async (): Promise<string> => {
        const view = `
            <div id="error">
                <h1> 404 Error </h1>
            </div>
        `;

        return view;
    },
    post_render: async () => {},
};

export default Error404;
