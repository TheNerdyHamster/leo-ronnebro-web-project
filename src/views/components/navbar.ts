const Navbar = {
    render: async (): Promise<string> => {
        const view = `
           <nav>
            <div>
                <h1>Navbar</h1>
            </div>
           </nav>
        `;

        return view;
    },
    post_render: async () => { },
};

export default Navbar;
