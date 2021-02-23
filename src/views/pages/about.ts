const About = {
    render: async (): Promise<string> => {
        const view = `
            <div id="about">
                <h1> About </h1>
            </div>
        `;

        return view;
    },
    post_render: async () => {},
};

export default About;
