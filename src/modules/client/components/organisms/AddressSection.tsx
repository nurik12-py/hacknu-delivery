import { Cascader, Col, Form, Input, Row } from "antd";
import { Button, Divider } from "antd-mobile";
import { useFormikContext } from "formik";
import { OrderData } from "../../types/Document";

export const AddressSection = () => {
  const { values, handleChange, setFieldValue } = useFormikContext<OrderData>();

  return (
    <Form className="p-4" layout="horizontal">
      <Form.Item label="Область / Город / Улица">
        <Cascader
          options={[
            {
              value: "zhejiang",
              label: "Zhejiang",
              children: [
                {
                  value: "hangzhou",
                  label: "Hangzhou",
                },
              ],
            },
          ]}
        />
      </Form.Item>
      <Row gutter={[12, 12]}>
        <Col span={12}>
          <Form.Item label="Номер дома">
            <Input name={"houseNumber"} value={values.houseNumber} />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item label="Квартира">
            <Input name={"flatNumber"} value={values.flatNumber} />
          </Form.Item>
        </Col>
      </Row>

      <Row gutter={[12, 12]}>
        <Col span={12}>
          <Form.Item label="Подъезд">
            <Input name={"entranceNumber"} value={values.entranceNumber} />
          </Form.Item>
        </Col>

        <Col span={12}>
          <Form.Item label="Этаж">
            <Input name={"floorNumber"} value={values.floorNumber} />
          </Form.Item>
        </Col>
      </Row>

      <Row gutter={[12, 12]}>
        <Col span={12}>
          <Form.Item label="Корпус">
            <Input name={"frame"} value={values.frame} />
          </Form.Item>
        </Col>

        <Col span={12}>
          <Form.Item label="Наименование ЖК">
            <Input name={"LCDName"} value={values.LCDName} />
          </Form.Item>
        </Col>
      </Row>

      <Form.Item label="Дополнительная информация">
        <Input name={"extraInfo"} value={values.extraInfo} />
      </Form.Item>

      <Divider />

      <div className="flex gap-3">
        <Button onClick={() => setFieldValue("currentStep", 0)} block>
          Назад
        </Button>
        <Button
          onClick={() => setFieldValue("currentStep", 2)}
          block
          color="primary"
        >
          Далее
        </Button>
      </div>
    </Form>
  );
};
