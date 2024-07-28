

# Markdown使用说明

## 标题

> 有几个#代表几级标题
>
> ```markdown
> # 一级标题
> ## 二级标题
> ```

>快捷键：
>
>ctrl+1~6对应各级标题

## 段落

### 换行

>```markdown
>段落一
>段落二
>```

### 分割线

>```markdown
>---
>***
>```

## 文字显示

### 字体

> - 粗体：
>
>   ```markdown
>   **粗体**
>   ```
>
> - 斜体：
>
>   ```markdown
>   *斜体*
>   ```
>
> - 删除线：
>
>   ```markdown
>   ~~删除线~~
>   ```
>
> - 下划线：
>
>   ```markdown
>   <u>下划线</u>
>   ```
>
> - 高亮：
>
>   ```markdown
>   ==高亮==
>   ```

> 快捷键：
>
> - 加粗 Ctrl+B
> - 斜体 Ctrl+I
> - 删除线 Ctrl+U
> - 删除线 Shift+Alt+5

### 上下标

> ```markdown
> x^2^
> H~2~O
> ```

## 列表

### 无序列表

> ```markdown
> 加空格
> - 
> + 
> * 
> ```

> 快捷键：Ctrl+Shift+]
>
> 按tab进行多级分类

### 有序列表

> ```markdown
> 数字.+空格
> 1. 
> 2. 
> ```

> 快捷键：Ctrl+Shift+[

### 任务清单

> ```markdown
> - [ ] 背单词
> ```
>
> - [ ] 背单词

## 区块显示

> ```markdown
> >+Enter
> ```
>
> Ctrl+Shift+Q
>
> 取消是按两下Enter
>
> 可以嵌套，>>

## 代码显示

#### 代码行

> `int a=0;`
>
> Ctrl+Shift+`

#### 代码块

> ```
> code
> ```
>
> Ctrl+Shift+K

## 链接

> ```markdown
> www.baidu.com
> [百度一下](https://www.baidu.com)
> ```
>
> Ctrl+K

## 脚注

>```markdown
>[^脚注]:解释说明
>```

## 图片插入

>```markdown
>![](图片路径)
>```

## 表格

> ```markdown
> |      |      |      |
> | ---- | ---- | ---- |
> |      |      |      |
> |      |      |      |
> |      |      |      |
> ```
>
> |      |      |      |
> | ---- | ---- | ---- |
> |      |      |      |
> |      |      |      |
> |      |      |      |
>
> Ctrl+T
>
> 下方插入行：Ctrl+Enter
>
> 删除当前行： Ctrl+ Shift+Backspace
>
> 要添加表，请使用三个或多个连字符（`---`）创建每列的标题，并使用管道（`|`）分隔每列。您可以选择在表的任一端添加管道。
>
> ```text
> | Syntax      | Description |
> | ----------- | ----------- |
> | Header      | Title       |
> | Paragraph   | Text        |
> ```

### 对齐

> 在标题行中的连字符的左侧，右侧或两侧添加冒号（`:`），将列中的文本对齐到左侧，右侧或中心。
>
> ```markdown
> | Syntax      | Description | Test Text     |
> | :---        |    :----:   |          ---: |
> | Header      | Title       | Here's this   |
> | Paragraph   | Text        | And more      |
> ```
>
> 

## 流程图

>````
><!-- 此处的内容会被渲染成 mermaid 图形 -->
>```mermaid
>```
>````

> 基本的流程图包含：流程图布局方向、几何图形和连接线三个部分组成。

### 横向

>````
>```mermaid
>graph LR
>    开始 --> 结束
>```
>````

> ```mermaid
> graph LR
>     开始 --> 结束
> ```

### 竖向

>| 标志 |         方向          |
>| :--: | :-------------------: |
>|  TB  | top bottom - 从上到下 |
>|  BT  | bottom top - 从下到上 |
>|  RL  | right left - 从右到左 |



## 表情符号

> ```markdown
> :happy:
> ```
>
> :happy:

## 数学公式

### 公式的插入

#### 公式行

> ```markdown
> $公式$(Latex)
> $S=\pi r^2$
> ```
>
> $S=\pi r^2$

#### 公式块

> ```markdown
> $$
> 公式
> $$
> ```

## 支持的HTML元素

### 文本居中

> ```
> <center>内容</center>
> ```

### 快捷键显示

> ```
> <kbd>内容</kbd>
> ```

### 加粗

> ```
> <b></b>
> ```

### 倾斜

> ```
> <i></i>
> ```

### 上下标

> ```
> H<sup>1</sup>
> H<sub>1</sub>
> ```

> H<sup>1</sup>
> H<sub>1</sub>

