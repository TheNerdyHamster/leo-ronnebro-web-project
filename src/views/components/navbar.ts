import { spotify } from '../../services/spotify'
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
                    <li id="login">
                        <a href="#">Login</a>
                    </li>
                </ul>
            </nav>
           </section>
        `;

        return view;
    },
    post_render: async (): Promise<void> => {
        const button = <HTMLButtonElement>document.getElementById('login');
        button.onclick = () => {
            location.href = spotify.GenerateURL();
        };
    },
};

export default Navbar;
