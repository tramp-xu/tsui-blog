import React from 'react';
import EditableContext from './context';
import {Form} from 'antd';

const EditableRow = ({form, ...props}) => {
  return (
    <EditableContext.Provider value={form}>
      <tr {...props}></tr>
    </EditableContext.Provider>
  );
};

const EditableFormRow = Form.create()(EditableRow);

export default EditableFormRow;