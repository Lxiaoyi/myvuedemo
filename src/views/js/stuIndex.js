import {queryStuLiByName} from '@/api/student'
export default {
  name: 'stuIndex',
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
