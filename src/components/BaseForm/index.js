import React from 'react'
import { Form, Input, Select, Checkbox, DatePicker } from 'antd';


const BaseForm = ({fields, getFieldDecorator, layout="horizontal"})=>{
    const components = [];
        if(fields && fields.length > 0){
            fields.forEach((item)=>{
                let label = item.label || '';
                let field = item.field;
                let initialValue = item.initialValue || '';
                let placeHolder = item.placeHolder;
                let width = item.width;
                let height = item.height || '40px';
                let componentType = item.type;
                if(componentType == 'INPUT' || componentType == 'INPUTPWD'){
                    const INPUT = (
                        <Form.Item label={label} key={field}>
                            {getFieldDecorator([field], {
                                initialValue: initialValue, 
                                rules: item.rules || []
                            })(
                                <Input type={componentType == 'INPUTPWD' ? 'password': 'text'} style={{width: width, height: height}} placeHolder={placeHolder}/>
                            )}
                        </Form.Item>
                    );
                    components.push(INPUT);
                }else if(componentType == 'SELECT'){
                    const SELECT = (
                        <Form.Item label={label} key={field}>
                            {getFieldDecorator([field], {
                                initialValue: initialValue
                            })(
                                <Select style={{width: width}} placeholder={placeHolder}>
                                    {item.list && item.list.map(item=>{
                                        return (<Select.Option key={item.id} value={item.id}>{item.name}</Select.Option>)
                                    })}
                                </Select>
                            )}
                        </Form.Item>
                    )
                    components.push(SELECT);
                }else if(componentType == 'CHECKBOX'){
                    const CHECKBOX = (
                        <Form.Item key={field}>
                            {getFieldDecorator([field], {
                                valuePropName: 'checked',
                                initialValue: initialValue //true or false
                            })(
                                <Checkbox style={{width: width}} checked={item.checked}>{label}</Checkbox>
                            )}
                        </Form.Item>
                    )
                    components.push(CHECKBOX);
                }else if(componentType == 'DATEPICKER'){
                    const DATEPICKER = (
                        <Form.Item key={field}>
                            {getFieldDecorator([field], {
                                initialValue: initialValue
                            })(
                                <DatePicker format={item.format || "YYYY-MM-DD"} mode="date" placeholder={placeHolder}/>
                            )}
                        </Form.Item>
                    )
                    components.push(DATEPICKER);
                }else{
                    components.push(item);
                }
            });
        }
        return (
            <Form layout={layout}>
                {components}
            </Form>
        ) 
}

export default BaseForm;