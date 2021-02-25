import { Spotify } from '../../services/Spotify';
import Utils from '../../Utils';

const Profile = {
    render: async (): Promise<string> => {
        const view = `
            <div id="profile">
                <div>
                    <img id="picture" src=''/>
                    <p id="name"></p>
                </div>
                <div>
                    <p id="id"></p>
                    <p id="followers"></p>
                    <p id="type"></p>
                </div>
            </div>
        `;

        return view;
    },
    post_render: async () => {
        const validCookie = Utils.validateCookie();
        if (!validCookie) {
            window.location.pathname = '/';
        }

        const profileImage = <HTMLImageElement>document.getElementById('picture');
        const profileName = <HTMLImageElement>document.getElementById('name');
        const profileID = <HTMLImageElement>document.getElementById('id');
        const profileFollowers = <HTMLImageElement>document.getElementById('followers');
        const profileType = <HTMLImageElement>document.getElementById('type');

        const data = await Spotify.fetchProfile();
        profileImage.src = data.images[0].url;
        profileName.innerText = data.display_name;
        profileID.innerText = data.id;
        profileFollowers.innerText = data.followers.total.toString();
        profileType.innerText = data.type;

    },
};

export default Profile;
