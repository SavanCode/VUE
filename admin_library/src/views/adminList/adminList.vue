<!-- adminList 样式-->
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
            >
            </avue-crud>
        </base-card>
    </el-col>
</template>

<script>
    import {adminListApi} from '@/api/adminList'  
    import {successMessage} from "@/util/util"; 

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
                            label:'员工编号',
                            prop: 'Admin_id',
                            search: true,
                            cell: true,
                            searchSpan: 12,
                            span: 12,
                            disabled: true,
                            rules: [
                                {
                                    required: false,
                                    message: '请输入ID',
                                    trigger: 'blur'
                                }
                            ]
                        },{
                            label:'姓名',
                            prop: 'Admin_name',
                            searchSpan: 12,
                            search: true,
                            cell: true,
                            rules: [
                            {
                                required: true,
                                message: '请输入姓名',
                                trigger: 'blur'
                            }
                            ]
                        },{
                            label:'账号密码',
                            prop: 'Admin_password',
                            cell: true,
                            rules: [
                            {
                                required: true,
                                message: '请输入员工密码',
                                trigger: 'blur'
                            }
                            ]
                        }]
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
                    adminListApi.list(Object.assign({
                        page: {
                            current: this.page.currentPage,
                            size: this.page.pageSize
                        }
                    }, this.query)).then(res => {
                        const data = res.data;
                        //console.log(data)
                        this.page.currentPage=1;
                        this.page.total = data.total;
                        this.listData = data.records;
                    }).catch(() => {
                    }).finally(() => {
                        this.loading = false;//
                    }); 
                },
                listAdd(row, done, loading) {
                    adminListApi.add(row).then(() => {
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
                        return adminListApi.delete(row.Admin_id);
                    }).then(() => {
                        this.getList(this.page);
                        successMessage();
                    }).catch(() => {
                    });
                },
                listUpdate(row, index, done, loading) {
                    adminListApi.update(row).then(() => {
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
                    this.getList(this.page);
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
                }
            }
    }
</script>

<style lang="scss">
</style>
