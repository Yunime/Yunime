let searchQuery = "";
  
export let response;

function handleSubmit() {
  if (!searchQuery) return;

  searchUnsplash();
}

async function searchUnsplash() {
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
      episodes
      popularity
      }
  }
  }
  `;
  let variables = {
    search: searchQuery,
    page: 1,
    perPage: 3,
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
  let response = await fetch(url, options);
  console.log(response);
  return response;
  /*data.data.Page.media.forEach(element => {
    console.log(element.title.romaji);
  });*/
