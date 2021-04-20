import * as React from 'react';
import { useState, useEffect } from 'react';
import { Checkbox } from '@alifd/next';

const { Group: CheckboxGroup } = Checkbox;

interface IObj {
  label: string;
  value: string | number;
}

type A = string[] | string | number;

interface Iprops {
  dataSource?: Array<string | IObj>;
  value?: A;
  defaultValue?: A;
  onChange?: () => {};
};

const CheckBoxEnum: React.FC<Iprops> = (props: Iprops) => {
  const { value, defaultValue, dataSource, onChange, ...rest } = props;
  const [arrayData, setArrayData] = useState(dataSource);
  const [v, setV] = useState(value || defaultValue);

  useEffect(() => {
    dataSource && setArrayData(dataSource)
  }, [])
  return (
    <CheckboxGroup
      value={v}
      defaultValue={defaultValue}
      dataSource={arrayData}
      onChange={(arr) => {
        setV(arr);
        onChange;
      }}
      {...rest}
    />
  );
}
export default CheckBoxEnum