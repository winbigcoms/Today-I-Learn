export const request = (() => {
  return {
    get(url) {
      return fetch(url);
    },
    post(url, payload) {
      return fetch(url, {
        method : 'POST',
        headers: {'content-Type':'application/json'},
        body: JSON.stringify(payload)          
      });
    },
    patch(url, payload) {
      return fetch(url,{
        method:'PATCH',
        headers: {'content-Type':'application/json'},
        body: JSON.stringify(payload)
      });
    },
    delete(url) {
      return fetch(url,{
        method: 'DELETE'
      });
    }
  };
})();
// export const ajax = (() => {
//   const req = (method, url, payload) => {
//     return new Promise((res, rej) => {
//       const xhr = new XMLHttpRequest();
//       xhr.open(method, url);
//       xhr.setRequestHeader('content-type', 'application/json');
//       xhr.send(JSON.stringify(payload));
//       xhr.onload = () => {
//         if (xhr.status === 200 || xhr.status === 201) {
//           res(JSON.parse(xhr.response));  
//         } else {
//           rej(xhr.status);
//         }
//       };
//     })
//   };

//   return {
//     get(url) {
//       return req('GET', url);
//     },
//     post(url, payload) {
//       return req('POST', url, payload);
//     },
//     patch(url, payload) {
//       return req('PATCH', url, payload);
//     },
//     delete(url) {
//       return req('DELETE', url);
//     }
//   };
// })();