import React from "react";

import KeyValueTable from "../../../components/KeyValueTable";
import { AUTH, PARAMS } from "../../../constants/request";
import { BODY, HEADERS } from "../../../constants/shared";
import useKeyValueTableStore from "../../../store/useKeyValueTableStore";
import useRequestStore from "../../../store/useRequestStore";
import RequestAuthMenu from "../Authorization/RequestAuthMenu";
import RequestBodyMenu from "../Body/RequestBodyMenu";

function RequestMenuOption() {
  const currentOption = useRequestStore((state) => state.requestOption);
  const {
    requestKeyValueTableData,
    handleRequestCheckbox,
    handleRequestKey,
    handleRequestValue,
    handleRequestDescription,
    addNewTableRow,
    deleteTableRow,
  } = useKeyValueTableStore((state) => state);

  switch (currentOption) {
    case PARAMS:
    case HEADERS:
      return (
        <KeyValueTable
          type={currentOption}
          tableData={requestKeyValueTableData}
          handleCheckboxInput={handleRequestCheckbox}
          handleKeyInput={handleRequestKey}
          handleValueInput={handleRequestValue}
          handleDescriptionInput={handleRequestDescription}
          handleAddButton={addNewTableRow}
          handleDeleteButton={deleteTableRow}
        />
      );
    case AUTH:
      return <RequestAuthMenu />;
    case BODY:
      return <RequestBodyMenu />;
    default:
      return <h1>Options </h1>;
  }
}

export default RequestMenuOption;
