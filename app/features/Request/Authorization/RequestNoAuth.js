import React from "react";

import Message from "../../../components/Message";

function RequestNoAuth() {
  return (
    <Message>
      <p>This request does not use any authorization.</p>
      <p>
        If you want to use authorization, select your authorization type from
        above.
      </p>
    </Message>
  );
}

export default RequestNoAuth;
