<!-- bookList 样式-->
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
    import {bookListApi} from '@/api/book' 
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
                            label: '书本编号',
                            prop: 'Book_id',
                            span: 24,
                            search: true,
                            searchSpan: 12,
                            disabled: true,
                            rules: [
                                {
                                    required: false,
                                    message: '请选择书本编号',
                                    trigger: 'blur'
                                }
                            ]
                        },{
                            label: '书名',
                            prop: 'Book_name',
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
                            label: '作者',
                            prop: 'Author',
                            search: true,
                            searchSpan: 12,
                            span: 12,
                            rules: [
                                {
                                    required: true,
                                    message: '请输入作者',
                                    trigger: 'blur'
                                }
                            ]
                        },{
                            label: '类型',
                            prop: 'Type_id', 
                            span: 12,
                            search: true,
                            searchSpan: 12,
                            type: 'tree',
                            dicData: [],
                            defaultExpandAll: true,
                            rules: [
                                {
                                    //required: true,
                                    message: '请选择书本类型',
                                    trigger: 'cilck'
                                }
                            ]
                        }, {
                            label: '出版社',
                            prop: 'Pub_company',
                            span: 12,
                            rules: [
                                {
                                    required: true,
                                    message: '请输入作者',
                                    trigger: 'blur'
                                }
                            ]
                        },{
                            label: '内容摘要',
                            prop: 'Brief',
                            width: 200,
                            span: 24,
                            type: 'textarea',
                            overHidden: true,
                            rules: [
                                {
                                    max: 380,
                                    message: '最多输入380个字符',
                                    trigger: 'blur'
                                }
                            ]
                        }, {
                            label: '出版时间',
                            prop: 'PUB_DATE',
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
            this.getBookType();
        },
        methods:
            {
                getList(page) {
                    this.loading = true;
                    bookListApi.list(Object.assign({
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
                getBookType() {
                    dictionaryApi.bookTypeDictionary().then(res => {
                        this.findObject(this.listOption.column,'Type_id').dicData = res.data;
                    }).catch(() => {
                    });
                },
                listAdd(row, done, loading) {
                    bookListApi.add(row).then(() => {
                        loading();
                        successMessage();
                        this.list(this.page);
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
                        return bookListApi.delete(row.Book_id);
                    }).then(() => {
                        successMessage();
                        this.getList(this.page);
                    }).catch(() => {
                    });
                },
                listUpdate(row, index, done, loading) {
                    bookListApi.update(row).then(() => {
                        loading();
                        this.getList(this.page);
                        successMessage();
                    }).catch((error) => {
                        console.log(error)
                    }).finally(() => {
                        done();
                    });
                },
                refreshChange() {
                    this.getList(this.page);
                },
                currentChange(page) { 
                    console.log(page)
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
                }
            }
    }
</script>

<style lang="scss">
</style>
