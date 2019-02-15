import React from 'react';
import { Form, Input, InputNumber } from 'antd';
import EditableContext from './context';

const FormItem = Form.Item;

class EditableCell extends React.Component {
  getInput = () => {
    if (this.props.inputType === 'number') {
      return <InputNumber></InputNumber>;
    }
    return <Input></Input>;
  }

  render () {
    const {
      editing,
      dataIndex,
      title,
      inputType,
      record,
      ...restProps
    } = this.props;
    return (
      <EditableContext.Consumer>
        {
          (form) => {
            const {getFieldDecorator} = form;
            return (
              <td {...restProps}>
                {
                  editing ? (
                    <FormItem style={{margin: 0}}>
                      {getFieldDecorator(dataIndex, {
                        rules: [{
                          required: true,
                          message: `Please Input ${title}`
                        }],
                        initialValue: record[dataIndex]
                      })(this.getInput())}
                    </FormItem>
                  ) : restProps.children
                }
              </td>
            );
          }
        }
      </EditableContext.Consumer>
    );
  }
}


export default EditableCell;
