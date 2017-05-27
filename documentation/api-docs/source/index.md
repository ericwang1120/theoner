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
## Store a newly created article in storage.

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
## Remove the specified article from storage.

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
## Remove the specified article from storage.

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
## Update the specified article in storage.

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
## Update the specified article in storage.

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
## Remove the specified image from storage.

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
## Remove the specified image from storage.

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
## Store a newly created image in storage.

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
## Display a list of article.

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
{
    "data": [
        {
            "id": 147,
            "title": "What is your understanding of, IT & application best practice methodologies?",
            "content": "With certain level of involvement in IT methodologies like The Open Group Architecture Framework (TOGAF), OMB Federal Enterprise Architecture (FEA), The Gartner Methodology (formerly the Meta Framework), and the DoD Architecture Framework (DoDAF), together with experience in an agile development program, I don't believe a so-called universal methodology which can apply to every organization, in terms of architectural development.\n\nHowever, based on my personal experience and understanding, I think there is a certain procedure to follow in applying IT to business and I suggest the following process be customized for specific organization at the application architectural level:\n\n0. Environmental feedback:\nBusiness context\nTechnology status quo\nTechnology trends\nGovernment regulation\nIT strategy\n\n1. Definition:\nCurrent State\nSolution Principles and guidelines\nSolution reference model\nVision of future solution\n2. Communication:\nEnterprise architect, CIO\nDesign \/ Development team\nInfrastructure team\nCompliance team\nTesting team\n3. Application:\nImplement process\nPrinciples and guidelines\nPatterns\nReuse\n4. Governance:\nMonitor the application performance\nEnsure compliance and adapt\nCollect and digest feedbacks\n5. Refinement:\nIdeal model\nGap analysis\nRefinement of Principles, guidelines, Refine reference model and Road map",
            "type": "product",
            "author": "theoner",
            "created_at": "2017-04-21 23:50:18",
            "updated_at": "2017-04-29 21:14:39",
            "image_path_left": null,
            "image_path_right": "images\/z0pme2NZe2BeEksZixzwuVWW7YWRM4j0Ej4Qqpzh.jpeg"
        },
        {
            "id": 148,
            "title": "IT Investment: What Is The Timing?",
            "content": "Information Technology is a mature and proven tool to boost your business. TheOner suggests there should be three types of situations SME may face regarding the timing for IT investment, namely, Must-do, Good-to-have and Better-not.\n\nSimply consider two factors: workload and business strategy.\n\nIt is a significant signal to go IT investment when you notice that your human resources are overloaded by the routine work, no matter it is due to tedious processes or too much business on hand. Information Technology is always ready to help handle the time-consuming, repetitive and accuracy-demanding job.\n\nWhen it comes to business strategy, IT can be a real priority to build up your competitive power. This is a century of ICT. With established IT infrastructure, including hardware, software and network, you can extend reach to millions of internet users even within your market and industry. Meanwhile, you can have better organized and easier accessed information, which will definitely increase the work efficiency. Undoubtedly, that will help brand your business.\n\nPutting these two factors, work load and business strategy, in a matrix, therefore we can easily tell that when you are going to expand the business AND facing an overloaded situation, IT investment can be a MUST-DO option; While you are facing overloaded situation OR planning to expand, IT investment is a GOOD-TO-HAVE option. However, when you have redundant resources and many of the staffs are not working fully, you may have to shrink the business, then you are in a BETTER-NOT quantum of this matrix of time for IT investment.\n\nPlease refer to the diagram for a clear picture.",
            "type": "product",
            "author": "theoner",
            "created_at": "2017-04-21 23:58:52",
            "updated_at": "2017-04-21 23:58:52",
            "image_path_left": "",
            "image_path_right": ""
        },
        {
            "id": 166,
            "title": "Service",
            "content": "Service Test",
            "type": "service",
            "author": "theoner",
            "created_at": "2017-05-05 08:08:28",
            "updated_at": "2017-05-05 08:08:28",
            "image_path_left": null,
            "image_path_right": null
        },
        {
            "id": 167,
            "title": "Support",
            "content": "Support test",
            "type": "support",
            "author": "theoner",
            "created_at": "2017-05-05 08:08:45",
            "updated_at": "2017-05-05 08:08:45",
            "image_path_left": null,
            "image_path_right": null
        },
        {
            "id": 168,
            "title": "About",
            "content": "About test",
            "type": "about",
            "author": "theoner",
            "created_at": "2017-05-05 08:09:01",
            "updated_at": "2017-05-05 08:09:01",
            "image_path_left": null,
            "image_path_right": null
        }
    ]
}
```

### HTTP Request
`GET api/article`

`HEAD api/article`


<!-- END_06940bc6902a8ec3474998d5659dc559 -->

<!-- START_ea7a92024474d3bdf59f36cb33224f7a -->
## Display a listing of image.

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
{
    "data": [
        {
            "id": 52,
            "path": "images\/hXW8o1OwnUHFMGw8Ob4MaQnZghmRMRLgRWSg0U9l.jpeg",
            "created_at": "2017-04-28 00:16:36",
            "updated_at": "2017-04-28 00:16:36"
        },
        {
            "id": 53,
            "path": "images\/z0pme2NZe2BeEksZixzwuVWW7YWRM4j0Ej4Qqpzh.jpeg",
            "created_at": "2017-04-28 00:27:19",
            "updated_at": "2017-04-28 00:27:19"
        }
    ]
}
```

### HTTP Request
`GET api/image`

`HEAD api/image`


<!-- END_ea7a92024474d3bdf59f36cb33224f7a -->

