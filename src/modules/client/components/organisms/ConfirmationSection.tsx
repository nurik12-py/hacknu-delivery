import { Checkbox, Form, Space } from "antd";
import { Button } from "antd-mobile";
import { useFormikContext } from "formik";
import { OrderData } from "../../types/Document";

export const ConfirmationSection = () => {
  const { values, handleChange, setFieldValue } = useFormikContext<OrderData>();

  return (
    <div className=" bg-slate-50 border-2 border-dashed border-slate-200 m-4 rounded p-4">
      <Form>
        <Form.Item>
          <Checkbox.Group defaultValue={["orange", "banana"]}>
            <Space direction="vertical">
              <Checkbox value="apple">
                Я принимаю условия публичного договора-оферты
              </Checkbox>
              <Checkbox value="orange">
                Я ознакомлен и согласен с условиями политики конфиденциальности
                и персональных данных
              </Checkbox>
            </Space>
          </Checkbox.Group>
        </Form.Item>
      </Form>
      <div className="flex flex-col gap-3">
        <Button block color="primary">
          Подтвердить
        </Button>
        <Button block onClick={() => setFieldValue("currentStep", 3)}>
          Назад
        </Button>
      </div>
    </div>
  );
};
