// WARNING: DO NOT EDIT. This file is Auto-Generated by AWS Mobile Hub. It will be overwritten.

// Copyright 2017-2018 Amazon.com, Inc. or its affiliates (Amazon). All Rights Reserved.
// Code generated by AWS Mobile Hub. Amazon gives unlimited permission to
// copy, distribute and modify it.

// AWS Mobile Hub Project Constants
const awsmobile = {
    'aws_app_analytics': 'enable',
    'aws_cloud_logic': 'enable',
    'aws_cloud_logic_custom': [{"id":"8a9lag0tj7","name":"grudgesCRUD","description":"","endpoint":"https://8a9lag0tj7.execute-api.us-east-1.amazonaws.com/Development","region":"us-east-1","paths":["/grudges","/grudges/123"]}],
    'aws_cognito_identity_pool_id': 'us-east-1:423c6282-c143-4c07-b19d-b9e1d66c7f40',
    'aws_cognito_region': 'us-east-1',
    'aws_content_delivery': 'enable',
    'aws_content_delivery_bucket': 'grudges-hosting-mobilehub-2025436760',
    'aws_content_delivery_bucket_region': 'us-east-1',
    'aws_content_delivery_cloudfront': 'enable',
    'aws_content_delivery_cloudfront_domain': 'd36horj5agleot.cloudfront.net',
    'aws_dynamodb': 'enable',
    'aws_dynamodb_all_tables_region': 'us-east-1',
    'aws_dynamodb_table_schemas': [{"tableName":"grudges-mobilehub-2025436760-grudges","attributes":[{"name":"userId","type":"S"},{"name":"dateCreated","type":"N"},{"name":"avenged","type":"BOOL"},{"name":"deed","type":"S"},{"name":"id","type":"S"},{"name":"person","type":"S"}],"indexes":[],"region":"us-east-1","hashKey":"userId","rangeKey":"dateCreated"}],
    'aws_mobile_analytics_app_id': '04418686b2ad4ecea9eb4060325e0d75',
    'aws_mobile_analytics_app_region': 'us-east-1',
    'aws_project_id': '6493faf0-d008-48fe-b5ed-e51298e99d54',
    'aws_project_name': 'grudges-2018-05-15-07-36-32',
    'aws_project_region': 'us-east-1',
    'aws_resource_bucket_name': 'grudges-deployments-mobilehub-2025436760',
    'aws_resource_name_prefix': 'grudges-mobilehub-2025436760',
    'aws_sign_in_enabled': 'enable',
    'aws_user_pools': 'enable',
    'aws_user_pools_id': 'us-east-1_l8Jm3Zm52',
    'aws_user_pools_mfa_type': 'ON',
    'aws_user_pools_web_client_id': '5objnlu442rho6evls63ahc66e',
}

export default awsmobile;
