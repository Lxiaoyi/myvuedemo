<template>
  <div class="hello">
    <h2>{{msg}}</h2>
    <el-table
      :data="list"
      style="width: 100%"
      :row-class-name="tableRowClassName">
      <el-table-column label="姓名">
        <template slot-scope="scope">{{scope.row.sName}}</template>
      </el-table-column>
      <el-table-column label="性别">
        <template slot-scope="scope">{{scope.row.sSex | formatSex}}</template>
      </el-table-column>
      <el-table-column label="年龄">
        <template slot-scope="scope">{{scope.row.sAge}}</template>
      </el-table-column>
    </el-table>
  </div>
</template>

<style>
  .el-table .warning-row {
    background: oldlace;
  }

  .el-table .success-row {
    background: #f0f9eb;
  }
</style>


<script src="./js/stuIndex.js"></script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
