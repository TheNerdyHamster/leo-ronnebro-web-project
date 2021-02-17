const Navbar = {
    render: async (): Promise<string> => {
        const view = `
           <section class="navbar">
            <div class="logo">
                <h1>Navbar</h1>
            </div>

            <nav>
                <ul class="list">
                    <li>
                        <a href="#">Home</a>
                    </li>
                    <li>
                        <a href="#">About</a>
                    </li>
                    <li>
                        <a href="#">Login</a>
                    </li>
                    <li>
                        <a href="#">Register</a>
                    </li>
                </ul>
            </nav>
           </section>
        `;

        return view;
    },
    post_render: async () => { },
};

export default Navbar;
