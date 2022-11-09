#!/bin/bash

yarn openapi-typescript https://raw.githubusercontent.com/aserto-dev/openapi-authorizer/${OPENAPI_SHA}/publish/authorizer/openapi.json --output ./generated/authorizer.ts
