const Home = {
    render: async (): Promise<string> => {
        const view = `
            <selection class="section">
                <h1> Home </h1>
            </selection>
        `;

        return view;
    },
    post_render: async () => {},
};

export default Home;
