import axios from 'axios'

export function post(url, data, timeout = 120000) {
    return axios({
        method: 'GET',
        url: url,
        data: data,     // post Data
        timeout: timeout, // timeout
        headers: {
            'Content-Type': 'application/json; charset=UTF-8',
            'Accept': 'application/json;'
        },
    })
        .then(response => {
            return response.data
        })
        .catch((e) => { alert('連線錯誤') })
}

