import axios from "axios";

type DocumentResponseData = {
  data: {
    requestId: string;
    resultCode: string;
    serviceType: {
      code: string;
      nameRu: string;
      nameKz: string;
    };
    organization: {
      code: string;
      nameRu: string;
      nameKz: string;
    };
    appStatus: {
      appState: string;
      statusInfo: string;
      statusInfoKz: string;
    };
    statusDate: string;
  };
  status: string;
};

const getDocument = (requestId: string, requestIIN: string) => {
  return axios.get<DocumentResponseData>(
    `http://89.218.80.61/vshep-api/con-sync-service?requestId=${requestId}&requestIIN=${requestIIN}&token=eyJG6943LMReKj_kqdAVrAiPbpRloAfE1fqp0eVAJ-IChQcV-kv3gW-gBAzWztBEdFY`
  );
};

export default {
  getDocument,
};
