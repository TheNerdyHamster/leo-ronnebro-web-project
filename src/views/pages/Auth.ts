import { Spotify } from '../../services/Spotify';
import Utils from '../../Utils';
const Auth = {
    render: async (): Promise<string> => {
        const view = `
            <div id="auth">
                <div class="result">
                    <div id="success">
                        <p>Auth success</p>
                        <p class="message">Welcome <span id="name"></span></p>
                    </div>
                    <div id="failed">
                        <div>
                            <p>Auth failed...</a>
                        </div>
                        <a href="/">Retry auth</a>
                    </div>
                </div>
            </div>
        `;

        return view;
    },
    post_render: async () => {
        const successElement = <HTMLDivElement>document.getElementById('success');
        const failedElement = <HTMLDivElement>document.getElementById('failed');
        const nameElement = <HTMLSpanElement>document.getElementById('name');

        const data = new Array<string>();

        location.hash.split('&').forEach(function (value) {
            data.push(value.slice(value.indexOf('=') + 1, value.length));
        });

        if (data.length === 3) {
            successElement.style.display = 'block';
            failedElement.style.display = 'none';

            Utils.generateCookie(data[0], data[2]);

            const userData = await Spotify.fetchProfile();
            nameElement.innerText = userData.display_name;

            window.setTimeout(function () {
                window.location.href = 'http://localhost:1234/profile';
            }, 5000);
        } else {
            successElement.style.display = 'none';
            failedElement.style.display = 'block';
        }
    },
};

export default Auth;
