<template>
  <div class="container pt-2">
    <div class="row">
      <div class="col-sm">
        <h1>Login</h1>
      </div>
    </div>
    <div class="row">
      <div class="col-sm-3">
        <form>
          <div class="mb-3">
            <label for="emailValue" class="form-label">Email</label>
            <input type="email" class="form-control" id="emailValue">
          </div>
          <div class="mb-3">
            <label for="passwordValue" class="form-label">Password</label>
            <input type="password" class="form-control" id="passwordValue">
          </div>
          <button type="submit" class="btn btn-primary">Login</button>
        </form>
      </div>
    </div>
  </div>
</template>