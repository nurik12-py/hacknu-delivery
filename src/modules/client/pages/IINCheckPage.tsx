import { Input, Form, Typography, notification } from "antd";
import { Button } from "antd-mobile";
import { Formik, useFormik } from "formik";
import { useMutation, useQuery } from "react-query";
import { useNavigate, useSearchParams } from "react-router-dom";
import documentAPI from "../api/documentAPI";

export const IINCheckPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const { values, handleChange } = useFormik({
    initialValues: { iin: "" },
    onSubmit: (values) => {},
  });
  const orderId = searchParams.get("orderId") || "";

  const docuemntCheck = useMutation(
    ["iin"],
    (data: { requestId: string; requestIIN: string }) =>
      documentAPI
        .getDocument(data.requestId, data.requestIIN)
        .then((res) => res.data),
    {
      onSuccess: (data) => {
        if (data.data.resultCode === "ERROR") {
          notification.error({
            message: "Ошибка",
            description: "Неверный ИИН или номер заказа",
          });
        }
        if (data.data.resultCode === "OK") {
          setSearchParams({ orderId: orderId, iin: values.iin });
          navigate("/client/steps?orderId=002241054097&iin=860904350504");
          notification.success({
            message: "Успешно",
            description: "Переход на оформление заказа",
          });
        }
      },
      onError: (err) => {
        console.log(err);
      },
    }
  );

  return (
    <div className="px-4 py-4 flex items-center justify-center w-full h-full">
      <div className="bg-slate-50 border-2 border-dashed border-slate-200 m-4 rounded p-4 ">
        <Form>
          <Form.Item label="Номер заказа">
            <Input disabled value={orderId} />
          </Form.Item>
          <Form.Item label="ИИН">
            <Input name={"iin"} onChange={handleChange} value={values.iin} />
          </Form.Item>
          <Button
            onClick={() => {
              docuemntCheck.mutate({
                requestId: orderId,
                requestIIN: values.iin,
              });
            }}
            loading={docuemntCheck.isLoading}
            type="button"
            block
            color="primary"
          >
            Продолжить
          </Button>
        </Form>
      </div>
    </div>
  );
};
