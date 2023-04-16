import { Col, Descriptions, Row } from "antd";
import { Button, Collapse, Divider, List, NavBar } from "antd-mobile";

export const OrdersPage = () => {
  return (
    <div>
      <NavBar className="border-b" back={null}>
        Заказы
      </NavBar>
      <Collapse defaultActiveKey={["1"]}>
        <Collapse.Panel key="1" title="№ 2023993">
          <Descriptions bordered>
            <Descriptions.Item label="Номер заказа">
              Номер заказа
            </Descriptions.Item>
            <Descriptions.Item label="Номер заявки">
              Cloud Database
            </Descriptions.Item>
            <Descriptions.Item label="Фамилия">Prepaid</Descriptions.Item>
            <Descriptions.Item label="Имя">18:00:00</Descriptions.Item>
            <Descriptions.Item label="Отчество">$80.00</Descriptions.Item>
            <Descriptions.Item label="Наименование услуги">
              $20.00
            </Descriptions.Item>

            <Descriptions.Item label="Отделение ЦОН">$60.00</Descriptions.Item>
            <Descriptions.Item label="Адрес доставки">$60.00</Descriptions.Item>
            <Descriptions.Item label="Время оформления">
              $60.00
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
      </Collapse>
    </div>
  );
};
