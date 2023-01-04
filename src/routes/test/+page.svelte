<script>
  let name = "wonjang";
  export let data;
</script>

<h1>{name}의 홈페이지임 {data.message}</h1>

<form method="post" action="/api/test">
  <input type="text" name="name" />
  <button type="submit">제출</button>
</form>

<style>
  h1 {
    font-size: 50px;
  }
</style>
