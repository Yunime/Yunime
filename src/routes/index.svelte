<script >
  let searchQuery = "";
  let isLoading = false;
  let data;

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
    isLoading = true;
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
    data = await response.json();
    /*data.data.Page.media.forEach(element => {
      console.log(element.title.romaji);
    });*/
  }
  
  </script>

<main class="App">
  <h1 class="font-bold text-4xl">yunime :)</h1>
  <form class="search-form" on:submit|preventDefault={handleSubmit}>
    <input
      bind:value={searchQuery}
      class="search-input"
      type="search"
      placeholder="Search Unsplash's library of over 1 million photos"
    />
  </form>
  <!--
  {#each data.data.Page.media as result (result.element.title.romaji)}
    <ul class="search-results">
      <li class="photo-card">
        <a href="#" rel="noopener noreferrer" target="_blank"> {result}</a>
      </li>
    </ul>
  {/each}-->  
</main>
