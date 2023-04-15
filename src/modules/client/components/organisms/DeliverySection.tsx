import { Form } from "antd";
import { Button, CheckList } from "antd-mobile";
import { useFormikContext } from "formik";
import { OrderData } from "../../types/Document";

export const DeliverySection = () => {
  const { values, handleChange, setFieldValue } = useFormikContext<OrderData>();

  return (
    <div className=" bg-slate-50 border-2 border-dashed border-slate-200 m-4 rounded p-4">
      <Form>
        <Form.Item label="Служба доставки">
          <CheckList defaultValue={["B"]}>
            <CheckList.Item value="A">Kaspi Delivery</CheckList.Item>
            <CheckList.Item value="B">Express</CheckList.Item>
            <CheckList.Item value="C">Slow</CheckList.Item>
          </CheckList>
        </Form.Item>
      </Form>
      <div className="flex gap-3">
        <Button onClick={() => setFieldValue("currentStep", 2)} block>
          Назад
        </Button>
        <Button
          onClick={() => setFieldValue("currentStep", 4)}
          block
          color="primary"
        >
          Далее
        </Button>
      </div>
    </div>
  );
};
