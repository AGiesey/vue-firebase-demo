<template>
  <div class="container pt-2">
    <div class="row">
      <div class="col-sm">
        <h1>Weight</h1>
      </div>
    </div>
    <div class="row">
      <div class="col-sm-3">
        <form>
          <div class="mb-3">
            <label for="weightValue" class="form-label">Weight (lbs)</label>
            <input type="number" class="form-control" id="weightValue">
          </div>
          <div class="mb-3">
            <label for="bmiValue" class="form-label">BMI</label>
            <input type="number" class="form-control" id="bmiValue">
          </div>
          <button type="submit" class="btn btn-primary">Add Entry</button>
        </form>
      </div>
    </div>
  </div>
</template>