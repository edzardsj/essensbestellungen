import { HttpResourcePlugin } from '@ng-openapi/http-resource';

const config = {
    input: "./openapi.json",
    output: "./src/app/core/rest-api",
    plugins: [HttpResourcePlugin],
    options: {
        dateType: "Date",
        enumStyle: "enum",
        generateEnumBasedOnDescription: true,
        generateServices: true,
        customHeaders: {
            "X-Requested-With": "XMLHttpRequest",
            Accept: "application/json",
        },
        responseTypeMapping: {
            "application/pdf": "blob",
            "application/zip": "blob",
            "text/csv": "text",
        },
        // customizeMethodName: (operationId) => {
        //     const parts = operationId.split("_");
        //     return parts[parts.length - 1] || operationId;
        // },
    },
};

export default config;