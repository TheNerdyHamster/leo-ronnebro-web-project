import { Spotify } from '../../services/Spotify';
import Utils from '../../Utils';

const Profile = {
    render: async (): Promise<string> => {
        const view = `
            <div id="profile">
                <div class="info">
                    <img id="picture" src=''/>
                    <a id="name" target="_blank"></a>
                </div>
                <div class="data">
                    <p id="id"></p>
                    <p id="followers"></p>
                    <p id="type"></p>
                </div>
                <div class="about-btn">
                    <a href="/about">About creator</a>
                </div>
            </div>
        `;

        return view;
    },
    post_render: async () => {
        if (!Utils.validateCookie()) {
            window.location.pathname = '/';
        }

        const profileImage = <HTMLImageElement>document.getElementById('picture');
        const profileName = <HTMLAnchorElement>document.getElementById('name');
        const profileID = <HTMLImageElement>document.getElementById('id');
        const profileFollowers = <HTMLImageElement>document.getElementById('followers');
        const profileType = <HTMLImageElement>document.getElementById('type');

        const data = await Spotify.fetchProfile();
        profileImage.src = data.images[0].url;
        profileName.textContent = data.display_name;
        profileName.href = data.external_urls.spotify;
        profileID.innerHTML = `ID: <span>${data.id}</span>`;
        profileFollowers.innerHTML = `Followers: <span>${data.followers.total.toString()}</span>`;
        profileType.innerHTML = `Account type: <span>${data.type}</span>`;
    },
};

export default Profile;
