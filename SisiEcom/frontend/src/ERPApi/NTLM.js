// import { NtlmClient } from 'axios-ntlm';

// (async () => {

//     let credentials: NtlmCredentials = {
//         username: 'username',
//         password: "password",
//         domain: 'domain'
//     }

//     let client = NtlmClient(credentials)

//     try {
//         let resp = await client({
//             url: 'https://protected.site.example.com',
//             method: 'get'
//         });
//         console.log(resp.data);
//     }
//     catch (err) {
//         console.log(err)
//         console.log("Failed")
//     }

// })()