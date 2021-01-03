<template>
  <div class="container pt-2">
    <div class="row">
      <div class="col-sm">
        <h1>Blood Pressure</h1>
      </div>
    </div>
    <div class="row">
      <div class="col-sm-3">
        <form>
          <div class="mb-3">
            <label for="dateValue" class="form-label">Date</label>
            <input type="text" class="form-control" id="dateValue">
          </div>
          <div class="mb-3">
            <label for="systolicValue" class="form-label">Systolic</label>
            <input type="number" class="form-control" id="systolicValue">
          </div>
          <div class="mb-3">
            <label for="diastolicValue" class="form-label">Diastolic</label>
            <input type="number" class="form-control" id="diastolicValue">
          </div>
          <button type="submit" class="btn btn-primary">Add Entry</button>
        </form>
      </div>
    </div>
  </div>
</template>