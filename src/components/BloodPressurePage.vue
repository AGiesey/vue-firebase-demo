<template>
  <div class="container pt-2">
    <div class="row mb-5">
      <div class="col-sm">
        <h1>Blood Pressure</h1>
      </div>
    </div>
    <div class="row">
      <div class="col-sm-3">
        <form>
          <div class="mb-3">
            <label for="dateValue" class="form-label">Date</label>
            <input type="date" class="form-control" v-model="dateValue">
          </div>
          <div class="mb-3">
            <label for="systolicValue" class="form-label">Systolic</label>
            <input type="number" class="form-control" v-model="systolicValue">
          </div>
          <div class="mb-3">
            <label for="diastolicValue" class="form-label">Diastolic</label>
            <input type="number" class="form-control" v-model="diastolicValue">
          </div>
          <button type="button" class="btn btn-primary" v-on:click="addEntry()">Add Entry</button>
        </form>
      </div>
      <div class="col-sm-5 text-center">
        <h3 class="text-muted">My Entries</h3>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Date</th>
              <th scope="col">Systolic</th>
              <th scope="col">Diastolic</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="entry in entries" :key="entry.date">
              <td>{{entry.date}}</td>
              <td>{{entry.systolic}}</td>
              <td>{{entry.diastolic}}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="col-sm-3">
        <div class="row mb-5 flex-column">
          <h3 class="text-center text-muted">Average Systolic</h3>
          <h2 class="text-center" v-bind:class="{ 
            'text-success': averageSystolic < 120,
            'text-warning': averageSystolic >= 120,
            'text-danger': averageSystolic >= 130 
          }">
            {{averageSystolic}}
          </h2>
        </div>
        <div class="row flex-column">
          <h3 class="text-center text-muted">Average Diastolic</h3>
          <h2 class="text-center" v-bind:class="{ 
            'text-success': averageDiastolic < 85,
            'text-warning': averageDiastolic >= 85,
            'text-danger': averageDiastolic >= 90 
          }">
            {{averageDiastolic}}
          </h2>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    data: () => ({
      dateValue: '',
      systolicValue: 0,
      diastolicValue: 0,
      entries: []
    }),
    methods: {
      addEntry: function() {
        this.entries.push({
          date: this.dateValue,
          systolic:parseInt(this.systolicValue),
          diastolic:parseInt(this.diastolicValue)
        });
        this.dateValue = '';
        this.systolicValue = 0;
        this.diastolicValue = 0;
      }
    },
    computed: {
      averageSystolic: function() {
        const length = this.entries.length;
        if (length < 1) return 0;
        if (length === 1 ) return this.entries[0].systolic;
        return this.entries.reduce((a, b) => a.systolic + b.systolic) / length;
      },
      averageDiastolic: function() {
        const length = this.entries.length;
        if (length < 1) return 0;
        if (length === 1 ) return this.entries[0].diastolic;
        return this.entries.reduce((a, b) => a.diastolic + b.diastolic) / length;
      }
    }
}
</script>