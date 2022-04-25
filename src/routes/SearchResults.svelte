<script>
    export let anime;
</script>

{#each anime.data.Page.media as result (result.title.romaji)}
<ul class="search-results">
  <li class="photo-card">
    <a href="#" rel="noopener noreferrer" target="_blank"> {result}</a>
  </li>
</ul>
{/each}
