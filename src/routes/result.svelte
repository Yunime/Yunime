<script>
  import Card from "./card.svelte";
  export let results;
</script>
<p>{results}</p>
{#each results as result (result.element.title.romaji)}
  <ul class="search-results">
    <li class="photo-card">
      <a href="#" rel="noopener noreferrer" target="_blank">
        {result}</a
      >
    </li>
  </ul>
{/each}
