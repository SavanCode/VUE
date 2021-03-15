<template>
    <el-col :span="24">
        <base-card>
            <avue-crud :option="listOption"
                       :data="listData"
                       :page="page"
                       :table-loading="loading"
                       ref="crud"
                       v-model="listForm"
                       @on-load="getList"
                       @row-save="listAdd"
                       @row-del="listDelete"
                       @row-update="listUpdate"
                       @search-reset="searchReset"
                       @search-change="searchChange"
                       @refresh-change="refreshChange"
                       @size-change="sizeChange"
                       @current-change="currentChange"
                       :beforeOpen="beforeOpen"
            >
            </avue-crud>
        </base-card>
    </el-col>
</template>

<script>
    import {recordsApi} from '@/api/records'  
    import {successMessage} from "@/util/util";
    import moment from 'moment'

    export default {
        data() {
            return {
                query: {},
                listForm: {},
                listData: [],
                listOption: {
                    tip: false,
                    index: false,
                    stripe: true,
                    border: true,
                    height: 650,
                    align: 'center',
                    column: [
                        {
                            label: '借阅编号',
                            prop: 'Record_id',
                            span: 24,
                            searchSpan: 12,
                            disabled: true,
                            rules: [
                                {
                                    required: false,
                                    message: '请输入借阅编号',
                                    trigger: 'blur'
                                }
                            ]
                        },{
                            label: '图书编号',
                            prop: 'Book_id',
                            span: 12,
                            search: true,
                            searchSpan: 12,
                            rules: [
                                {
                                    required: true,
                                    message: '请输入图书编号',
                                    trigger: 'blur'//click
                                }
                            ]
                        },{
                            label: '书名',
                            prop: 'Book_name',
                            span: 12,
                            search: true,
                            searchSpan: 12,
                            rules: [
                                {
                                    required: true,
                                    message: '请输入书名',
                                    trigger: 'blur'//click
                                }
                            ]
                        }, {
                            label: '作者',
                            prop: 'Author',
                            span: 12,
                            rules: [
                                {
                                    required: true,
                                    message: '请输入作者',
                                    trigger: 'blur'
                                }
                            ]
                        },{
                            label: '读者编号',
                            prop: 'User_id',
                            search: true,
                            searchSpan:12,
                            span: 12,
                            rules: [
                                {
                                    required: true,
                                    message: '请输入借书用户编号',
                                    trigger: 'blur'
                                }
                            ]
                        },{
                            label: '借书日期',
                            prop: 'Borrow_date',
                            width: 155,
                            span: 12, 
                            type: 'date',
                            disabled: true,
                            format: 'yyyy-MM-dd',
                            valueFormat: 'yyyy-MM-dd', 
                        },{
                            label: '预计归还日期',
                            prop: 'Exp_return_date',
                            width: 155,
                            span: 12,  
                            type: 'date',
                            disabled: true,
                            format: 'yyyy-MM-dd',
                            valueFormat: 'yyyy-MM-dd'
                        },{
                            label: '实际归还日期',
                            prop: 'Act_return_date',
                            width: 155,
                            span: 12, 
                            type: 'date',
                            format: 'yyyy-MM-dd',
                            valueFormat: 'yyyy-MM-dd'
                        }, {
                            label: '罚款',
                            prop: 'Penalty', 
                            span: 12,
                            rules: [
                                {
                                    required: true,
                                    message: '请输入罚款金额',
                                    trigger: 'blur'
                                }
                            ]
                        }
                    ]
                },
                loading: true,
                page: {
                    total: 0,
                    pageSize: 20,
                    currentPage: 1
                }
            }
        },
        created() {
            this.getList();  
        },
        methods:
            {
                getList(page) {
                    this.loading = true;
                    recordsApi.list(Object.assign({
                        page: {
                            current: this.page.currentPage,
                            size: this.page.pageSize
                        }
                    }, this.query)).then(res => {
                        const data = res.data;
                        //console.log(data)
                        this.page.total = data.total;
                        this.listData = data.records;
                    }).catch(() => {
                    }).finally(() => {
                        this.loading = false;//
                    }); 
                },
                listAdd(row, done, loading) {
                    recordsApi.add(row).then(() => {
                        loading();
                        this.list(this.page);
                        successMessage();
                    }).catch(() => {
                    }).finally(() => {
                        done();
                    });
                },
                listDelete(row) {
                    this.$confirm('是否删除该条数据？', '提示', {
                        confirmButtonText: '确定',
                        cancelButtonText: '取消',
                        type: 'warning'
                    }).then(() => { 
                        return recordsApi.delete(row.Record_id);
                    }).then(() => {
                        this.getList(this.page);
                        successMessage();
                    }).catch(() => {
                    });
                },
                listUpdate(row, index, done, loading) {
                    recordsApi.update(row).then(() => {
                        loading();
                        this.getList(this.page);
                        successMessage();
                    }).catch(() => {
                    }).finally(() => {
                        done();
                    });
                },
                refreshChange() {
                    this.getList(this.page);
                },
                currentChange(page) {
                    this.page.currentPage = page;
                },
                sizeChange(pageSize) {
                    this.page.pageSize = pageSize;
                    this.getList(this.page);
                },
                searchChange(params, done) {
                    this.query = params;
                    this.getList(this.page);
                    done();
                },
                searchReset() {
                    this.query = {};
                    this.getList(this.page);
                },
                beforeOpen(done, type) {       
                    //const { id } = this.$route.params;
                    //console.log(this.$route.params) 

                    if (["add"].includes(type)) {   
                        let date=moment().format('YYYY-MM-DD HH:mm:ss')
                        // this.$refs['crud'].$refs.dialogForm.$refs.tableForm
                       // console.log(this.$refs.crud)
                        setTimeout(() => {
                            //$refs.dialogForm.$refs.tableForm.$refs.Borrow_date
                        //this.$set(this.$refs.dialogForm.$refs.tableForm,'Borrow_date',date)
                        //this.$refs.crud.$children[0].searchForm[valueKey] = data;  
                        }, 300);       
                        
                        console.log("add")      
                    }else if (["edit", "view"].includes(type)) {          
                        // getNotice(this.form.id).then(res => {            
                        //     this.form = res.data.data;          
                        // });  
                        console.log("edit view")            
                    }        
                    done();
                }, 
            }
    }
</script>

<style lang="scss">
</style>
