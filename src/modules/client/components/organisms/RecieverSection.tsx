import { Input, Form } from "antd";
import { Button, Selector } from "antd-mobile";
import { useFormikContext } from "formik";
import { useState } from "react";
import { OrderData } from "../../types/Document";

const RadioMode = () => {
  const [value, setValue] = useState("0");
  return (
    <Selector
      options={[
        {
          label: "Я",
          value: "0",
        },
        {
          label: "Доверенное лицо",
          value: "1",
        },
      ]}
      columns={2}
      value={[value]}
      onChange={(v) => {
        if (v.length) {
          setValue(v[0]);
        }
      }}
    />
  );
};

export const RecieverSection = () => {
  const { values, handleChange, setFieldValue } = useFormikContext<OrderData>();

  return (
    <div className=" bg-slate-50 border-2 border-dashed border-slate-200 m-4 rounded p-4">
      <Form layout="horizontal">
        <Form.Item label="Получатель">
          <RadioMode />
        </Form.Item>

        <Form.Item label="ИИН получателя">
          <Input value={values.recieverIIN} />
        </Form.Item>

        <Form.Item label="Имя получателя">
          <Input disabled value={values.recieverFirstName} />
        </Form.Item>

        <Form.Item label="Фалилия получателя">
          <Input disabled value={values.recieverLastName} />
        </Form.Item>
      </Form>
      <div className="flex gap-3">
        <Button onClick={() => setFieldValue("currentStep", 1)} block>
          Назад
        </Button>
        <Button
          onClick={() => setFieldValue("currentStep", 3)}
          block
          color="primary"
        >
          Далее
        </Button>
      </div>
    </div>
  );
};
