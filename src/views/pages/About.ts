const About = {
    render: async (): Promise<string> => {
        const view = `
            <div id="about">
                <div class="headline">
                    <img src="https://avatars.githubusercontent.com/u/26503572?s=460&u=2faf9b65bf532418edca07c54f3fb2dd634abb8d&v=4"/>
                    <p>Leo Rönnebro</p>
                </div>

                <div class="information">
                    <p class="title">Information</p>
                    <ul>
                        <li>
                            <p>Age: <span>20</span></p>
                        </li>
                        <li>
                            <p>Location: <span>Gothenburg</span></p>
                        </li>
                    <ul>
                </div>

                <div class="interests">
                    <p class="title">Intressts</p>
                    <div class="list">
                        <p>Linux</p>
                        <p>Security</p>
                        <p>Automation</p>
                        <p>Networks</p>
                        <p>Fullcontact Karate</p>
                        <p>Series</p>
                    </div>
                </div>

                <button id="back">Back home</button>
            </div>
        `;

        return view;
    },
    post_render: async () => {
        const backBtn = <HTMLButtonElement>document.getElementById('back');
        backBtn.onclick = () => {
            window.history.back();
        };
    },
};

export default About;
