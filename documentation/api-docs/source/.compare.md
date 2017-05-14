---
title: API Reference

language_tabs:
- bash
- javascript

includes:

search: true

toc_footers:
- <a href='http://github.com/mpociot/documentarian'>Documentation Powered by Documentarian</a>
---
<!-- START_INFO -->
# Info

Welcome to the generated API reference.
[Get Postman Collection](http://localhost/../../documentation/api-docs/collection.json)

<!-- END_INFO -->

#general
<!-- START_706a660bd426dfde8ef5e730869db3f8 -->
## Store a newly created resource in storage.

> Example request:

```bash
curl -X POST "http://localhost/yummy-rabbit-api/api/article" \
-H "Accept: application/json"
```

```javascript
var settings = {
    "async": true,
    "crossDomain": true,
    "url": "http://localhost/yummy-rabbit-api/api/article",
    "method": "POST",
    "headers": {
        "accept": "application/json"
    }
}

$.ajax(settings).done(function (response) {
    console.log(response);
});
```


### HTTP Request
`POST api/article`


<!-- END_706a660bd426dfde8ef5e730869db3f8 -->

<!-- START_485543e29a6bcaf5f892bcc4321315e7 -->
## Remove the specified resource from storage.

> Example request:

```bash
curl -X POST "http://localhost/yummy-rabbit-api/api/article/{id}/delete" \
-H "Accept: application/json"
```

```javascript
var settings = {
    "async": true,
    "crossDomain": true,
    "url": "http://localhost/yummy-rabbit-api/api/article/{id}/delete",
    "method": "POST",
    "headers": {
        "accept": "application/json"
    }
}

$.ajax(settings).done(function (response) {
    console.log(response);
});
```


### HTTP Request
`POST api/article/{id}/delete`


<!-- END_485543e29a6bcaf5f892bcc4321315e7 -->

<!-- START_13dad45773993e1d30a6eae802ceb05c -->
## Remove the specified resource from storage.

> Example request:

```bash
curl -X DELETE "http://localhost/yummy-rabbit-api/api/article/{id}" \
-H "Accept: application/json"
```

```javascript
var settings = {
    "async": true,
    "crossDomain": true,
    "url": "http://localhost/yummy-rabbit-api/api/article/{id}",
    "method": "DELETE",
    "headers": {
        "accept": "application/json"
    }
}

$.ajax(settings).done(function (response) {
    console.log(response);
});
```


### HTTP Request
`DELETE api/article/{id}`


<!-- END_13dad45773993e1d30a6eae802ceb05c -->

<!-- START_cefe5d1e76d2585765fe1f07edbfdc0c -->
## Update the specified resource in storage.

> Example request:

```bash
curl -X POST "http://localhost/yummy-rabbit-api/api/article/{id}" \
-H "Accept: application/json"
```

```javascript
var settings = {
    "async": true,
    "crossDomain": true,
    "url": "http://localhost/yummy-rabbit-api/api/article/{id}",
    "method": "POST",
    "headers": {
        "accept": "application/json"
    }
}

$.ajax(settings).done(function (response) {
    console.log(response);
});
```


### HTTP Request
`POST api/article/{id}`


<!-- END_cefe5d1e76d2585765fe1f07edbfdc0c -->

<!-- START_6ff7ff26b034677d2a797186d18b3acf -->
## Update the specified resource in storage.

> Example request:

```bash
curl -X PUT "http://localhost/yummy-rabbit-api/api/article/{id}" \
-H "Accept: application/json"
```

```javascript
var settings = {
    "async": true,
    "crossDomain": true,
    "url": "http://localhost/yummy-rabbit-api/api/article/{id}",
    "method": "PUT",
    "headers": {
        "accept": "application/json"
    }
}

$.ajax(settings).done(function (response) {
    console.log(response);
});
```


### HTTP Request
`PUT api/article/{id}`


<!-- END_6ff7ff26b034677d2a797186d18b3acf -->

<!-- START_0f476054aac402587c01c074c924e063 -->
## Remove the specified resource from storage.

> Example request:

```bash
curl -X POST "http://localhost/yummy-rabbit-api/api/image/{id}/delete" \
-H "Accept: application/json"
```

```javascript
var settings = {
    "async": true,
    "crossDomain": true,
    "url": "http://localhost/yummy-rabbit-api/api/image/{id}/delete",
    "method": "POST",
    "headers": {
        "accept": "application/json"
    }
}

$.ajax(settings).done(function (response) {
    console.log(response);
});
```


### HTTP Request
`POST api/image/{id}/delete`


<!-- END_0f476054aac402587c01c074c924e063 -->

<!-- START_390a8f212e7cd06f09d214d427b4fa27 -->
## Remove the specified resource from storage.

> Example request:

```bash
curl -X DELETE "http://localhost/yummy-rabbit-api/api/image/{id}" \
-H "Accept: application/json"
```

```javascript
var settings = {
    "async": true,
    "crossDomain": true,
    "url": "http://localhost/yummy-rabbit-api/api/image/{id}",
    "method": "DELETE",
    "headers": {
        "accept": "application/json"
    }
}

$.ajax(settings).done(function (response) {
    console.log(response);
});
```


### HTTP Request
`DELETE api/image/{id}`


<!-- END_390a8f212e7cd06f09d214d427b4fa27 -->

<!-- START_a51e13cba15befceb6f6a8dc792e8ef8 -->
## Store a newly created resource in storage.

> Example request:

```bash
curl -X POST "http://localhost/yummy-rabbit-api/api/image" \
-H "Accept: application/json"
```

```javascript
var settings = {
    "async": true,
    "crossDomain": true,
    "url": "http://localhost/yummy-rabbit-api/api/image",
    "method": "POST",
    "headers": {
        "accept": "application/json"
    }
}

$.ajax(settings).done(function (response) {
    console.log(response);
});
```


### HTTP Request
`POST api/image`


<!-- END_a51e13cba15befceb6f6a8dc792e8ef8 -->

<!-- START_06940bc6902a8ec3474998d5659dc559 -->
## Display a listing of the resource.

> Example request:

```bash
curl -X GET "http://localhost/yummy-rabbit-api/api/article" \
-H "Accept: application/json"
```

```javascript
var settings = {
    "async": true,
    "crossDomain": true,
    "url": "http://localhost/yummy-rabbit-api/api/article",
    "method": "GET",
    "headers": {
        "accept": "application/json"
    }
}

$.ajax(settings).done(function (response) {
    console.log(response);
});
```

> Example response:

```json
null
```

### HTTP Request
`GET api/article`

`HEAD api/article`


<!-- END_06940bc6902a8ec3474998d5659dc559 -->

<!-- START_ea7a92024474d3bdf59f36cb33224f7a -->
## Display a listing of the resource.

> Example request:

```bash
curl -X GET "http://localhost/yummy-rabbit-api/api/image" \
-H "Accept: application/json"
```

```javascript
var settings = {
    "async": true,
    "crossDomain": true,
    "url": "http://localhost/yummy-rabbit-api/api/image",
    "method": "GET",
    "headers": {
        "accept": "application/json"
    }
}

$.ajax(settings).done(function (response) {
    console.log(response);
});
```

> Example response:

```json
null
```

### HTTP Request
`GET api/image`

`HEAD api/image`


<!-- END_ea7a92024474d3bdf59f36cb33224f7a -->

