---
title: Simple Usage
order: 1
---

本 Demo 演示一行文字的用法。

```jsx
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import CheckBoxEnum from 'checkboxenum';

class App extends Component {
  render() {
    const dataSource = [
      {
        value: 'apple',
        label: 'Apple'
      }, {
        value: 'pear',
        label: 'Pear'
      }, {
        value: 'orange',
        label: 'Orange'
      }
    ]
    return (
      <div>
        <CheckBoxEnum 
          dataSource={dataSource}
          value={['apple', 'pear']}
        />
      </div>
    );
  }
}

ReactDOM.render((
  <App />
), mountNode);
```
