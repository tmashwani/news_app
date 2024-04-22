import React from "react";
import { Button, Card, Input, Table, Spin, Radio, Checkbox } from "antd";
const { TextArea } = Input;

export const ButtonComponent = ({
  children,
  onClick,
  type,
  className,
  disabled,
}) => (
  <Button
    onClick={onClick}
    type={type}
    className={className}
    disabled={disabled}
  >
    {children}
  </Button>
);

export const CardComponent = ({ size, title, className, children }) => (
  <Card size={size} title={title} className={className}>
    {children}
  </Card>
);

export const InputComponent = ({
  allowClear,
  type,
//   length,
  placeholder,
  className,
  onChange,
  value,
  suffix,
  onKeyPress,
  autoFocus,
}) => (
  <Input
    allowClear={allowClear}
    type={type}
    // maxlength={length}
    placeholder={placeholder}
    className={className}
    onChange={onChange}
    value={value}
    suffix={suffix}
    onKeyPress={onKeyPress}
    autoFocus={autoFocus}
  />
);

export const SpinComponent = ({ spinning, tip }) => (
  <Spin spinning={spinning} tip={tip} />
);

export const TableComponent = ({
  className,
  dataSource,
  columns,
  bordered,
}) => (
  <Table
    className={className}
    dataSource={dataSource}
    columns={columns}
    pagination={false}
    bordered={bordered}
  />
);

export const TextAreaComponent = ({ onChange, rows }) => (
  <TextArea onChange={onChange} rows={rows} className="basic-textarea" />
);

export const RadioComponent = ({ onChange, text }) => (
  <Radio onChange={onChange}>{text}</Radio>
);

export const CheckboxComponent = ({
  disabled,
  value,
  checked,
  onCheckAllChange,
  children,
}) => (
  <Checkbox
    disabled={disabled}
    value={value}
    checked={checked}
    onChange={onCheckAllChange}
  >
    {children}
  </Checkbox>
);

export const CheckboxGroupComponent = ({
  value,
  className,
  onChangeCheckboxGroup,
  children,
}) => (
  <Checkbox.Group
    value={value}
    className={className}
    onChange={onChangeCheckboxGroup}
  >
    {children}
  </Checkbox.Group>
);

// export const ListComponent = ({
//   className,
//   size,
//   header,
//   bordered,
//   dataSource,
//   filterImages,
//   oldDocImageData,
// }) => {
//   const filterImageData = (id) => {
//     const [filterData] = oldDocImageData.filter((element) => element.id === id);
//     return filterData?.image?.length > 0;
//   };

//   const getImagesLength = (id) => {
//     const [filterData] = oldDocImageData.filter((element) => element.id === id);
//     return filterData?.image?.length > 0 ? filterData.image.length : null;
//   };

//   return (
//     <List
//       className={className}
//       size={size}
//       header={header}
//       bordered={bordered}
//       dataSource={dataSource}
//       renderItem={(item) => (
//         <List.Item
//           className={
//             filterImageData(item.id)
//               ? "old-doc-list-item-blue"
//               : "old-doc-list-item-grey"
//           }
//           onClick={() => filterImages(item.id)}
//           key={item.id}
//         >
//           <Row style={{ width: "100%" }}>
//             <Col span={2}>
//               <span className="scan-tabs-icon"></span>
//             </Col>
//             <Col span={21}>{item.name}</Col>
//             <Col span={1}>
//               <span className="scan-tabs-length">
//                 {getImagesLength(item.id)}
//               </span>
//             </Col>
//           </Row>
//         </List.Item>
//       )}
//     />
//   );
// };
