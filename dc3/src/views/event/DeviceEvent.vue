<template>
    <el-col :span="24">
        <base-card>
            <avue-crud :option="listOption"
                       :data="listData"
                       :page="page"
                       :table-loading="loading"
                       ref="crud"
                       v-model="listForm"
                       @on-load="list"
                       @search-reset="searchReset"
                       @date-change="dateChange"
                       @search-change="searchChange"
                       @refresh-change="refreshChange"
                       @size-change="sizeChange"
                       @current-change="currentChange"
            >
                <template slot="type" slot-scope="scope">
                    <el-tag v-if="scope.row.type==='STATUS'" type="success" effect="plain">状态</el-tag>
                    <el-tag v-else-if="scope.row.type==='LIMIT'" type="warning" effect="plain">上下限</el-tag>
                    <el-tag v-else-if="scope.row.type==='ERROR'" type="danger" effect="plain">错误</el-tag>
                    <el-tag v-else type="info" effect="plain">未知</el-tag>
                </template>
                <template slot="confirm" slot-scope="scope">
                    <el-tag v-if="scope.row.confirm===true" type="success" effect="plain">已确认</el-tag>
                    <el-tag v-else type="info" effect="plain">未确认</el-tag>
                </template>
            </avue-crud>
        </base-card>
    </el-col>
</template>

<script>
    import {dictionaryApi} from '@/api/manager'
    import {deviceEventApi} from '@/api/data'

    export default {
        data() {
            return {
                query: {},
                listForm: {},
                listData: [],
                listOption: {
                    tip: false,
                    index: true,
                    stripe: true,
                    border: true,
                    dateBtn: true,
                    menu: false,
                    addBtn: false,
                    delBtn: false,
                    editBtn: false,
                    height: 664,
                    align: 'center',
                    defaultExpandAll: true,
                    column: [
                        {
                            label: '所属设备',
                            prop: 'deviceId',
                            span: 12,
                            search: true,
                            searchSpan: 12,
                            type: 'tree',
                            dicData: [],
                            defaultExpandAll: true,
                            rules: [
                                {
                                    required: true,
                                    message: '请选择所属设备',
                                    trigger: 'click'
                                }
                            ]
                        }, {
                            label: '所属位号',
                            prop: 'pointId',
                            span: 12,
                            search: true,
                            searchSpan: 12,
                            type: 'tree',
                            dicData: [],
                            defaultExpandAll: true,
                            rules: [
                                {
                                    required: true,
                                    message: '请选择所属位号',
                                    trigger: 'click'
                                }
                            ]
                        }, {
                            label: '类型',
                            prop: 'type',
                            width: 100,
                            span: 12,
                            disabled: true,
                            display: false,
                            slot: true,
                            type: 'select',
                            value: 'ERROR',
                            dicData: [
                                {
                                    label: '状态',
                                    value: 'STATUS'
                                }, {
                                    label: '上下限',
                                    value: 'LIMIT'
                                }, {
                                    label: '错误',
                                    value: 'ERROR'
                                }
                            ]
                        }, {
                            label: '内容',
                            prop: 'content',
                            span: 12,
                            width: 500,
                            type: 'textarea',
                            overHidden: true
                        }, {
                            label: '事件日期',
                            prop: 'originTime',
                            width: 180,
                            span: 10,
                            disabled: true,
                            type: 'date',
                            format: 'yyyy-MM-dd HH:mm:ss.SSS'
                        }, {
                            label: '确认',
                            prop: 'confirm',
                            width: 100,
                            span: 12,
                            disabled: true,
                            display: false,
                            slot: true,
                            type: 'select',
                            value: false,
                            dicData: [
                                {
                                    label: '未确定',
                                    value: false
                                }, {
                                    label: '已确认',
                                    value: true
                                }
                            ]
                        }, {
                            label: '确认日期',
                            prop: 'confirmTime',
                            width: 180,
                            span: 10,
                            disabled: true,
                            type: 'date',
                            format: 'yyyy-MM-dd HH:mm:ss.SSS'
                        }
                    ]
                },
                loading: true,
                page: {
                    total: 0,
                    pageSize: 20,
                    currentPage: 1,
                    startTime: 0,
                    endTime: 0
                }
            }
        },
        created() {
            this.device();
            this.point();
        },
        methods:
            {
                list(page) {
                    this.loading = true;
                    deviceEventApi.list(Object.assign({
                        page: {
                            current: page.currentPage,
                            size: page.pageSize,
                            startTime: page.startTime,
                            endTime: page.endTime
                        }
                    }, this.query)).then(res => {
                        const data = res.data;
                        this.page.total = data.total;
                        this.listData = data.records;
                    }).catch(() => {
                    }).finally(() => {
                        this.loading = false;
                    });
                },
                device() {
                    dictionaryApi.deviceDictionary('group').then(res => {
                        this.findObject(this.listOption.column, 'deviceId').dicData = res.data;
                    }).catch(() => {
                    });
                },
                point() {
                    dictionaryApi.pointDictionary('profile').then(res => {
                        this.findObject(this.listOption.column, 'pointId').dicData = res.data;
                    }).catch(() => {
                    });
                },
                dateChange(date) {
                    if (date != null && date.length === 2) {
                        this.page.startTime = new Date(date[0]).getTime();
                        this.page.endTime = new Date(date[1]).getTime();
                    }
                    this.list(this.page);
                },
                refreshChange() {
                    this.list(this.page);
                },
                currentChange(page) {
                    this.page.currentPage = page;
                },
                sizeChange(pageSize) {
                    this.page.pageSize = pageSize;
                },
                searchChange(params, done) {
                    this.query = params;
                    this.list(this.page);
                    done();
                },
                searchReset() {
                    this.query = {};
                    this.list(this.page);
                }
            }
    }
</script>

<style lang="scss">
</style>
