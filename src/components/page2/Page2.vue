<template lang="html">
  <div class="page">
    <h1 style="text-align: center;">这是页面二</h1>
    <el-row type="flex" justify="center">
      <el-col :xs="24" :sm="24" :md="24" :lg="24">
        <el-tabs type="border-card">
          <el-tab-pane label="银行流水">
            <el-table :data="tableData">
              <el-table-column label="操作" width="80">
                <template scope="scope">
                <!--<el-button @click="" type="text" size="small">查看</el-button>-->
                <!--<el-button v-popover:popover4 size="samll">查看</el-button>-->
                  <!--<el-popover ref="popover4" placement="right" width="400" trigger="click">-->
                    <!--<el-table :data="gridData">-->
                      <!--<el-table-column width="150" property="date" label="日期"></el-table-column>-->
                      <!--<el-table-column width="100" property="name" label="姓名"></el-table-column>-->
                      <!--<el-table-column width="300" property="address" label="地址"></el-table-column>-->
                    <!--</el-table>-->
                  <!--</el-popover>-->
              </template>
              </el-table-column>
              <el-table-column type="index" width="50"></el-table-column>
              <el-table-column prop="name" label="项目名称"></el-table-column>
              <el-table-column prop="date" label="借款方"></el-table-column>
              <el-table-column prop="address" label="放款额度"></el-table-column>
              <el-table-column prop="address" label="计划放款日"></el-table-column>
            </el-table>
          </el-tab-pane>
          <el-tab-pane label="现金流水">
            <el-table :data="tableData2">
              <el-table-column type="index" width="50"></el-table-column>
              <el-table-column prop="name" label="项目名称"></el-table-column>
              <el-table-column prop="date" label="借款方"></el-table-column>
              <el-table-column prop="address" label="放款额度"></el-table-column>
              <el-table-column prop="address" label="计划放款日"></el-table-column>
            </el-table>
          </el-tab-pane>
        </el-tabs>
      </el-col>
    </el-row>
  </div>
</template>
<script type="text/ecmascript-6">
  export default {
    data(){
      return {
        tableData:[
          {
            name:'小明',
            date:'2017-3-12',
            address:'上海上海上海'
          },
          {
            name:'小ddd',
            date:'2017-3-12',
            address:'上海erwe海上海'
          },
          {
            name:'ewqeqw',
            date:'2017-3-12',
            address:'上海11111海上海'
          }
        ],
        tableData2:[],
        gridData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }]
      };
    }
  }
</script>
<style rel="stylesheet/scss" scoped>


</style>
