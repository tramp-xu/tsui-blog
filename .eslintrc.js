const OFF = 0;
const WARN = 1;
const ERROR = 2;
module.exports = {
  "extends": ["react-app"],
  "parser": "babel-eslint",
  "env": {
    "browser": true,
    "node": true,
    "mocha": true
  },
  "plugins": [
    "react"
  ],
  "rules": {
    "indent": [WARN, 2],
    "quotes": [ERROR, "single"], //单引号
    "no-console": OFF, //不禁用console
    "no-debugger": ERROR, //禁用debugger
    "no-var": OFF, //对var警告
    "semi": ERROR, //不强制使用分号
    "no-irregular-whitespace": OFF, //不规则的空白不允许
    "no-trailing-spaces": WARN, //一行结束后面有空格就发出警告
    "eol-last": OFF, //文件以单一的换行符结束
    "no-unused-vars": [ERROR, {"vars": "all", "args": "after-used"}], //不能有声明后未被使用的变量或参数
    "no-underscore-dangle": OFF, //标识符不能以_开头或结尾
    "no-alert": ERROR, //禁止使用alert confirm prompt
    "no-lone-blocks": OFF, //禁止不必要的嵌套块
    "no-class-assign": ERROR, //禁止给类赋值
    "no-cond-assign": ERROR, //禁止在条件表达式中使用赋值语句
    "no-const-assign": ERROR, //禁止修改const声明的变量
    "no-delete-var": ERROR, //不能对var声明的变量使用delete操作符
    "no-dupe-keys": ERROR, //在创建对象字面量时不允许键重复
    "no-duplicate-case": ERROR, //switch中的case标签不能重复
    "no-dupe-args": ERROR, //函数参数不能重复
    "no-empty": ERROR, //块语句中的内容不能为空
    "no-func-assign": ERROR, //禁止重复的函数声明
    "no-invalid-this": OFF, //禁止无效的this，只能用在构造器，类，对象字面量
    "no-redeclare": ERROR, //禁止重复声明变量
    "no-spaced-func": ERROR, //函数调用时 函数名与()之间不能有空格
    "no-this-before-super": OFF, //在调用super()之前不能使用this或super
    "no-undef": ERROR, //不能有未定义的变量
    "no-use-before-define": ERROR, //未定义前不能使用
    "camelcase": OFF, //强制驼峰法命名
    "jsx-quotes": [ERROR, "prefer-double"], //强制在JSX属性（jsx-quotes）中一致使用双引号
    "react/display-name": OFF, //防止在React组件定义中丢失displayName
    "react/forbid-prop-types": [ERROR, {"forbid": ["any"]}], //禁止某些propTypes
    "react/jsx-boolean-value": ERROR, //在JSX中强制布尔属性符号
    "react/jsx-closing-bracket-location": WARN, //在JSX中验证右括号位置
    "react/jsx-curly-spacing": [ERROR, {"when": "never", "children": true}], //在JSX属性和表达式中加强或禁止大括号内的空格。
    "react/jsx-indent-props": [ERROR, 2], //验证JSX中的props缩进
    "react/jsx-key": ERROR, //在数组或迭代器中验证JSX具有key属性
    "react/jsx-max-props-per-line": [WARN, {"maximum": 1}], // 限制JSX中单行上的props的最大数量
    "react/jsx-no-bind": OFF, //JSX中不允许使用箭头函数和bind
    "react/jsx-no-duplicate-props": ERROR, //防止在JSX中重复的props
    "react/jsx-no-literals": OFF, //防止使用未包装的JSX字符串
    "react/jsx-no-undef": WARN, //在JSX中禁止未声明的变量
    "react/jsx-pascal-case": OFF, //为用户定义的JSX组件强制使用PascalCase
    "react/jsx-sort-props": ERROR, //强化props按字母排序
    "react/jsx-uses-react": WARN, //防止反应被错误地标记为未使用
    "react/jsx-uses-vars": ERROR, //防止在JSX中使用的变量被错误地标记为未使用
    "react/no-danger": OFF, //防止使用危险的JSX属性
    "react/no-did-mount-set-state": OFF, //防止在componentDidMount中使用setState
    "react/no-did-update-set-state": WARN, //防止在componentDidUpdate中使用setState
    "react/no-direct-mutation-state": ERROR, //防止this.state的直接变异
    "react/no-multi-comp": ERROR, //防止每个文件有多个组件定义
    "react/no-set-state": OFF, //防止使用setState
    "react/no-unknown-property": ERROR, //防止使用未知的DOM属性
    "react/prefer-es6-class": ERROR, //为React组件强制执行ES5或ES6类
    "react/prop-types": OFF, //防止在React组件定义中丢失props验证
    "react/react-in-jsx-scope": ERROR, //使用JSX时防止丢失React
    "react/self-closing-comp": OFF, //防止没有children的组件的额外结束标签
    "react/sort-comp": ERROR, //强制组件方法顺序
    "no-extra-boolean-cast": OFF, //禁止不必要的bool转换
    "react/no-array-index-key": OFF, //防止在数组中遍历中使用数组key做索引
    "react/no-deprecated": WARN, //不使用弃用的方法
    "react/jsx-equals-spacing": ERROR, //在JSX属性中强制或禁止等号周围的空格
    "no-unreachable": WARN, //不能有无法执行的代码
    "comma-dangle": ERROR, //对象字面量项尾不能有逗号
    "no-mixed-spaces-and-tabs": OFF, //禁止混用tab和空格
    "prefer-arrow-callback": OFF, //比较喜欢箭头回调
    "arrow-parens": OFF, //箭头函数用小括号括起来
    "arrow-spacing": OFF //=>的前/后括号
  },
  "settings": {
    "import/ignore": [
      "node_modules"
    ]
  }
};