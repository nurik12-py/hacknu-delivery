export type PersonalInformation = {
  iin: string;
  lastName: string;
  firstName: string;
  middleName: string;
  engFirstName: string;
  engSurname: string;
  dateOfBirth: string;
  nationality: {
    code: string;
    nameRu: string;
    nameKz: string;
  };
  gender: {
    code: string;
    nameRu: string;
    nameKz: string;
  };
  regAddress: {
    address: string;
    country: {
      code: string;
      nameRu: string;
      nameKz: string;
    };
    district: {
      code: string;
      nameRu: string;
      nameKz: string;
    };
    region: {
      code: string;
      nameRu: string;
      nameKz: string;
    };
    city: string;
    streetLocation: string;
    houseLocation: string;
    beginDate: string;
    status: {
      code: string;
      nameRu: string;
      nameKz: string;
    };
    invalidity: {
      code: string;
      nameRu: string;
      nameKz: string;
    };
    arCode: string;
  };
  birthPlace: {
    country: {
      code: string;
      nameRu: string;
      nameKz: string;
    };
    district: {
      code: string;
      nameRu: string;
      nameKz: string;
    };
    region: {
      code: string;
      nameRu: string;
      nameKz: string;
    };
    city: string;
    birthTeCodeAR: string | null;
  };
  documents: {
    docTypeCode: string;
    docTypeNameRu: string;
    docTypeNameKz: string;
    docStatusCode: string;
    docStatusNameRu: string;
    docStatusNameKz: string;
    docIssueOrganizationCode: string;
    docIssueOrganizationNameRu: string;
    docIssueOrganizationNameKz: string;
    docNumber: string;
    beginDate: string;
    endDate: string;
  }[];
};
