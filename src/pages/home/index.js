import React from 'react'
import { Card, Table, message } from 'antd';
import BaseTable from '../../components/BaseTable'
import axios from '../../utils/axios'
import {pagination} from '../../utils/utils'

export default class Home extends React.Component{

    state={
        selectedRowKeys: [],
        selectedItems: [],
        dataSource: []
    }
    params={
        page: 1
    }

    componentWillMount(){
        this.requestList();
    }

    requestList=()=>{
        let data = {
            page: this.params.page
        }
        axios.doRequest("/table/list", data).then(response=>{
            this.setState({
                dataSource: response.list,
                pagination: pagination(response.page, response.pageSize, response.totalCount, (current)=>{
                    this.params.page = current;
                    this.requestList();
                })
            })
        }).catch((error)=>{
        })
    }

    selectedRecords=(selectedRowKeys, selectedItems)=>{
        this.setState({
            selectedRowKeys,
            selectedItems
        })
        message.info(JSON.stringify(selectedItems));
    }

    render(){
        const columns = [{
            title: "编号",
            dataIndex: "id",
            width: 200
        },{
            title: "姓名",
            dataIndex: "name",
            width: 200
        },{
            title: "年龄",
            dataIndex: "age",
            width: 200
        },{
            title: "地址",
            dataIndex: "address"
        }]

        return (
            <div>
                <Card title="表格封装" style={{marginTop: 20}}>
                    <BaseTable
                        columns={columns}
                        rowSelection={{type: 'checkbox'}}
                        dataSource={this.state.dataSource}
                        selectedRowKeys={this.state.selectedRowKeys}
                        selectedItems={this.state.selectedItems}
                        rowKey="id"
                        bordered
                        pagination={this.state.pagination}
                        onSelectedRecords={(selectedRowKeys, selectedItems)=>{
                            return this.selectedRecords(selectedRowKeys, selectedItems)
                        }}
                        />
                </Card>
            </div>
        )
    }
}