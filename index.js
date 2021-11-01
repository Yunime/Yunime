import fetch from "node-fetch";

var query = `
query ($id: Int, $page: Int, $perPage: Int, $search: String) {
  Page (page: $page, perPage: $perPage) {
    pageInfo {
      total
      currentPage
      lastPage
      hasNextPage
      perPage
    }
    media (id: $id, search: $search) {
      id
      title {
        romaji
      }
    }
  }
}
`;

var variables = {
  search: "Fate/Zero",
  page: 1,
  perPage: 9,
};

var url = "https://graphql.anilist.co",
  options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      query: query,
      variables: variables,
    }),
  };

fetch(url, options).then(handleResponse).then(handleData).catch(handleError);

function handleResponse(response) {
  return response.json().then(function (json) {
    return response.ok ? json : Promise.reject(json);
  });
}
function handleData(data) {
  console.log(JSON.stringify(data));
}
function handleError(error) {
  
  console.error(error);
}
