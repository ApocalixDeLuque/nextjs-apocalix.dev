import axios from 'axios';

export const fetchFacebookUserData = async () => {
    var access_token = process.env.NEXT_PUBLIC_META_CLIENT_TOKEN;
    var app_id = process.env.NEXT_PUBLIC_META_APP_ID;
    var user_id = process.env.NEXT_PUBLIC_META_USER_ID;

    const profilePictureUrl = `https://graph.facebook.com/v17.0/${user_id}/picture?type=large&access_token=${app_id}|${access_token}`;

    const response = await axios.get(
        `https://graph.facebook.com/${user_id}?access_token=${app_id}|${access_token}`
    );
    // response.data returns { name: 'Example Name', id: '1234567890' }
    return { ...response.data, profilePictureUrl };
};
