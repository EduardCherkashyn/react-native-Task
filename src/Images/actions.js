import {LOAD_IMAGES} from "./types";

function requestImages(data) {
    return {
        type: LOAD_IMAGES,
        posts: data,
    }
}

export function fetchImages() {
    return function (dispatch) {
        return fetch('https://api.unsplash.com/photos/?client_id=cf49c08b444ff4cb9e4d126b7e9f7513ba1ee58de7906e4360afc1a33d1bf4c0')
            .then(
                response => response.json(),
                error => console.log('An error occurred.', error)
            )
            .then(json => {
                let data = [];
                json.forEach (function (Object, key) {
                   data[key] = [];
                   Object.description ? data[key]['description'] = Object.description : data[key]['description'] = Object.alt_description;
                    data[key]['small'] = Object.urls.small;
                    data[key]['full'] = Object.urls.full;
                    data[key]['username'] = Object.user.username;
                });
                dispatch(requestImages(data))
            });
    }
}
