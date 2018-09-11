import React from 'react'
import { Table } from 'antd';

class BaseTable extends React.Component{
    constructor(){
        super();
    }

    //点击列表行
    onRowClick(record, index){
        let type = this.props.rowSelection.type;
        let selectedRowKeys = this.props.selectedRowKeys;
        let selectedItems = this.props.selectedItems;
        let rowKey = this.props.rowKey;
        let i = selectedRowKeys.indexOf(record[rowKey]);
        //多选列表
        if(type === 'checkbox'){
            //未选择
            if(i  == -1){
                selectedRowKeys.push(record[rowKey]);
                selectedItems.push(record);
            }
            //已选择->取消
            else{
                selectedRowKeys.splice(i, 1);
                selectedItems.splice(i, 1);
            }
        }
        //单选列表
        else{
            selectedRowKeys = [record[rowKey]];
            selectedItems = [record];
        }
        this.props.onSelectedRecords(selectedRowKeys, selectedItems);
    }

    render(){
        const _rowSelection = this.props.rowSelection || {}
        const rowSelection = {
            ..._rowSelection,
            selectedRowKeys: this.props.selectedRowKeys
        }
        return (
            <Table
                {...this.props}
                rowSelection={rowSelection}
                onRow={(record, index)=>{
                    return {
                        onClick: ()=>{
                            if(!rowSelection)
                                return;
                            this.onRowClick(record, index);                                
                        }
                    };
                }}/>
        )
    }
}

export default BaseTable;