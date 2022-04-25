<script>
  import AnimeDetails from "./AnimeDetails.svelte";
  import SearchResults from "./SearchResults.svelte";
  import SearchAnime from "./SearchAnime.svelte";
  let data;
</script>

<main class="App">
  <SearchAnime />
  <div>
    {#if data}
    <SearchResults anime={data} />
    {/if}
  </div>


  
</main>
