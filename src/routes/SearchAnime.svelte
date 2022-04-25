<script>
  import App from "./index.svelte";
  import SearchResults from "./SearchResults.svelte";

  let animeQuery = "";
  let data;

   function handleSubmit(e) {
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
        search: animeQuery,
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
    e.preventDefault();
    fetch(url, options)
    .then(response => response.json())
    .then(res => {
      data = res;
      console.log(data);
    });

    /*data.data.Page.media.forEach(element => {
      console.log(element.title.romaji);
    });*/
      }
</script>


<div>
<h2>diglielodiglielo</h2>
<form on:submit={handleSubmit}>
    <input type="text" bind:value={animeQuery}>
    <button>Search</button>
</form>
</div>

{#if data}
<SearchResults anime={data}/>
{/if}