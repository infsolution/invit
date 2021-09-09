import variables from "./utils/variables"

export function GET_PROFILE(token){
    return {
        url: variables.urls.url+'client/profile',
        options:{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        }
    }
}