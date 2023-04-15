import { Descriptions, notification } from "antd";
import { Button, Divider } from "antd-mobile";
import { useFormikContext } from "formik";
import { OrderData } from "../../types/Document";
import { useQuery } from "react-query";
import documentAPI from "../../api/documentAPI";
import { useSearchParams } from "react-router-dom";
import userAPI from "../../api/userAPI";

export const InfoSection = () => {
  const { values, handleChange, setFieldValue } = useFormikContext<OrderData>();
  const [searchParams, setSearchParams] = useSearchParams();

  const orderId = searchParams.get("orderId") || "";
  const iin = searchParams.get("iin") || "";

  useQuery(
    "iin",
    () => documentAPI.getDocument(orderId, iin).then((res) => res.data.data),
    {
      onSuccess: (data) => {
        setFieldValue("requestId", data.requestId);
        setFieldValue("serviceName", data.serviceType.nameRu);
        setFieldValue("organizationName", data.organization.nameRu);
        setFieldValue("requestIIN", iin);
      },
      onError: (err) => {
        notification.error({
          message: "Ошибка",
          description: "Неверный ИИН или номер заказа",
        });
      },
    }
  );

  useQuery(
    ["user", values.requestIIN],
    () => userAPI.getUserByIIN(values.requestIIN).then((res) => res.data),
    {
      onSuccess: (data) => {
        setFieldValue("requestFirstName", data.firstName);
        setFieldValue("requestLastName", data.lastName);
      },
      onError: (err) => {
        notification.error({
          message: "Ошибка",
          description: "Неверный ИИН или номер заказа",
        });
      },
      enabled: !!values.requestIIN,
    }
  );

  return (
    <div className="bg-slate-50 border-2 border-dashed border-slate-200 m-4 rounded p-4">
      <Descriptions
        size="small"
        title={<p className="text-center">Данные о документе</p>}
        layout="vertical"
      >
        <Descriptions.Item label="Номер заказа">
          № {values.requestId}
        </Descriptions.Item>
        <Descriptions.Item label="Наименование услуги">
          {values.serviceName}
        </Descriptions.Item>
        <Descriptions.Item label="Отделение">
          {values.organizationName}
        </Descriptions.Item>
        <Descriptions.Item label="ИИН получателя услуги">
          {values.requestIIN}
        </Descriptions.Item>
        <Descriptions.Item label="Имя">
          {values.requestFirstName}
        </Descriptions.Item>
        <Descriptions.Item label="Фамилия">
          {values.requestLastName}
        </Descriptions.Item>
      </Descriptions>
      <Divider />
      <Button
        onClick={() => setFieldValue("currentStep", 1)}
        block
        color="primary"
      >
        Далее
      </Button>
    </div>
  );
};
