const OPTION = {
  AUTHORIZATION_OPTIONS: ["No Auth", "Basic Auth", "Bearer Token"],
  REQUEST_METHOD_OPTIONS: ["GET", "POST", "PUT", "PATCH", "DELETE"],
  REQUEST_MENU_OPTIONS: [
    "Params",
    "Authorization",
    "Headers",
    "Body",
    "Code Snippet",
  ],
  REQUEST_BODY_RAW_OPTIONS: [
    { option: "Text", headerField: "text/plain" },
    { option: "JavaScript", headerField: "application/javascript" },
    {
      option: "JSON",
      headerField: "application/json",
    },
    { option: "HTML", headerField: "text/html" },
  ],
  REQUEST_BODY_OPTIONS: [
    { option: "None", headerField: "" },
    { option: "Form Data", headerField: "multipart/form-data" },
    {
      option: "x-www-form-urlencoded",
      headerField: "application/x-www-form-urlencoded",
    },
    { option: "Raw", headerField: "text/plain" },
  ],
  RESPONSE_MENU_OPTIONS: ["Body", "Headers"],
  RESPONSE_BODY_OPTIONS: ["Pretty", "Raw", "Preview"],
  RESPONSE_RESULT_INFORMATION: ["Status", "Time", "Size"],
  RESPONSE_BODY_VIEW_FORMAT_OPTIONS: ["JSON", "HTML", "Text"],
  LOADER_CSS_OPTIONS: { opacity: "0.85" },
  EDITOR_OPTIONS: {
    tabSize: 2,
    smoothScrolling: true,
    renderWhitespace: true,
    minimap: { enabled: false },
    scrollBeyondLastLine: false,
  },
  CODE_SNIPPET_EDITOR_OPTIONS: {
    tabSize: 2,
    smoothScrolling: true,
    renderWhitespace: true,
    minimap: { enabled: false },
    scrollBeyondLastLine: false,
    readOnly: true,
  },
  REQUEST_RAW_BODY_EDITOR_OPTIONS: {
    tabSize: 2,
    readOnly: false,
    smoothScrolling: true,
    renderWhitespace: true,
    minimap: { enabled: false },
    scrollBeyondLastLine: false,
  },
  READ_ONLY_TRUE_OPTION: { readOnly: true, lineNumbers: "on" },
  READ_ONLY_FALSE_OPTION: { readOnly: false, lineNumbers: "on" },
  LINE_NUMBER_OPTION: { readOnly: true, lineNumbers: "off" },
  SIDEBAR_MENU_OPTIONS: ["History", "Favorites"],
  CODE_SNIPPET_OPTIONS: [
    {
      key: "c",
      label: "C",
      editorLanguage: "c",
      variants: ["libcurl"],
    },
    {
      key: "csharp",
      label: "csharp",
      editorLanguage: "csharp",
      variants: ["RestSharp"],
    },
    {
      key: "curl",
      label: "cURL",
      editorLanguage: "shell",
      variants: ["cURL"],
    },
    {
      key: "dart",
      label: "Dart",
      editorLanguage: "dart",
      variants: ["http"],
    },
    {
      key: "go",
      label: "Go",
      editorLanguage: "go",
      variants: ["Native"],
    },
    {
      key: "http",
      label: "HTTP",
      editorLanguage: "text",
      variants: ["HTTP"],
    },
    {
      key: "java",
      label: "Java",
      editorLanguage: "java",
      variants: ["OkHttp", "Unirest"],
    },
    {
      key: "javascript",
      label: "JavaScript",
      editorLanguage: "javascript",
      variants: ["Fetch", "jQuery", "XHR"],
    },
    {
      key: "nodejs",
      label: "NodeJs",
      editorLanguage: "javascript",
      variants: ["Axios", "Native", "Request", "Unirest"],
    },
    {
      key: "objective-c",
      label: "Objective-C",
      editorLanguage: "objective-c",
      variants: ["NSURLSession"],
    },
    {
      key: "ocaml",
      label: "OCaml",
      editorLanguage: "text",
      variants: ["Cohttp"],
    },
    {
      key: "php",
      label: "PHP",
      editorLanguage: "php",
      variants: ["cURL", "Guzzle", "HTTP_Request2", "pecl_http"],
    },
    {
      key: "powershell",
      label: "PowerShell",
      editorLanguage: "powershell",
      variants: ["RestMethod"],
    },
    {
      key: "python",
      label: "Python",
      editorLanguage: "python",
      variants: ["http.client", "Requests"],
    },
    {
      key: "r",
      label: "R",
      editorLanguage: "r",
      variants: ["httr", "RCurl"],
    },
    {
      key: "ruby",
      label: "Ruby",
      editorLanguage: "ruby",
      variants: ["Net::HTTP"],
    },
    {
      key: "shell",
      label: "Shell",
      editorLanguage: "shell",
      variants: ["Httpie", "wget"],
    },
    {
      key: "swift",
      label: "Swift",
      editorLanguage: "swift",
      variants: ["URLSession"],
    },
  ],
};

export default OPTION;
