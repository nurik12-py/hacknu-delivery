import { Col, Descriptions, Row } from "antd";
import { Button, Collapse, Divider, List, NavBar } from "antd-mobile";
import { useQuery } from "react-query";
import requestsAPI from "../../client/api/requestsAPI";
import { useEffect } from "react";

export const OrdersPage = () => {
  const { data, isLoading, error } = useQuery(
    "requests",
    requestsAPI.readAllRequests
  );

  return (
    <div>
      <NavBar className="border-b" back={null}>
        Заказы
      </NavBar>
      <Collapse defaultActiveKey={["1"]}>
        {Object.values(data || {})?.map((request) => (
          <Collapse.Panel key="1" title={`№ ${request.requestId}`}>
            <Descriptions bordered>
              <Descriptions.Item label="Номер заказа">
                {request.requestId}
              </Descriptions.Item>
              {/* <Descriptions.Item label="Номер заявки">
                {request.requestId}
              </Descriptions.Item> */}
              <Descriptions.Item label="Фамилия">
                {request.requestLastName}
              </Descriptions.Item>
              <Descriptions.Item label="Имя">
                {request.requestFirstName}
              </Descriptions.Item>
              <Descriptions.Item label="Наименование услуги">
                {request.serviceName}
              </Descriptions.Item>

              <Descriptions.Item label="Отделение ЦОН">
                {request.organizationName}
              </Descriptions.Item>
              <Descriptions.Item label="Адрес доставки">
                {request.countryName}, {request.regionName}, {request.cityName}
              </Descriptions.Item>
              <Descriptions.Item label="Время оформления">
                <></>
              </Descriptions.Item>
            </Descriptions>
            <Row className="mt-4" gutter={[12, 12]}>
              <Col span={12}>
                <Button color="danger" block>
                  Отказаться
                </Button>
              </Col>
              <Col span={12}>
                <Button color="primary" block>
                  Принять
                </Button>
              </Col>
            </Row>
          </Collapse.Panel>
        ))}
      </Collapse>
    </div>
  );
};
