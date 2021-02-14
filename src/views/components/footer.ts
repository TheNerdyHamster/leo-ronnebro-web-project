const Footer = {
    render: async () => {
        const view = `
        <footer>
            <div>
                <p>
                    This is my foot. There are many like it, but this one is mine.
                </p>
            </div>
        </footer>
        `;
        return view;
    },
    after_render: async () => {},
};

export default Footer;
