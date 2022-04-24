<script>
    export let query;
    export let handleSubmit;
  </script>



  <div class="search">
    <form class="search-form" on:submit|preventDefault={handleSubmit}>
      <input bind:value={query} class="search-input" type="search"
      placeholder="Search Unsplash's library of over 1 million photos" />
    </form>
  </div>
  