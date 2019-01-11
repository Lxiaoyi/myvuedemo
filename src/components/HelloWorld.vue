<template>
    <div class="hello">
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


<script>
  import {queryStuLiByName} from '@/api/student'
  export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      list : null,
    }
  },
  methods : {
    tableRowClassName({row, rowIndex}) {
      if (rowIndex === 1) {
        return 'warning-row';
      } else if (rowIndex === 3) {
        return 'success-row';
      }
      return '';
    },

    getList() {
      queryStuLiByName({pageNum: 1, pageSize: 5, keyword : ''}).then(response => {
        let result = response.data;
        this.list = result.data.list;
        console.info(this.list)
      });
    },
  },

  filters : {
    formatSex(value) {
      if (value == 0) {
        return '男';
      } else {
        return '女';
      }
    }
  },

  created() {
    this.getList();
  },
}
</script>

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
