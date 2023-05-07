// 1. 普通版本
{
  const SERVER_URL = "/server";
  let xhr = new XMLHttpRequest();

  xhr.open("GET", SERVER_URL, true);

  xhr.onreadystatechange = function () {
    if (this.readyState !== 4) return;

    if (this.status === 200) {
      console.log(this.response);
    } else {
      console.error(this.statusText);
    }
  };

  xhr.onerror = function () {
    console.log(this.statusText);
  };

  xhr.responseType = "json";

  xhr.send(null);
}

// promise
{
  function getJSON(url) {
    return new Promise((resolve, reject) => {
      let xhr = new XMLHttpRequest();

      xhr.open("GET", url);

      xhr.onreadystatechange = function () {
        if (this.readyState !== 4) return;

        if (this.status === 200) {
          resolve(this.response);
        } else {
          reject(new Error(this.statusText));
        }
      };

      xhr.responseType = "json";

      xhr.setRequestHeader("Accept", "application/json");

      xhr.send(null);
    });
  }
}
