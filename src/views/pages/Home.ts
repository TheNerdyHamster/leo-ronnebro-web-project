import { spotify } from '../../services/Spotify';
import Utils from '../../Utils';

const Home = {
    render: async (): Promise<string> => {
        const view = `
            <div id="home">
                <div class="home">
                    <div class="title">
                        <p>TNH<span>Profiler</span></p>
                    </div>
                    <div class="links">
                        <div class="login">
                            <button id="login">Connect with Spotify</button>
                        </div>
                        <div class="about">
                            <a href="/about">About creator</a>
                        </div>
                    </div>
                </div>
            </div>
        `;

        return view;
    },
    post_render: async () => {
        const button = <HTMLButtonElement>document.getElementById('login');

        let url = spotify.GenerateURL();
        if (Utils.validateCookie()) {
            url = '/account';
            button.innerText = 'Go to your account!';
        }

        button.onclick = () => {
            location.href = url;
        };
    },
};

export default Home;
