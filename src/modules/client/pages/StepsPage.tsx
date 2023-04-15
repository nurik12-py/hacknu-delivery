import React, { useState } from "react";
import { Steps } from "antd-mobile";

import { useSearchParams } from "react-router-dom";
import { InfoSection } from "../components/organisms/InfoSection";
import { AddressSection } from "../components/organisms/AddressSection";
import { RecieverSection } from "../components/organisms/RecieverSection";
import { DeliverySection } from "../components/organisms/DeliverySection";
import { ConfirmationSection } from "../components/organisms/ConfirmationSection";
import { Formik } from "formik";

const StepsPage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const orderId = searchParams.get("orderId");

  return (
    <div className="px-4 py-4">
      <Formik
        initialValues={{
          requestId: "",
          requestIIN: "",
          serviceName: "",
          organizationName: "",
          requestFirstName: "",
          requestLastName: "",
          countryName: "",
          cityName: "",
          regionName: "",
          streetName: "",
          houseNumber: "",
          flatNumber: "",
          floorNumber: "",
          entranceNumber: "",
          frame: "",
          LCDName: "",
          extraInfo: "",
          recieverIIN: "",
          recieverFirstName: "",
          recieverLastName: "",
          isConfidant: false,
          deliveryServiceId: false,
          termsOfUseChecked: false,
          privacyPolicyChecked: false,
          currentStep: 0,
        }}
        onSubmit={(values, actions) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            actions.setSubmitting(false);
          }, 1000);
        }}
      >
        {({ values }) => (
          <>
            <Steps current={values.currentStep}>
              <Steps.Step title="Инфо" description="" />
              <Steps.Step title="Адрес" description="" />
              <Steps.Step title="Получатель" description="" />
              <Steps.Step title="Доставка" description="" />
              <Steps.Step title="Итого" description="" />
            </Steps>

            {values.currentStep === 0 ? (
              <InfoSection />
            ) : values.currentStep === 1 ? (
              <AddressSection />
            ) : values.currentStep === 2 ? (
              <RecieverSection />
            ) : values.currentStep === 3 ? (
              <DeliverySection />
            ) : (
              <ConfirmationSection />
            )}
          </>
        )}
      </Formik>
    </div>
  );
};

export default StepsPage;
