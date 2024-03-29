/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

export interface paths {
  "/api/v2/authz/compile": {
    /** Executes a partial query on the loaded policy runtime. */
    post: operations["authorizer.compile"];
  };
  "/api/v2/authz/decisiontree": {
    /** Returns decision tree for given identity context. */
    post: operations["authorizer.decision_tree"];
  };
  "/api/v2/authz/is": {
    /** Determines if identity context is authorized to access the resource guarded by the given policy. */
    post: operations["authorizer.is"];
  };
  "/api/v2/authz/query": {
    /** Executes a rego query on the loaded policy runtime. */
    post: operations["authorizer.query"];
  };
  "/api/v2/info": {
    /** Return version information. */
    get: operations["info.get"];
  };
  "/api/v2/policies": {
    /** Lists the policy modules for the policy bundle. */
    get: operations["policies.list"];
  };
  "/api/v2/policies/{id}": {
    /** Gets the policy modules for the given module Id. */
    get: operations["policies.get"];
  };
}

export interface components {
  schemas: {
    apiIdentityContext: {
      identity?: string;
      type?: components["schemas"]["apiIdentityType"];
    };
    /**
     * @description Identity types, describes the payload type of the identity field inside the IdentityContext message.
     *
     *  - IDENTITY_TYPE_UNKNOWN: Unknown, value not set, requests will fail with identity type not set error.
     *  - IDENTITY_TYPE_NONE: None, no explicit identity context set, equals anonymous.
     *  - IDENTITY_TYPE_SUB: Sub(ject), identity field contains an oAUTH subject.
     *  - IDENTITY_TYPE_JWT: JWT, identity field contains a JWT access token.
     *  - IDENTITY_TYPE_MANUAL: Manual, propagates thw identity field as-is, without validation, into the input object.
     * @default IDENTITY_TYPE_UNKNOWN
     */
    apiIdentityType:
      | "IDENTITY_TYPE_UNKNOWN"
      | "IDENTITY_TYPE_NONE"
      | "IDENTITY_TYPE_SUB"
      | "IDENTITY_TYPE_JWT"
      | "IDENTITY_TYPE_MANUAL";
    apiModule: {
      ast?: { [key: string]: unknown };
      id?: string;
      package_path?: string;
      package_root?: string;
      raw?: string;
    };
    apiPolicyContext: {
      decisions?: string[];
      path?: string;
    };
    apiPolicyInstance: {
      instance_label?: string;
      name?: string;
    };
    protobufAny: {
      type_url?: string;
      /** Format: byte */
      value?: string;
    };
    /**
     * @description `NullValue` is a singleton enumeration to represent the null value for the
     * `Value` type union.
     *
     *  The JSON representation for `NullValue` is JSON `null`.
     *
     *  - NULL_VALUE: Null value.
     * @default NULL_VALUE
     */
    protobufNullValue: "NULL_VALUE";
    rpcStatus: {
      /** Format: int32 */
      code?: number;
      details?: components["schemas"]["protobufAny"][];
      message?: string;
    };
    v2CompileRequest: {
      disable_inlining?: string[];
      identity_context?: components["schemas"]["apiIdentityContext"];
      input?: string;
      options?: components["schemas"]["v2QueryOptions"];
      policy_context?: components["schemas"]["apiPolicyContext"];
      policy_instance?: components["schemas"]["apiPolicyInstance"];
      query?: string;
      resource_context?: { [key: string]: unknown };
      unknowns?: string[];
    };
    v2CompileResponse: {
      metrics?: { [key: string]: unknown };
      result?: { [key: string]: unknown };
      trace?: { [key: string]: unknown }[];
      trace_summary?: string[];
    };
    v2Decision: {
      decision?: string;
      is?: boolean;
    };
    v2DecisionTreeOptions: {
      path_separator?: components["schemas"]["v2PathSeparator"];
    };
    v2DecisionTreeRequest: {
      identity_context?: components["schemas"]["apiIdentityContext"];
      options?: components["schemas"]["v2DecisionTreeOptions"];
      policy_context?: components["schemas"]["apiPolicyContext"];
      policy_instance?: components["schemas"]["apiPolicyInstance"];
      resource_context?: { [key: string]: unknown };
    };
    v2DecisionTreeResponse: {
      path?: { [key: string]: unknown };
      path_root?: string;
    };
    v2GetPolicyResponse: {
      result?: components["schemas"]["apiModule"];
    };
    v2InfoResponse: {
      arch?: string;
      commit?: string;
      date?: string;
      os?: string;
      version?: string;
    };
    v2IsRequest: {
      identity_context?: components["schemas"]["apiIdentityContext"];
      policy_context?: components["schemas"]["apiPolicyContext"];
      policy_instance?: components["schemas"]["apiPolicyInstance"];
      resource_context?: { [key: string]: unknown };
    };
    v2IsResponse: {
      decisions?: components["schemas"]["v2Decision"][];
    };
    v2ListPoliciesResponse: {
      result?: components["schemas"]["apiModule"][];
    };
    /** @default PATH_SEPARATOR_UNKNOWN */
    v2PathSeparator:
      | "PATH_SEPARATOR_UNKNOWN"
      | "PATH_SEPARATOR_DOT"
      | "PATH_SEPARATOR_SLASH";
    v2QueryOptions: {
      instrument?: boolean;
      metrics?: boolean;
      trace?: components["schemas"]["v2TraceLevel"];
      trace_summary?: boolean;
    };
    v2QueryRequest: {
      identity_context?: components["schemas"]["apiIdentityContext"];
      input?: string;
      options?: components["schemas"]["v2QueryOptions"];
      policy_context?: components["schemas"]["apiPolicyContext"];
      policy_instance?: components["schemas"]["apiPolicyInstance"];
      query?: string;
      resource_context?: { [key: string]: unknown };
    };
    v2QueryResponse: {
      metrics?: { [key: string]: unknown };
      response?: { [key: string]: unknown };
      trace?: { [key: string]: unknown }[];
      trace_summary?: string[];
    };
    /** @default TRACE_LEVEL_UNKNOWN */
    v2TraceLevel:
      | "TRACE_LEVEL_UNKNOWN"
      | "TRACE_LEVEL_OFF"
      | "TRACE_LEVEL_FULL"
      | "TRACE_LEVEL_NOTES"
      | "TRACE_LEVEL_FAILS";
  };
}

