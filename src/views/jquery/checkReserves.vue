<template>
    <div style="height:100%;width:100%;background-color:#084D8E;">
    <div class="card" style="margin-top:0px;">
        <el-form>
                <el-row style="padding-top: 10px">
                    <el-col :xs="24" :sm="24" :md="11" :lg="5" :xl="5">
                        <el-form-item class="main-text" label="城市 :" label-width="80px">
                            <el-input size="small" style="width: 100%" v-model="city" placeholder="请输入内容"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :xs="24" :sm="24" :md="13" :lg="7" :xl="7">
                        <el-form-item style="text-align: center;margin-bottom: 10px;">
                            <el-button  size="medium">重置</el-button>
                            <el-button type="primary" size="medium" :loading="listLoading">查询</el-button>
                        </el-form-item>
                    </el-col>
                </el-row>
            </el-form>

            <el-table

                :header-cell-style="{background:'#0757A0',color:'#fff'}"
                :data="tableData"
                style="width: 100%;border:0">
                <el-table-column
                prop="num"
                label="序号"
                width="180">
                </el-table-column>
                <el-table-column
                prop="time"
                label="时间"
                width="180">
                </el-table-column>
                <el-table-column
                prop="city"
                label="城市">
                </el-table-column>
                <el-table-column
                prop="stock"
                label="垃圾总存量">
                </el-table-column>
                <el-table-column
                prop="type"
                label="垃圾类型">
                </el-table-column>
            </el-table>

            <div style="color:#fff;float:right">共3页 , 共37条   首页  上一页  1  2  3  下一页 末页</div>
    </div>
    </div>
</template>

<script>
    export default {
        data() {
        return {
          listLoading: false,
            city: '',
            tableData: [{
          num: '01',
          time: '2020-06',
          city: '平顶山市',
          stock:'28.371',
          type:'混合垃圾'
        },{
          num: '02',
          time: '2020-05',
          city: '平顶山市',
          stock:'35.47',
          type:'工程渣土'
        },{
          num: '03',
          time: '2020-05',
          city: '平顶山市',
          stock:'31.27',
          type:'混合垃圾'
        },{
          num: '04',
          time: '2020-05',
          city: '平顶山市',
          stock:'5480',
          type:'工程渣土'
        },{
          num: '05',
          time: '2020-04',
          city: '深圳市',
          stock:'2067',
          type:'工程渣土'
        },{
          num: '06',
          time: '2020-04',
          city: '深圳市',
          stock:'4389',
          type:'混合垃圾'
        },{
          num: '07',
          time: '2020-04',
          city: '深圳市',
          stock:'2408',
          type:'工程渣土'
        },{
          num: '08',
          time: '2020-03',
          city: '深圳市',
          stock:'550.35',
          type:'工程渣土'
        },{
          num: '09',
          time: '2020-03',
          city: '深圳市',
          stock:'26.71',
          type:'工程渣土'
        }]
         }

            },
        methods: {
        }

    }
</script>

<style>
    .card{
        padding-top:5px;
        height: 90%;

        background-color: rgb(8, 67, 121);

        border-radius: 25px;
    }
    .el-main{
        border: 0;
    }
    .main-text{
        color: #fff!important;
        font-family:Georgia,serif;
        font-weight:bold;
        font-size:15px;
        text-align: left;
    }
    .el-table th, .el-table tr{
        background-color: #0757A0;
    }
    .el-table__row--striped{
        background: #0757A0!important;
    }
    .el-table tbody tr:hover>td {
    background-color:#0757A0!important
}
.el-table td{
    border-bottom:0;

}
.el-form-item__label{
    color: #fff;
}
.el-table{
    color: #fff;
}


</style>
