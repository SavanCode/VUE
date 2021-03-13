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
                <template slot="isActive" slot-scope="scope">
                    <el-tag v-if="scope.row.isActive==='ONLINE'" type="success" effect="plain">在线</el-tag>
                    <el-tag v-else-if="scope.row.isActive==='OFFLINE'"  type="info" effect="plain">离线</el-tag>
                    <el-tag v-else-if="scope.row.isActive==='DELETED'" type="danger" effect="plain">注销</el-tag>
                    <el-tag v-else type="warning" effect="plain">未知</el-tag>
                </template>
            </avue-crud>
        </base-card>
    </el-col>
</template>

<script>
    import {studentListApi} from '@/api/student' 
    import {dictionaryApi} from '@/api/dictionary'
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
                            label: '用户编号',
                            prop: 'User_id',
                            span: 24,
                            searchSpan: 12,
                            disabled: true,
                            rules: [
                                {
                                    required: false,
                                    message: '请输入书本编号',
                                    trigger: 'blur'
                                }
                            ]
                        },{
                            label: '用户姓名',
                            prop: 'Username',
                            span: 12,
                            search: true,
                            searchSpan: 12,
                            //type: 'tree',
                            //dicData: [],
                           // defaultExpandAll: true,
                            rules: [
                                {
                                    required: true,
                                    message: '请选择属性',
                                    trigger: 'blur'//click
                                }
                            ]
                        }, {
                            label: '密码',
                            prop: 'Password',
                            span: 12,
                            rules: [
                                {
                                    required: true,
                                    message: '请输入密码',
                                    trigger: 'blur'
                                }
                            ]
                        },{
                            label: '性别',
                            prop: 'Sex',
                            search: true,
                            span: 12,
                            type: 'tree',
                            dicData: [],
                           defaultExpandAll: true,
                            rules: [
                                {
                                    required: false,
                                    message: '请选择性别',
                                    trigger: 'cilck'
                                }
                            ]
                        }, {
                            label: '电话号码',
                            prop: 'Tele',
                            span: 12,
                            rules: [
                                {
                                    required: true,
                                    message: '请输入电话号码',
                                    trigger: 'blur'
                                }
                            ]
                        },{
                            label: '邮箱地址',
                            prop: 'Email',
                            span: 12, 
                            rules: [
                                {
                                    required: true,
                                    message: '请输入邮箱',
                                    trigger: 'blur'
                                }, {
                                    pattern: /^([a-zA-Z0-9_\\.\\-])+\\@(([a-zA-Z0-9\\-])+\\.)+([a-zA-Z0-9]{2,4})+$/,
                                    message: '请输入 正确格式的邮箱'
                                }
                            ]
                        },{
                            label: '借书数量',
                            prop: 'Lended_num',
                            span: 12, 
                            disabled:true,
                            rules: [
                                {
                                    required: false,
                                    message: '最多输入借书数量',
                                    trigger: 'blur'
                                }
                            ]
                        },{
                            label: '余额',
                            prop: 'Balance',
                            span: 12, 
                            rules: [
                                {
                                    required: true,
                                    message: '最多输入余额',
                                    trigger: 'blur'
                                }
                            ]
                        },{
                            label: '账户状态',
                            prop: 'isActive',
                            span: 12,
                            search: true,
                            searchSpan: 12,
                            type: 'tree',
                            dicData: [],
                            disabled: false,
                            slot: true,
                           defaultExpandAll: true,
                            rules: [
                                {
                                    required: false,
                                    message: '请选择账户状态',
                                    trigger: 'click'
                                }
                            ]
                        },{
                            label: '逾期记录',
                            prop: 'Penalty_record',
                            span: 12, 
                            disabled:true,
                            rules: [
                                {
                                    required: false,
                                    message: '最多输入余额',
                                    trigger: 'blur'
                                }
                            ]
                        }, {
                            label: '创建时间',
                            prop: 'Create_date',
                            width: 155,
                            span: 12,
                            disabled: true,
                            type: 'date',
                            format: 'yyyy-MM-dd HH:mm:ss',
                            valueFormat: 'yyyy-MM-dd HH:mm:ss'
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
            this.getSex();
            this.getIsActive();
        },
        methods:
            {
                getList(page) {
                    this.loading = true;
                    studentListApi.list(Object.assign({
                        page: {
                            current: this.page.currentPage,
                            size: this.page.pageSize
                        }
                    }, this.query)).then(res => {
                        const data = res.data;
                        //console.log(data)
                        this.page.total = data.total;
                        this.listData = data.records;
                        this.listData.map(item => {
                          item.Sex= item.Sex? "男":"女";
                          item.isActive = item.isActive ===0 ?  "ONLINE": item.isActive===1 ? "OFFLINE":"DELETED" 
                        })
                    }).catch(() => {
                    }).finally(() => {
                        this.loading = false;
                    }); 
                },
                getSex() {
                    dictionaryApi.sexDictionary().then(res => {
                        this.findObject(this.listOption.column,'Sex').dicData = res.data;
                    }).catch(() => {
                    });
                },
                getIsActive() {
                    dictionaryApi.isActiveDictionary().then(res => {
                        this.findObject(this.listOption.column,'isActive').dicData = res.data;
                    }).catch(() => {
                    });
                },
                listAdd(row, done, loading) {
                    studentListApi.add(row).then(() => {
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
                        //console.log(row.Book_id)
                        return studentListApi.delete(row.User_id);
                    }).then(() => {
                        this.getList(this.page);
                        successMessage();
                    }).catch(() => {
                    });
                },
                listUpdate(row, index, done, loading) {
                    studentListApi.update(row).then(() => {
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