export interface operations {
  /** Executes a partial query on the loaded policy runtime. */
  "authorizer.compile": {
    responses: {
      /** A successful response. */
      200: {
        content: {
          "application/json": components["schemas"]["v2CompileResponse"];
        };
      };
      /** An unexpected error response. */
      default: {
        content: {
          "application/json": components["schemas"]["rpcStatus"];
        };
      };
    };
    requestBody: {
      content: {
        "application/json": components["schemas"]["v2CompileRequest"];
      };
    };
  };
  /** Returns decision tree for given identity context. */
  "authorizer.decision_tree": {
    responses: {
      /** A successful response. */
      200: {
        content: {
          "application/json": components["schemas"]["v2DecisionTreeResponse"];
        };
      };
      /** An unexpected error response. */
      default: {
        content: {
          "application/json": components["schemas"]["rpcStatus"];
        };
      };
    };
    requestBody: {
      content: {
        "application/json": components["schemas"]["v2DecisionTreeRequest"];
      };
    };
  };
  /** Determines if identity context is authorized to access the resource guarded by the given policy. */
  "authorizer.is": {
    responses: {
      /** A successful response. */
      200: {
        content: {
          "application/json": components["schemas"]["v2IsResponse"];
        };
      };
      /** An unexpected error response. */
      default: {
        content: {
          "application/json": components["schemas"]["rpcStatus"];
        };
      };
    };
    requestBody: {
      content: {
        "application/json": components["schemas"]["v2IsRequest"];
      };
    };
  };
  /** Executes a rego query on the loaded policy runtime. */
  "authorizer.query": {
    responses: {
      /** A successful response. */
      200: {
        content: {
          "application/json": components["schemas"]["v2QueryResponse"];
        };
      };
      /** An unexpected error response. */
      default: {
        content: {
          "application/json": components["schemas"]["rpcStatus"];
        };
      };
    };
    requestBody: {
      content: {
        "application/json": components["schemas"]["v2QueryRequest"];
      };
    };
  };
  /** Return version information. */
  "info.get": {
    responses: {
      /** A successful response. */
      200: {
        content: {
          "application/json": components["schemas"]["v2InfoResponse"];
        };
      };
      /** An unexpected error response. */
      default: {
        content: {
          "application/json": components["schemas"]["rpcStatus"];
        };
      };
    };
  };
  /** Lists the policy modules for the policy bundle. */
  "policies.list": {
    parameters: {
      query: {
        field_mask?: string;
        "policy_instance.name"?: string;
        "policy_instance.instance_label"?: string;
      };
    };
    responses: {
      /** A successful response. */
      200: {
        content: {
          "application/json": components["schemas"]["v2ListPoliciesResponse"];
        };
      };
      /** An unexpected error response. */
      default: {
        content: {
          "application/json": components["schemas"]["rpcStatus"];
        };
      };
    };
  };
  /** Gets the policy modules for the given module Id. */
  "policies.get": {
    parameters: {
      path: {
        id: string;
      };
      query: {
        field_mask?: string;
        "policy_instance.name"?: string;
        "policy_instance.instance_label"?: string;
      };
    };
    responses: {
      /** A successful response. */
      200: {
        content: {
          "application/json": components["schemas"]["v2GetPolicyResponse"];
        };
      };
      /** An unexpected error response. */
      default: {
        content: {
          "application/json": components["schemas"]["rpcStatus"];
        };
      };
    };
  };
}

export interface external {}
